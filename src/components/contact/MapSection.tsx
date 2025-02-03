// src/components/contact/MapSection.tsx

import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <iframe
        className="w-full h-64"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01940275253!2d-122.40135918468185!3d37.778519979757794!2m3!1f0!2f0!3f0!3m2!
       1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808bc51f74a7%3A0x2a8fe748f491ed50!
       2s123%20Medical%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!
       5e0!3m2!1sen!2s!4v1610000000000!5m2!1sen!2s"
        allowFullScreen={false}
        loading="lazy"
        title="Our Location"
      ></iframe>
    </div>
  );
};

export default MapSection;
