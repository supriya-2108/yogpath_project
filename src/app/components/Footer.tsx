import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
          <div>
            <a href="#" className="text-gray-300 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
