import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import { ReactElement } from 'react';
import Header from './components/Header.tsx';
import Doctors from './pages/Doctors.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
import BackToTop from './components/TopBut.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import UserProfile from './pages/MyProfile.tsx';

function App(): ReactElement {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
