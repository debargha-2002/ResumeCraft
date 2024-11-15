// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn and GitHub icons
import { HiMail, HiPhone } from 'react-icons/hi'; // Email and Phone icons from Heroicons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        {/* Copyright */}
        <p className="text-sm mb-4">&copy; 2024 Resumecraft. All rights reserved.</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-2 sm:space-x-9   mb-6">
          <a
            href="https://linkedin.com/in/debargha-deb"
           
            className="text-gray-400 hover:text-yellow-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/debargha-2002"
            
            className="text-gray-400 hover:text-yellow-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:support@resumecraft.com"
            className="text-gray-400 hover:text-yellow-400"
          >
            <HiMail size={24} />
          </a>
          <a
            href="tel:+1234567890"
            className="text-gray-400 hover:text-yellow-400"
          >
            <HiPhone size={24} />
          </a>
        </div>

        {/* Contact Info Section */}
        <div className="text-gray-400 mb-4">
          <p>Email: <a href="mailto:support@resumecraft.com" className="text-yellow-400">support@resumecraft.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-yellow-400">+(91) 9876543210</a></p>
        </div>

        {/* "Made by" Section */}
        <div className="text-gray-500 text-sm mb-4">
          <p>Made with ❤️ by <span className="text-yellow-400">Debargha Deb</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
