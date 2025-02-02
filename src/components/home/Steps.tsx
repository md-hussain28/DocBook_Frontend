// HowItWorks.tsx
import React from 'react';
import { FaUserMd, FaCalendarCheck, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaUserMd size={40} />,
    title: 'Find a Doctor',
    description:
      'Search our extensive list of trusted doctors by specialty, location, or name.',
  },
  {
    icon: <FaCalendarCheck size={40} />,
    title: 'Book an Appointment',
    description:
      'Choose a time that suits you and book your appointment instantly.',
  },
  {
    icon: <FaComments size={40} />,
    title: 'Get Consulted',
    description:
      'Meet your doctor in person or through online consultation at your convenience.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-blue-600 mb-4">{step.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
