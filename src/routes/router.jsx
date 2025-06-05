import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import SentimentAnalyzer from "../page/SentimentAnalyz/SentimentAnalyzer";
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
        errorElement: <div>Home page not found</div>,
      },
      {
        path: "/sentiment-analyzer",
        element: <SentimentAnalyzer />,
        errorElement: <div>Sentiment Analyzer page not found</div>,
      },
    ],
  },
]);

export default router;
