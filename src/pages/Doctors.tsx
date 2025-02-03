import React, { useState } from 'react';
import Head from '../components/allDoctors/Head.tsx';
import { doctors } from '../assets/assets_frontend/assets';
import Body from '../components/allDoctors/Body.tsx';

const Doctors: React.FC = () => {
  const [search, setSearch] = useState('');
  const [specialityFilter, setSpecialityFilter] = useState('All');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [feeFilter, setFeeFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');

  // Filtering logic
  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpeciality =
      specialityFilter === 'All' || doc.speciality == specialityFilter;
    const matchesExperience =
      experienceFilter === 'All' ||
      (experienceFilter === '1-2 Years' && parseInt(doc.experience) <= 2) ||
      (experienceFilter === '3-5 Years' &&
        parseInt(doc.experience) >= 3 &&
        parseInt(doc.experience) <= 5) ||
      (experienceFilter === '5+ Years' && parseInt(doc.experience) > 5);
    const matchesFee =
      feeFilter === 'All' ||
      (feeFilter === 'Under $50' && doc.fees < 50) ||
      (feeFilter === '$50 - $100' && doc.fees >= 50 && doc.fees <= 100) ||
      (feeFilter === '$100 - $200' && doc.fees > 100 && doc.fees <= 200) ||
      (feeFilter === '$200+' && doc.fees > 200);
    const matchesRating =
      ratingFilter === 'All' ||
      (ratingFilter === '4+ Stars' && doc.rating >= 4) ||
      (ratingFilter === '3+ Stars' && doc.rating >= 3) ||
      (ratingFilter === '2+ Stars' && doc.rating >= 2);

    return (
      matchesSearch &&
      matchesSpeciality &&
      matchesExperience &&
      matchesFee &&
      matchesRating
    );
  });

  return (
    <div className="bg-cyan-50 min-h-screen pt-16 px-4 md:px-8">
      <Head
        setSearch={setSearch}
        setSpecialityFilter={setSpecialityFilter}
        setExperienceFilter={setExperienceFilter}
        setFeeFilter={setFeeFilter}
        setRatingFilter={setRatingFilter}
      />
      <Body docs={filteredDoctors} />
    </div>
  );
};

export default Doctors;
