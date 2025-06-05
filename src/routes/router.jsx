import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import SentimentAnalyzer from "../page/SentimentAnalyz/SentimentAnalyzer";
import Home from "../page/Home/Home";
import AudioEmotionDetection from "../page/AudioEmotion/AudioEmotionDetection";

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
      {
        path: "/audio-analyzer",
        element: <AudioEmotionDetection />,
        errorElement: <div>Audio Emotion Detection page not found</div>,
      },
    ],
  },
]);

export default router;
