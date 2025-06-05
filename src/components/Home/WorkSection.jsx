import React from "react";

const WorkSection = () => {
  return (
    <section className=" py-16 lg:mx-auto  lg:max-w-screen-xl">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          How Sentiment Analysis Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Text Input
            </h3>
            <p className="text-gray-600">
              Users enter any text - from product reviews to social media posts
              - for analysis.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              AI Processing
            </h3>
            <p className="text-gray-600">
              Our transformer-based model analyzes linguistic patterns to detect
              emotional tone.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Visual Results
            </h3>
            <p className="text-gray-600">
              Get clear, color-coded results showing sentiment polarity and
              confidence scores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
