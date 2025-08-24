import React from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AccountSettings() {
  const navigate = useNavigate();

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

        {/* Account Settings Box */}
        <div className="w-[948px] bg-white border border-[#B3D0EC] rounded-[12px] p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-1">Account Settings</h2>
          <p className="text-sm text-gray-500 mb-6">
            Secure and manage your account
          </p>

          <div className="flex flex-col gap-3">
            {/* Device/Activity Log */}
            <button
              onClick={() => navigate("/device-activity-log")}
              className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 hover:bg-gray-50 transition"
            >
              <span className="text-gray-800">Device/Activity Log</span>
              <FiChevronRight className="text-gray-500" />
            </button>

            {/* Change Password */}
            <button
              onClick={() => navigate("/change-password")}
              className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 hover:bg-gray-50 transition"
            >
              <span className="text-gray-800">Change Password</span>
              <FiChevronRight className="text-gray-500" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
