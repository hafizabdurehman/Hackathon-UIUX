
"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-5 text-[#2A254B] ">
      <div className="flex justify-between items-center lg:justify-center lg:relative">
        <IoIosSearch
          className="hidden lg:block lg:absolute lg:left-5 text-xl"
          size={30}
        />

        <div className="text-4xl text-[#22202E]">Avion</div>

        <div className="flex items-center lg:hidden">
          <IoIosSearch className="text-xl mr-4 text-[#726E8D]" size={30} />
          <HiOutlineMenu
            className="text-xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        <div className="hidden lg:flex gap-4 absolute right-5 text-[#726E8D]">
          <Link href="/cart">
            <div className="relative">
              <IoCartOutline className="text-xl" size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                2
              </span>
            </div>
          </Link>
          <MdOutlineAccountCircle className="text-xl" size={30} />
        </div>
      </div>

      <div className="w-full border-b-[1px] my-5"></div>

      {/* Nav Bar */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex gap-8 text-base text-[#726E8D] ">
          <li className="hover:underline ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/allproducts">All Product</Link>
          </li>
          <li className="hover:underline">
            <Link href="/productdetails">Product Details</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Ceramics</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Tables</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Chairs</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-5">
            <div className="text-xl font-bold">Avion</div>
            <HiOutlineX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center mt-10 space-y-5 text-lg text-[#726E8D]">
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
                <Link href="/productdetails" onClick={() => setIsMenuOpen(false)}>
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

export default Header;
