// import React from 'react';
// import { FaStar, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
// import { FiBookmark } from 'react-icons/fi';
// import { FiSearch } from 'react-icons/fi';

// import cleaner from '../assets/cleaning.jpg';
// import makeover from '../assets/makeovers.jpg';
// import cleaner3 from '../assets/cleaning.jpg';
// import cleaner4 from '../assets/cleaning.jpg';
// import cleaner5 from '../assets/cleaning.jpg';
// import cleaner6 from '../assets/cleaning.jpg';
// import cleaner7 from '../assets/cleaning.jpg';
// import cleaner8 from '../assets/cleaning.jpg';
// import cleaner9 from '../assets/cleaning.jpg';
// import cleaner10 from '../assets/cleaning.jpg';
// import cleaner11 from '../assets/cleaning.jpg';
// import cleaner12 from '../assets/cleaning.jpg';
// import spa from '../assets/spa.jpg';
// import laundry from '../assets/laundry.jpg';
// import chef from '../assets/chef.jpg';


// const ServiceDiscoveryPage = () => {
//   const topRated = [
//     { id: 1, name: 'Nk Cleaners', image: cleaner, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//     { id: 2, name: 'MUA In Lagos', image: makeover, description: 'Allow us give you the makeover of a lifetime. Every brush and stroke to amplify your beauty', rating: 4.8 },
//     { id: 3, name: 'Dry Cleaner', image: cleaner3, description: 'Squeaky clean services only.Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//     { id: 4, name: 'Clean Cutx', image: cleaner4, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//     { id: 5, name: 'Dee’s Couture', image: cleaner5, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//     { id: 6, name: 'Bola’s Salon', image: cleaner6, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//     { id: 7, name: 'Carpenter', image: cleaner7, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//     { id: 8, name: 'Electrician', image: cleaner8, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
//   ];

//   const nearby = [
//     { id: 9, name: 'Nk Cleaners', image: cleaner9, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9, location: 'Ikeja, Lagos' },
//     { id: 10, name: 'Nk Cleaners', image: cleaner10, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9, location: 'Ojo, Alaba' },
//     { id: 11, name: 'Nk Cleaners', image: cleaner11, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9, location: 'Trinity Estate' },
//     { id: 12, name: 'Nk Cleaners', image: cleaner12, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9, location: 'Lekki Phase 1' },
//   ];

//   const recommendations = [
//     { id: 1, name: 'Ada Beauty Spa', image: spa, rating: '3.5/5.0', distance: '10km Away' },
//     { id: 2, name: 'Tboy laundry', image: laundry, rating: '3.5/5.0', distance: '10km Away' },
//     { id: 3, name: 'Best Chefs', image: chef, rating: '3.5/5.0', distance: '10km Away' },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Hero & Filters */}
//       <section className="px-6 mt-6">
//         <div className="w-full h-48 border rounded-xl border-[#90cdf4] bg-white mb-6"></div>
//         <div className="flex justify-between items-center">
//           <select className="w-40 px-4 py-2 border border-[#90cdf4] rounded-full text-sm text-gray-700 bg-white shadow-sm">
//             <option>Categories</option>
//             <option>Cleaning</option>
//             <option>Plumbing</option>
//             <option>Haircut</option>
//           </select>
//           <select className="w-40 px-4 py-2 border border-[#90cdf4] rounded-full text-sm text-gray-700 bg-white shadow-sm">
//             <option>Filter By</option>
//             <option>Top Rated</option>
//             <option>Nearest</option>
//             <option>Recently Added</option>
//           </select>
//         </div>
//       </section>

