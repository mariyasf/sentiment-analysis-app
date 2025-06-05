import React, { useState, useRef } from "react";
import Header from "../../components/Shared/Header";
import RecordingCard from "../../components/Recording/RecordingCard";
import RecordExplanation from "../../components/Recording/RecordExplanation";
import RecordResult from "../../components/Recording/RecordResult";

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
          <RecordResult
            emotionResult={emotionResult}
            colors={colors}
                      currentEmotion={currentEmotion} 
            emotionColors={emotionColors}
          />
        )}

        {/* Technology Explanation */}
        <RecordExplanation />
      </div>

      {/* Footer */}
    </div>
  );
};

export default AudioEmotionDetection;
