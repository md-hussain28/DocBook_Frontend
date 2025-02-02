import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10">
      {/* Top Section */}
      <div className="relative mt-0 container z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <img src={Logo} alt="Logo" />

          <p className="text-gray-600">
            Your trusted platform for booking appointments with top-rated
            doctors.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:col-span-2">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="hover:text-blue-600 transition-colors"
                >
                  All Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-blue-600 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/appointment"
                  className="hover:text-blue-600 transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consultation"
                  className="hover:text-blue-600 transition-colors"
                >
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/emergency"
                  className="hover:text-blue-600 transition-colors"
                >
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services/pharmacy"
                  className="hover:text-blue-600 transition-colors"
                >
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/laboratory"
                  className="hover:text-blue-600 transition-colors"
                >
                  Laboratory Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-blue-600" />
              <span>
                123 Medical Street,
                <br />
                Health City, Wellness Country
              </span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-3 text-blue-600" />
              (123) 456-7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-600" />
              support@docbook.com
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative SVG */}
      <div className="relative z-0 mt-16">
        <svg
          className="z-0 absolute left-0 bottom-0 w-full h-64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f3f4f6"
            d="M0,128L80,112C160,96,320,64,480,80C640,96,800,160,960,186.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 pt-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* Newsletter Subscription */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Stay Updated!
            </h4>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest updates.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-2 mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-8 border-t border-gray-200">
          <div className="container mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} DocBook. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-blue-600 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-blue-600 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="hover:text-blue-600 text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
