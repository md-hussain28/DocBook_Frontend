import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Doctors', to: '/doctors' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const NavItem = ({ name, to }: { name: string; to: string }) => {
  return (
    <Link to={to}>
      <button className="relative  focus:outline-none">
        <span
          className="
          button_top
          block box-border
          border-2 border-blue-400 rounded-md
          px-2 py-0
          bg-blue-100 text-blue-600 font-bold text-lg
          transform translate-y-[-0.2em]
          transition-transform duration-100 ease
          hover:translate-y-[-0.33em]
          active:translate-y-0
          select-none
        "
        >
          {name}
        </span>
      </button>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto h-fit px-4 py-2 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-blue-600"
        >
          <img src={Logo} alt="Logo" className="h-10 w-fit mr-2" />
        </Link>

        <nav className="hidden md:flex pt-1 h-fit space-x-8 ">
          {navItems.map((item) => (
            <NavItem key={item.to} name={item.name} to={item.to} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/profile"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow hover:bg-blue-600 transition duration-300"
          >
            Profile
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            {isOpen ? <HiX size={30} /> : <HiMenuAlt4 size={30} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="lg:hidden bg-white shadow-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-lg text-blue-600 font-medium rounded hover:bg-blue-50 px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/profile"
                className="block text-lg text-blue-600 font-medium rounded hover:bg-blue-50 px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
