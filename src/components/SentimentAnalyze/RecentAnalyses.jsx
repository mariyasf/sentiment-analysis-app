import React from "react";

const RecentAnalyses = ({ recentAnalyses, setTextInput, sentimentColors }) => {
  return (
    <div
      className="mb-8
    overflow-hidden rounded-2xl
    bg-white lg:mx-auto lg:max-w-screen-xl  "
    >
      <div className="p-6 sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Recent Analyses
        </h2>
        <div className="space-y-4">
          {recentAnalyses.map((item, index) => {
            const itemColors =
              sentimentColors[item.result.label] || sentimentColors.NEUTRAL;
            return (
              <div
                key={index}
                className={`rounded-xl border ${itemColors.border} ${itemColors.bg} p-4 transition hover:shadow-md`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{itemColors.icon}</span>
                      <span
                        className={`text-sm font-medium ${itemColors.text}`}
                      >
                        {itemColors.label}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-gray-700">
                      {item.text}
                    </p>
                  </div>
                  <button
                    onClick={() => setTextInput(item.text)}
                    className="rounded-lg bg-white px-3 py-1 text-sm text-gray-600 shadow-sm hover:bg-gray-50"
                  >
                    Re-analyze
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentAnalyses;
