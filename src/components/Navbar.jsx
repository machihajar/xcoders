import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "white", // Clean white background
      }}
      className="shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-3xl font-extrabold tracking-wide"
              style={{ color: "#006400" }} // Dark green site name
            >
              Earthlight Journal
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-green-700 transition duration-300 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-green-700 transition duration-300 text-lg font-medium"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-green-700 transition duration-300 text-lg font-medium"
            >
              Contact
            </a>
            <button className="bg-green-700 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-green-800 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "white", // Same clean background for mobile menu
        }}
      >
        <a
          href="/"
          className="block py-3 px-4 text-gray-700 hover:bg-green-100 transition"
        >
          Home
        </a>
        <a
          href="/about"
          className="block py-3 px-4 text-gray-700 hover:bg-green-100 transition"
        >
          About
        </a>
        <a
          href="/contact"
          className="block py-3 px-4 text-gray-700 hover:bg-green-100 transition"
        >
          Contact
        </a>
        <button className="w-full text-center bg-green-700 text-white px-4 py-2 mt-2 rounded-full font-semibold shadow hover:bg-green-800 transition">
          Join Us
        </button>
      </div>
    </nav>
  );
}