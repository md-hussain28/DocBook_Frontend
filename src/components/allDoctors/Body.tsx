import React from 'react';
import { Doctor } from '../../assets/assets_frontend/assets.ts';

interface CardProps {
  doctor: Doctor;
}

const Card: React.FC<CardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
      />
      <h2 className="text-lg font-semibold text-center">{doctor.name}</h2>
      <p className="text-gray-500 text-sm">{doctor.speciality}</p>
      <p className="text-gray-600 text-sm text-center">
        {doctor.degree} • {doctor.experience} Exp
      </p>
      <p className="text-blue-600 font-semibold">${doctor.fees} Consultation</p>
      <p className="text-yellow-500 text-sm">⭐ {doctor.rating}</p>
    </div>
  );
};

interface BodyProps {
  docs: Doctor[];
}

const Body: React.FC<BodyProps> = ({ docs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {docs.length > 0 ? (
        docs.map((doc) => <Card key={doc._id} doctor={doc} />)
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No doctors found.
        </p>
      )}
    </div>
  );
};

export default Body;
