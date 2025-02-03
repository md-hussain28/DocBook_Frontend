// src/components/contact/ContactForm.tsx

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 font-medium mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md
            hover:bg-blue-700 transition-colors duration-300
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
