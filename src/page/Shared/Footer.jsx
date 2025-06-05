import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sentiment Analyzer | AI-powered text
              analysis
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400 md:text-left">
          <p>
            Results may vary based on text complexity and context. This tool is
            for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
