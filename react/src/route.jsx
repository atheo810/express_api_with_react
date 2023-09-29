import { createBrowserRouter } from "react-router-dom";

import LayoutMain from "./layouts/main";

// import page
import Home from "./pages/home";
import ShoeList from "./pages/shoe/list";
import ShoeCreate from "./pages/shoe/create";
import ShoeDetail from "./pages/shoe/detail";
import ShoeEdit from "./pages/shoe/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/shoe",
        element: <ShoeList />,
      },
      {
        path: "/shoe/create",
        element: <ShoeCreate />,
      },
      {
        path: "/shoe/:id/detail",
        element: <ShoeDetail />,
      },
      {
        path: "/shoe/:id/edit",
        element: <ShoeEdit />,
      },
    ],
  },
]);

export default router;
