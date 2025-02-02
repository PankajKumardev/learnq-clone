'use client';
import React, { useState } from 'react';
import { Menu, AlignLeft } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 bg-transparent h-0">
      <div className="bg-white rounded-l-full rounded-r-full shadow-md mx-4 lg:mx-36 h-20">
        <div className="flex justify-between items-center h-full px-4 lg:px-8">
          <div className="flex items-center">
            <img
              src="https://framerusercontent.com/images/Gst1SXKiV14Czf61sjGOlXClhE.svg"
              alt="logo"
              className="h-10 lg:h-14"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center cursor-pointer">
              <span className="text-xl font-semibold text-gray-800">
                For Students
              </span>
              <AlignLeft className="ml-2" size={20} />
            </div>
            <span className="text-gray-800">For Tutors/Institutes</span>
            <span className="text-purple-800">Pricing</span>
            <span className="text-purple-800">Blog</span>
            <span className="text-purple-800">Community</span>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full hover:text-purple-800 hover:border-purple-800">
              Login
            </button>
            <button className="bg-indigo-950 text-lg text-white font-bold py-4 px-8 rounded-full">
              Schedule a Call
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AlignLeft size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-28 left-0 right-0 bg-white shadow-lg rounded-2xl px-4 py-6 space-y-4 mx-10 text-center backdrop-blur-md backdrop-filter">
            <div className="space-y-4">
              <p className="text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
                For Students
              </p>
              <p className="text-gray-800 border-b border-gray-300 pb-2">
                For Tutors/Institutes
              </p>
              <p className="text-purple-800 border-b border-gray-300 pb-2">
                Pricing
              </p>
              <p className="text-purple-800 border-b border-gray-300 pb-2">
                Blog
              </p>
              <p className="text-purple-800">Community</p>
            </div>
            <div className="flex flex-row space-x-4 pt-4 justify-center">
              <button className="w-1/2 border-2 border-indigo-950 font-bold text-lg py-2 rounded-full hover:text-purple-800 hover:border-purple-800">
                Login
              </button>
              <button className="w-1/2 bg-indigo-950 text-lg text-white font-bold py-2 rounded-full">
                Schedule a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
