import React from "react";

const RecordExplanation = () => {
  return (
    <div className="mx-auto my-8 rounded-2xl bg-white p-6   lg:max-w-screen-xl">
      <h3 className="mb-6 text-2xl font-bold text-gray-800">
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          The Science Behind Voice Emotion Recognition
        </span>
      </h3>
      
      <div className="grid gap-8 md:grid-cols-2">
        {/* Technical Analysis Section */}
        <div className="space-y-6">
          <div className="rounded-xl bg-gray-50 p-5">
            <h4 className="mb-3 flex items-center text-lg font-semibold text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Acoustic Feature Analysis
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <div>
                  <strong className="font-medium">Prosodic Features:</strong>
                  <p className="text-sm">Pitch variation, speech rate, and intensity patterns that form the rhythm of speech</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <div>
                  <strong className="font-medium">Spectral Features:</strong>
                  <p className="text-sm">MFCCs (Mel-Frequency Cepstral Coefficients) that capture vocal tract characteristics</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <div>
                  <strong className="font-medium">Voice Quality:</strong>
                  <p className="text-sm">Jitter, shimmer, and harmonic-to-noise ratios that reveal vocal cord vibrations</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <h4 className="mb-3 text-lg font-semibold text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Model Architecture
            </h4>
            <p className="mb-2 text-gray-700">
              Our system uses a hybrid approach combining:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>CNN layers for local pattern recognition in spectrograms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>LSTM networks to model temporal dependencies in speech</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">▸</span>
                <span>Attention mechanisms to focus on emotionally salient segments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Emotional Mapping Section */}
        <div className="space-y-6">
          <div className="rounded-xl bg-gray-50 p-5">
            <h4 className="mb-3 text-lg font-semibold text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
              </svg>
              Emotion Taxonomy
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emotion: "😊 Happy", features: "Higher pitch, faster tempo" },
                { emotion: "😢 Sad", features: "Lower pitch, slower speech" },
                { emotion: "😠 Angry", features: "Louder, sharper tones" },
                { emotion: "😨 Fearful", features: "Variable pitch, breathy" },
              ].map((item) => (
                <div key={item.emotion} className="rounded-lg bg-white p-3 shadow-xs">
                  <div className="font-medium">{item.emotion}</div>
                  <div className="text-xs text-gray-500">{item.features}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-5">
            <h4 className="mb-3 text-lg font-semibold text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Performance Metrics
            </h4>
            <div className="space-y-3">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Accuracy</span>
                  <span className="font-medium">87.2%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "87.2%" }}></div>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>F1-Score</span>
                  <span className="font-medium">85.6%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: "85.6%" }}></div>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                Measured on IEMOCAP dataset with 5-fold cross-validation
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h4 className="mb-2 flex items-center text-lg font-semibold text-blue-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
          Technical Considerations
        </h4>
        <ul className="space-y-2 text-sm text-blue-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Processes audio at 16kHz sampling rate with 25ms windows</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Uses 40-dimensional log-Mel spectrogram features</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Optimized for real-time analysis with 200ms latency</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecordExplanation;