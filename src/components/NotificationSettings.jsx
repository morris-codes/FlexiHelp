import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import your real Sidebar
import { FiSearch } from "react-icons/fi";

export default function NotificationPage() {
  const [preferences, setPreferences] = useState({
    sms: true,
    email: false,
    inApp: true,
    booking: true,
    chat: true,
    payment: false,
    feature: true,
    reminder: false,
  });

  const toggleSwitch = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center bg-gray-50 p-6">
        {/* Search Bar aligned to card top edge */}
        <div className="w-[950px] mb-4 flex justify-end">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-[12px] text-sm outline-none placeholder-gray-500 bg-white shadow-sm"
              style={{ border: "1px solid #B3D0EC" }}
            />
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-600"
              size={18}
            />
          </div>
        </div>

        {/* Notification Card */}
        <div
          className="bg-white rounded-lg shadow-md flex flex-col"
          style={{
            width: "950px",
            height: "700px",
            padding: "24px",
            gap: "10px",
            border: "1px solid #B3D0EC",
          }}
        >
          {/* Notification Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Notification</h2>
            <p className="text-gray-500 mb-4">
              Stay updated on what matters to you
            </p>
          </div>

          {/* Preferences */}
          <div>
            <h3 className="text-lg font-medium mb-2">Preference</h3>
            <div className="space-y-3">
              {[
                { label: "SMS", key: "sms" },
                { label: "Email", key: "email" },
                { label: "In-App", key: "inApp" },
              ].map(({ label, key }) => (
                <div
                  key={key}
                  className="flex justify-between items-center border border-[#B3D0EC] px-4 py-2 rounded-lg"
                >
                  <span>{label}</span>
                  <button
                    onClick={() => toggleSwitch(key)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                      preferences[key] ? "bg-[#0A66C2]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        preferences[key] ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Manage Alerts */}
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Manage Alerts</h3>
            <div className="space-y-3">
              {[
                { label: "Booking updates", key: "booking" },
                { label: "Message & chat", key: "chat" },
                { label: "Payment confirmation", key: "payment" },
                { label: "Feature updates", key: "feature" },
                { label: "Service reminder", key: "reminder" },
              ].map(({ label, key }) => (
                <div
                  key={key}
                  className="flex justify-between items-center border border-[#B3D0EC] px-4 py-2 rounded-lg"
                >
                  <span>{label}</span>
                  <button
                    onClick={() => toggleSwitch(key)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                      preferences[key] ? "bg-[#0A66C2]" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        preferences[key] ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
