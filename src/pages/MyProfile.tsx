// UserProfile.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSignOutAlt,
  FaUserMd,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

interface Appointment {
  date: string;
  doctor: string;
  specialty: string;
  status: 'Completed' | 'Upcoming' | 'Cancelled';
}

interface User {
  name: string;
  photo: string;
  age: number;
  email: string;
  phone: string;
  appointments: Appointment[];
}

const UserProfile: React.FC = () => {
  // Mock user data
  const user: User = {
    name: 'Jane Doe',
    photo: 'https://via.placeholder.com/150',
    age: 28,
    email: 'jane.doe@example.com',
    phone: '+1 (555) 987-6543',
    appointments: [
      {
        date: '2023-09-15',
        doctor: 'Dr. Emily Smith',
        specialty: 'General Practitioner',
        status: 'Upcoming',
      },
      {
        date: '2023-08-10',
        doctor: 'Dr. Michael Brown',
        specialty: 'Dermatology',
        status: 'Completed',
      },
      // Add more appointments as needed
    ],
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('User logged out');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* User Information Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 h-24"></div>
        <div className="-mt-16 flex justify-center">
          <img
            className="h-32 w-32 rounded-full border-4 border-white object-cover"
            src={user.photo}
            alt={user.name}
          />
        </div>
        <div className="text-center px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">Age: {user.age}</p>
        </div>
        <div className="px-6 py-4 flex justify-around text-gray-700">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-600" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-blue-600" />
            <span>{user.phone}</span>
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Appointment History */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Appointments
        </h2>
        <div className="space-y-4">
          {user.appointments.map((appointment, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FaUserMd className="text-blue-600 text-2xl" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {appointment.doctor}
                    </p>
                    <p className="text-gray-600">{appointment.specialty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 flex items-center">
                    <FaCalendarAlt className="inline-block mr-2 text-blue-600" />
                    {appointment.date}
                  </p>
                  <p
                    className={`font-semibold ${
                      appointment.status === 'Completed'
                        ? 'text-green-500'
                        : appointment.status === 'Upcoming'
                          ? 'text-blue-500'
                          : 'text-red-500'
                    }`}
                  >
                    {appointment.status}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
// // UserProfile.tsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';
// import { Appointment, User } from '../data/types';

// const UserProfile: React.FC = () => {
//   // Mock user data
//   const user: User = {
//     name: 'John Doe',
//     photo: 'https://via.placeholder.com/150',
//     age: 30,
//     email: 'john.doe@example.com',
//     phone: '+1 (555) 123-4567',
//     appointments: [
//       {
//         date: '2023-08-15',
//         doctor: 'Dr. Smith',
//         specialty: 'Cardiology',
//         status: 'Completed',
//       },
//       {
//         date: '2023-09-10',
//         doctor: 'Dr. Johnson',
//         specialty: 'Dermatology',
//         status: 'Upcoming',
//       },
//       // Add more appointments as needed
//     ],
//   };

//   const handleLogout = () => {
//     // Implement logout logic here
//     console.log('User logged out');
//   };

//   return (
//     <div className="container mx-auto p-4 md:p-8">
//       {/* Profile Header */}
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
//         <div className="flex justify-center -mt-16">
//           <img
//             className="h-32 w-32 rounded-full border-4 border-white object-cover"
//             src={user.photo}
//             alt={user.name}
//           />
//         </div>
//         <div className="text-center px-3 pb-6">
//           <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
//           <p className="mt-2 text-gray-600">Age: {user.age}</p>
//         </div>
//         <div className="flex justify-center pb-6">
//           <button
//             onClick={handleLogout}
//             className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300"
//           >
//             <FaSignOutAlt />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>

//       {/* Patient Details */}
//       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Patient Details
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
//           <div>
//             <p className="font-medium">Email Address</p>
//             <p>{user.email}</p>
//           </div>
//           <div>
//             <p className="font-medium">Phone Number</p>
//             <p>{user.phone}</p>
//           </div>
//           {/* Add more details as needed */}
//         </div>
//       </div>

//       {/* Previous Appointments */}
//       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Previous Appointments
//         </h2>
//         <div className="space-y-4">
//           {user.appointments.map((appointment, index) => (
//             <motion.div
//               key={index}
//               className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-lg font-semibold">{appointment.doctor}</p>
//                   <p className="text-gray-600">{appointment.specialty}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-gray-600">
//                     <FaCalendarAlt className="inline-block mr-1" />
//                     {appointment.date}
//                   </p>
//                   <p
//                     className={`font-semibold ${
//                       appointment.status === 'Completed'
//                         ? 'text-green-500'
//                         : appointment.status === 'Upcoming'
//                           ? 'text-blue-500'
//                           : 'text-red-500'
//                     }`}
//                   >
//                     {appointment.status}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
