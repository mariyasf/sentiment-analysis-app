import React from "react";

const RecordingCard = ({
  audioUrl,
  isRecording,
  startRecording,
  stopRecording,
  resetAnalysis,
  analyzeEmotion,
  isLoading,
  error,
}) => {
  return (
    <div className="mx-auto max-w-screen-xl overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className=" p-6">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Record Your Voice
        </h2>

        <div className="mb-6">
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8">
            {audioUrl ? (
              <audio controls src={audioUrl} className="mb-4 w-full" />
            ) : (
              <div className="py-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  {isRecording
                    ? "Recording... Speak now"
                    : "No audio recorded yet"}
                </p>
              </div>
            )}

            <div className="flex space-x-4">
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="flex items-center rounded-xl bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Start Recording
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="flex items-center rounded-xl bg-gray-800 px-6 py-3 font-medium text-white transition hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Stop Recording
                </button>
              )}

              {audioUrl && (
                <button
                  onClick={resetAnalysis}
                  className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {audioUrl ? "Audio ready for analysis" : "Waiting for recording..."}
          </div>
          <button
            onClick={analyzeEmotion}
            disabled={!audioUrl || isLoading}
            className={`flex items-center rounded-xl px-6 py-3 font-medium text-white transition ${!audioUrl || isLoading ? "cursor-not-allowed bg-gray-400" : "bg-purple-600 hover:bg-purple-700"}`}
          >
            {isLoading ? (
              <>
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
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
                    d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                    clipRule="evenodd"
                  />
                </svg>
                Detect Emotion
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordingCard;
