import React from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagram, FaSkype, FaPinterest } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer2 = () => {
  return (
    <footer className="py-8 px-4 w-full bg-[#2A254B] text-white">
      {/* Top Section */}
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Logo and Address */}
        <div className="space-y-4">
          <h2 className="text-4xl ">Avion</h2>
        <div className='space-y-3'>
            <p className="text-sm">21 New York Street</p>
            <p className="text-sm">New York City</p>
            <p className="text-sm">United States of America</p>
            <p className="text-sm">432 34</p>
            </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg ">Follow Us</h3>
          <div className="flex space-x-3">
            <FaLinkedin size={20} />
            <FaFacebookSquare size={20} />
            <FaInstagram size={20} />
            <FaSkype size={20} />
            <CiTwitter size={20} />
            <FaPinterest size={20} />
          </div>
        </div>

        {/* Footer Menu */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
          {/* Menu */}
          <div className='space-y-4'>
            <h3 className="text-lg ">Menu</h3>
            <ul className="space-y-3 text-sm">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories */}
          <div className='space-y-4'>
            <h3 className="text-lg ">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>

          {/* Our Company */}
          <div className='space-y-4'>
            <h3 className="text-lg ">Our Company</h3>
            <ul className="space-y-3 text-sm">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left">
        <p className="text-sm">© 2022 Avion LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;
