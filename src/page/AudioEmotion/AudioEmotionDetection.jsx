import React, { useState, useRef } from "react";
import Header from "../../components/Shared/Header";
import RecordingCard from "../../components/Recording/RecordingCard";

const AudioEmotionDetection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [emotionResult, setEmotionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      setError("Microphone access denied or not available");
      console.error(err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const analyzeEmotion = async () => {
    if (!audioUrl) {
      setError("Please record audio first");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call to emotion detection model
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock result - in a real app, you'd get this from your ML model
      const mockEmotions = [
        { emotion: "Happy", score: 0.85 },
        { emotion: "Angry", score: 0.12 },
        { emotion: "Sad", score: 0.03 },
      ];

      setEmotionResult({
        dominantEmotion: "Happy",
        emotions: mockEmotions,
        analysis:
          "The speaker shows strong positive emotions with high happiness indicators.",
      });
    } catch (err) {
      setError("Analysis failed. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetAnalysis = () => {
    setAudioUrl(null);
    setEmotionResult(null);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }
  };

  // Emotion color mapping
  const emotionColors = {
    Happy: {
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      icon: "😊",
    },
    Angry: {
      bg: "bg-red-100",
      text: "text-red-800",
      icon: "😠",
    },
    Sad: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      icon: "😢",
    },
    Neutral: {
      bg: "bg-gray-100",
      text: "text-gray-800",
      icon: "😐",
    },
    Fearful: {
      bg: "bg-purple-100",
      text: "text-purple-800",
      icon: "😨",
    },
    Excited: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      icon: "😃",
    },
  };

  const currentEmotion = emotionResult?.dominantEmotion || "Neutral";
  const colors = emotionColors[currentEmotion] || emotionColors.Neutral;

  return (
    <div className=" ">
      {/* Header */}

      <div className="  shadow-sm">
        <Header
          title="Audio Emotion Detection"
          subtitle="Record your voice and analyze emotions using AI"
        />
      </div>

      <div className="bg-gray-100 py-8">
        {/* Recording Card */}
        <RecordingCard
          isRecording={isRecording}
          audioUrl={audioUrl}
          startRecording={startRecording}
          stopRecording={stopRecording}
          analyzeEmotion={analyzeEmotion}
          resetAnalysis={resetAnalysis}
          error={error}
        />

        {/* Results Section */}
        {emotionResult && (
          <div
            className={`mb-8 overflow-hidden rounded-2xl border-2 ${colors.border} ${colors.bg} shadow-xl`}
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
                          {emotionColors[emotion.emotion]?.icon}{" "}
                          {emotion.emotion}
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
                      {currentEmotion === "Happy" &&
                        "Higher pitch, faster speech"}
                      {currentEmotion === "Angry" && "Louder, sharper tones"}
                      {currentEmotion === "Sad" && "Slower, lower pitch"}
                      {currentEmotion === "Neutral" &&
                        "Moderate pace and pitch"}
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
                      Results improve with clear speech and minimal background
                      noise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Technology Explanation */}
        <div className="rounded-2xl bg-white p-6 shadow-xl">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            How Speech Emotion Detection Works
          </h3>
          <div className="prose text-gray-600">
            <p>
              Our AI analyzes several acoustic features to determine emotional
              state:
            </p>
            <ul>
              <li>
                <strong>Pitch (Fundamental Frequency):</strong> Higher pitch
                often indicates excitement or fear, while lower pitch may
                suggest sadness.
              </li>
              <li>
                <strong>Speech Rate:</strong> Faster speech can indicate
                happiness or anger, while slower speech may suggest sadness or
                thoughtfulness.
              </li>
              <li>
                <strong>Energy/Intensity:</strong> The loudness and strength of
                vocal vibrations help distinguish between emotions like anger
                (high energy) and sadness (low energy).
              </li>
              <li>
                <strong>Spectral Features:</strong> The distribution of
                frequencies in the voice provides additional emotional cues.
              </li>
            </ul>
            <p>
              The model was trained on thousands of voice samples labeled with
              emotional states, learning to recognize subtle patterns that
              humans might miss.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default AudioEmotionDetection;
