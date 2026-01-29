import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { TestimonialCard } from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { APP_NAME } from '../constants';
import { OurPgSection } from '../components/OurPgSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section based on URL hash when component mounts or hash changes
    if (location.hash) {
      const id = location.hash.substring(1); // Remove '#'
      const element = document.getElementById(id);
      if (element) {
        // Using setTimeout to ensure rendering is complete before scrolling
        // and to allow for the fixed header scroll-margin-top to apply.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top on initial load or if hash is cleared
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div>
      <HeroSection />

      {/* Our PG Section */}
      <section id="our-pg-section" className="container mx-auto px-4 py-16 scroll-mt-20">
        <OurPgSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16"> {/* Updated background for light mode */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose {APP_NAME}?</h2> {/* Text color adjusted */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Card background adjusted */}
              <div className="text-purple-600 text-5xl mb-4">🔒</div> {/* Icon color adjusted */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Safety First</h3> {/* Text color adjusted */}
              <p className="text-gray-700"> {/* Text color adjusted */}
                Our PG offers top-notch security features for your peace of mind, with 24/7 surveillance and on-site staff.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Card background adjusted */}
              <div className="text-purple-600 text-5xl mb-4">🏠</div> {/* Icon color adjusted */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Comfort & Convenience</h3> {/* Text color adjusted */}
              <p className="text-gray-700"> {/* Text color adjusted */}
                Enjoy well-furnished rooms, essential amenities, and a prime location close to key facilities.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Card background adjusted */}
              <div className="text-purple-600 text-5xl mb-4">💖</div> {/* Icon color adjusted */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community & Support</h3> {/* Text color adjusted */}
              <p className="text-gray-700"> {/* Text color adjusted */}
                Join a welcoming community of girls and receive dedicated support from our caring management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Guests Say</h2> {/* Text color adjusted */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="container mx-auto px-4 py-16 scroll-mt-20">
        <AboutUsSection />
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="container mx-auto px-4 py-16 scroll-mt-20">
        <ContactSection />
      </section>
    </div>
  );
};