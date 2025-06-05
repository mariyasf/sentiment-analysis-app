import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <ul className="hidden space-x-8 md:flex">
      <li>
        <Link
          to="/"
          className="text-gray-600 transition-colors hover:text-blue-600"
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </span>
        </Link>
      </li>
      <li>
        <Link
          to="/sentiment-analyzer"
          className="text-gray-600 transition-colors hover:text-blue-600"
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                clipRule="evenodd"
              />
            </svg>
            Sentiment Analyzer
          </span>
        </Link>
      </li>
    </ul>
  );
  return (
    <header className="border border-b-2 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl font-bold text-gray-800">AI Tools</span>
          </div>

          {/* Navigation Links */}
          {navLinks}

          {/* Mobile menu button */}
          <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="hidden border-t bg-white px-4 py-2 md:hidden">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/sentiment-analyzer"
              className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sentiment Analyzer
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
