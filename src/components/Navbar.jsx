import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    // Replaced <Stack> with a <nav> for better semantics and applied Tailwind classes
    <nav className="fixed top-0 z-50 w-full bg-white px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        {/* Responsive logo size using Tailwind's sm: prefix */}
        <img src={Logo} alt="GymX Logo" className="w-9 h-9 sm:w-12 sm:h-12" />
      </Link>

      {/* Navigation Links */}
      {/* Responsive gap and font size */}
      <div className="flex items-center gap-4 sm:gap-8 text-base sm:text-lg">
        <Link
          to="/"
          // Converted inline styles to Tailwind classes
          className="no-underline text-[#3A1212] border-b-2 border-red-500 pb-1 font-semibold transition hover:text-red-500"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="no-underline text-[#3A1212] pb-1 font-semibold transition hover:text-red-500"
        >
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
