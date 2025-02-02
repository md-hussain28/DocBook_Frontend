// src/const/doctorsData.ts
export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    rating: number;
    experience: number; // years of practice
    consultationFee: number;
    image: string;
  }
  
  export const doctorsData: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Emily Smith',
      specialty: 'General Physician',
      rating: 4.5,
      experience: 10,
      consultationFee: 50,
      image: '/images/doctors/doctor1.jpg',
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      specialty: 'Gynecologist',
      rating: 4.8,
      experience: 12,
      consultationFee: 70,
      image: '/images/doctors/doctor2.jpg',
    },
    {
      id: 3,
      name: 'Dr. Sophia Williams',
      specialty: 'Dermatologist',
      rating: 4.2,
      experience: 8,
      consultationFee: 60,
      image: '/images/doctors/doctor3.jpg',
    },
    {
      id: 4,
      name: 'Dr. James Brown',
      specialty: 'Pediatricians',
      rating: 4.7,
      experience: 15,
      consultationFee: 65,
      image: '/images/doctors/doctor4.jpg',
    },
    {
      id: 5,
      name: 'Dr. Olivia Davis',
      specialty: 'Neurologist',
      rating: 4.6,
      experience: 11,
      consultationFee: 80,
      image: '/images/doctors/doctor5.jpg',
    },
    {
      id: 6,
      name: 'Dr. William Miller',
      specialty: 'Gastroenterologist',
      rating: 4.3,
      experience: 9,
      consultationFee: 75,
      image: '/images/doctors/doctor6.jpg',
    },
    // Add more doctors as needed
  ];