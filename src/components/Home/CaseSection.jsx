import React from "react";

const CaseSection = () => {
  return (
    <section className="py-16 md:mx-auto md:max-w-screen-xl">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Practical Applications
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Customer Feedback Analysis
            </h3>
            <p className="mb-4 text-gray-600">
              Automatically categorize customer reviews and support tickets to
              identify pain points and positive experiences at scale.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Track customer satisfaction trends over time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Identify urgent negative feedback for immediate response
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Discover positive testimonials for marketing</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Social Media Monitoring
            </h3>
            <p className="mb-4 text-gray-600">
              Understand public sentiment about your brand, products, or
              campaigns across social platforms.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Detect emerging PR crises from negative sentiment spikes
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Measure campaign effectiveness through sentiment changes
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Identify brand advocates and detractors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
