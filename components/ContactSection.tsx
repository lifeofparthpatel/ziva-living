import React, { useState } from 'react';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Button } from './Button';
import { APP_NAME } from '../constants'; // Import APP_NAME

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    // For this static site, we'll just simulate a submission.
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Optionally reset form: setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
        Get In Touch
      </h1>
      <p className="text-center text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
        Have questions about {APP_NAME} or just want to say hello? Fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        {isSubmitted ? (
          <div className="text-center text-emerald-500 text-2xl font-semibold py-10">
            <p>🎉 Your message has been sent!</p>
            <p className="text-lg text-gray-700 mt-4">We will get back to you shortly.</p>
            <Button onClick={() => setIsSubmitted(false)} variant="secondary" className="mt-8">
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <Input
                id="name"
                label="Your Name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                id="email"
                label="Your Email"
                type="email"
                placeholder="jane.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              id="phone"
              label="Phone Number (Optional)"
              type="tel"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              id="subject"
              label="Subject"
              type="text"
              placeholder="Inquiry about Ziva Living"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <TextArea
              id="message"
              label="Your Message"
              rows={6}
              placeholder="I'm interested in..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="mt-6">
              <Button type="submit" variant="primary" size="large" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};