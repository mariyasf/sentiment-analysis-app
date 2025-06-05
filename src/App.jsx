import { pipeline, env } from "@xenova/transformers";
import { useState } from "react";

env.allowLocalModels = false;
env.useBrowserCache = false;

function App() {
  const [textInput, setTextInput] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setAnalysisResult(result[0]);
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
    },
    NEGATIVE: {
      bg: "bg-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      progress: "bg-rose-400",
    },
    NEUTRAL: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      progress: "bg-amber-400",
    },
  };

  const currentSentiment = analysisResult?.label || "NEUTRAL";
  const colors = sentimentColors[currentSentiment] || sentimentColors.NEUTRAL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with wave shape */}
      <div className="relative overflow-hidden bg-white shadow-sm">
        <div className="container relative mx-auto px-4 py-12">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Sentiment Analyzer
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover the emotional tone behind any text with AI-powered
              analysis
            </p>
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-12 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="fill-gray-100"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="fill-gray-100"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="fill-gray-50"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Analysis Card */}
          <div className="mb-8 overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                Enter Your Text
              </h2>

              <div className="mb-6">
                <div className="relative">
                  <textarea
                    className={`block w-full rounded-lg border px-4 py-3 pr-12 text-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 ${colors.border} ${colors.focus}`}
                    rows="5"
                    placeholder="Type or paste your text here (e.g., 'I love this product!')"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    disabled={isLoading}
                  />
                  <div className="absolute right-3 top-3 text-sm text-gray-400">
                    {textInput.length}/500
                  </div>
                </div>
                {error && <p className="mt-2 text-sm text-rose-500">{error}</p>}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-3">
                  <button
                    onClick={handleAnalysis}
                    disabled={isLoading || !textInput.trim()}
                    className={`flex items-center rounded-lg px-6 py-3 font-medium text-white transition-all ${isLoading || !textInput.trim() ? "cursor-not-allowed bg-gray-300" : "bg-blue-600 hover:bg-blue-700"}`}
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
                      "Analyze Sentiment"
                    )}
                  </button>
                  <button
                    onClick={resetAnalysis}
                    className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-all hover:bg-gray-50"
                  >
                    Reset
                  </button>
                </div>

                <div className="text-sm text-gray-500">
                  {analysisResult
                    ? "Last analyzed just now"
                    : "Waiting for input..."}
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          {analysisResult && (
            <div
              className={`mb-8 overflow-hidden rounded-xl border ${colors.border} ${colors.bg} shadow-lg transition-all duration-300`}
            >
              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Analysis Results
                  </h2>
                  <span
                    className={`rounded-full ${colors.bg} px-3 py-1 text-sm font-medium ${colors.text}`}
                  >
                    {analysisResult.label}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-gray-500">
                      Sentiment Confidence
                    </h3>
                    <div className="flex items-center">
                      <div className="mr-3 h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
                        <div
                          className={`h-3 rounded-full ${colors.progress}`}
                          style={{ width: `${analysisResult.score * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {(analysisResult.score * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">
                        Positive Match
                      </div>
                      <div className="mt-1 text-xl font-semibold text-emerald-600">
                        {analysisResult.label === "POSITIVE"
                          ? "✓ Strong"
                          : analysisResult.label === "NEUTRAL"
                            ? "Possible"
                            : "Unlikely"}
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">
                        Negative Match
                      </div>
                      <div className="mt-1 text-xl font-semibold text-rose-600">
                        {analysisResult.label === "NEGATIVE"
                          ? "✓ Strong"
                          : analysisResult.label === "NEUTRAL"
                            ? "Possible"
                            : "Unlikely"}
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="text-sm font-medium text-gray-500">
                        Emotional Intensity
                      </div>
                      <div className="mt-1 text-xl font-semibold text-blue-600">
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
                </div>
              </div>
            </div>
          )}

          {/* Sample Texts */}
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-medium text-gray-800">
              Try these examples:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button
                onClick={() =>
                  setTextInput(
                    "I'm absolutely thrilled with this service! The quality exceeded all my expectations.",
                  )
                }
                className="rounded-lg bg-emerald-50 px-4 py-2 text-sm text-emerald-700 transition hover:bg-emerald-100"
              >
                Positive
              </button>
              <button
                onClick={() =>
                  setTextInput(
                    "The product was okay, but nothing special. It does the job but I expected better.",
                  )
                }
                className="rounded-lg bg-amber-50 px-4 py-2 text-sm text-amber-700 transition hover:bg-amber-100"
              >
                Neutral
              </button>
              <button
                onClick={() =>
                  setTextInput(
                    "This is the worst experience I've ever had. The customer service was terrible and the product broke immediately.",
                  )
                }
                className="rounded-lg bg-rose-50 px-4 py-2 text-sm text-rose-700 transition hover:bg-rose-100"
              >
                Negative
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p>
            AI-powered sentiment analysis tool | Not affiliated with any company
          </p>
          <p className="mt-2">
            Results may vary based on text complexity and context
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
