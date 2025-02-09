// Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { FiUser, FiHome, FiUserPlus, FiInfo, FiPhone } from 'react-icons/fi';
import Logo from '../assets/Logo.png';

const navItems = [
  { name: 'Home', to: '/', icon: <FiHome /> },
  { name: 'Doctors', to: '/doctors', icon: <FiUserPlus /> },
  { name: 'About', to: '/about', icon: <FiInfo /> },
  { name: 'Contact', to: '/contact', icon: <FiPhone /> },
];

interface NavItemProps {
  name: string;
  to: string;
  isActive: boolean;
  icon: React.ReactElement;
  isMobile?: boolean;
}

const floatingVariants = {
  hover: { y: -5, scale: 1.05 },
  tap: { y: 0, scale: 0.95 },
};

const NavItem: React.FC<NavItemProps> = ({
  name,
  to,
  isActive,
  icon,
  isMobile,
}) => {
  return (
    <motion.div
      className="relative"
      variants={!isMobile ? floatingVariants : undefined}
      whileHover="hover"
      whileTap="tap"
    >
      <Link to={to} className="block">
        <div
          className={`flex items-center space-x-2 ${
            isActive ? 'text-blue-600' : 'text-gray-600'
          } ${isMobile ? 'p-4 hover:bg-blue-50 rounded-lg' : ''}`}
        >
          {icon && <span className="text-xl">{icon}</span>}
          <span
            className={`text-lg font-medium ${isActive ? 'font-bold' : ''}`}
          >
            {name}
          </span>
          {isActive && !isMobile && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
              layoutId="activeIndicator"
              transition={{ type: 'spring', stiffness: 250, damping: 35 }}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const headerVariants = {
    scrolled: {
      height: '70px',
      backdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    normal: {
      height: '90px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transformOrigin: 'top right',
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transformOrigin: 'top right',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.header
      className="fixed w-full z-50 shadow-sm"
      variants={headerVariants}
      animate={isScrolled ? 'scrolled' : 'normal'}
    >
      <div className="container gap-8  mx-auto h-full px-2 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 h-full items-center">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              name={item.name}
              to={item.to}
              icon={item.icon}
              isActive={pathname === item.to}
            />
          ))}
        </nav>

        {/* Profile Button */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/profile"
              className="flex items-center space-x-2 px-6 py-2  text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FiUser className="text-lg" />
              <span>Profile</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <HiX className="text-blue-600 w-8 h-8" />
            ) : (
              <HiMenuAlt4 className="text-blue-600 w-8 h-8" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden absolute top-full right-4 w-64 bg-white rounded-xl shadow-2xl overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <motion.div className="p-2 space-y-2">
              {navItems.map((item) => (
                <motion.div key={item.to} variants={mobileItemVariants}>
                  <NavItem
                    name={item.name}
                    to={item.to}
                    icon={item.icon}
                    isActive={pathname === item.to}
                    isMobile
                  />
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants}>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 p-4 text-blue-600 font-medium rounded-lg hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  <FiUser className="text-lg" />
                  <span>My Profile</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
