import React from "react";
import { Link } from "react-router-dom";
// import searchIcon from "../assets/icons/search.svg";

export default function Navbar() {
    return (
        <header className="w-full px-6 md:px-16 py-4 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4">

                {/* Logo */}
                <div className="flex-1 flex justify-start">
                    <div className="text-xl font-bold text-[#0F172A]">LOGO</div>
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-[400px]">
                        <input
                            type="text"
                            placeholder="Search for a service provider"
                            className="pl-12 pr-4 py-2 w-full border rounded-full text-sm outline-none text-[#0F172A]"
                        />
                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <img src={""} alt="Search" className="h-5 w-5 opacity-60" />
                        </span>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="flex-1 flex justify-center">
                    <nav className="flex gap-8 text-sm text-[#0F172A] font-medium">
                        <Link to="/" className="hover:text-blue-600">Home</Link>
                        <Link to="/about" className="hover:text-blue-600">About</Link>
                        <Link to="/services" className="hover:text-blue-600">Services</Link>
                        <Link to="/faqs" className="hover:text-blue-600">FAQs</Link>
                    </nav>
                </div>

                {/* Auth Buttons */}
                <div className="flex-1 flex justify-end gap-3">
                    <button className="border border-blue-600 text-blue-600 px-7 py-1.5 rounded-full text-sm">
                        Log In
                    </button>
                    <button className="bg-blue-700 text-white px-7 py-1.5 rounded-full text-sm">
                        Sign Up
                    </button>
                </div>

            </div>
        </header>
    );
}
