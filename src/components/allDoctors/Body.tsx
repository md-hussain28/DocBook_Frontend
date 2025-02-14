import React from 'react';
import { Doctor } from '../../assets/assets_frontend/assets.ts';
import DoctorCard from './DoctorCard.tsx';
import { Link } from 'react-router-dom';
interface BodyProps {
  docs: Doctor[];
}

const Body: React.FC<BodyProps> = ({ docs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {docs.length > 0 ? (
        docs.map((doc) => (
          <Link to={`/doctors/${doc._id}`} key={doc._id}>
            <DoctorCard doctor={doc} />
          </Link>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No doctors found.
        </p>
      )}
    </div>
  );
};

export default Body;
