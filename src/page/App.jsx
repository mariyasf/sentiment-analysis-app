import { pipeline, env } from "@xenova/transformers";
import { useState, useEffect } from "react";

env.allowLocalModels = false;
env.useBrowserCache = false;

function App() {
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
  const sampleTexts = [
    {
      text: "I'm absolutely thrilled with this service! The quality exceeded all my expectations.",
      type: "POSITIVE",
      emoji: "😊",
    },
    {
      text: "This product changed my life! Worth every penny and more.",
      type: "POSITIVE",
      emoji: "🌟",
    },
    {
      text: "The product was okay, but nothing special. It does the job but I expected better.",
      type: "NEUTRAL",
      emoji: "😐",
    },
    {
      text: "It's neither good nor bad, just average. I might buy again if there's a discount.",
      type: "NEUTRAL",
      emoji: "🤷",
    },
    {
      text: "This is the worst experience I've ever had. The customer service was terrible and the product broke immediately.",
      type: "NEGATIVE",
      emoji: "😠",
    },
    {
      text: "I regret purchasing this. The quality is poor and it doesn't work as advertised.",
      type: "NEGATIVE",
      emoji: "👎",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Sentiment Analyzer
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">
              Understand the emotional tone of any text with AI-powered
              sentiment analysis
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-5xl">
          {/* Main Analysis Card */}
          <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Analyze Your Text
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>
                  <span className="text-sm text-gray-500">AI Online</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <textarea
                    className={`block w-full rounded-xl border-2 px-4 py-3 text-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 ${colors.border} focus:ring-blue-300`}
                    rows="5"
                    placeholder="Type or paste your text here (e.g., 'I love this product!')"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    disabled={isLoading}
                    maxLength={500}
                  />
                  <div className="absolute bottom-3 right-3 rounded bg-white px-2 py-1 text-xs text-gray-400 shadow-sm">
                    {textInput.length}/500
                  </div>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-rose-500">
                    <span className="font-medium">Error:</span> {error}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-3">
                  <button
                    onClick={handleAnalysis}
                    disabled={isLoading || !textInput.trim()}
                    className={`flex items-center rounded-xl px-6 py-3 font-medium text-white transition-all ${isLoading ? "bg-blue-400" : !textInput.trim() ? "cursor-not-allowed bg-gray-300" : "bg-blue-600 hover:bg-blue-700"} shadow-md hover:shadow-lg`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="mr-2 h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Analyze Sentiment
                      </>
                    )}
                  </button>
                  <button
                    onClick={resetAnalysis}
                    className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
                  >
                    Reset
                  </button>
                </div>

                <div className="text-sm text-gray-500">
                  {analysisResult
                    ? "Last analyzed just now"
                    : "Ready for analysis"}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          {analysisResult && (
            <div
              className={`mb-8 overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.bg} shadow-xl transition-all duration-300`}
            >
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Analysis Results
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{colors.icon}</span>
                    <span
                      className={`rounded-full px-4 py-1.5 text-sm font-medium ${colors.text} ${colors.bg}`}
                    >
                      {colors.label}
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Confidence Meter */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-500">
                        Sentiment Confidence
                      </h3>
                      <span className="text-sm font-semibold text-gray-700">
                        {(analysisResult.score * 100).toFixed(1)}% confident
                      </span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-3 rounded-full ${colors.progress}`}
                        style={{ width: `${analysisResult.score * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Sentiment Indicators */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">😊</span>
                        <div className="text-sm font-medium text-gray-500">
                          Positive
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold text-emerald-600">
                        {analysisResult.label === "POSITIVE"
                          ? "✓ Strong Match"
                          : analysisResult.label === "NEUTRAL"
                            ? "Possible"
                            : "Unlikely"}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">😞</span>
                        <div className="text-sm font-medium text-gray-500">
                          Negative
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold text-rose-600">
                        {analysisResult.label === "NEGATIVE"
                          ? "✓ Strong Match"
                          : analysisResult.label === "NEUTRAL"
                            ? "Possible"
                            : "Unlikely"}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">📊</span>
                        <div className="text-sm font-medium text-gray-500">
                          Intensity
                        </div>
                      </div>
                      <div className="mt-2 text-xl font-semibold text-blue-600">
                        {analysisResult.score > 0.9
                          ? "Very Strong"
                          : analysisResult.score > 0.7
                            ? "Strong"
                            : analysisResult.score > 0.5
                              ? "Moderate"
                              : "Weak"}
                      </div>
                    </div>
                  </div>

                  {/* Original Text Preview */}
                  <div className="rounded-xl bg-gray-50 p-5">
                    <h3 className="mb-2 text-sm font-medium text-gray-500">
                      Original Text
                    </h3>
                    <p className="text-gray-700">{textInput}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recent Analyses */}
          {recentAnalyses.length > 0 && (
            <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="p-6 sm:p-8">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                  Recent Analyses
                </h2>
                <div className="space-y-4">
                  {recentAnalyses.map((item, index) => {
                    const itemColors =
                      sentimentColors[item.result.label] ||
                      sentimentColors.NEUTRAL;
                    return (
                      <div
                        key={index}
                        className={`rounded-xl border ${itemColors.border} ${itemColors.bg} p-4 transition hover:shadow-md`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xl">{itemColors.icon}</span>
                              <span
                                className={`text-sm font-medium ${itemColors.text}`}
                              >
                                {itemColors.label}
                              </span>
                            </div>
                            <p className="mt-2 line-clamp-2 text-gray-700">
                              {item.text}
                            </p>
                          </div>
                          <button
                            onClick={() => setTextInput(item.text)}
                            className="rounded-lg bg-white px-3 py-1 text-sm text-gray-600 shadow-sm hover:bg-gray-50"
                          >
                            Re-analyze
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Sample Texts */}
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-medium text-gray-800">
              Need inspiration? Try these examples:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sampleTexts.map((sample, index) => (
                <button
                  key={index}
                  onClick={() => setTextInput(sample.text)}
                  className={`rounded-xl p-4 text-left transition hover:shadow-md ${
                    sample.type === "POSITIVE" || sample.type === "POSITIVE"
                      ? "bg-emerald-50 hover:bg-emerald-100"
                      : sample.type === "NEGATIVE"
                        ? "bg-rose-50 hover:bg-rose-100"
                        : "bg-amber-50 hover:bg-amber-100"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{sample.emoji}</span>
                    <span className="text-sm font-medium">
                      {sample.type === "POSITIVE"
                        ? "Positive"
                        : sample.type === "NEGATIVE"
                          ? "Negative"
                          : "Neutral"}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-700">
                    {sample.text}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-lg font-medium text-gray-800">
              How Sentiment Analysis Works
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm3.293 2.707a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">AI Processing</h4>
                <p className="text-sm text-gray-600">
                  Our advanced NLP model analyzes your text to detect emotional
                  tone and sentiment.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">
                  Sentiment Detection
                </h4>
                <p className="text-sm text-gray-600">
                  Identifies whether the text is positive, negative, or neutral
                  with confidence scores.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800">
                  Practical Insights
                </h4>
                <p className="text-sm text-gray-600">
                  Provides actionable insights for customer feedback, reviews,
                  and social media monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Sentiment Analyzer | AI-powered
                text analysis
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-400 md:text-left">
            <p>
              Results may vary based on text complexity and context. This tool
              is for informational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
