"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const ProductDetailHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-20 bg-white flex items-center px-6 md:px-10">
      <div className="flex justify-between items-center w-full">
        {/* Left - Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-4xl text-[#22202E]">Avion</div>
        </div>

        <nav className="flex-grow hidden md:flex justify-center">
          <ul className="flex justify-center space-x-6 text-[#726E8D]">
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
        </nav>

        <div className="flex space-x-2 items-center text-[#726E8D]">
          <IoIosSearch size={30} />
          <Link href={"/cart"}>
            <div className="relative">
              <IoCartOutline className="text-xl" size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                2
              </span>
            </div>
          </Link>
          <MdOutlineAccountCircle size={30} />

          <button className="md:hidden" onClick={toggleMenu}>
            <IoMdMenu size={30} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-full bg-white absolute top-20 left-0 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 p-4 text-[#726E8D]">
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
      )}
    </header>
  );
};

export default ProductDetailHeader;
