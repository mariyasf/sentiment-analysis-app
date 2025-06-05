import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Ready to Analyze Sentiment?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Discover the emotional tone behind your text data with our accurate AI
          analyzer.
        </p>
        <Link
          to="/sentiment-analyzer"
          className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition hover:bg-gray-100"
        >
          Try It Now - It's Free
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
