import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 shadow-sm">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            AI Sentiment Analyzer
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
          Understand emotions in text with a powerful NLP model
        </p>
        <Link
          to="/sentiment-analyzer"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Try Analyzer Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
