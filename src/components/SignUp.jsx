import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SignupModal({isOpen, onClose }) {

  if (!isOpen) return null;

  const [role, setRole] = useState("user");

  const switchRole = (newRole) => {
    setRole(newRole);
    };
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative overflow-hidden">
        <button onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black">
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <p className="text-center mb-6 text-gray-600">Create your FlexiHelp account</p>

        {/* Role Toggle */}
        <div className="flex justify-center mb-6 space-x-2">
          <button
            onClick={() => switchRole("user")}
            className={`px-4 py-2 rounded-full font-medium transition ${
              role === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            User
          </button>
          <button
            onClick={() => switchRole("provider")}
            className={`px-4 py-2 rounded-full font-medium transition ${
              role === "provider"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Service Provider
          </button>
        </div>

        {/* Form Switch Animation */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {role === "user" ? (
              <motion.div
                key="user"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <form className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-1/2 input-field"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-1/2 input-field"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Email address / Phone number"
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input-field"
                  />
                  <label className="text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    By signing up, you agree to FlexiHelp's <strong>Term of Service</strong> and <strong>Privacy Policy</strong>
                  </label>
                  <button type="submit" className="bg-blue-700 text-white py-2 rounded-lg font-medium">
                    Sign Up
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="provider"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Email address / Phone number"
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input-field"
                  />
                  <label className="text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    By signing up, you agree to FlexiHelp's <strong>Term of Service</strong> and <strong>Privacy Policy</strong>
                  </label>
                  <button type="submit" className="bg-blue-700 text-white py-2 rounded-lg font-medium">
                    Sign Up
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social logins */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 mb-2">OR</p>
          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 border px-4 py-2 rounded">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="h-5" />
              Continue with Google
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded">
              <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="apple" className="h-5" />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
