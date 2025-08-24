// src/pages/TwoFactorVerify.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { Icon } from "@iconify/react";
import Sidebar from "../components/Sidebar";

export default function TwoFactorVerify() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    method = "email",
    contact = "example@gmail.com",
    confirmationResultFromPhone,
    expectedEmailOtp = "123456",
  } = location.state || {};

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");

  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer((t) => t - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [timer]);

  const handleChange = (el, index) => {
    const value = el.value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleVerify = async () => {
    setError("");
    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }

    if (method === "phone" && confirmationResultFromPhone) {
      try {
        await confirmationResultFromPhone.confirm(code);
        navigate("/twofactor-success"); // ✅ go to success screen
      } catch (err) {
        setError("Invalid phone OTP. Please try again.");
      }
      return;
    }

    if (code === expectedEmailOtp) {
      navigate("/twofactor-success"); // ✅ go to success screen
    } else {
      setError("Invalid code. Please try again.");
    }
  };

  const canContinue = otp.join("").length === 6;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem="Security Settings" />

      <main className="flex-1 flex flex-col items-center justify-start p-10 relative">
        {/* Breadcrumb row */}
        <div className="w-[950px] flex items-center gap-2 mb-4">
          <button
            onClick={() => navigate("/security-settings")}
            title="Back"
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition cursor-pointer"
          >
            <Icon icon="material-symbols:arrow-back-rounded" width="24" />
          </button>
          <span className="text-gray-800 font-medium text-lg">
            Security Settings
          </span>
          <Icon icon="ic:round-double-arrow" className="text-gray-500" width="20" />
          <span className="text-gray-800 font-medium text-lg">
            Two-Factor Authentication
          </span>
        </div>

        {/* Card */}
        <div
          className="bg-white shadow-sm flex flex-col justify-between items-center"
          style={{
            width: "950px",
            height: "500px",
            gap: "10px",
            borderRadius: "12px",
            border: "3px solid #B3D0EC",
            paddingTop: "78px",
            paddingRight: "120px",
            paddingBottom: "78px",
            paddingLeft: "120px",
            boxSizing: "border-box",
            opacity: 1,
          }}
        >
          {/* Content */}
          <div className="w-full flex flex-col items-center">
            {/* Instruction */}
            <p className="text-sm text-gray-700 text-center mb-2">
              To continue, enter the 6-digit code sent to your email address
            </p>
            <p className="text-sm font-semibold text-center mb-5">{contact}</p>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 mb-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  inputMode="numeric"
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  aria-label={`otp-${i}`}
                  className="w-12 h-12 text-center text-xl rounded-md"
                  style={{
                    border: "1px solid #B3D0EC",
                    outline: "none",
                    background: "white",
                  }}
                />
              ))}
            </div>

            {/* Edit + Resend */}
            <div className="flex justify-between w-full max-w-xs text-sm mt-1">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-[#0A66C2] hover:underline"
              >
                Edit {method === "phone" ? "phone number" : "email address"} <FiEdit />
              </button>
              <span className="text-sm text-gray-600">
                Resend code in {`00:${timer < 10 ? `0${timer}` : timer}`}
              </span>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center mt-2">{error}</p>
            )}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleVerify}
            disabled={!canContinue}
            className={`flex items-center justify-center w-[400px] text-white py-2 rounded-[20px] transition ${
              canContinue
                ? "bg-[#0A66C2] hover:bg-[#084a91]"
                : "bg-[#0A66C2]/50 cursor-not-allowed"
            }`}
            style={{ marginBottom: "50px" }} // moved up closer to inputs
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
}
