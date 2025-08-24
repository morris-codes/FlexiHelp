import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FiEdit3, FiArrowLeft, FiSearch } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function WalletPaymentInfo() {
  const [selectedOption, setSelectedOption] = useState("mastercard");
  const [showBalance, setShowBalance] = useState(false);
  const [view, setView] = useState("wallet"); // "wallet" | "transactions"
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const transactions = [
    { date: "June 24, 2025", description: "Fund Wallet(card)", amount: "100,000", status: "Successful" },
    { date: "June 24, 2025", description: "Cleaning Service", amount: "22,000", status: "Successful" },
    { date: "June 24, 2025", description: "Plumbing Service", amount: "17,000", status: "Successful" },
    { date: "June 25, 2025", description: "AC Repair Service", amount: "23,000", status: "Successful" },
    { date: "June 25, 2025", description: "Spa Service", amount: "23,000", status: "Successful" },
    { date: "June 25, 2025", description: "Electrician", amount: "13,000", status: "Successful" },
    { date: "June 25, 2025", description: "Carpentry", amount: "18,000", status: "Pending" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col items-center py-8">
        {/* Top search bar */}
        <div className="w-[950px] mb-6 flex justify-end">
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

        {/* Wallet view */}
        {view === "wallet" && (
          <div
            className="bg-white rounded-lg shadow p-6"
            style={{ width: "950px", border: "1px solid #B3D0EC" }}
          >
            <h2 className="text-xl font-semibold mb-2">Wallet & Payment Info</h2>
            <p className="text-gray-500 mb-6">Track your balance and manage your funds</p>

            {/* Balance + Transaction History */}
            <div
              className="flex justify-between items-start border rounded-lg p-4 mb-6"
              style={{ borderColor: "#B3D0EC" }}
            >
              {/* Balance */}
              <div>
                <p className="text-gray-600 flex items-center gap-2">
                  Current Balance{" "}
                  {showBalance ? (
                    <FaEyeSlash
                      className="cursor-pointer text-gray-600"
                      onClick={() => setShowBalance(false)}
                    />
                  ) : (
                    <FaEye
                      className="cursor-pointer text-gray-600"
                      onClick={() => setShowBalance(true)}
                    />
                  )}
                </p>
                <p className="text-xl font-bold mt-1">
                  {showBalance ? "$2,500.00" : "*****"}
                </p>
              </div>

              {/* Transaction history + Fund Wallet */}
              <div className="flex flex-col items-end">
                <button
                  className="border rounded px-3 py-2 text-gray-700 text-sm mb-2"
                  style={{ borderColor: "#B3D0EC" }}
                  onClick={() => setView("transactions")}
                >
                  Transaction History
                </button>
                <button
                  className="bg-[#0A66C2] text-white px-4 py-1 rounded-md hover:bg-[#084a91]"
                  onClick={() => navigate("/fund-wallet")}
                >
                  Fund Wallet
                </button>
              </div>
            </div>

            {/* Payment Options */}
            <div
              className="border rounded-lg p-4"
              style={{ borderColor: "#B3D0EC" }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Payment Options</h3>
                <FiEdit3 className="text-gray-500 cursor-pointer" />
              </div>

              {/* Mastercard */}
              <label className="flex items-center justify-between mb-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="mastercard"
                    checked={selectedOption === "mastercard"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="accent-[#0A66C2]"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    alt="Mastercard"
                    className="h-6"
                  />
                  <span>**** **** **** 5678</span>
                </div>
                <span>02/26</span>
              </label>

              {/* Visa */}
              <label className="flex items-center justify-between mb-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    value="visa"
                    checked={selectedOption === "visa"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="accent-[#0A66C2]"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                    alt="Visa"
                    className="h-6"
                  />
                  <span>**** **** **** 1234</span>
                </div>
                <span>08/26</span>
              </label>

              {/* Bank transfer */}
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={selectedOption === "bank"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="accent-[#0A66C2]"
                />
                <span>Bank transfer</span>
              </label>
            </div>
          </div>
        )}

        {/* Transaction History view */}
        {view === "transactions" && (
          <div className="p-6 w-[950px] bg-white rounded-lg shadow border border-[#B3D0EC]">
            {/* Breadcrumb */}
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <FiArrowLeft
                className="mr-2 cursor-pointer"
                onClick={() => setView("wallet")}
              />
              <span>Wallet & Payment Info</span>
              <span className="mx-2">›</span>
              <span className="font-medium">Transaction History</span>
            </div>

            {/* Top bar buttons */}
            <div className="flex justify-end items-center mb-4 gap-4">
              <button className="flex items-center gap-1 bg-[#0A66C2] text-white px-3 py-1 rounded-md text-sm">
                Download <Icon icon="mdi:download" className="text-white text-lg" />
              </button>

              <div className="flex items-center text-gray-600 text-sm cursor-pointer">
                <Icon icon="mdi:filter" className="mr-1 text-lg" />
                Last 7 days
                <Icon icon="mdi:chevron-down" className="ml-1 text-base" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b border-[#B3D0EC]">
                  <tr>
                    <th className="px-3 py-3 text-left">
                      <input type="checkbox" />
                    </th>
                    <th className="px-3 py-3 text-left">Date</th>
                    <th className="px-3 py-3 text-left">Description</th>
                    <th className="px-3 py-3 text-left">Amount</th>
                    <th className="px-3 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#B3D0EC] hover:bg-gray-50"
                    >
                      <td className="px-3 py-5">
                        <input type="checkbox" />
                      </td>
                      <td className="px-3 py-5 text-gray-500">{t.date}</td>
                      <td className="px-3 py-5 text-gray-800">{t.description}</td>
                      <td className="px-3 py-5 font-medium text-black">{t.amount}</td>
                      <td
                        className={`px-3 py-5 ${
                          t.status === "Successful"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {t.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4 gap-2">
              <Icon
                icon="icon-park-solid:arrow-circle-left"
                className="text-gray-600 cursor-pointer text-lg"
              />
              <span className="text-sm">Page 1</span>
              <Icon
                icon="icon-park-solid:arrow-circle-right"
                className="text-gray-600 cursor-pointer text-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
