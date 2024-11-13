import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)

  const MenuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Ingredients", path: "/ingredients" },
    { name: "Recipes", path: "/recipes" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-50 dark:bg-gray-900 dark:text-white shadow-lg z-[999] duration-200 px-10">
      <div className="py-4 container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-primary font-semibold text-2xl uppercase">
         <img src="./log.png" className="w-16 md:h-10 h-16" alt="" />
        </NavLink>

        {/* Main Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {MenuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xl ${isActive ? "text-primary" : "text-gray-900 dark:text-gray-300"} hover:text-primary dark:hover:text-primary transition-colors duration-200`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-lg text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            />
            <IoMdSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400" />
          </div>

          {/* Dark Mode Toggle */}
          <DarkMode />

          {/* Hamburger Icon - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 dark:text-gray-300"
          >
           <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 h-screen bg-white dark:bg-gray-800 flex flex-col px-10 space-y-8 text-lg py-4">
          {MenuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </NavLink>
          ))}
         
        </div>
      )}
    </div>
  );
}

export default Navbar;
