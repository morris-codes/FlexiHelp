import React from "react";
import decor from "../assets/decor.jpg";
import chefy from "../assets/chefy.jpg";
import carpenter from "../assets/carpenter.jpg";
import locationIcon from "../assets/location_icon.png";

export default function ServiceCards({ onSignupClick }) {
  const services = [
    {
      title: "Interior Decorator",
      img: decor,
      distance: "15 km away.",
    },
    {
      title: "Chef",
      img: chefy,
      distance: "15 km away.",
    },
    {
      title: "Carpenter",
      img: carpenter,
      distance: "15 km away.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white text-[#0F172A]">
      {/* Section Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Find Service Providers Near You
        </h2>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[400px] h-[593px] bg-white rounded-[30px] shadow-md pt-2 pb-2 px-3 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full object-cover rounded-[20px]"
              style={{ height: "500px" }}
            />

            {/* Title & Distance */}
            <div className="mt-2 px-1 mb-1">
              <div className="flex items-center justify-between text-sm">
                <h3 className="text-base font-semibold">{service.title}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <img
                    src={locationIcon}
                    alt="location"
                    className="h-4 w-4 object-contain"
                  />
                  <span>{service.distance}</span>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="mt-3 px-1 flex justify-center">

  <button
    onClick={onSignupClick}
    className="w-[203px] bg-[#095CAF] text-white py-2 rounded-full text-sm hover:bg-blue-700 transition"
  >
    Book Now →
  </button>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
