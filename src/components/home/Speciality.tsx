import React, { useEffect, useRef } from 'react';
import { specialityData } from '../../assets/assets_frontend/assets';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Speciality: React.FC = () => {
  const controls = useAnimation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile && marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth / 2;

      controls.start({
        x: [0, -marqueeWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: marqueeWidth / 40,
            ease: 'linear',
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isMobile, controls]);

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
          Find by Speciality
        </h2>
        <p className="text-base md:text-lg mb-8 text-gray-600">
          Explore our extensive list of specialized doctors and schedule your
          appointment effortlessly.
        </p>
        <div className="relative overflow-hidden">
          {/* Static display for larger screens */}
          {!isMobile && (
            <div className="flex flex-wrap justify-center md:justify-around items-center gap-8 ">
              {specialityData.map(({ image, speciality }, index) => (
                <div key={index} className="flex flex-col items-center  p-4">
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src={image}
                      alt={`Speciality in ${speciality}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm md:text-base text-gray-800 text-center">
                    {speciality}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {/* Infinite scroll for mobile screens */}
          {isMobile && (
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex space-x-4"
                animate={controls}
                ref={marqueeRef}
              >
                {[...Array(2)].map((_, repeatIndex) => (
                  <div key={repeatIndex} className="flex space-x-4">
                    {specialityData.map(({ image, speciality }, index) => (
                      <div
                        key={`${index}-${repeatIndex}`}
                        className="flex flex-col items-center"
                      >
                        <div className="w-16 h-16 mb-1 rounded-full overflow-hidden shadow-md">
                          <img
                            src={image}
                            alt={`Speciality in ${speciality}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium text-xs text-gray-800 text-center">
                          {speciality}
                        </h3>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Speciality);
