// import React, { useState } from 'react';
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaClock,
//   FaCalendarCheck,
//   FaPhone,
//   FaEnvelope,
// } from 'react-icons/fa';

// // Extended doctor data with additional fields
// const doctorData = {
//   _id: 'doc1',
//   name: 'Dr. Richard James',
//   image: 'doc1',
//   speciality: 'General physician',
//   degree: 'MBBS',
//   experience: '4 Years',
//   about:
//     'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//   fees: 50,
//   rating: 2,
//   address: {
//     line1: '17th Cross, Richmond',
//     line2: 'Circle, Ring Road, London',
//   },
//   // Additional hardcoded data
//   contact: {
//     phone: '+44 20 7123 4567',
//     email: 'dr.james@medical.com',
//     emergency: '+44 20 7123 4568',
//   },
//   availability: {
//     monday: ['09:00 AM', '11:00 AM', '02:00 PM'],
//     tuesday: ['10:00 AM', '12:00 PM', '03:00 PM'],
//     wednesday: ['09:00 AM', '11:30 AM', '02:30 PM'],
//     thursday: ['10:00 AM', '01:00 PM', '04:00 PM'],
//     friday: ['09:00 AM', '12:00 PM', '03:00 PM'],
//   },
//   languages: ['English', 'Spanish', 'French'],
//   specializations: [
//     'Primary Care',
//     'Family Medicine',
//     'Preventive Care',
//     'Chronic Disease Management',
//   ],
//   education: [
//     {
//       degree: 'MBBS',
//       institution: "King's College London",
//       year: '2018',
//     },
//     {
//       degree: 'Fellowship in General Medicine',
//       institution: 'Royal College of Physicians',
//       year: '2020',
//     },
//   ],
// };

// const DoctorProfile = () => {
//   const [selectedDay, setSelectedDay] = useState('monday');

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
//       {/* Top Section */}
//       <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
//         <div className="md:flex">
//           {/* Left Column - Image */}
//           <div className="md:w-1/3">
//             <div className="h-72 md:h-full relative">
//               <img
//                 src={doctorData.image}
//                 alt={doctorData.name}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 right-4 bg-green-100 px-3 py-1 rounded-full">
//                 <span className="text-green-700 text-sm font-medium">
//                   Available Today
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Basic Info */}
//           <div className="p-6 md:w-2/3">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-2">
//                   {doctorData.name}
//                 </h1>
//                 <p className="text-lg text-blue-600 font-medium mb-4">
//                   {doctorData.speciality}
//                 </p>
//               </div>
//               <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
//                 <FaStar className="text-yellow-400 mr-1" />
//                 <span className="text-blue-700 font-semibold">
//                   {doctorData.rating}
//                 </span>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4 mb-4">
//               <div className="flex items-center text-gray-600">
//                 <FaClock className="mr-2 text-blue-500" />
//                 <span>{doctorData.experience} Experience</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <FaMapMarkerAlt className="mr-2 text-blue-500" />
//                 <span>{doctorData.address.line1}</span>
//               </div>
//             </div>

//             <div className="border-t border-gray-100 pt-4 mt-4">
//               <h3 className="text-lg font-semibold mb-2">Languages</h3>
//               <div className="flex flex-wrap gap-2">
//                 {doctorData.languages.map((lang, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gray-100 rounded-full text-sm"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Left Column */}
//         <div className="md:col-span-2 space-y-6">
//           {/* About Section */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-bold mb-4">About</h2>
//             <p className="text-gray-600 leading-relaxed">{doctorData.about}</p>
//           </div>

//           {/* Education Section */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-bold mb-4">Education</h2>
//             <div className="space-y-4">
//               {doctorData.education.map((edu, index) => (
//                 <div key={index} className="border-l-2 border-blue-500 pl-4">
//                   <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
//                   <p className="text-gray-600">{edu.institution}</p>
//                   <p className="text-sm text-gray-500">{edu.year}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Specializations */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-bold mb-4">Specializations</h2>
//             <div className="flex flex-wrap gap-2">
//               {doctorData.specializations.map((spec, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm"
//                 >
//                   {spec}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Booking Section */}
//         <div className="space-y-6">
//           {/* Contact Info */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-bold mb-4">Contact Information</h2>
//             <div className="space-y-3">
//               <div className="flex items-center text-gray-600">
//                 <FaPhone className="mr-3 text-blue-500" />
//                 <span>{doctorData.contact.phone}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <FaEnvelope className="mr-3 text-blue-500" />
//                 <span>{doctorData.contact.email}</span>
//               </div>
//             </div>
//           </div>

