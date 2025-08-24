import React from "react";
import {
  FiUser,
  FiSettings,
  FiShield,
  FiBell,
  FiCreditCard,
  FiClock,
  FiHeart,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import flexilogo from "../assets/flexilogo.jpg";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (itemPath, itemName) => {
    if (itemName === "My Profile") {
      return location.pathname.includes("profile");
    }
    return location.pathname === itemPath;
  };

  const navItems = [
    { name: "My Profile", icon: <FiUser size={18} />, path: "/profile" },
    { name: "Account Settings", icon: <FiSettings size={18} />, path: "/account-settings" },
    { name: "Security Settings", icon: <FiShield size={18} />, path: "/security-settings" },
    { name: "Notification", icon: <FiBell size={18} />, path: "/notification" },
    { name: "Wallet & Payment Info", icon: <FiCreditCard size={18} />, path: "/wallet" },
    { name: "Service History", icon: <FiClock size={18} />, path: "/service-history" },
    { name: "Saved Service", icon: <FiHeart size={18} />, path: "/saved-service" },
  ];

  const navFontStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "15px",
    lineHeight: "30px",
    letterSpacing: "0px",
  };

  return (
    <aside
      className="bg-white border-r flex flex-col justify-between px-4 py-6"
      style={{
        width: "317px",
        height: "728px",
        opacity: 1,
      }}
    >
      <div>
        {/* Logo */}
        <div className="mb-6">
          <img src={flexilogo} alt="flexi help logo" className="w-auto h-8 object-contain" />
        </div>

        {/* Home button */}
        <div className="mb-2">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center gap-2 px-4 py-2 rounded w-full transition ${
              isActive("/", "Home") ? "text-[#0A66C2]" : "text-gray-700 hover:bg-[#E6F0FB]"
            }`}
            style={navFontStyle}
          >
            <FiHome size={18} />
            Home
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-3">
          {navItems.map((item, index) => {
            const active = isActive(item.path, item.name);
            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-2 px-4 py-2 text-left rounded transition w-full ${
                  active ? "bg-[#0A66C2] text-white" : "text-gray-700 hover:bg-[#E6F0FB]"
                }`}
                style={navFontStyle}
              >
                {item.icon}
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 px-4 py-2 text-red-600 font-medium text-base hover:bg-red-100 rounded-md transition w-full"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <FiLogOut size={20} />
        Log Out
      </button>
    </aside>
  );
}
