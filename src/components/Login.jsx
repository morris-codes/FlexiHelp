import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState("user");
  const [loginType, setLoginType] = useState("email");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const recognizedEmails = ["user@example.com"];
  const recognizedPhones = ["08012345678"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (loginType === "email") {
      if (!emailRegex.test(emailOrPhone)) {
        setError("Please enter a valid email address");
        return;
      }
      if (!recognizedEmails.includes(emailOrPhone)) {
        setError("We couldn’t find an account with that email");
        return;
      }
    } else {
      if (!phoneRegex.test(emailOrPhone)) {
        setError("Please enter a valid phone number (11 digits)");
        return;
      }
      if (!recognizedPhones.includes(emailOrPhone)) {
        setError("We couldn’t find an account with that phone number");
        return;
      }
    }

    alert("Login successful!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-[16px] w-[782px]  p-6 shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-1 text-[#1F2937]">Log In</h2>
        <p className="text-center text-gray-700 mb-6">
          Welcome back, Please enter your details
        </p>

        {/* Role Switch */}
        <div className="flex justify-center mb-5">
          <div className="relative flex w-full max-w-[640px] mx-auto border border-[#0A66C2] rounded-full bg-gray-100 overflow-hidden px-[6px] py-[6px]">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute top-1 left-[6px] h-[calc(100%-8px)] w-1/2 bg-[#B3D0EC] rounded-full z-0 ${
                role === "provider" ? "translate-x-full" : ""
              }`}
            />
            <div className="relative z-10 flex w-full gap-[10px]">
              <button
                onClick={() => setRole("user")}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                  role === "user" ? "text-[#1F2937]" : "text-gray-600"
                }`}
              >
                👤 User
              </button>
              <button
                onClick={() => setRole("provider")}
                className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                  role === "provider" ? "text-[#1F2937]" : "text-gray-600"
                }`}
              >
                🧰 Service Provider
              </button>
            </div>
          </div>
        </div>

        {/* Animated Form */}
        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                value={loginType}
                onChange={(e) => setLoginType(e.target.value)}
                className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-sm"
              >
                <option value="email">Email Address</option>
                <option value="phone">Phone Number</option>
              </select>

              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder={loginType === "email" ? "example@gmail.com" : "e.g. 08012345678"}
                className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-sm"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Abc123@#"
                  className="w-full border border-gray-400 rounded px-3 py-2 bg-white text-sm pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-red-600 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <label>
                  <input type="checkbox" className="mr-1 accent-[#0A66C2]" />
                  Remember me?
                </label>
                <span className="cursor-pointer hover:underline">Forgot Password</span>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[300px] h-[30px] bg-[#0A66C2] border border-[#0A66C2] text-white rounded-full text-sm font-semibold"
                >
                  Log In
                </button>
              </div>
            </form>

            <p className="text-sm text-center mt-3">
              Didn't have an account?{" "}
              <span className="text-[#0A66C2] font-semibold cursor-pointer hover:underline">
                Sign up
              </span>
            </p>

            <div className="flex items-center mt-5 mb-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5"
                />
                Continue with Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="h-5"
                />
                Continue with Apple
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
