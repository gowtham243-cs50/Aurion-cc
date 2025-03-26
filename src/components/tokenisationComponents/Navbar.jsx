import React, { useState, useEffect } from "react";

const Navbar = () => {
  // Add state to track scroll for dynamic effects
  const [scrolled, setScrolled] = useState(false);

  // Optional: Track scroll position to add effects
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

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 px-4 pt-3">
      <nav
        className={`bg-[#faf3e0] shadow-lg rounded-full border-2 border-green-600 
                     transition-all duration-600 ease-in-out w-full max-w-none
                     ${scrolled ? "py-2 opacity-95" : "py-3"}`}
      >
        <div className="flex items-center justify-between px-6 py-2">
          {/* Logo with Big Shoulders Stencil font */}
          <div className="text-3xl font-extrabold tracking-wide text-green-600 font-['Big_Shoulders_Stencil',sans-serif]">
            <a
              href="/"
              className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Aurion
            </a>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/Tokenisation"
              className="text-xl font-bold font-inter text-green-600 hover:text-green-800 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Tokens
            </a>
            <a
              href="/capAndTrade"
              className="text-xl font-bold font-inter text-green-600 hover:text-green-800 hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Cap and Trade
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;