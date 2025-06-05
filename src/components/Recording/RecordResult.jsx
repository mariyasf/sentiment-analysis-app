import React from "react";

const RecordResult = ({
  emotionResult,
  currentEmotion,
  colors,
  emotionColors,
}) => {
  return (
    <div
      className={`my-8 overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.bg}  mx-auto max-w-screen-xl`}
    >
      <div className="p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            Emotion Analysis Results
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{colors.icon}</span>
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${colors.text} ${colors.bg}`}
            >
              {currentEmotion}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-500">
              Emotion Distribution
            </h3>
            <div className="space-y-3">
              {emotionResult.emotions.map((emotion) => (
                <div key={emotion.emotion} className="flex items-center">
                  <div className="w-24 text-sm font-medium text-gray-700">
                    {emotionColors[emotion.emotion]?.icon} {emotion.emotion}
                  </div>
                  <div className="mx-3 h-3 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-3 rounded-full ${emotionColors[emotion.emotion]?.bg.replace("100", "400")}`}
                      style={{ width: `${emotion.score * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-right text-sm font-semibold text-gray-700">
                    {(emotion.score * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-sm font-medium text-gray-500">
              Analysis Summary
            </h3>
            <p className="text-gray-700">{emotionResult.analysis}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🗣️</span>
                <div className="text-sm font-medium text-gray-500">
                  Speech Patterns
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                {currentEmotion === "Happy" && "Higher pitch, faster speech"}
                {currentEmotion === "Angry" && "Louder, sharper tones"}
                {currentEmotion === "Sad" && "Slower, lower pitch"}
                {currentEmotion === "Neutral" && "Moderate pace and pitch"}
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="text-xl">⏱️</span>
                <div className="text-sm font-medium text-gray-500">
                  Common Duration
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                For best results, record 5-15 seconds of speech
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <span className="text-xl">ℹ️</span>
                <div className="text-sm font-medium text-gray-500">
                  Accuracy Note
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Results improve with clear speech and minimal background noise
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordResult;