//           {/* Booking Widget */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
//             <div className="mb-4">
//               <select
//                 value={selectedDay}
//                 onChange={(e) => setSelectedDay(e.target.value)}
//                 className="w-full p-2 border rounded-lg"
//               >
//                 {Object.keys(doctorData.availability).map((day) => (
//                   <option key={day} value={day}>
//                     {day.charAt(0).toUpperCase() + day.slice(1)}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="space-y-2">
//               {doctorData.availability[selectedDay].map((time, index) => (
//                 <button
//                   key={index}
//                   className="w-full py-2 px-4 text-left border rounded-lg hover:bg-blue-50
//                                     hover:border-blue-500 transition-colors duration-200"
//                 >
//                   <div className="flex items-center">
//                     <FaCalendarCheck className="mr-2 text-blue-500" />
//                     <span>{time}</span>
//                   </div>
//                 </button>
//               ))}
//             </div>
//             <button
//               className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold
//                             hover:bg-blue-700 transition-colors duration-200"
//             >
//               Book Appointment
//             </button>
//           </div>

//           {/* Fee Information */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h2 className="text-xl font-bold mb-4">Consultation Fee</h2>
//             <div className="text-center">
//               <span className="text-3xl font-bold text-blue-600">
//                 ${doctorData.fees}
//               </span>
//               <p className="text-gray-500 mt-1">per consultation</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorProfile;
//--------------------------------------------------------------------
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaClock,
//   FaUserMd,
//   FaPhone,
//   FaEnvelope,
//   FaQuoteLeft,
// } from 'react-icons/fa';
// import doc1 from '../assets/assets_frontend/doc1.png';
// const doctorData = {
//   _id: 'doc1',
//   name: 'Dr. Richard James',
//   image: doc1,
//   speciality: 'General physician',
//   degree: 'MBBS',
//   experience: '4 Years',
//   about:
//     'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//   fees: 50,
//   rating: 2,
//   address: {
//     line1: '17th Cross, Richmond',
//     line2: 'Circle, Ring Road, London',
//   },
//   // Additional hardcoded data
//   contact: {
//     phone: '+44 20 7123 4567',
//     email: 'dr.james@medical.com',
//     emergency: '+44 20 7123 4568',
//   },
//   availability: {
//     monday: ['09:00 AM', '11:00 AM', '02:00 PM'],
//     tuesday: ['10:00 AM', '12:00 PM', '03:00 PM'],
//     wednesday: ['09:00 AM', '11:30 AM', '02:30 PM'],
//     thursday: ['10:00 AM', '01:00 PM', '04:00 PM'],
//     friday: ['09:00 AM', '12:00 PM', '03:00 PM'],
//   },
//   languages: ['English', 'Spanish', 'French'],
//   specializations: [
//     'Primary Care',
//     'Family Medicine',
//     'Preventive Care',
//     'Chronic Disease Management',
//   ],
//   education: [
//     {
//       degree: 'MBBS',
//       institution: "King's College London",
//       year: '2018',
//     },
//     {
//       degree: 'Fellowship in General Medicine',
//       institution: 'Royal College of Physicians',
//       year: '2020',
//     },
//   ],
// };

// // Mock review data
// const reviews = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     rating: 5,
//     date: '2 weeks ago',
//     comment:
//       'Dr. James is incredibly thorough and caring. He took the time to explain everything in detail and made sure all my concerns were addressed.',
//     avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Michael Brown',
//     rating: 4,
//     date: '1 month ago',
//     comment:
//       'Very professional and knowledgeable. The wait time was minimal and the staff was friendly.',
//     avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Emma Wilson',
//     rating: 5,
//     date: '2 months ago',
//     comment:
//       "Best doctor I've ever visited. Really takes time to understand your concerns and provides comprehensive care.",
//     avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
//   },
// ];

// const DoctorProfile = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden mb-8">
//         <div className="max-w-6xl mx-auto p-6 md:p-8">
//           <div className="flex flex-col md:flex-row gap-8 items-center">
//             {/* Image Container */}
//             <div className="w-full md:w-1/3 aspect-square md:aspect-auto">
//               <img
//                 src={doctorData.image}
//                 alt={doctorData.name}
//                 className="w-full h-full object-cover rounded-2xl shadow-lg"
//               />
//             </div>

