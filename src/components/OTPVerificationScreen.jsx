import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

export default function OTPVerification() {
  const location = useLocation();
  const { method, contact, confirmationResultFromPhone, expectedEmailOtp } = location.state || {};
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    setError("");
    const code = otp.join("");

    if (code.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    if (method === "phone") {
      try {
        const result = await confirmationResultFromPhone.confirm(code);
        console.log("Phone verified:", result.user);
        navigate("/registration-success");
      } catch (err) {
        setError("Invalid phone OTP. Please try again.");
      }
    } else if (method === "email") {
      const expectedOtp = "123456"; // Mocked for now
      if (code === expectedOtp) {
        console.log("Email OTP verified");
        navigate("/registration-success");
      } else {
        setError("Invalid email OTP. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="bg-gray-50 p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-2">Verify your account</h2>
        <p className="text-gray-700 mb-6">
          To continue, enter the 6-digit code sent to your {method === "phone" ? "phone number" : "email address"}<br />
          <span className="inline-block font-semibold mt-1">{contact}</span>
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <button className="text-blue-600 hover:underline inline-flex items-center gap-1">
            Edit {method === "phone" ? "phone number" : "email address"} <FiEdit />
          </button>
          <span>Resend code in {`00:${timer < 10 ? `0${timer}` : timer}`}</span>
        </div>

        <button
  onClick={handleVerify}
  className={`w-full bg-[#0A66C2] text-white py-2 rounded-[20px] transition ${
    otp.join("").length === 6 ? "hover:bg-[#084a91]" : "opacity-50 cursor-not-allowed"
  }`}
  disabled={otp.join("").length !== 6}
>
  Verify
</button>

      </div>
    </div>
  );
}
