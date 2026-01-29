import React from 'react';
import { Button } from './Button';
import { APP_NAME } from '../constants'; // Import APP_NAME
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreClick = () => {
    navigate('/#our-pg-section'); // Navigate to the home path with the hash
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(https://picsum.photos/id/194/1920/1080)' }} // Updated background image
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-6 pt-20 max-w-4xl"> {/* Added pt-20 to push content below fixed header */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Your Perfect & Safe Stay Awaits at {APP_NAME}
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
          Discover comfortable and secure paying guest accommodations designed exclusively for girls.
        </p>
        <Button
          variant="primary"
          size="large"
          onClick={handleExploreClick} // Use onClick handler
          className="animate-fade-in-up delay-400 transform hover:scale-105 transition-transform duration-300"
        >
          Explore Our PG
        </Button>
      </div>
    </section>
  );
};