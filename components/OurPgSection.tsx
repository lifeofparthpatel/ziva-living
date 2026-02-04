import React from 'react';
import { listings } from '../data/listings';
import { APP_NAME } from '../constants';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

export const OurPgSection: React.FC = () => {
  const listing = listings[0]; // Assuming there's always one listing now
  const navigate = useNavigate();

  if (!listing) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-red-600">PG details not available.</h2>
      </div>
    );
  }

  const handleInquiryClick = () => {
    // Navigate to the contact section with a hash
    navigate('/#contact-section');
  };

  return (
    <div className="max-w-7xl mx-auto"> {/* Max width for content, centered */}
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6">
        {listing.name}
      </h1>
      {/* Updated to display multiple pricing options */}
      <div className="text-center mb-12">
        {listing.pricing.map((room, index) => (
          <p key={index} className="text-2xl text-purple-700 font-bold mb-2">
            {room.sharingCapacity} Sharing Room: {listing.currency} {room.pricePerPerson.toLocaleString()} / person / month
          </p>
        ))}
      </div>

      {/* Images Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Images of Ziva Living</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {listing.images.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={image}
                alt={`${listing.name} - Image ${index + 1}`}
                className="w-full h-48 object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Our Space</h2>
        <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left max-w-4xl mx-auto">
          {listing.description}
        </p>
      </section>

      {/* Key Features Section */}
      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <li className="flex flex-col items-start bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <span className="mb-2 text-3xl text-purple-500">📍</span>
            <span className="font-semibold text-gray-800 text-xl mb-1">Location:</span>
            <p className="text-gray-700 text-lg">
              {listing.location.address}, {listing.location.city}, {listing.location.state} - {listing.location.zip}
            </p>
          </li>
          <li className="flex flex-col items-start bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <span className="mb-2 text-3xl text-purple-500">🛏️</span>
            <span className="font-semibold text-gray-800 text-xl mb-1">Rooms:</span>
            <p className="text-gray-700 text-lg">{listing.rooms} and 5 sharing</p>
          </li>
          <li className="flex flex-col items-start bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <span className="mb-2 text-3xl text-purple-500">🛁</span>
            <span className="font-semibold text-gray-800 text-xl mb-1">Bathrooms:</span>
            <p className="text-gray-700 text-lg">{listing.bathrooms} per room</p>
          </li>
        </ul>
      </section>

      {/* Amenities Section */}
      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Amenities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {listing.amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-start bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <span className="mb-2 text-3xl text-purple-500">{amenity.icon}</span>
              <span className="text-xl font-semibold text-gray-800 mb-1">{amenity.name}</span>
              {amenity.description && <p className="text-gray-700 text-lg">{amenity.description}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Rules Section */}
      <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">House Rules</h2>
        <ul className="list-disc list-outside space-y-4 text-lg text-gray-700 max-w-4xl mx-auto pl-6">
          {listing.rules.map((rule, index) => (
            <li key={index} className="leading-relaxed">
              <span className="font-semibold text-gray-800">{rule.title}:</span> {rule.description}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};