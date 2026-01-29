import React from 'react';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from './TestimonialCard';
import { APP_NAME } from '../constants';

export const AboutUsSection: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
        About {APP_NAME}
      </h1>
      <p className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
        At {APP_NAME}, we are dedicated to providing a secure, comfortable, and supportive living environment for girls seeking paying guest accommodations. Our mission is to offer a trusted home-away-from-home, ensuring a hassle-free and enriching stay in Pune.
      </p>

      {/* Our Story Section */}
      <section className="bg-white p-8 rounded-xl shadow-xl mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://picsum.photos/id/403/600/400"
            alt="Our Story"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded with a passion for women's safety and well-being, {APP_NAME} was created to address the need for reliable and safe accommodation for girls moving to Pune for education or work. We envisioned a place that not Basis only provides excellent facilities but also fosters a warm and secure atmosphere.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to providing a homely and respectful environment where every guest feels secure and valued. We believe that a secure living space is fundamental to a girl's ability to thrive, pursue her goals, and build a bright future in the city.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="text-purple-600 text-5xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Trust & Transparency</h3>
            <p className="text-gray-700">
              We ensure all information about our PG is accurate and transparent, building trust with our guests.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="text-purple-600 text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Safety & Security</h3>
            <p className="text-gray-700">
              Your well-being is our top priority. Our property is secured with modern systems and dedicated staff.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg">
            <div className="text-purple-600 text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Community & Support</h3>
            <p className="text-gray-700">
              We foster a supportive community and offer dedicated assistance throughout your stay.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team (Placeholder) */}
      <section className="bg-white p-8 rounded-xl shadow-xl my-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-48 text-center">
            <img src="https://picsum.photos/id/1005/150/150" alt="Aditi Singh" className="rounded-full w-32 h-32 object-cover mx-auto mb-3 shadow-md" />
            <p className="font-semibold text-lg text-gray-900">Aditi Singh</p>
            <p className="text-purple-600 text-sm">PG Manager</p>
          </div>
          <div className="w-48 text-center">
            <img src="https://picsum.photos/id/1011/150/150" alt="Pooja Devi" className="rounded-full w-32 h-32 object-cover mx-auto mb-3 shadow-md" />
            <p className="font-semibold text-lg text-gray-900">Pooja Devi</p>
            <p className="text-purple-600 text-sm">Guest Support</p>
          </div>
          <div className="w-48 text-center">
            <img src="https://picsum.photos/id/1012/150/150" alt="Sana Khan" className="rounded-full w-32 h-32 object-cover mx-auto mb-3 shadow-md" />
            <p className="font-semibold text-lg text-gray-900">Sana Khan</p>
            <p className="text-purple-600 text-sm">Facilities Lead</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white p-8 rounded-xl shadow-lg">
            <summary className="font-semibold text-xl text-gray-900 cursor-pointer hover:text-purple-600 transition-colors">
              How do you ensure the safety of the accommodations?
            </summary>
            <p className="text-gray-700 mt-3 pl-4 border-l-2 border-purple-600">
              Ziva Living is equipped with 24/7 CCTV surveillance, biometric entry systems, and a dedicated on-site staff for your safety. We also have strict visitor policies to ensure a secure environment.
            </p>
          </details>
          <details className="bg-white p-8 rounded-xl shadow-lg">
            <summary className="font-semibold text-xl text-gray-900 cursor-pointer hover:text-purple-600 transition-colors">
              Are meals included in the rent?
            </summary>
            <p className="text-gray-700 mt-3 pl-4 border-l-2 border-purple-600">
              Yes, nutritious breakfast and dinner are included in the monthly rent. Our meals are prepared fresh daily with a focus on hygiene and taste.
            </p>
          </details>
          <details className="bg-white p-8 rounded-xl shadow-lg">
            <summary className="font-semibold text-xl text-gray-900 cursor-pointer hover:text-purple-600 transition-colors">
              What is the typical duration of stay?
            </summary>
            <p className="text-gray-700 mt-3 pl-4 border-l-2 border-purple-600">
              We primarily cater to long-term stays (minimum 3 months), but we can discuss flexible options based on availability. Please contact us for more details.
            </p>
          </details>
        </div>
      </section>
    </>
  );
};