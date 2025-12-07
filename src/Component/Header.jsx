import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Asset/NEXUS.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-6 py-3">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href='/'><img src={Logo} alt="Poeage Logo" className="w-36" /></a>
          <span className="font-[cursive] text-lg text-gray-800">Nexus</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/about" className="relative group text-gray-700 font-medium hover:text-blue-600 transition">
            About us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/work" className="relative group text-gray-700 font-medium hover:text-blue-600 transition">
            How it Works
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/hire" className="relative group text-gray-700 font-medium hover:text-blue-600 transition">
            Hire
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/contact" className="px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition">Contact us</a>
        </div>

        {/* Mobile Menu Button - Updated to Open Animation */}
        <button
          className="md:hidden text-2xl text-gray-700 transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${menuOpen ? 'rotate-180 scale-110' : 'rotate-0'} inline-block transition-all duration-300`}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden flex flex-col gap-4 mt-3 px-4 pb-4 bg-white shadow-md rounded-md overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <a href="/aboutus" className="text-gray-700 font-medium hover:text-blue-600 transition">About us</a>
        <a href="/work" className="text-gray-700 font-medium hover:text-blue-600 transition">How it Works</a>
        <a href="/hire" className="text-gray-700 font-medium hover:text-blue-600 transition">Hire</a>
        <a href="/contact" className="px-4 py-2 rounded-md font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition text-center">Contact us</a>
      </div>
    </header>
  );
}
