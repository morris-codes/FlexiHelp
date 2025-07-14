import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [role, setRole] = useState("user");

  const switchRole = (newRole) => setRole(newRole);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      <div className="bg-[#F9FAFB] w-full max-w-2xl rounded-2xl shadow-2xl py-7 px-6 relative overflow-visible">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-4 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1F2937] text-center">Sign Up</h2>
        <p className="text-center text-[#1F2937] mb-6">Create your FlexiHelp account</p>
        <p className="text-left text-[#1F2937] mb-3">Choose your role</p>

        {/* Role Toggle */}
        <div className="flex justify-center gap-2 bg-gray-100 p-1 rounded-full mb-6 border border-[#0A66C2]">
          <button
            onClick={() => switchRole("user")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
              role === "user" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"
            }`}
          >
            User
          </button>
          <button
            onClick={() => switchRole("provider")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
              role === "provider" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-[#1F2937]"
            }`}
          >
            Service Provider
          </button>
        </div>

        {/* Animated Form Section */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <form className="flex flex-col gap-4">
              {role === "user" && (
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-1/2 border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-1/2 border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
                  />
                </div>
              )}

              <input
                type="text"
                placeholder="Email address / Phone number"
                className="border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
              />
              <label className="text-sm text-gray-600">
                <input type="checkbox" className="accent-[#0A66C2] mr-2" />
                By signing up, you agree to FlexiHelp's <strong>Term of Service</strong> and <strong>Privacy Policy</strong>
              </label>
              <button
                type="submit"
                className="bg-[#0A66C2] text-white py-2 rounded-lg font-medium"
              >
                Sign Up
              </button>

               {/* Log in text */}
              <p className="text-sm text-center text-[#1F2937] mt-2">
                Already have an account?{" "}
                <span className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">
                Log In
                </span>
              </p>
            </form>
          </motion.div>
        </AnimatePresence>

        {/* Social Logins */}
        <div className="text-center mt-6">
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-[#1F2937]" />
            <span className="mx-4 text-sm font-bold text-[#1F2937]">OR</span>
            <hr className="flex-grow border-[#1F2937]" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 border border-[#0A66C2] bg-[#D1D5DB] px-4 py-2 rounded w-full justify-center">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="h-5 mr-3" />
              Continue with Google
            </button>
            <button className="flex items-center gap-2 border border-[#0A66C2] bg-[#D1D5DB] px-4 py-2 rounded w-full justify-center">
              <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="apple" className="h-5 mr-3" />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
