// src/pages/SecuritySettings.jsx
import React, { useState } from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function SecuritySettings() {
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/two-factor-verify"); // route to 2FA verification screen
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeItem="Security Settings" />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-start p-10 relative">
        {/* Search bar */}
        <div className="w-[950px] flex justify-end mb-4">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-lg text-sm shadow-sm outline-none placeholder-gray-700 bg-white"
              style={{ border: "1px solid #B3D0EC" }}
            />
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-600"
              size={18}
            />
          </div>
        </div>

        {!showTwoFactor ? (
          // Security Settings Card
          <div className="w-[948px] h-[520px] bg-white border border-[#B3D0EC] rounded-[12px] p-6 shadow-sm">
            <h2 className="text-lg font-medium mb-1">Security Settings</h2>
            <p className="text-sm text-gray-500 mb-6">
              Manage your account safety
            </p>

            <button
              onClick={() => setShowTwoFactor(true)}
              className="flex items-center justify-between rounded-md px-4 py-3 hover:bg-gray-50 transition w-full"
              style={{ border: "1px solid #B3D0EC" }}
            >
              <span className="text-gray-800 font-medium text-lg">
                Two-Factor Authentication
              </span>
              <FiChevronRight className="text-gray-500" />
            </button>
          </div>
        ) : (
          <div className="w-[948px]">
            {/* Back Button + Navigation Path */}
            <div className="flex items-center space-x-2 mb-4">
              <button
                onClick={() => setShowTwoFactor(false)}
                className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition cursor-pointer"
              >
                <Icon icon="material-symbols:arrow-back-rounded" width="24" />
              </button>
              <span className="text-gray-800 font-medium text-lg">
                Security Settings
              </span>
              <Icon
                icon="ic:round-double-arrow"
                className="text-gray-500"
                width="20"
              />
              <span className="text-gray-800 font-medium text-lg">
                Two-Factor Authentication
              </span>
            </div>

            {/* Two-Factor Authentication Card */}
            <div className="bg-white border border-[#B3D0EC] rounded-[12px] p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Two-Factor Authentication
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Add an extra layer of security to protect your account
              </p>

              <label className="block mb-4">
                <input
                  type="text"
                  placeholder="Email address or Phone number"
                  className="w-full border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
                  style={{ border: "1px solid #B3D0EC" }}
                />
              </label>

              <button
                onClick={handleContinue}
                className="w-full bg-[#0A66C2] text-white py-2 rounded-full hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
