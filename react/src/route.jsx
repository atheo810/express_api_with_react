import { createBrowserRouter } from "react-router-dom";

import LayoutMain from "./layouts/main";

// import page
import Home from "./pages/home";
import BookList from "./pages/book/list";
import BookCreate from "./pages/book/create";
import BookDetail from "./pages/book/detail";
import BookEdit from "./pages/book/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/book",
        element: <BookList />,
      },
      {
        path: "/book/create",
        element: <BookCreate />,
      },
      {
        path: "/book/:id/detail",
        element: <BookDetail />,
      },
      {
        path: "/book/:id/edit",
        element: <BookEdit />,
      },
    ],
  },
]);

export default router;
