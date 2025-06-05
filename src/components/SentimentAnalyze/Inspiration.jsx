import React from "react";

const Inspiration = ({ setTextInput }) => {
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
    <div className="bg-gray-100  py-24 p-6 sm:p-8 ">
      <div className=" mx-auto lg:max-w-screen-xl">
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
    </div>
  );
};

export default Inspiration;
