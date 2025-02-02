import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="sticky top-4 z-50 bg-transparent h-0">
            <div className="bg-white rounded-l-full rounded-r-full shadow-md mx-36 h-20 flex justify-between">
                <div className="flex items-center">
                    <div className="pt-1 pb-1">
                        <img
                            src="https://framerusercontent.com/images/Gst1SXKiV14Czf61sjGOlXClhE.svg"
                            alt="logo"
                            className="h-14 px-4"
                        />
                    </div>
                    <div className="flex items-center pb-4">
                        <div className="hover:text-pink-950 flex items-center cursor-pointer">
                            <h2 className="text-xl font-semibold hover:text-pink-950 text-gray-800 pt-4 pl-12">
                                For Students
                            </h2>
                            <div className="pl-2 pt-5">
                                <ChevronDown size={24} />
                            </div>
                        </div>
                        <div className="flex items-center font-medium text-gray-800 pl-4 gap-2 cursor-pointer"></div>
                        <div className="flex items-center font-medium text-gray-800 pl-4 gap-2 cursor-pointer ">
                            <h2 className=" pt-4 pl-4">For Tutors/Institutes </h2>
                            <h2 className="pt-4 pl-4 text-purple-800">Pricing</h2>
                            <h2 className="pt-4 pl-4 text-purple-800">Blog</h2>
                            <h2 className="pt-4 pl-4 text-purple-800">Community</h2>
                        </div>
                    </div>
                </div>
                <div className="flex items-center px-8">
                    <button className="bg-white border-2 border-indigo-950 font-bold text-lg py-2 px-8 rounded-full mr-4 hover:text-purple-800 hover:border-purple-800">
                        Login
                    </button>
                    <button className="bg-indigo-950 text-lg text-white font-bold py-4 px-8 rounded-full">
                        Schedule a Call
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
