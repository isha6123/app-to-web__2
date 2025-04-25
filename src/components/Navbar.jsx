import React, { useState } from "react";
import { HiDownload, HiMenu, HiX } from "react-icons/hi"; // Import icons
import Logo from "/src/assets/logo.png"; // Import the logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6 py-4">
      {/* Logo + Apka Parking Text */}
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="Park Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-gray-900">Apka Parking</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <button className="flex items-center px-6 py-2 text-sm font-semibold border border-gray-300 rounded-full hover:bg-gray-100">
          <HiDownload className="mr-2" />
          Get the app
        </button>

        {/* <div className="hidden md:flex space-x-6 text-black text-sm font-semibold">
          <a href="#" className="hover:text-gray-500">About us</a>
          <a href="#" className="hover:text-gray-500">Park for Business</a>
        </div> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {/* <a href="#" className="text-black text-sm font-semibold hover:text-gray-500">
            About us
          </a> */}
          {/* <a href="#" className="text-black text-sm font-semibold hover:text-gray-500">
            Park for Business
          </a> */}

          <button className="flex items-center px-6 py-2 text-sm font-semibold border border-gray-300 rounded-full hover:bg-gray-100">
            <HiDownload className="mr-2" />
            Get the app
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

