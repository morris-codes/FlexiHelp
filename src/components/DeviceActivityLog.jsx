import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DeviceActivityLog() {
  const navigate = useNavigate();

  const logs = [
    { date: "Jul 23,2025", time: "13:12 PM", action: "Logged In", device: "iPhone-Lagos NG" },
    { date: "Jul 23,2025", time: "13:14 PM", action: "Info Updated", device: "iPhone-Lagos NG" },
    { date: "Jul 23,2025", time: "13:17 PM", action: "Booked a plumber", device: "iPhone-Abuja NG" },
    { date: "Jul 24,2025", time: "10:17 AM", action: "Account Funded", device: "iPhone-Oyo NG" },
    { date: "Jul 24,2025", time: "10:19 AM", action: "Logged Out", device: "iPhone-Ogun NG" },
    { date: "Jul 24,2025", time: "10:19 AM", action: "Logged In", device: "iPhone-Osun NG" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start p-10 relative">
        {/* Search Bar */}
        <div className="w-[950px] flex justify-end mb-4">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-lg text-sm shadow-sm outline-none placeholder-gray-700 bg-white"
              style={{
                border: "1px solid #B3D0EC",
              }}
            />
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-600"
              size={18}
            />
          </div>
        </div>

        {/* Breadcrumb Row */}
        <div className="w-[950px] flex items-center gap-2 mb-4">
          <FaArrowLeft
            className="cursor-pointer text-gray-700 hover:text-[#0A66C2]"
            onClick={() => navigate("/account-settings")}
          />
          <span className="text-lg font-normal">Account Settings</span>
          <Icon icon="ic:round-double-arrow" className="text-gray-600" width="22" height="22" />
          <span className="text-lg font-normal">Device / Activity Log</span>
        </div>

        {/* Device/Activity Log */}
        <div className="w-[948px] bg-white border border-[#B3D0EC] rounded-[12px] p-6 shadow-sm">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Device/Activity Log</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <FiFilter /> Last 7 days
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            View recent actions and login history on your account
          </p>

          {/* Table */}
          <table className="w-full border border-[#B3D0EC] rounded-md overflow-hidden text-sm">
            <thead className="bg-gray-100 text-gray-600 border-b border-[#B3D0EC]">
              <tr>
                <th className="p-3 text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Action</th>
                <th className="p-3 text-left">Device/Location</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, idx) => (
                <tr
                  key={idx}
                  className="border-t border-[#B3D0EC] hover:bg-gray-50"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{log.date}</td>
                  <td className="p-3">{log.time}</td>
                  <td className="p-3">{log.action}</td>
                  <td className="p-3">{log.device}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-2 mt-4 text-sm text-gray-600">
            <span>Page</span>
            <span className="font-medium">1</span>
            <span>of 1</span>
          </div>
        </div>
      </main>
    </div>
  );
}
