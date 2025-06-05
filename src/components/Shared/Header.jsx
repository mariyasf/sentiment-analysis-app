import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          {subtitle ||
            "Explore the latest AI tools and technologies to enhance your projects and workflows."}
        </p>
      </div>
    </div>
  );
};

export default Header;
