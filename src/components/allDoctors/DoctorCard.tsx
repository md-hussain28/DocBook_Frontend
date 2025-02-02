// src/components/allDoctors/DoctorCard.tsx
import React from 'react';
import { Doctor } from '../../data/doctorsData';
import { FaStar } from 'react-icons/fa';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Doctor Image */}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-48 object-cover"
      />

      {/* Doctor Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-blue-600">{doctor.specialty}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{doctor.rating.toFixed(1)}</span>
        </div>

        {/* Experience and Fee */}
        <div className="flex justify-between mt-4">
          <p className="text-gray-600">Experience: {doctor.experience} years</p>
          <p className="text-gray-600">Fee: ${doctor.consultationFee}</p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            View Profile
          </button>
          <button className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
