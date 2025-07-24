import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignupModal({ isOpen, onClose }) {
  const [role, setRole] = useState("user");
  const [inputType, setInputType] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const toggleRole = (newRole) => setRole(newRole);
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      <div className="bg-[#F9FAFB] w-[800px] rounded-[30px] p-6 shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-[#1F2937]">Sign Up</h2>
        <p className="text-center text-[#1F2937] mb-6">Create your FlexiHelp account</p>
        <p className="text-sm text-left text-[#1F2937] mb-2">Choose your role</p>

        {/* Role Switch */}
        <div className="flex justify-center gap-2 bg-gray-100 p-1 rounded-full border border-[#0A66C2] mb-6">
          <button
            onClick={() => toggleRole("user")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
              role === "user" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"
            }`}
          >
            User
          </button>
          <button
            onClick={() => toggleRole("provider")}
            className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
              role === "provider" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"
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

              {/* Name inputs for user */}
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

              {/* Dropdown selector */}
              <select
                value={inputType}
                onChange={(e) => setInputType(e.target.value)}
                className="border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
              >
                <option value="email">Email</option>
                <option value="phone">Phone number</option>
              </select>

              {/* Dynamic input */}
              {inputType === "email" ? (
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
                />
              ) : (
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none"
                />
              )}

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none pr-10"
                />
                <span
                  className="absolute right-3 top-2.5 text-gray-700 cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full border border-[#0A66C2] bg-[#D1D5DB] rounded-lg px-3 py-2 text-sm outline-none pr-10"
                />
                <span
                  className="absolute right-3 top-2.5 text-gray-700 cursor-pointer"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Agreement */}
              <label className="text-sm text-gray-600">
                <input type="checkbox" className="accent-[#0A66C2] mr-2" />
                I agree to the <strong>Terms</strong> and <strong>Privacy Policy</strong>
              </label>

              {/* Signup Button */}
              <button
                type="submit"
                className="bg-[#0A66C2] text-white py-2 rounded-lg font-medium"
              >
                Sign Up
              </button>

              {/* Already have an account */}
              <p className="text-sm text-center text-[#1F2937] mt-2">
                Already have an account?{" "}
                <span className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">
                  Log In
                </span>
              </p>
            </form>
          </motion.div>
        </AnimatePresence>

        {/* Social Buttons */}
        <div className="text-center mt-6">
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-[#1F2937]" />
            <span className="mx-4 text-sm font-bold text-[#1F2937]">OR</span>
            <hr className="flex-grow border-[#1F2937]" />
          </div>

          <div className="flex gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#D1D5DB] px-4 py-2 rounded w-full">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="h-5"
              />
              Continue with Google
            </button>

            <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#D1D5DB] px-4 py-2 rounded w-full">
              <img
                src="https://www.svgrepo.com/show/183607/apple-logo.svg"
                alt="apple"
                className="h-5"
              />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
