import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, APP_NAME } from '../constants';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg backdrop-saturate-150 shadow-lg py-4">
      <nav className="container mx-auto flex justify-between items-center text-gray-800">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          {APP_NAME}
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-purple-700 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 backdrop-blur-md rounded-b-xl shadow-lg">
          <ul className="flex flex-col items-center space-y-4 text-xl py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center hover:text-purple-700 transition-colors duration-200 py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};