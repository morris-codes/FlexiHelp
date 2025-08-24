import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Icon } from "@iconify/react";
import { FaTrash } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import lg from "../assets/lg name.jpg";
import luxeclean from "../assets/luxeclean.jpg";

export default function SavedServices() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Move savedServices into state to allow deletion
  const [services, setServices] = useState([
    { id: 1, name: "AC3 Barbershop", category: "Beauty Salon", price: "10,000", image: lg, rating: "4.8/5", location: "Ikoyi, Lagos state", availability: "24/7" },
    { id: 2, name: "AC3 LuxeClean", category: "Cleaning Hub", price: "20,000", image: luxeclean, rating: "4.8/5", location: "Ikoyi, Lagos state", availability: "24/7" },
    { id: 3, name: "AC3 Plumbing", category: "Plumbing", price: "15,000", image: lg, rating: "4.8/5", location: "Ikoyi, Lagos state", availability: "24/7" },
  ]);

  // Filter services based on search
  const filteredServices = services.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
  );

  // Delete handler
  const handleDelete = (id) => {
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);

    // Optional: if current page becomes empty after deletion, go to previous page
    if (currentPage > 1 && updated.length <= (currentPage - 1) * 3) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen relative">
      <Sidebar />

      <div className="flex-1 p-6 relative">
        {/* Search Bar */}
        <div className="absolute top-6 right-36">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-[12px] text-sm outline-none placeholder-gray-500 bg-white shadow-sm"
              style={{ border: "1px solid #B3D0EC" }}
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-600" size={18} />
          </div>
        </div>

        {/* Main Box */}
        <div className="w-[950px] h-[630px] bg-white border border-blue-600 rounded-xl shadow-sm p-6 mx-auto mt-16 relative">
          <h2 className="text-lg font-bold text-gray-800">Saved Service</h2>
          <p className="text-sm text-gray-600 mb-4">
            Quick access to your favourites or frequently used service
          </p>

          {/* Page 1 shows services, page 2 shows empty */}
          {currentPage === 1 && filteredServices.length > 0 ? (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <div key={service.id} className="flex items-center border border-blue-600 rounded-lg p-4 bg-white relative">
                  <span className="absolute top-2 right-3 flex items-center text-sm text-gray-700">⭐ {service.rating}</span>
                  <img src={service.image} alt="Service" className="w-24 h-24 rounded-lg object-cover mr-4" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.category}</p>
                    <div className="flex items-center gap-6 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1 font-bold">
                        <Icon icon="mdi:calendar" /> Availability: {service.availability}
                      </span>
                      <span className="flex items-center gap-1 font-bold">
                        <Icon icon="mdi:map-marker" /> {service.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm font-medium text-gray-700">Base Price: {service.price}</p>
                      <div className="flex items-center gap-4">
                        <button className="px-4 py-2 text-sm rounded-full bg-[#0A66C2] text-white hover:bg-blue-700">Book Now</button>
                        <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(service.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center py-20 min-h-[500px]">
              <FiSearch className="text-[#0A66C2]" size={60} />
              <h3 className="text-lg font-semibold mt-4">No saved service yet</h3>
              <p className="text-gray-500 mt-2 text-center max-w-xs">
                Start exploring and save your favourites for faster bookings
              </p>
            </div>
          )}

          {/* Pagination bottom-right */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <Icon
                icon="icon-park-solid:arrow-circle-left"
                className={`text-lg ${currentPage === 1 ? "text-gray-300" : "text-gray-600 cursor-pointer"}`}
              />
            </button>
            <span className="text-sm">Page {currentPage} of 2</span>
            <button
              onClick={() => setCurrentPage((prev) => (prev < 2 ? prev + 1 : prev))}
              disabled={currentPage === 2}
            >
              <Icon
                icon="icon-park-solid:arrow-circle-right"
                className={`text-lg ${currentPage === 2 ? "text-gray-300" : "text-gray-600 cursor-pointer"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
