import { createBrowserRouter, Outlet } from "react-router-dom";

import LayoutMain from "./layouts/main";

// import page
import PageHome from "./pages/home";

// import Book List
import PageBookList, {
  loader as bookListLoader,
  action as bookListAction,
} from "./pages/book/list";

// import Book Create
import PageBookCreate, {
  action as bookCreateAction,
  loader as bookCreateLoader,
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

// category
import PageCategoryList, {
  action as actionCategoryList,
  loader as loaderCategoryList,
} from "./pages/category/list";

import PageCategoryCreate, {
  action as actionCategoryCreate,
} from "./pages/category/create";

import PageCategoryEdit, {
  loader as loaderCategoryEdit,
  action as actionCategoryEdit,
} from "./pages/category/edit";

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
          {
            index: true,
            element: <PageBookList />,
            loader: bookListLoader,
            action: bookListAction,
          },
          {
            path: "/book/create",
            element: <PageBookCreate />,
            action: bookCreateAction,
            loader: bookCreateLoader,
          },
          {
            path: ":id/detail",
            element: <PageBookDetail />,
            loader: bookDetailLoader,
          },
          {
            path: ":id/edit",
            element: <PageBookEdit />,
            loader: bookEditLoader,
            action: bookEditAction,
          },
          {
            path: ":id/delete",
            action: bookListAction,
          },
        ],
      },
      {
        path: "/category",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PageCategoryList />,
            action: actionCategoryList,
            loader: loaderCategoryList,
          },
          {
            path: "create",
            element: <PageCategoryCreate />,
            action: actionCategoryCreate,
          },
          {
            path: ":id/edit",
            element: <PageCategoryEdit />,
            loader: loaderCategoryEdit,
            action: actionCategoryEdit,
          },
        ],
      },
    ],
  },
]);

export default router;
