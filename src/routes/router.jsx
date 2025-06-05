import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
