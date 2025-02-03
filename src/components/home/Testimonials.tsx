// Testimonials.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Emma Johnson',
    feedback:
      'Using DocBook has streamlined our appointment scheduling process. The platform is intuitive and the support team is excellent!',
  },
  {
    id: 2,
    name: 'Liam Smith',
    feedback:
      'I found the perfect specialist effortlessly. The booking process was seamless, and the consultation exceeded my expectations.',
  },
  {
    id: 3,
    name: 'Olivia Williams',
    feedback:
      'DocBook made it easy to connect with top doctors. The user interface is beautiful and easy to navigate.',
  },
  {
    id: 4,
    name: 'Michael Brown',
    feedback:
      'I appreciate the professionalism and efficiency of DocBook. Booking appointments has never been easier.',
  },
  {
    id: 5,
    name: 'Sophia Davis',
    feedback:
      'DocBook offers a fantastic service. The ability to find and book with top doctors in my area is incredibly convenient.',
  },
  // Add more testimonials as needed
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute' as 'absolute',
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative' as 'relative',
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute' as 'absolute',
  }),
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-cyan-50 via-white to-cyan-50">
      <div className="container mx-auto px-6 md:px-12 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          What Our Patients Say
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-blue-100 focus:outline-none z-10"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft className="text-blue-800 text-xl" />
          </button>

          {/* Carousel */}
          <div className="w-full max-w-3xl overflow-hidden relative px-4">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full flex justify-center"
              >
                {/* Testimonial Cards */}
                <div className="w-full flex items-center justify-center space-x-4">
                  {/* Previous Testimonial (hidden on small screens) */}
                  <div className="hidden md:block w-1/3 transform scale-90 opacity-70 transition-transform duration-300">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
                      <p className="text-sm text-gray-600 text-center">
                        "
                        {
                          testimonials[
                            (testimonialIndex - 1 + testimonials.length) %
                              testimonials.length
                          ].feedback
                        }
                        "
                      </p>
                      <h4 className="mt-4 text-base font-semibold text-blue-800 text-center">
                        {
                          testimonials[
                            (testimonialIndex - 1 + testimonials.length) %
                              testimonials.length
                          ].name
                        }
                      </h4>
                    </div>
                  </div>

                  {/* Current Testimonial */}
                  <div className="w-full md:w-1/3 transform scale-100 transition-transform duration-300">
                    <div className="bg-white rounded-3xl shadow-2xl p-8">
                      <FaQuoteLeft className="text-4xl text-blue-500 mb-6" />
                      <p className="text-lg text-gray-700 text-center">
                        "{testimonials[testimonialIndex].feedback}"
                      </p>
                      <h3 className="mt-6 text-xl font-semibold text-blue-800 text-center">
                        {testimonials[testimonialIndex].name}
                      </h3>
                    </div>
                  </div>

                  {/* Next Testimonial (hidden on small screens) */}
                  <div className="hidden md:block w-1/3 transform scale-90 opacity-70 transition-transform duration-300">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
                      <p className="text-sm text-gray-600 text-center">
                        "
                        {
                          testimonials[
                            (testimonialIndex + 1) % testimonials.length
                          ].feedback
                        }
                        "
                      </p>
                      <h4 className="mt-4 text-base font-semibold text-blue-800 text-center">
                        {
                          testimonials[
                            (testimonialIndex + 1) % testimonials.length
                          ].name
                        }
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-blue-100 focus:outline-none z-10"
            aria-label="Next Testimonial"
          >
            <FaChevronRight className="text-blue-800 text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
