"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () : void => {
    setIsClick(!isClick)
  }
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">Chong Lap</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Company</a>
                <a href="/products" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Products</a>
                <a href="/blogs" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Blogs</a>
                <a href="/events" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Events</a>
                <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Contact</a>
                <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2">Taiwan branch</a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};


