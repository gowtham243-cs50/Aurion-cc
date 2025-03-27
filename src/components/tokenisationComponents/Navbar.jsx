import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-center w-full px-4 pt-3">
      <nav
        className={`bg-[#faf3e0] shadow-lg rounded-full border-2 border-green-600 
                     transition-all duration-600 ease-in-out w-full max-w-none
                     ${scrolled ? "py-2 opacity-95" : "py-3"}`}
      >
        <div className="flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide text-green-600 font-['Big_Shoulders_Stencil',sans-serif]">
            <a
              href="/"
              className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Aurion
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-white text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#faf3e0] md:bg-transparent z-10 md:z-auto shadow-md md:shadow-none rounded-lg md:rounded-none`}
          >
            <a
              href="/Tokenisation"
              className="block md:inline-block text-xl font-bold font-inter text-green-600 hover:text-green-800 hover:underline underline-offset-4 px-6 py-2 md:p-0 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Tokens
            </a>
            <a
              href="/capAndTrade"
              className="block md:inline-block text-xl font-bold font-inter text-green-600 hover:text-green-800 hover:underline underline-offset-4 px-6 py-2 md:p-0 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Cap and Trade
            </a>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Cart"
              className="p-1.5 rounded-full bg-[#e8f5ed]/50 hover:bg-[#d9f0e3] focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105 text-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <button
              aria-label="Wallet"
              className="p-1.5 rounded-full bg-[#e8f5ed]/50 hover:bg-[#d9f0e3] focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105 text-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </button>
            <Link to="/personal-info">
            <button
              aria-label="Profile"
              className="p-1.5 rounded-full bg-white text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 transform hover:scale-105 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;