//       {/* Top Rated Providers */}
//       <section className="px-6 mt-10">
//         <h2 className="text-lg font-semibold mb-4">Top Rated Service Providers</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {topRated.map((provider) => (
//             <div key={provider.id} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative hover:shadow-md hover:-translate-y-1 transition-transform">
//               <div className="absolute top-4 left-4">
//                 <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" />
//               </div>
//               <div className="absolute top-4 right-4">
//                 <FiBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" />
//               </div>
//               <img src={provider.image} alt={provider.name} className="w-full h-32 object-cover rounded-md mb-3" />
//               <h3 className="font-medium text-base mb-1">{provider.name}</h3>
//               <p className="text-sm text-gray-600 mb-2">{provider.description}</p>
//               <div className="flex items-center text-yellow-500 text-sm mb-4">
//                 <FaStar className="mr-1" />{provider.rating}
//               </div>
//               <div className="flex items-center text-sm">
//                 <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">Hire Now</button>
//                 <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-50 ml-auto">View Details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Nearby Providers */}
//       <section className="px-6 mt-14">
//         <h2 className="text-lg font-semibold mb-4">Service Providers Near You</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {nearby.map((provider) => (
//             <div key={provider.id} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative hover:shadow-md hover:-translate-y-1 transition-transform">
//               <div className="absolute top-4 left-4">
//                 <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" />
//               </div>
//               <div className="absolute top-4 right-4">
//                 <FiBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" />
//               </div>
//               <img src={provider.image} alt={provider.name} className="w-full h-32 object-cover rounded-md mb-3" />
//               <h3 className="font-medium text-base mb-1">{provider.name}</h3>
//               <p className="text-sm text-gray-600 mb-2">{provider.description}</p>
//               <div className="flex justify-between items-center text-sm">
//                 <div className="flex items-center text-yellow-500">
//                   <FaStar className="mr-1" />{provider.rating}
//                 </div>
//                 <div className="flex items-center text-gray-500 text-xs">
//                   <FaMapMarkerAlt className="mr-1 text-red-400" />{provider.location}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Recommended For You */}
//       <section className="px-6 mt-14">
//         <h2 className="text-lg font-semibold mb-4">Recommended For You</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {recommendations.map((item) => (
//             <div key={item.id} className="flex items-center bg-white border border-blue-100 rounded-xl shadow-sm p-3 relative hover:shadow-md transition-transform hover:-translate-y-1">
//               <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
//               <div className="flex-1">
//                 <div className="absolute top-3 right-3">
//                   <FiBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" />
//                 </div>
//                 <h3 className="font-medium text-base mb-1">{item.name}</h3>
//                 <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
//                   <div className="flex items-center text-yellow-500">
//                     <FaStar className="mr-1" />{item.rating}
//                   </div>
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="mr-1 text-blue-400" />{item.distance}
//                   </div>
//                 </div>
//                 <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-50 text-sm">View Details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-[#003366] to-[#004080] text-white px-6 py-12 mt-20">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl font-bold text-yellow-400 mb-6">Service Providers Near Me</h2>
//           <div className="relative w-full max-w-xs mb-12">
//             <input type="text" placeholder="Search for a service provider" className="w-full pl-4 pr-10 py-2 rounded-full text-sm text-black bg-white focus:outline-none" />
//             <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
//           </div>
//           <div className="flex justify-end">
//             <div className="grid grid-cols-2 gap-20 text-sm">
//               <div>
//                 <h3 className="font-semibold mb-2">Quick Links</h3>
//                 <ul className="space-y-1">
//                   <li><a href="/" className="hover:underline">Home</a></li>
//                   <li><a href="/about" className="hover:underline">About Us</a></li>
//                   <li><a href="/payments" className="hover:underline">Payments</a></li>
//                   <li><a href="/how-it-works" className="hover:underline">How it works</a></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2">Contact</h3>
//                 <ul className="space-y-1">
//                   <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
//                   <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
//                   <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
//                   <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
//                   <li><a href="mailto:support@flexihelp.gmail" className="hover:underline">support@flexihelp.gmail</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <hr className="my-8 border-gray-400" />
//           <p className="text-xs text-center">© FlexiHelp 2025 All Rights Reserved</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ServiceDiscoveryPage;