//             {/* Info Container */}
//             <div className="flex-1">
//               <div className="flex flex-wrap items-start justify-between gap-4">
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                     {doctorData.name}
//                   </h1>
//                   <p className="text-xl text-blue-600 font-medium mb-4">
//                     {doctorData.speciality}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm">
//                   <div className="flex items-center">
//                     <FaStar className="text-yellow-400 w-5 h-5" />
//                     <span className="ml-1 font-bold text-gray-900">
//                       {doctorData.rating}
//                     </span>
//                   </div>
//                   <span className="text-gray-500">|</span>
//                   <span className="text-gray-600">150+ reviews</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                 <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
//                   <div className="bg-blue-100 p-2 rounded-lg">
//                     <FaClock className="text-blue-600 w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Experience</p>
//                     <p className="font-semibold">{doctorData.experience}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 bg-white p-3 rounded-xl">
//                   <div className="bg-blue-100 p-2 rounded-lg">
//                     <FaUserMd className="text-blue-600 w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Qualification</p>
//                     <p className="font-semibold">{doctorData.degree}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 flex flex-wrap gap-2">
//                 {doctorData.languages.map((lang, index) => (
//                   <span
//                     key={index}
//                     className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Column */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* About Section */}
//           <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
//             <p className="text-gray-600 leading-relaxed">{doctorData.about}</p>
//           </section>

