// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Icon } from '@iconify/react';

// export default function SignupModal({ isOpen, onClose, onSwitchToLogin }) {
//   const [role, setRole] = useState("user");
//   const [inputType, setInputType] = useState("email");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showTermsModal, setShowTermsModal] = useState(false);
//   const [agreedToTerms, setAgreedToTerms] = useState(false);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -40 }}
//         transition={{ duration: 0.3 }}
//         className="bg-[#F9FAFB] w-[800px] rounded-[30px] p-6 shadow-2xl relative"
//       >
//         <button onClick={onClose} className="absolute top-4 left-4 text-gray-600 hover:text-black text-xl">✕</button>
//         <h2 className="text-2xl font-semibold text-center text-[#1F2937]">Sign Up</h2>
//         <p className="text-center text-[#1F2937] mb-6">Create your FlexiHelp account</p>
//         <p className="text-sm text-left text-[#1F2937] mb-2">Choose your role</p>

//         {/* Role Toggle */}
//         <div className="flex justify-center gap-2 bg-gray-100 p-1 rounded-full border border-[#0A66C2] mb-6">
//           <button
//             onClick={() => setRole("user")}
//             className={`w-1/2 py-2 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${
//               role === "user" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"
//             }`}
//           >
//             <Icon icon="iconamoon:profile-fill" /> User
//           </button>
//           <button
//             onClick={() => setRole("provider")}
//             className={`w-1/2 py-2 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${
//               role === "provider" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"
//             }`}
//           >
//             <Icon icon="fluent:people-team-toolbox-24-filled" /> Service Provider
//           </button>
//         </div>

//         <AnimatePresence mode="wait" initial={false}>
//           <motion.div
//             key={role}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.3 }}
//           >
//             <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
//               {role === "user" && (
//                 <div className="flex gap-3">
//                   <input
//                     type="text"
//                     placeholder="First name"
//                     className="w-1/2 border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last name"
//                     className="w-1/2 border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none"
//                   />
//                 </div>
//               )}

//               <select
//                 value={inputType}
//                 onChange={(e) => setInputType(e.target.value)}
//                 className="border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none"
//               >
//                 <option value="email">Email</option>
//                 <option value="phone">Phone number</option>
//               </select>

//               {inputType === "email" ? (
//                 <div className="relative">
//                   <Icon
//                     icon="heroicons:envelope"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     className="w-full border border-[#0A66C2] bg-white rounded-lg pl-10 pr-3 py-2 text-sm outline-none"
//                   />
//                 </div>
//               ) : (
//                 <input
//                   type="tel"
//                   placeholder="Phone number"
//                   className="border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none"
//                 />
//               )}

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   className="w-full border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none pr-10"
//                 />
//                 <span
//                   className="absolute right-3 top-2.5 text-gray-700 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>

//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   className="w-full border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none pr-10"
//                 />
//                 <span
//                   className="absolute right-3 top-2.5 text-gray-700 cursor-pointer"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>

//               <label className="text-sm text-gray-600 flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={agreedToTerms}
//                   onChange={(e) => setAgreedToTerms(e.target.checked)}
//                   className="accent-[#0A66C2] mr-2"
//                 />
//                 By signing up, you agree to FlexiHelp's{' '}
//                 <span
//                   className="text-[#0A66C2] cursor-pointer font-semibold hover:underline"
//                   onClick={() => setShowTermsModal(true)}
//                 >
//                   Terms of Service & Privacy Policy
//                 </span>
//               </label>

//               <div className="flex justify-center mt-4">
//                 <button
//                   type="submit"
//                   disabled={!agreedToTerms}
//                   className={`w-[300px] h-[30px] text-white rounded-full text-sm font-semibold ${
//                     agreedToTerms ? 'bg-[#0A66C2] border border-[#0A66C2] hover:bg-blue-700 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'
//                   }`}
//                 >
//                   Sign Up
//                 </button>
//               </div>

//               <p className="text-sm text-center text-[#1F2937] mt-4">
//                 Already have an account?{' '}
//                 <span
//                   className="text-[#0A66C2] font-semibold cursor-pointer hover:underline"
//                   onClick={() => {
//                     onClose();
//                     if (onSwitchToLogin) onSwitchToLogin();
//                   }}
//                 >
//                   Log In
//                 </span>
//               </p>
//             </form>
//           </motion.div>
//         </AnimatePresence>

//         <div className="text-center mt-6">
//           <div className="flex items-center mb-4">
//             <hr className="flex-grow border-[#1F2937]" />
//             <span className="mx-4 text-sm font-bold text-[#1F2937]">OR</span>
//             <hr className="flex-grow border-[#1F2937]" />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//               <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5" />
//               Continue with Google
//             </button>
//             <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-5" />
//               Continue with Apple
//             </button>
//           </div>
//         </div>

