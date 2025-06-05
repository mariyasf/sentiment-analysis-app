import React from "react";

const AnalysisCard = ({
  textInput,
  setTextInput,
  handleAnalysis,
  analysisResult,
  isLoading,
  resetAnalysis,
  error,
  colors,
}) => {
  return (
    <div
      className="mx-auto mt-8 h-full overflow-hidden rounded-2xl border bg-white 
      lg:mx-auto lg:max-w-screen-xl    "
    >
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
                <>Analyze Sentiment</>
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
            {analysisResult ? "Last analyzed just now" : "Ready for analysis"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;