//           {/* Specializations */}
//           <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">
//               Specializations
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {doctorData.specializations.map((spec, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium"
//                 >
//                   {spec}
//                 </span>
//               ))}
//             </div>
//           </section>

//           {/* Reviews Section */}
//           <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Patient Reviews
//             </h2>
//             <div className="space-y-6">
//               {reviews.map((review) => (
//                 <div
//                   key={review.id}
//                   className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
//                 >
//                   <div className="flex items-start gap-4">
//                     <img
//                       src={review.avatar}
//                       alt={review.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between mb-1">
//                         <h3 className="font-semibold text-gray-900">
//                           {review.name}
//                         </h3>
//                         <span className="text-sm text-gray-500">
//                           {review.date}
//                         </span>
//                       </div>
//                       <div className="flex items-center mb-2">
//                         {[...Array(5)].map((_, i) => (
//                           <FaStar
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < review.rating
//                                 ? 'text-yellow-400'
//                                 : 'text-gray-200'
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <p className="text-gray-600">{review.comment}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-8">
//           {/* Contact Card */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm">
//             <h2 className="text-xl font-bold text-gray-900 mb-4">
//               Contact Information
//             </h2>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="bg-blue-50 p-2 rounded-lg">
//                   <FaPhone className="text-blue-600 w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Phone</p>
//                   <p className="font-medium">{doctorData.contact.phone}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-blue-50 p-2 rounded-lg">
//                   <FaEnvelope className="text-blue-600 w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <p className="font-medium">{doctorData.contact.email}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="bg-blue-50 p-2 rounded-lg">
//                   <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Address</p>
//                   <p className="font-medium">{doctorData.address.line1}</p>
//                   <p className="font-medium">{doctorData.address.line2}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Fee Card */}
//           <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
//             <h2 className="text-xl font-bold mb-4">Consultation Fee</h2>
//             <div className="text-center">
//               <span className="text-4xl font-bold">${doctorData.fees}</span>
//               <p className="text-blue-100 mt-1">per consultation</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorProfile;

//-------------------------------------------------------------
import { useState } from 'react';
import {
  FaStar,
  FaMapMarkerAlt,
  FaUserMd,
  FaPhone,
  FaEnvelope,
  FaAward,
  FaRegHeart,
  FaShareAlt,
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

import doc1 from '../assets/assets_frontend/doc1.png';
const doctorData = {
  _id: 'doc1',
  name: 'Dr. Richard James',
  image: doc1,
  speciality: 'General physician',
  degree: 'MBBS',
  experience: '4 Years',
  about:
    'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
  fees: 50,
  rating: 2,
  address: {
    line1: '17th Cross, Richmond',
    line2: 'Circle, Ring Road, London',
  },
  // Additional hardcoded data
  contact: {
    phone: '+44 20 7123 4567',
    email: 'dr.james@medical.com',
    emergency: '+44 20 7123 4568',
  },
  availability: {
    monday: ['09:00 AM', '11:00 AM', '02:00 PM'],
    tuesday: ['10:00 AM', '12:00 PM', '03:00 PM'],
    wednesday: ['09:00 AM', '11:30 AM', '02:30 PM'],
    thursday: ['10:00 AM', '01:00 PM', '04:00 PM'],
    friday: ['09:00 AM', '12:00 PM', '03:00 PM'],
  },
  languages: ['English', 'Spanish', 'French'],
  specializations: [
    'Primary Care',
    'Family Medicine',
    'Preventive Care',
    'Chronic Disease Management',
  ],
  education: [
    {
      degree: 'MBBS',
      institution: "King's College London",
      year: '2018',
    },
    {
      degree: 'Fellowship in General Medicine',
      institution: 'Royal College of Physicians',
      year: '2020',
    },
  ],
};

// Mock review data
const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Dr. James is incredibly thorough and caring. He took the time to explain everything in detail and made sure all my concerns were addressed.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    verified: true,
    treatmentType: 'General Checkup',
    recommended: true,
  },
  {
    id: 2,
    name: 'Michael Brown',
    rating: 4,
    date: '1 month ago',
    comment:
      'Very professional and knowledgeable. The wait time was minimal and the staff was friendly.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    verified: true,
    treatmentType: 'General Checkup',
    recommended: true,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    rating: 5,
    date: '2 months ago',
    comment:
      "Best doctor I've ever visited. Really takes time to understand your concerns and provides comprehensive care.",
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    verified: true,
    treatmentType: 'General Checkup',
    recommended: true,
  },
];

// Mock achievements data
const achievements = [
  {
    id: 1,
    title: 'Best General Physician',
    year: '2023',
    organization: 'Medical Excellence Awards',
  },
  {
    id: 2,
    title: 'Research Publication',
    year: '2022',
    organization: 'International Medical Journal',
  },
];

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Sticky Header */}
      <div className=" top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img
                src={doctorData.image}
                alt={doctorData.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  {doctorData.name}
                </h2>
                <p className="text-sm text-blue-600">{doctorData.speciality}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <FaRegHeart />
                <span className="hidden sm:inline">Save</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                <FaShareAlt />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image & Quick Stats */}
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={doctorData.image}
                  alt={doctorData.name}
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <MdVerified className="text-blue-500" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {doctorData.experience.split(' ')[0]}+
                  </div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    98%
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {doctorData.name}
                </h1>
                <p className="text-xl text-blue-600 font-medium mb-4">
                  {doctorData.speciality}
                </p>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium">{doctorData.rating}</span>
                    <span className="text-gray-400">(150+ reviews)</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <FaUserMd className="text-blue-500" />
                    <span>{doctorData.degree}</span>
                  </div>
                </div>
              </div>

              {/* Languages & Specializations */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {doctorData.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Fee */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-100 mb-1">Consultation Fee</p>
                    <p className="text-3xl font-bold">${doctorData.fees}</p>
                  </div>
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          {['overview', 'reviews', 'achievements'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <>
                {/* About Section */}
                <section className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    About
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {doctorData.about}
                  </p>
                </section>

                {/* Specializations */}
                <section className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Specializations
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {doctorData.specializations.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl"
                      >
                        <FaUserMd className="text-blue-600" />
                        <span className="font-medium text-gray-900">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {activeTab === 'reviews' && (
              <section className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Patient Reviews
                  </h2>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-gray-900">
                      {doctorData.rating}
                    </span>
                    <span className="text-gray-500">• 150+ reviews</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                    >
                      <div className="flex gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-gray-900">
                                  {review.name}
                                </h3>
                                {review.verified && (
                                  <MdVerified className="text-blue-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-500">
                                {review.treatmentType}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'achievements' && (
              <section className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Achievements
                </h2>
                <div className="space-y-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex gap-4 items-start"
                    >
                      <div className="bg-blue-50 p-3 rounded-xl">
                        <FaAward className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-500">
                          {achievement.organization} • {achievement.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <FaPhone className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{doctorData.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <FaEnvelope className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{doctorData.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{doctorData.address.line1}</p>
                    <p className="font-medium">{doctorData.address.line2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 ">
                Working Hours
              </h2>

              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-900">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