//         {/* Terms Modal with Scroll */}
//         {showTermsModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/50">
//             <div className="bg-white rounded-[20px] w-[829px] h-[90vh] p-[40px_54px] overflow-y-auto relative">
//               <button
//                 onClick={() => setShowTermsModal(false)}
//                 className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
//               >
//                 ✕
//               </button>
//               <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Terms of Service Agreement</h2>
//               <div className="text-sm text-gray-700 space-y-4 text-left">
//                 <p><strong>Eligibility:</strong> Be at least 18 years old (or the age of legal majority in your jurisdiction); Provide accurate personal, professional, and business information.</p>
//                 <p><strong>Account Registration & Responsibilities:</strong> Maintain accurate and updated profile information. You're solely responsible for your account activities and login confidentiality. FlexiHelp may suspend or terminate violators.</p>
//                 <p><strong>Service Listings & Performance:</strong> Provide truthful descriptions, pricing, and timelines. Communicate respectfully and deliver services safely, professionally, and punctually. Fraud or negligence may lead to suspension.</p>
//                 <p><strong>Payments & Fees:</strong> Payments occur through our platform. FlexiHelp may deduct a service fee. Payouts follow our payment schedule and require identity/bank verification.</p>
//                 <p><strong>Cancellations & Disputes:</strong> Notify clients early about delays. Repeated no-shows may result in penalties. FlexiHelp offers dispute resolution but isn't liable for external losses.</p>
//                 <p><strong>Prohibited Conduct:</strong> No payments outside FlexiHelp. Don't misrepresent qualifications or offer illegal/harmful services.</p>
//                 <p><strong>Reviews & Ratings:</strong> Clients can review services. You may respond professionally. No incentives allowed for reviews. Reviews stay unless they breach content guidelines.</p>
//                 <p><strong>Content Ownership & Use:</strong> Uploaded content grants FlexiHelp a non-exclusive license for use in operations or promotion.</p>
//                 <p><strong>Termination:</strong> You can deactivate anytime. FlexiHelp may terminate accounts for violations.</p>
//                 <p><strong>Disclaimer & Limitation of Liability:</strong> FlexiHelp is a marketplace, not an employer. We're not liable for service-related issues.</p>
//                 <p><strong>Changes to Terms:</strong> Terms may change and are effective upon publication. Continued use means acceptance.</p>
//               </div>
//               <div className="flex justify-center gap-4 mt-6">
//                 <button
//                   onClick={() => setShowTermsModal(false)}
//                   className="flex-1 px-6 py-2 bg-gray-100 border rounded-full text-gray-700 hover:bg-gray-200"
//                 >
//                   I don’t agree to the terms
//                 </button>
//                 <button
//                   onClick={() => setShowTermsModal(false)}
//                   className="flex-1 px-6 py-2 bg-[#0A66C2] text-white rounded-[20px] hover:bg-blue-700"
//                 >
//                   I agree to the terms
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }




import {
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Icon } from "@iconify/react";

