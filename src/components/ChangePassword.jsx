import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // ✅ Import reusable Sidebar

export default function ChangePassword() {
  const navigate = useNavigate();

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
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
          <Icon
            icon="ic:round-double-arrow"
            className="text-gray-600"
            width="22"
            height="22"
          />
          <span className="text-lg font-normal">Change Password</span>
        </div>

        {/* Change Password Card */}
        <div className="w-[948px] bg-white border border-[#B3D0EC] rounded-[12px] p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-1">Change Password</h2>
          <p className="text-sm text-gray-500 mb-6">
            Keep your account secure by updating your password
          </p>

          {/* Current Password */}
          <div className="mb-4 relative">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Current Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm outline-none"
            />
            <div
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* New Password */}
          <div className="mb-1 relative">
            <input
              type={showNew ? "text" : "password"}
              placeholder="New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm outline-none"
            />
            <div
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Use at least 8 characters, including a number and special symbol
          </p>

          {/* Confirm New Password */}
          <div className="mb-6 relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm outline-none"
            />
            <div
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Original Change Password Button */}
          <button className="w-full bg-[#0A66C2] text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Change Password
          </button>
        </div>
      </main>
    </div>
  );
}
