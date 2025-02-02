import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const specialities = [
  'All',
  'General physician',
  'Gynecologist',
  'Dermatologist',
  'Pediatricians',
  'Neurologist',
  'Gastroenterologist',
];

const experienceOptions = ['All', '1-2 Years', '3-5 Years', '5+ Years'];

const feeOptions = ['All', 'Under $50', '$50 - $100', '$100 - $200', '$200+'];

const ratingOptions = ['All', '4+ Stars', '3+ Stars', '2+ Stars'];

interface HeadProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSpecialityFilter: React.Dispatch<React.SetStateAction<string>>;
  setExperienceFilter: React.Dispatch<React.SetStateAction<string>>;
  setFeeFilter: React.Dispatch<React.SetStateAction<string>>;
  setRatingFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Head: React.FC<HeadProps> = ({
  setSearch,
  setSpecialityFilter,
  setExperienceFilter,
  setFeeFilter,
  setRatingFilter,
}) => {
  return (
    <div className="w-full border-b-2 bg-white px-6 py-4 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md w-full md:w-1/3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search doctors..."
            className="bg-transparent outline-none w-full placeholder-gray-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {/* Speciality Filter */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
            <FaFilter className="text-gray-500" />
            <select
              className="bg-transparent outline-none cursor-pointer"
              onChange={(e) => setSpecialityFilter(e.target.value)}
            >
              {specialities.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Filter */}
          <select
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
            onChange={(e) => setExperienceFilter(e.target.value)}
          >
            {experienceOptions.map((exp, index) => (
              <option key={index} value={exp}>
                {exp}
              </option>
            ))}
          </select>

          {/* Fee Filter */}
          <select
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
            onChange={(e) => setFeeFilter(e.target.value)}
          >
            {feeOptions.map((fee, index) => (
              <option key={index} value={fee}>
                {fee}
              </option>
            ))}
          </select>

          {/* Rating Filter */}
          <select
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            {ratingOptions.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Head;