export default function SignupModal({ isOpen, onClose, onSwitchToLogin }) {
  const [role, setRole] = useState("user");
  const [inputType, setInputType] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert("You must agree to the terms to sign up.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      if (inputType === "email") {
        const mockEmailOtp = "123456";
        onClose();
        navigate("/verify-otp", {
          state: {
            method: "email",
            contact: email,
            expectedEmailOtp: mockEmailOtp,
          },
        });
      } else {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            { size: "invisible" },
            auth
          );
        }

        const confirmationResult = await signInWithPhoneNumber(
          auth,
          phone,
          window.recaptchaVerifier
        );

        onClose();
        navigate("/verify-otp", {
          state: {
            method: "phone",
            contact: phone,
            confirmationResultFromPhone: confirmationResult,
          },
        });
      }
    } catch (error) {
      console.error("Firebase error:", error);
      alert(error.message);
    }
  };

  // ✅ Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In Success:", user);
      onClose();
      navigate("/dashboard"); // ✅ Change to your dashboard or landing route
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(error.message);
    }
  };

  // 🔒 Placeholder for Apple Sign-In (set up via Apple Developer + Firebase console)
  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Apple Sign-In Success:", user);
      onClose();
      navigate("/dashboard"); // ✅ Change as needed
    } catch (error) {
      console.error("Apple Sign-In Error:", error);
      alert(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
      <div id="recaptcha-container" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.3 }}
        className="bg-[#F9FAFB] w-[800px] rounded-[30px] p-6 shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 left-4 text-gray-600 hover:text-black text-xl">✕</button>
        <h2 className="text-2xl font-semibold text-center text-[#1F2937]">Sign Up</h2>
        <p className="text-center text-[#1F2937] mb-6">Create your FlexiHelp account</p>

        <p className="text-sm text-left text-[#1F2937] mb-2">Choose your role</p>
        <div className="flex justify-center gap-2 bg-gray-100 p-1 rounded-full border border-[#0A66C2] mb-6">
          <button onClick={() => setRole("user")} className={`w-1/2 py-2 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${role === "user" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"}`}>
            <Icon icon="iconamoon:profile-fill" /> User
          </button>
          <button onClick={() => setRole("provider")} className={`w-1/2 py-2 rounded-full text-sm font-medium transition flex items-center justify-center gap-2 ${role === "provider" ? "bg-[#B3D0EC] text-[#1F2937]" : "text-gray-700"}`}>
            <Icon icon="fluent:people-team-toolbox-24-filled" /> Service Provider
          </button>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {role === "user" && (
                <div className="flex gap-3">
                  <input type="text" placeholder="First name" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input type="text" placeholder="Last name" className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              )}

              <select value={inputType} onChange={(e) => setInputType(e.target.value)} className="border border-[#0A66C2] bg-white rounded-lg px-3 py-2 text-sm outline-none">
                <option value="email">Email</option>
                <option value="phone">Phone number</option>
              </select>

              {inputType === "email" ? (
                <div className="relative">
                  <Icon icon="heroicons:envelope" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                  <input type="email" placeholder="Email address" className="w-full pl-10 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              ) : (
                <input type="tel" placeholder="Phone number (e.g. +234...)" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none" value={phone} onChange={(e) => setPhone(e.target.value)} />
              )}

              <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className="absolute right-3 top-2.5 text-gray-700 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <span className="absolute right-3 top-2.5 text-gray-700 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <label className="text-sm text-gray-600 flex items-center">
                <input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="accent-[#0A66C2] mr-2" />
                By signing up, you agree to FlexiHelp's{" "}
                <span className="text-[#0A66C2] cursor-pointer font-semibold hover:underline" onClick={() => setShowTermsModal(true)}>
                  Terms of Service & Privacy Policy
                </span>
              </label>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  className={`w-[300px] h-[30px] text-white rounded-full text-sm font-semibold ${
                    agreedToTerms ? "bg-[#0A66C2] border border-[#0A66C2] hover:bg-blue-700 cursor-pointer" : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <p className="text-sm text-center text-[#1F2937] mt-4">
                Already have an account?{" "}
                <span className="text-[#0A66C2] font-semibold cursor-pointer hover:underline" onClick={() => {
                  onClose();
                  if (onSwitchToLogin) onSwitchToLogin();
                }}>
                  Log In
                </span>
              </p>
            </form>
          </motion.div>
        </AnimatePresence>

        
        <div className="text-center mt-6">
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-[#1F2937]" />
            <span className="mx-4 text-sm font-bold text-[#1F2937]">OR</span>
            <hr className="flex-grow border-[#1F2937]" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5"
              />
              Continue with Google
            </button>
            <button
              onClick={handleAppleSignIn}
              className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="h-5"
              />
              Continue with Apple
            </button>
          </div>
        </div>

        {showTermsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-md bg-black/50">
            <div className="bg-white rounded-[20px] w-[829px] h-[90vh] p-[40px_54px] overflow-y-auto relative">
              <button onClick={() => setShowTermsModal(false)} className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl">✕</button>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Terms of Service Agreement</h2>
              <div className="text-sm text-gray-700 space-y-4 text-left">
                <p><strong>Eligibility:</strong> Be at least 18 years old (or the age of legal majority in your jurisdiction); Provide accurate personal, professional, and business information.</p>
                <p><strong>Account Registration & Responsibilities:</strong> Maintain accurate and updated profile information. You're solely responsible for your account activities and login confidentiality. FlexiHelp may suspend or terminate violators.</p>
                <p><strong>Service Listings & Performance:</strong> Provide truthful descriptions, pricing, and timelines. Communicate respectfully and deliver services safely, professionally, and punctually. Fraud or negligence may lead to suspension.</p>
                <p><strong>Payments & Fees:</strong> Payments occur through our platform. FlexiHelp may deduct a service fee. Payouts follow our payment schedule and require identity/bank verification.</p>
                <p><strong>Cancellations & Disputes:</strong> Notify clients early about delays. Repeated no-shows may result in penalties. FlexiHelp offers dispute resolution but isn't liable for external losses.</p>
                <p><strong>Prohibited Conduct:</strong> No payments outside FlexiHelp. Don't misrepresent qualifications or offer illegal/harmful services.</p>
                <p><strong>Reviews & Ratings:</strong> Clients can review services. You may respond professionally. No incentives allowed for reviews. Reviews stay unless they breach content guidelines.</p>
                <p><strong>Content Ownership & Use:</strong> Uploaded content grants FlexiHelp a non-exclusive license for use in operations or promotion.</p>
                <p><strong>Termination:</strong> You can deactivate anytime. FlexiHelp may terminate accounts for violations.</p>
                <p><strong>Disclaimer & Limitation of Liability:</strong> FlexiHelp is a marketplace, not an employer. We're not liable for service-related issues.</p>
                <p><strong>Changes to Terms:</strong> Terms may change and are effective upon publication. Continued use means acceptance.</p>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="flex-1 px-6 py-2 bg-gray-100 border rounded-full text-gray-700 hover:bg-gray-200"
                >
                  I don’t agree to the terms
                </button>
                <button
                  onClick={() => {
                    setAgreedToTerms(true);
                    setShowTermsModal(false);
                  }}
                  className="flex-1 px-6 py-2 bg-[#0A66C2] text-white rounded-[20px] hover:bg-blue-700"
                >
                  I agree to the terms
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

