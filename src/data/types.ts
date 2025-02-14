// types.ts

export interface Appointment {
  date: string;
  doctor: string;
  specialty: string;
  status: 'Completed' | 'Upcoming' | 'Cancelled';
}

export interface User {
  name: string;
  photo: string;
  age: number;
  email: string;
  phone: string;
  appointments: Appointment[];
}
export interface DoctorCardProps {
  doctor: Doctor;
}

export interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  rating: number;
  address: {
    line1: string;
    line2: string;
  };
}
