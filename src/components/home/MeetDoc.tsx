// // MeetOurDoctors.tsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { testimonials } from '../../assets/assets_frontend/assets.ts';
// const doctors = [
//   {
//     name: 'Dr. Emily Smith',
//     specialty: 'Cardiologist',
//     image: testimonials[0],
//     description: 'Expert in cardiology with 10 years of experience.',
//   },
//   {
//     name: 'Dr. Michael Johnson',
//     specialty: 'Dermatologist',
//     image: testimonials[1],
//     description: 'Specialist in skin care and treatments.',
//   },
//   {
//     name: 'Dr. Sophia Williams',
//     specialty: 'Pediatrician',
//     image: testimonials[2],
//     description: "Caring for children's health for over 8 years.",
//   },
//   {
//     name: 'Dr. James Brown',
//     specialty: 'Orthopedic Surgeon',
//     image: testimonials[3],
//     description: 'Providing orthopedic care with precision.',
//   },
// ];

// const cardVariants = {
//   offscreen: {
//     y: 150,
//     opacity: 0,
//   },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       stiffness: 100,
//       damping: 20,
//       duration: 0.5,
//     },
//   },
// };

// const MeetOurDoctors: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
//           Meet Our Doctors
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {doctors.map((doctor, index) => (
//             <motion.div
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//               key={index}
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//             >
//               <img
//                 className="w-full h-56 object-cover object-top"
//                 src={doctor.image}
//                 alt={doctor.name}
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800">
//                   {doctor.name}
//                 </h3>
//                 <p className="text-blue-600 font-medium mb-2">
//                   {doctor.specialty}
//                 </p>
//                 <p className="text-gray-600 mb-4">{doctor.description}</p>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
//                   Book Appointment
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetOurDoctors;

// MeetOurDoctors.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../assets/assets_frontend/assets';

const doctors = [
  {
    name: 'Dr. Emily Smith',
    specialty: 'Cardiologist',
    image: testimonials[0],
    description: 'Expert in cardiology with 10 years of experience.',
  },
  {
    name: 'Dr. Michael Johnson',
    specialty: 'Dermatologist',
    image: testimonials[1],
    description:
      'Specialist in skincare and treatments with a focus on patient wellness.',
  },
  {
    name: 'Dr. Sophia Williams',
    specialty: 'Pediatrician',
    image: testimonials[2],
    description:
      "Caring for children's health for over 8 years with dedication and compassion.",
  },
  {
    name: 'Dr. James Brown',
    specialty: 'Orthopedic Surgeon',
    image: testimonials[3],
    description:
      'Providing orthopedic care with precision and a patient-centered approach.',
  },
  // Add more doctors as needed
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
      duration: 0.5,
    },
  },
};

const MeetOurDoctors: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Meet Our Doctors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  className="absolute z-10 inset-0 w-full h-full object-cover object-top"
                  src={doctor.image}
                  alt={doctor.name}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-blue-400 via-transparent to-transparent opacity-50"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 mb-4 flex-grow">
                  {doctor.description}
                </p>
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctors;
