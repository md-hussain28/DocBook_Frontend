// About.tsx

import React from 'react';
import { motion } from 'framer-motion';
import about_image from '../assets/assets_frontend/about_image.png'; // Replace with your image path

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pr-12 mt-12 lg:mt-0">
          <motion.h2
            className="text-4xl font-bold text-blue-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About DocBook
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At <span className="font-semibold text-blue-600">DocBook</span>, we
            are dedicated to making healthcare more accessible and convenient.
            We connect patients with trusted doctors, providing a seamless
            experience for booking appointments and managing healthcare needs.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our platform offers a user-friendly interface, real-time
            availability, and comprehensive profiles of healthcare
            professionals. We believe in empowering patients with information
            and choices, and supporting doctors with tools to manage their
            practices efficiently.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <motion.img
            src={about_image}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
