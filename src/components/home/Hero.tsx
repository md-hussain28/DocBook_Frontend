import React from 'react';
import { assets } from '../../assets/assets_frontend/assets';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroImage = assets.header_img;
  return (
    <div className="px-4 rounded-b-4xl shadow-lg shadow-blue-500 pt-8  relative md:w-3/4 w-11/12 mt-20 h-fit mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="md:flex md:items-center h-fit ">
          <div className="md:w-1/2 text-center md:text-left space-y-6 pb-4">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Book Appointment with
              <span className="text-yellow-300"> Trusted Doctors</span>
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Browse through our extensive list of trusted doctors and schedule
              your appointment hassle-free.
            </motion.p>
            <motion.button
              className="mt-4 px-8 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-end items-end ">
            <motion.div
              className="h-full flex flex-col justify-end"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                className="mb-0 w-full h-auto rounded-lg"
                src={heroImage}
                alt="Doctor and patient"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <defs>
            <radialGradient id="gradient" cx="400" cy="300" r="600">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="300" fill="url(#gradient)" />
        </motion.svg>
      </div>
    </div>
  );
};

export default Hero;
