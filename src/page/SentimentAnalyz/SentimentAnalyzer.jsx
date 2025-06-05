import { pipeline, env } from "@xenova/transformers";
import { useState, useEffect } from "react";
import Inspiration from "../../components/SentimentAnalyze/Inspiration";
import AnalysisCard from "../../components/SentimentAnalyze/AnalysisCard";
import SentimentResult from "../../components/SentimentAnalyze/SentimentResult";
import RecentAnalyses from "../../components/SentimentAnalyze/RecentAnalyses";

env.allowLocalModels = false;
env.useBrowserCache = false;

const SentimentAnalyzer = () => {
  const [textInput, setTextInput] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentAnalyses, setRecentAnalyses] = useState([]);

  const handleAnalysis = async () => {
    if (!textInput.trim()) {
      setError("Please enter some text to analyze");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const pipe = await pipeline("sentiment-analysis");
      const result = await pipe(textInput);
      const analysis = result[0];
      setAnalysisResult(analysis);

      // Add to recent analyses (limit to 5)
      setRecentAnalyses((prev) => [
        { text: textInput, result: analysis },
        ...prev.slice(0, 4),
      ]);
    } catch (err) {
      setError("Analysis failed. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetAnalysis = () => {
    setTextInput("");
    setAnalysisResult(null);
    setError(null);
  };

  // Sentiment color mapping
  const sentimentColors = {
    POSITIVE: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      progress: "bg-emerald-400",
      icon: "😊",
      label: "Positive",
    },
    NEGATIVE: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      progress: "bg-rose-400",
      icon: "😞",
      label: "Negative",
    },
    NEUTRAL: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      progress: "bg-amber-400",
      icon: "😐",
      label: "Neutral",
    },
  };

  const currentSentiment = analysisResult?.label || "NEUTRAL";
  const colors = sentimentColors[currentSentiment] || sentimentColors.NEUTRAL;

  // Sample texts with more variety

  return (
    <div className="">
      <div className="flex flex-col  gap-8 p-4 lg:flex-row lg:p-8">
        <div className="flex-1">
          <AnalysisCard
            textInput={textInput}
            setTextInput={setTextInput}
            handleAnalysis={handleAnalysis}
            analysisResult={analysisResult}
            isLoading={isLoading}
            resetAnalysis={resetAnalysis}
            error={error}
            colors={colors}
          />
        </div>

        {analysisResult && (
          <div className="flex-1">
            <SentimentResult
              analysisResult={analysisResult}
              colors={colors}
              textInput={textInput}
            />
          </div>
        )}
      </div>

      {/* Recent Analyses */}
      {recentAnalyses.length > 0 && (
        <RecentAnalyses
          recentAnalyses={recentAnalyses}
          setTextInput={setTextInput}
          sentimentColors={sentimentColors}
        />
      )}

      {/* Sample Texts */}
      <Inspiration setTextInput={setTextInput} />
    </div>
  );
};

export default SentimentAnalyzer;