import React from 'react';
import { FaStar, FaHeart, FaMapMarkerAlt, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { FiBookmark, FiSearch } from 'react-icons/fi';

import cleaner from '../assets/cleaning.jpg';
import makeover from '../assets/makeovers.jpg';
import billboard from '../assets/Billboard.jpg';
import cleaner3 from '../assets/drycleaner.jpg';
import cleaner4 from '../assets/cleancut.jpg';
import cleaner5 from '../assets/fashion.jpg';
import cleaner6 from '../assets/hair.jpg';
import cleaner9 from '../assets/drycleaner.jpg';
import cleaner10 from '../assets/cleancut.jpg';
import cleaner11 from '../assets/makeovers.jpg';
import spa from '../assets/spa.jpg';
import laundry from '../assets/laundry.jpg';
import chef from '../assets/chef.jpg';
import flexihelpLogo from '../assets/flexihelp.jpg'; // Make sure this image is inside your assets folder

const ServiceDiscoveryPage = () => {
  const topRated = [
    { id: 1, name: 'Nk Cleaners', image: cleaner, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
    { id: 2, name: 'MUA In Lagos', image: makeover, description: 'Allow us give you the makeover of a lifetime. Every brush and stroke to amplify your beauty', rating: 4.8 },
    { id: 3, name: 'Dry Cleaner', image: cleaner3, description: 'Squeaky clean services only.Let’s give your space the thorough cleaning it needs', rating: 4.9 },
    { id: 4, name: 'Clean Cutx', image: cleaner4, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
    { id: 5, name: 'Dee’s Couture', image: cleaner5, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
    { id: 6, name: 'Bola’s Salon', image: cleaner6, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
  ];

  const nearby = [
    { id: 1, name: 'Ada Beauty Spa', image: spa, rating: '3.5/5.0', distance: '10km Away' },
    { id: 2, name: 'Tboy laundry', image: laundry, rating: '3.5/5.0', distance: '10km Away' },
    { id: 3, name: 'Best Chefs', image: chef, rating: '3.5/5.0', distance: '10km Away' },
  ];

  const recommendations = [
    { id: 9, name: 'Dry Cleaner', image: cleaner9, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
    { id: 10, name: 'Clean Cutx', image: cleaner10, description: 'Squeaky clean services only. Let’s give your space the thorough cleaning it needs', rating: 4.9 },
    { id: 11, name: 'MUA In Lagos', image: cleaner11, description: 'Allow us give you the makeover of a lifetime. Every brush and stroke to amplify your beauty', rating: 4.9 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Custom Inline Navbar */}
  <nav className="w-full px-6 md:px-16 py-4 bg-white shadow-sm border-b border-gray-200">
  <div className="flex items-center justify-between gap-4">

    {/* Logo - using Figma's size and spacing */}
    <div className="flex-1 flex justify-start items-center gap-1">
      <img
        src={flexihelpLogo}
        alt="FlexiHelp Logo"
        className="w-[112px] h-[32.24px] object-contain"
      />
    </div>

    {/* Search Bar */}
    <div className="flex-1 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a service provider"
          className="pl-4 pr-10 py-2 w-full border border-gray-300 rounded-full text-sm text-gray-700 outline-none shadow-sm"
        />
        <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
      </div>
    </div>

    {/* Nav Links */}
    <div className="flex-1 hidden lg:flex justify-center">
      <ul className="flex gap-8 text-sm font-medium text-gray-700">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="/about" className="hover:text-blue-500">About</a></li>
        <li><a href="/services" className="hover:text-blue-500">Services</a></li>
        <li><a href="/faqs" className="hover:text-blue-500">FAQs</a></li>
      </ul>
    </div>

    {/* Buttons */}
    <div className="flex-1 flex justify-end gap-3">
      <button className="flex items-center gap-1 bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-600">
        <FaUserCircle />
        Account
      </button>
      <button className="flex items-center gap-1 border border-gray-300 text-gray-700 px-4 py-1.5 rounded-full text-sm hover:bg-gray-100">
        <FaSignOutAlt />
        Logout
      </button>
    </div>

  </div>
</nav>

      {/* ✅ Hero Section */}
      <section className="px-6 mt-6">
        <div className="w-full h-[380px] border rounded-xl border-[#90cdf4] bg-white mb-6 overflow-hidden">
          <img src={billboard} alt="Hero" className="w-full h-full object-cover" />
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <select className="w-full sm:w-40 px-4 py-2 border border-[#90cdf4] rounded-full text-sm text-gray-700 bg-white shadow-sm">
            <option>Categories</option>
            <option>Repairs</option>
            <option>Cleaning</option>
            <option>Beauty</option>
            <option>Food</option>
          </select>
          <select className="w-full sm:w-40 px-4 py-2 border border-[#90cdf4] rounded-full text-sm text-gray-700 bg-white shadow-sm">
            <option>Filter By</option>
            <option>Location</option>
            <option>Trending</option>
            <option>Rating Added</option>
          </select>
        </div>
      </section>

      {/* ✅ Top Rated Providers */}
      <section className="px-6 mt-10">
        <h2 className="text-lg font-semibold mb-4">Top Rated Service Providers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topRated.map((provider) => (
            <div key={provider.id} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative hover:shadow-md hover:-translate-y-1 transition-transform">
              <div className="absolute top-4 left-4">
                <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" />
              </div>
              <img src={provider.image} alt={provider.name} className="w-full h-52 object-cover rounded-md mb-3" />
              <h3 className="font-medium text-base mb-1">{provider.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{provider.description}</p>
              <div className="flex items-center justify-between text-yellow-500 text-sm mb-4">
                <div className="flex items-center">
                  <FaStar className="mr-1" />{provider.rating}
                </div>
                <FiBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" />
              </div>
              <div className="flex flex-wrap items-center text-sm gap-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">Hire Now</button>
                <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-50 ml-auto">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Recommended For You */}
      <section className="px-6 mt-14">
        <h2 className="text-lg font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendations.map((provider) => (
            <div key={provider.id} className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 relative hover:shadow-md hover:-translate-y-1 transition-transform">
              <div className="absolute top-4 left-4">
                <FaHeart className="text-gray-300 hover:text-red-500 cursor-pointer" />
              </div>
              <img src={provider.image} alt={provider.name} className="w-full h-52 object-cover rounded-md mb-3" />
              <h3 className="font-medium text-base mb-1">{provider.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{provider.description}</p>
              <div className="flex items-center justify-between text-yellow-500 text-sm mb-4">
                <div className="flex items-center">
                  <FaStar className="mr-1" />{provider.rating}
                </div>
                <FiBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" />
              </div>
              <div className="flex flex-wrap items-center text-sm gap-2">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">Hire Now</button>
                <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-md hover:bg-blue-50 ml-auto">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Nearby Providers */}
      <section className="px-6 mt-14">
        <h2 className="text-lg font-semibold mb-4">Service Providers Near You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {nearby.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white border border-blue-100 rounded-xl shadow-sm p-3 relative hover:shadow-md transition-transform hover:-translate-y-1">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-0 sm:mr-4 mb-3 sm:mb-0" />
              <div className="flex-1 w-full">
                <div className="absolute top-3 right-3">
                  <FiBookmark className="text-gray-400 hover:text-blue-500 cursor-pointer" />
                </div>
                <h3 className="font-medium text-base mb-1">{item.name}</h3>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />{item.rating}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-blue-400" />{item.distance}
                  </div>
                </div>
                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-50 text-sm w-full sm:w-auto">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gradient-to-r from-[#003366] to-[#004080] text-white px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Service Providers Near Me</h2>
          <div className="relative w-full max-w-xs mb-12">
            <input type="text" placeholder="Search for a service provider" className="w-full pl-4 pr-10 py-2 rounded-full text-sm text-black bg-white focus:outline-none" />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/payments" className="hover:underline">Payments</a></li>
                  <li><a href="/how-it-works" className="hover:underline">How it works</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <ul className="space-y-1">
                  <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
                  <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
                  <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>
                  <li><a href="mailto:support@flexihelp.gmail" className="hover:underline">support@flexihelp.gmail</a></li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-400" />
          <p className="text-xs text-center">© FlexiHelp 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDiscoveryPage;

