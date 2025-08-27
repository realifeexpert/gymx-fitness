import React from "react";
// We will still use NavLink as it's better for the "active link" logic
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  // Styles to match your original design
  const activeLinkStyle =
    "no-underline text-[#3A1212] border-b-2 border-red-500 pb-1 font-semibold";
  const normalLinkStyle =
    "no-underline text-[#3A1212] pb-1 font-semibold transition hover:text-red-500";

  return (
    // ✅ Restored the original white background and shadow
    <nav className="fixed top-0 z-50 w-full bg-white px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <NavLink to="/" className="flex items-center">
        <img src={Logo} alt="GymX Logo" className="w-9 h-9 sm:w-12 sm:h-12" />
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-4 sm:gap-8 text-base sm:text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          Home
        </NavLink>

        {/* ✅ ADDED THE NEW "HOME WORKOUTS" LINK */}
        <NavLink
          to="/home-workouts"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          Home Workouts
        </NavLink>

        <a href="/#exercises" className={normalLinkStyle}>
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
