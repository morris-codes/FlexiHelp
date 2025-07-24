// import React from "react";
// import { Link } from "react-router-dom";
// import searchIcon from "../assets/search_icon.png";
// import Logo from "../assets/logo.png";
// import SignUpModal from "../components/SignUp";

// export default function Navbar() {
//     return (
//         <header className="w-full px-6 md:px-16 py-4 bg-white shadow-sm">
//             <div className="flex items-center justify-between gap-4">

//                 {/* Logo */}
//                 <div className="flex-1 flex justify-start">
//                     <img src= {Logo} alt="I am an icon" className=""/>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="flex-1 flex justify-center">
//                     <div className="relative w-full max-w-[400px]">
//                         <input
//                             type="text"
//                             placeholder="Search for a service provider"
//                             className="pl-12 pr-4 py-2 w-full border rounded-full text-sm outline-none text-[#0F172A]"
//                         />
//                         <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
//                             <img src={searchIcon} alt="Search" className="h-5 w-5 opacity-60" />
//                         </span>
//                     </div>
//                 </div>

//                 {/* Nav Links */}
//                 <div className="flex-1 flex justify-center">
//                     <nav className="flex gap-8 text-sm text-[#0F172A] font-medium">
//                         <Link to="/" className="hover:text-blue-600">Home</Link>
//                         <Link to="/about" className="hover:text-blue-600">About</Link>
//                         <Link to="/services" className="hover:text-blue-600">Services</Link>
//                         <Link to="/faqs" className="hover:text-blue-600">FAQs</Link>
//                     </nav>
//                 </div>

//                 {/* Auth Buttons */}
//                 <div className="flex-1 flex justify-end gap-3">
//                     <button className="border border-[#095CAF] text-[#095CAF] px-7 py-1.5 rounded-full text-sm">
//                         Log In
//                     </button>
//                     <button className="bg-[#095CAF] text-white px-7 py-1.5 rounded-full text-sm">
//                         Sign Up
//                     </button>
//                 </div>

//             </div>
//         </header>
//     );
// }


// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search_icon.png";
import Logo from "../assets/logo.png";

export default function Navbar({ onSignupClick, onLoginClick}) {
    return (
        <header className="w-full px-6 md:px-16 py-4 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex-1 flex justify-start">
                    <img src={Logo} alt="Logo" />
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-[400px]">
                        <input
                            type="text"
                            placeholder="Search for a service provider"
                            className="pl-12 pr-4 py-2 w-full border rounded-full text-sm"
                        />
                        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <img src={searchIcon} alt="Search" className="h-5 w-5 opacity-60" />
                        </span>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="flex-1 flex justify-center">
                    <nav className="flex gap-8 text-sm text-[#0F172A] font-medium">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/faqs">FAQs</Link>
                    </nav>
                </div>

                {/* Auth Buttons */}
<div className="flex-1 flex justify-end gap-3">
  <button
    onClick={onLoginClick}
    className="border border-[#095CAF] text-[#095CAF] px-7 py-1.5 rounded-full text-sm"
  >
    Log In
  </button>

  <button
    onClick={onSignupClick}
    className="bg-[#095CAF] text-white px-7 py-1.5 rounded-full text-sm"
  >
    Sign Up
  </button>
</div>

            </div>
        </header>
    );
}
