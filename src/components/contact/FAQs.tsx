// src/components/contact/FAQs.tsx

import React from 'react';

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer:
      'To book an appointment, you can search for a doctor on our homepage, select a suitable time slot, and confirm your booking.',
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes, you can reschedule or cancel your appointment from your account dashboard under the "Appointments" section.',
  },
  {
    question: 'Is my personal information secure?',
    answer:
      'Absolutely! We use advanced encryption and security protocols to ensure your personal information is protected.',
  },
  {
    question: 'How do I provide feedback about a doctor?',
    answer:
      'After your appointment, you will receive an email prompting you to provide feedback and rate your experience.',
  },
  // Add more FAQs as needed
];

const FAQs: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="font-medium text-gray-700 cursor-pointer flex justify-between items-center">
              {faq.question}
              <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
