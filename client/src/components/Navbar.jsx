import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Styles for navigation links
  const activeLinkStyle =
    "no-underline text-[#3A1212] border-b-2 border-red-500 pb-1 font-semibold transition-all duration-300";
  const normalLinkStyle =
    "no-underline text-[#3A1212] pb-1 font-medium transition-all duration-300 hover:text-red-500 hover:border-b-2 hover:border-red-500";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white px-4 sm:px-8 md:px-12 py-3 sm:py-4 shadow-lg border-b border-gray-100">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="GymX Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-base font-medium">
          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
          >
            How It Works
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? activeLinkStyle : normalLinkStyle
            }
          >
            Blog
          </NavLink>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink
            to="/login"
            className="text-[#3A1212] font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:scale-105 transform"
          >
            Sign Up For Free
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#3A1212] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#3A1212] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#3A1212] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-gray-100">
          <NavLink
            to="/features"
            className="block text-[#3A1212] font-medium py-2 transition-colors hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </NavLink>
          <NavLink
            to="/how-it-works"
            className="block text-[#3A1212] font-medium py-2 transition-colors hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </NavLink>
          <NavLink
            to="/blog"
            className="block text-[#3A1212] font-medium py-2 transition-colors hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <NavLink
              to="/login"
              className="block text-[#3A1212] font-medium py-2 px-4 rounded-lg transition-colors hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              className="block bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 hover:from-red-600 hover:to-red-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up For Free
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
