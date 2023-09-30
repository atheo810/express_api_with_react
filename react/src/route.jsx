import { createBrowserRouter, Outlet } from "react-router-dom";

import LayoutMain from "./layouts/main";

// import page
import PageHome from "./pages/home";

// import Book List
import PageBookList, {
  loader as bookListLoader,
  action as bookDeleteAction,
} from "./pages/book/list";

// import Book Create
import PageBookCreate, {
  action as bookCreateAction,
} from "./pages/book/create";

// import Book Detail
import PageBookDetail, {
  loader as bookDetailLoader,
} from "./pages/book/detail";

// import Book Edit
import PageBookEdit, {
  action as bookEditAction,
  loader as bookEditLoader,
} from "./pages/book/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <PageHome /> },
      {
        path: "/book",
        element: <Outlet />,
        children: [
          { index: true, element: <PageBookList />, loader: bookListLoader },
          {
            path: "/book/create",
            element: <PageBookCreate />,
            action: bookCreateAction,
          },
          {
            path: "/book/:id/detail",
            element: <PageBookDetail />,
            loader: bookDetailLoader,
          },
          {
            path: "/book/:id/edit",
            element: <PageBookEdit />,
            loader: bookEditLoader,
            action: bookEditAction,
          },
          { path: "/book/list", loader: bookListLoader },
          {
            path: "/book/:id/delete",
            loader: bookDeleteAction,
          },
        ],
      },
    ],
  },
]);

export default router;
