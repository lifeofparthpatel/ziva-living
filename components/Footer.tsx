import React from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl font-semibold mb-4">{APP_NAME}</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
            <i className="fab fa-facebook-f text-2xl"></i> {/* Placeholder for icon */}
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
            <i className="fab fa-twitter text-2xl"></i> {/* Placeholder for icon */}
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors duration-200">
            <i className="fab fa-instagram text-2xl"></i> {/* Placeholder for icon */}
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};