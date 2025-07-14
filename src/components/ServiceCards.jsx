import React from "react";
import icon1 from "../assets/electric_service.png";
import icon2 from "../assets/mechanic_service.png";
import icon3 from "../assets/carpenter_service.png";
import locationIcon from "../assets/location_icon.png";
import { Link } from "react-router-dom";

export default function ServiceCards({ onSignupClick }) {

    return (
        <section className="w-full px-6 md:px-16 py-16 bg-white text-[#0F172A]">
            {/* Section Heading */}
            <div className="mb-10">
                <h2 className="text-5xl md:text-3xl font-bold">
                    Find Service Providers Near You
                </h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="bg-[#DAE8F6] rounded-2xl p-6 shadow-md flex flex-col justify-between">

                        {/* Icon Placeholder */}

                        <div className="w-16 h-18 mx-auto mb-4">
                            <div className="w-full h-full bg-[#DAE8F6] rounded-lg flex items-center justify-center">
                                <img
                                    src={i === 1 ? icon1 : i === 2 ? icon2 : icon3}
                                    alt="Service Icon"
                                    className="h-18 w-16 object-contain"
                                />
                            </div>
                        </div>


                        {/* Title */}
                        <h3 className="text-lg font-bold mb-4">
                            {i === 1 ? "Electrician" : i === 2 ? "Mechanic" : "Carpenter"}
                        </h3>

                        {/* Location & Details */}

                        <div className="flex gap-6 items-center text-gray-500 text-sm mb-4">
                            <div className="flex items-center gap-3">
                                <img src={locationIcon} alt="location" className="h-4 w-4 md:h-5 md:w-5 object-contain" />
                                {i === 1 ? "15 km away." : i === 2 ? "20 km away." : "11 km away."}
                            </div>
                            <button className="underline hover:text-[#095CAF] transition">
                                View Details
                            </button>
                        </div>

                        {/* Star Ratings */}
                        <div className="flex items-center gap-1 text-yellow-400 mb-4 text-lg justify-center">
                            ★ ★ ★ ★ <span className="text-gray-300">★</span>
                        </div>

                        {/* Book Now Button */}
                        <button onClick={onSignupClick} className="bg-[#095CAF] text-white py-2 px-6 w-fit rounded-full text-sm hover:bg-blue-700 transition mx-auto">
                            Book Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Sign up text */}
            <div className="mt-8 text-right text-xs text-gray-500">
                <button className="inline-flex items-center font-bold gap-1 hover:text-[#095CAF] transition">
                    Sign up to see more →
                </button>
            </div>
        </section>

    );
}


// button adjustment = bg-blue-600 text-white py-2 rounded-full text-sm hover:bg-blue-700 transition
// inline-flex items-center font-bold gap-1 hover:text-blue-600 transition #095CAF