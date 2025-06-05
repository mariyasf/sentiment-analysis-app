import React from "react";

const SentimentResult = (
  { analysisResult, colors, textInput } = {}, // Destructure props with default values
) => {
  return (
    <div
      className={`mt-8 h-full overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.bg}    transition-all duration-300`}
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
        </div>
      </div>
    </div>
  );
};

export default SentimentResult;
