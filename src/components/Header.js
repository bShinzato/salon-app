import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleMenu = () => {
    setIsTransitioning(true);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="bg-beige">
      <nav className="p-4 lg:p-5 flex justify-between items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <Link to="/" className="text-white text-2xl font-bold">
          Beauty By Darelie
        </Link>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className={`flex items-stretch lg:hidden text-lg text-white focus:outline-none transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? "X" : "☰"}
          </button>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-pink-100 px-2 py-1 rounded hover:duration-500 hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white hover:bg-pink-100 px-2 py-1 rounded hover:duration-500 hover:text-black"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`lg:hidden bg-beige text-white transition-all duration-300 ease-in-out overflow-hidden ${
          isTransitioning ? "" : "transition-none"
        }`}
        style={{
          maxHeight: isOpen ? "100vh" : "0",
          opacity: isOpen ? "1" : "0",
        }}
      >
        <ul className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <li className="mb-2 flex justify-center">
            <Link
              to="/"
              className="text-white hover:text-pink-100 hover:scale-110 duration-200"
            >
              Home
            </Link>
          </li>
          <li className="mb-2 flex justify-center">
            <Link
              to="/services"
              className="text-white hover:text-pink-100 hover:scale-110 duration-200"
            >
              Services
            </Link>
          </li>
          <li className="mb-2 flex justify-center">
            <Link
              to="/contactme"
              className="text-white hover:text-pink-100 hover:scale-110 duration-200"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
