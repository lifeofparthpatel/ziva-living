import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, APP_NAME } from '../constants';

// IMPORTANT: This is the actual Base64 string for a PNG icon,
// replacing the previous SVG placeholder. This Base64 string represents
// a simple 80x60 transparent PNG image.
const ZIVA_LIVING_LOGO_BASE64 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABCAQMAAACy+c9iAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAA////r0N5QAAAAAJ0Uk5TAP9bkSKwAAAAFUlEQVQoz2NgGAWjYBSMglGAAnEGAAJGAwXmK6c4AAAAAElFTkSuQmCC`;

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {/* Corrected ZIVA_LIVING_LOGO_BASE64 usage and alt attribute */}
          <img src={ZIVA_LIVING_LOGO_BASE64} alt={`${APP_NAME} - Your Premium PG for Girls`} className="h-10 w-auto" />
          <span className="text-2xl font-bold text-purple-700">{APP_NAME}</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-purple-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-gray-600 hover:text-purple-700 text-lg font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile navigation (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <ul className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className="block text-gray-600 hover:text-purple-700 text-lg font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};