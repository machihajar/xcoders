// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80')`
      }}

    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 text-center space-y-6">

        <h2 className="text-2xl font-semibold">Stay Connected</h2>

        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
            <FaLinkedin />
          </a>
        </div>

        <div className="flex justify-center space-x-8 text-sm text-gray-300">
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition">Terms of Service</a>
        </div>

        <p className="text-xs text-gray-400 mt-4">© 2025 XCoders. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
