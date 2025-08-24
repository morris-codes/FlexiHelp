import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { Icon } from "@iconify/react";

export default function FundWalletPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 flex flex-col items-center py-8">
        {/* Top row: breadcrumb + search */}
        <div className="w-[950px] flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FiArrowLeft
              onClick={() => navigate("/wallet")}
              className="cursor-pointer text-gray-700 hover:text-[#0A66C2]"
            />
            <span className="text-gray-800 font-bold">
              Wallet & Payment Info <span className="text-gray-400">/</span>{" "}
              Fund Wallet
            </span>
          </div>

          <div className="relative">
            <FiSearch
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-3 py-2 text-sm rounded-lg bg-white w-[220px] outline-none"
              style={{ border: "1px solid #B3D0EC" }}
            />
          </div>
        </div>

        {/* Card container */}
        <div
          className="bg-white rounded-[12px] shadow-sm"
          style={{ width: "950px", border: "1px solid #B3D0EC", padding: "24px" }}
        >
          {/* Payment methods */}
          <div className="space-y-4 mb-6">
            {/* Add Card */}
            <label
              className="flex items-center justify-between rounded-lg p-4 cursor-pointer"
              style={{ border: "1px solid #B3D0EC" }}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="accent-[#0A66C2]"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                />
                <span className="font-medium text-gray-800">Add Card</span>
              </div>
              <Icon
                icon="fluent:payment-28-filled"
                className="text-black text-xl"
              />
            </label>

            {/* Bank Transfer */}
            <label
              className="flex items-center justify-between rounded-lg p-4 cursor-pointer"
              style={{ border: "1px solid #B3D0EC" }}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  className="accent-[#0A66C2]"
                  checked={method === "bank"}
                  onChange={() => setMethod("bank")}
                />
                <span className="font-medium text-gray-800">Bank Transfer</span>
              </div>
            </label>
          </div>

          {/* Card Info header + pencil icon */}
          {method === "card" && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-800 font-medium">Card Info</span>
              <Icon
                icon="fluent:edit-16-regular"
                className="text-black text-lg cursor-pointer"
              />
            </div>
          )}

          {/* Inputs */}
          {method === "card" ? (
            <>
              <input
                type="text"
                placeholder="Name on card"
                className="w-full rounded-md px-3 py-2 mb-3 bg-white outline-none"
                style={{ border: "1px solid #B3D0EC" }}
              />

              <input
                type="text"
                placeholder="Card number"
                className="w-full rounded-md px-3 py-2 mb-3 bg-white outline-none"
                style={{ border: "1px solid #B3D0EC" }}
              />

              <div className="flex gap-3">
                <div className="relative w-1/2">
                  <input
                    type="text"
                    placeholder="Expiry date"
                    className="w-full rounded-md pl-3 pr-9 py-2 bg-white outline-none"
                    style={{ border: "1px solid #B3D0EC" }}
                  />
                  {/* Calendar icon inside input (right side) */}
                  <Icon
                    icon="solar:calendar-bold"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
                  />
                </div>

                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 rounded-md px-3 py-2 bg-white outline-none"
                  style={{ border: "1px solid #B3D0EC" }}
                />
              </div>
            </>
          ) : (
            // Placeholder when "Bank transfer" is selected
            <div
              className="rounded-md text-sm text-gray-600 p-4"
              style={{ border: "1px dashed #B3D0EC" }}
            >
              Bank transfer details will appear here.
            </div>
          )}

          {/* Submit button */}
          <button
            className="block mx-auto mt-8 text-white py-2 rounded-[20px] hover:bg-[#084a91]"
            style={{ backgroundColor: "#0A66C2", width: "60%" }}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}
