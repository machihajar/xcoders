import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-extrabold text-white tracking-wide">
              Earthlight Journal
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium">
              About
            </a>
            <a href="/contact" className="text-white hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Contact
            </a>
            <button className="bg-yellow-300 text-green-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-yellow-200 transition">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
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
          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <a
          href="/"
          className="block py-3 px-4 text-white hover:bg-green-700 transition"
        >
          Home
        </a>
        <a
          href="/about"
          className="block py-3 px-4 text-white hover:bg-green-700 transition"
        >
          About
        </a>
        <a
          href="/contact"
          className="block py-3 px-4 text-white hover:bg-green-700 transition"
        >
          Contact
        </a>
        <button className="w-full text-center bg-yellow-300 text-green-900 px-4 py-2 mt-2 rounded-full font-semibold shadow hover:bg-yellow-200 transition">
          Join Us
        </button>
      </div>
    </nav>
  );
}
