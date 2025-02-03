// src/pages/ContactPage.tsx

import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import FAQs from '../components/contact/FAQs';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="py-16 bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          We'd love to hear from you! Whether you have a question, feedback, or
          need assistance, we're here to help.
        </p>
      </header>

      <main className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Information and Map */}
        <div className="space-y-12">
          <FAQs />
          <MapSection />
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
