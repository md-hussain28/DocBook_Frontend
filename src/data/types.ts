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
