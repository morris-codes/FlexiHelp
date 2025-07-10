import React from "react";

import footerImg1 from "../assets/footer1.png";
import footerImg2 from "../assets/footer2.png";
import footerImg3 from "../assets/footer3.png";
import searchIcon from "../assets/search_icon.png";

export default function Footer() {
    return (
        <footer className="bg-white text-[#0F172A] pt-20">

            {/*Still Here Section*/}
            <div className="px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-10 md:mb-0">
                    <h3 className="text-5xl font-bold mb-8 tracking-wide text-[#095CAF]">Still Here?</h3>
                    <p className="text-2xl font-bold text-[#095CAF] mb-8">
                        <span className="text-[#FBBF24] font-bold">Sign up</span> to get the full experience
                    </p>
                    <button className="bg-[#095CAF] text-white px-20 py-3 rounded-full font-medium">
                        Sign Up
                    </button>
                </div>

                {/* Image stack */}
                <div className="flex gap-4 mb-10">
                    <img src={footerImg1} alt="img1" className="w-50 h-50 rounded-xl rotate-[-6deg]" />
                    <img src={footerImg2} alt="img2" className="w-50 h-50 rounded-xl rotate-[-6deg]" />
                    <img src={footerImg3} alt="img3" className="w-50 h-50 rounded-xl rotate-[10deg]" />
                </div>
            </div>

            {/* === Blue Footer Bottom === */}
            <div className="bg-[#095CAF] text-white mt-18 px-10 md:px-18 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Left: Search Title & Input */}
                    <div>
                        <h4 className="text-[#FBBF24] text-4xl font-bold mb-10">Service Providers Near Me</h4>
                        <div className="bg-white rounded-full flex items-center border-[#FBBF24] px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search for a service provider"
                                className="flex-1 text-sm text-[#0F172A] outline-none"
                            />
                            <img src={searchIcon} alt="search" className="w-4 h-4 ml-2" />
                        </div>
                    </div>

                    {/* Middle: Quick Links */}
                    <div>
                        <h5 className="text-xl font-medium mb-4">Quick Links</h5>
                        <ul className="text-sm space-y-4 mb-6">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Payments</li>
                            <li>How it works</li>
                        </ul>
                    </div>

                    {/* Right: Contact Info */}
                    <div>
                        <h5 className="text-xl font-medium mb-4">Contact</h5>
                        <ul className="text-sm space-y-4 mb-6">
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>support@flexihelp.gmail</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-white/30 mb-7" />
                <p className="text-xs text-left">© FlexiHelp 2025 All Rights Reserved</p>
            </div>
        </footer>
    );
}