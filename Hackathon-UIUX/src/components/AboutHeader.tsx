"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const AboutHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-5 text-[#2A254B]">
      {/* Top Header */}
      <div className="flex justify-between items-center lg:justify-between lg:relative">
        {/* Left Section - Logo */}
        <div className="text-4xl text-[#22202E] ml-4">Avion</div>

        <div className="hidden lg:flex gap-4 items-center text-base text-[#726E8D] absolute right-5">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>

          <IoIosSearch className="text-xl" size={30} />

          <Link href="/cart">
            <div className="relative">
              <IoCartOutline className="text-xl" size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                2
              </span>
            </div>
          </Link>
          <MdOutlineAccountCircle size={30} />
        </div>

        <div className="flex items-center lg:hidden">
          <HiOutlineMenu
            className="text-xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Nav Bar (Desktop) */}
      <div className="hidden lg:flex justify-center bg-[#F5F5F5] py-4 ">
        {" "}
        {/* Added background color here */}
        <ul className="flex gap-12 text-base text-[#726E8D]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/allproducts">All Products</Link>
          </li>
          <li>
            <Link href="/productdetails">Product Details</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#">Ceramics</Link>
          </li>
          <li>
            <Link href="#">Tables</Link>
          </li>
          <li>
            <Link href="#">Chairs</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-5">
            <div className="text-4xl">Avion</div>
            <HiOutlineX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center mt-10 space-y-5 text-lg">
            {/* Search Icon inside the Mobile Menu */}
            <IoIosSearch className="text-2xl" size={30} />

            <div className="text-2xl">
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                <IoCartOutline />
              </Link>
            </div>
            <div className="text-2xl">
              <Link href="#" onClick={() => setIsMenuOpen(false)}>
                <MdOutlineAccountCircle />
              </Link>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/allproducts" onClick={() => setIsMenuOpen(false)}>
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/productdetails"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product Details
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                  Ceramics
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                  Tables
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                  Chairs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutHeader;
