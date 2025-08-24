import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // make sure path is correct
import { Icon } from "@iconify/react";
import { FiSearch } from "react-icons/fi";

export default function ServiceHistoryPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // control pagination

  const services = [
    { date: "June 24, 2025", category: "Plumbing", id: "FH0625UA", status: "Completed" },
    { date: "June 24, 2025", category: "Cleaning", id: "FH0725QW", status: "Completed" },
    { date: "June 24, 2025", category: "Weldering", id: "FH0825JH", status: "Completed" },
    { date: "June 25, 2025", category: "AC Repair", id: "FH0925HK", status: "In Progress" },
    { date: "June 25, 2025", category: "Spa Service", id: "FH0125KA", status: "In Progress" },
    { date: "June 25, 2025", category: "Electrician", id: "FH0225UE", status: "Cancelled" },
  ];

  const filteredServices = services.filter(
    (s) =>
      s.category.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 relative">
        {/* Top-right Search Bar */}
        <div className="absolute top-6 right-35">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-[12px] text-sm outline-none placeholder-gray-500 bg-white shadow-sm"
              style={{ border: "1px solid #B3D0EC" }}
            />
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-600"
              size={18}
            />
          </div>
        </div>

        {/* Service History Card */}
        <div className="bg-white rounded-2xl shadow p-6 w-[968px] mx-auto mt-16">
          {/* Header + Download + Last 7 Days */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold">Service History</h2>
              <p className="text-sm text-gray-500">View your full service activities</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Download Button */}
              <button
                className="flex items-center px-3 py-2 text-white text-sm rounded-lg shadow"
                style={{ backgroundColor: "#0A66C2" }}
              >
                Download
                <Icon icon="mdi:download" className="ml-1 text-lg" />
              </button>

              {/* Last 7 Days Filter */}
              <div className="flex items-center text-gray-600 text-sm cursor-pointer">
                <Icon icon="mdi:filter" className="mr-1 text-lg" />
                Last 7 days
                <Icon icon="mdi:chevron-down" className="ml-1 text-lg" />
              </div>
            </div>
          </div>

          {currentPage === 1 ? (
            /* Table when there are services */
            <div className="overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b border-[#B3D0EC]">
                  <tr>
                    <th className="px-3 py-3 text-left">
                      <input type="checkbox" />
                    </th>
                    <th className="px-3 py-3 text-left">Date</th>
                    <th className="px-3 py-3 text-left">Categories</th>
                    <th className="px-3 py-3 text-left">Booking ID</th>
                    <th className="px-3 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((s, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#B3D0EC] hover:bg-gray-50"
                    >
                      <td className="px-3 py-5">
                        <input type="checkbox" />
                      </td>
                      <td className="px-3 py-5 text-gray-500">{s.date}</td>
                      <td className="px-3 py-5 text-gray-800">{s.category}</td>
                      <td className="px-3 py-5 font-medium text-black">{s.id}</td>
                      <td
                        className={`px-3 py-5 ${
                          s.status === "Completed"
                            ? "text-green-600"
                            : s.status === "In Progress"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                      >
                        {s.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Empty state when page > 1 */
            <div className="flex flex-col justify-center items-center py-20">
              <Icon icon="mdi:mailbox" className="text-[#0A66C2]" width={60} height={60} />
              <h3 className="text-lg font-semibold mt-4">No service history yet</h3>
              <p className="text-gray-500 mt-2 text-center">
                Use a service and your history will show up here
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-end items-center mt-4 gap-2">
            <Icon
              icon="icon-park-solid:arrow-circle-left"
              className="text-gray-600 cursor-pointer text-lg"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
            <span className="text-sm">Page {currentPage}</span>
            <Icon
              icon="icon-park-solid:arrow-circle-right"
              className="text-gray-600 cursor-pointer text-lg"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
