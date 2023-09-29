import { createBrowserRouter } from "react-router-dom";

import LayoutMain from "./layouts/main";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
