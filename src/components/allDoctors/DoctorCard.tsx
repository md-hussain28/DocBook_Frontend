// src/components/allDoctors/DoctorCard.tsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Doctor } from 'data/types'; // Make sure the path is correct

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 relative group">
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-scale-down transition duration-500 group-hover:scale-110 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition duration-500"></div>{' '}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 transition duration-300 group-hover:text-indigo-500">
          {doctor.name}
        </h3>
        <p className="text-lg text-indigo-600 font-medium mb-4 transition duration-300 group-hover:text-purple-500">
          {doctor.speciality}
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-1" size={18} />
            <span className="text-gray-700 font-semibold">
              {doctor.rating?.toFixed(1) || 'N/A'}
            </span>
          </div>
          <p className="text-gray-600 font-semibold">
            Fee: ${doctor.fees || 'N/A'}
          </p>
        </div>

        <div className="flex  space-x-2">
          <button className="flex-grow py-2  bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md font-semibold shadow hover:shadow-lg transition duration-300 w-full">
            Profile
          </button>
          <button className="flex-grow py-2  border border-indigo-500 text-indigo-500 rounded-md font-semibold hover:bg-indigo-500 hover:text-white transition duration-300 w-full">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
