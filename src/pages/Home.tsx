import Hero from '../components/home/Hero.tsx';
import MeetOurDoctors from '../components/home/MeetDoc.tsx';
import HowItWorks from '../components/home/Steps.tsx';
import Testimonials from '../components/home/Testimonials.tsx';
import Speciality from '../components/home/Speciality.tsx';

const Home = () => {
  return (
    <div className="bg-cyan-50 w-full min-h-screen pt-4 flex flex-col gap-8">
      <Hero />
      <Speciality />
      <MeetOurDoctors />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
