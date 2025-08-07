// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase"; // adjust the path based on your folder structure
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { PeopleTeamToolbox24Filled } from '@fluentui/react-icons';
// import { Icon } from "@iconify/react"; // ✅ Added iconify for mail icon

// export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
//   if (!isOpen) return null;

//   const [role, setRole] = useState("user");
//   const [loginType, setLoginType] = useState("email");
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError("");

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phoneRegex = /^\d{11}$/;

//   if (loginType === "email") {
//     if (!emailRegex.test(emailOrPhone)) {
//       setError("Please enter a valid email address");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, emailOrPhone, password);
//       alert("Login successful!");
//       onClose(); // close modal
//     } catch (error) {
//       console.error(error);
//       setError("Incorrect email or password");
//     }

//   } else {
//     // Firebase doesn't support direct phone login without OTP,
//     // so this part will just simulate until you build OTP flow
//     if (!phoneRegex.test(emailOrPhone)) {
//       setError("Please enter a valid phone number (11 digits)");
//       return;
//     }

//     setError("Phone number login is not supported yet. Use email.");
//   }
// };


//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -30 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white rounded-[16px] w-[782px] px-10 py-8 shadow-lg relative flex flex-col items-center"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold text-center mb-1 text-[#1F2937]">Log In</h2>
//         <p className="text-center text-gray-700 mb-6">
//           Welcome back, Please enter your details
//         </p>

//         <div className="flex justify-center mb-5 w-full">
//           <div className="relative flex w-full max-w-[650px] border border-[#0A66C2] rounded-full bg-gray-100 overflow-hidden px-[6px] py-[6px]">
//             <motion.div
//               layout
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className={`absolute top-1 left-[6px] h-[calc(100%-8px)] w-1/2 bg-[#B3D0EC] rounded-full z-0 ${
//                 role === "provider" ? "translate-x-full" : ""
//               }`}
//             />
//             <div className="relative z-10 flex w-full gap-[10px]">
//               <button
//                 onClick={() => setRole("user")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
//                   role === "user" ? "text-[#1F2937]" : "text-gray-600"
//                 }`}
//               >
//                 👤 User
//               </button>
//               <button
//                 onClick={() => setRole("provider")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-1 transition ${
//                   role === "provider" ? "text-[#1F2937]" : "text-gray-600"
//                 }`}
//               >
//                 <PeopleTeamToolbox24Filled className="w-5 h-5" />
//                 Service Provider
//               </button>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={role}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="w-full flex flex-col items-center"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[650px]">
//               <select
//                 value={loginType}
//                 onChange={(e) => setLoginType(e.target.value)}
//                 className="w-full h-[30px] border border-gray-400 rounded px-3 bg-white text-sm"
//               >
//                 <option value="email">Email Address</option>
//                 <option value="phone">Phone Number</option>
//               </select>

//               <div className="relative w-full">
//                 {loginType === "email" && (
//                   <Icon
//                     icon="heroicons-outline:mail"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4"
//                   />
//                 )}
//                 <input
//                   type="text"
//                   value={emailOrPhone}
//                   onChange={(e) => setEmailOrPhone(e.target.value)}
//                   placeholder={loginType === "email" ? "example@gmail.com" : "e.g. 08012345678"}
//                   className={`w-full h-[30px] border border-gray-400 rounded ${
//                     loginType === "email" ? "pl-10" : "px-3"
//                   } pr-3 bg-white text-sm`}
//                 />
//               </div>

//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Abc123@#"
//                   className="w-full h-[30px] border border-gray-400 rounded px-3 pr-10 bg-white text-sm"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               <AnimatePresence>
//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     className="text-red-600 text-sm"
//                   >
//                     {error}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <label>
//                   <input type="checkbox" className="mr-1 accent-[#0A66C2]" />
//                   Remember me?
//                 </label>
//                 <span className="cursor-pointer hover:underline">Forgot Password</span>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-[300px] h-[30px] bg-[#0A66C2] border border-[#0A66C2] text-white rounded-full text-sm font-semibold"
//                 >
//                   Log In
//                 </button>
//               </div>
//             </form>

//             <p className="text-sm text-center text-[#1F2937] mt-2">
//               Don’t have an account?{" "}
//               <span
//                 className="text-[#0A66C2] font-semibold cursor-pointer hover:underline"
//                 onClick={() => {
//                   console.log("Switching to signup modal...");
//                   onClose();
//                   onSwitchToSignup();
//                 }}
//               >
//                 Sign Up
//               </span>
//             </p>

//             <div className="flex items-center mt-5 mb-4 w-full max-w-[650px]">
//               <hr className="flex-grow border-gray-300" />
//               <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
//               <hr className="flex-grow border-gray-300" />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[650px]">
//               <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//                 <img
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="Google"
//                   className="h-5"
//                 />
//                 Continue with Google
//               </button>
//               <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//                   alt="Apple"
//                   className="h-5"
//                 />
//                 Continue with Apple
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }


// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase"; // adjust path if needed
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { PeopleTeamToolbox24Filled } from '@fluentui/react-icons';
// import { Icon } from "@iconify/react";

// export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
//   if (!isOpen) return null;

//   const [role, setRole] = useState("user");
//   const [loginType, setLoginType] = useState("email");
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{11}$/;

//     if (loginType === "email") {
//       if (!emailRegex.test(emailOrPhone)) {
//         setError("Please enter a valid email address");
//         return;
//       }

//       try {
//         await signInWithEmailAndPassword(auth, emailOrPhone, password);
//         alert("Login successful!");
//         onClose();
//       } catch (error) {
//         console.error(error);
//         setError("Incorrect email or password");
//       }

//     } else {
//       if (!phoneRegex.test(emailOrPhone)) {
//         setError("Please enter a valid phone number (11 digits)");
//         return;
//       }

//       setError("Phone number login is not supported yet. Use email.");
//     }
//   };

//   const registerTestUser = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         "grumpyice@gmail.com",
//         "grumpy234567$"
//       );
//       console.log("Test user created:", userCredential.user);
//       alert("Test user registered successfully!");
//     } catch (error) {
//       console.error("Error creating test user:", error.code, error.message);
//       alert("Error: " + error.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -30 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white rounded-[16px] w-[782px] px-10 py-8 shadow-lg relative flex flex-col items-center"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold text-center mb-1 text-[#1F2937]">Log In</h2>
//         <p className="text-center text-gray-700 mb-6">
//           Welcome back, Please enter your details
//         </p>

//         <div className="flex justify-center mb-5 w-full">
//           <div className="relative flex w-full max-w-[650px] border border-[#0A66C2] rounded-full bg-gray-100 overflow-hidden px-[6px] py-[6px]">
//             <motion.div
//               layout
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className={`absolute top-1 left-[6px] h-[calc(100%-8px)] w-1/2 bg-[#B3D0EC] rounded-full z-0 ${
//                 role === "provider" ? "translate-x-full" : ""
//               }`}
//             />
//             <div className="relative z-10 flex w-full gap-[10px]">
//               <button
//                 onClick={() => setRole("user")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
//                   role === "user" ? "text-[#1F2937]" : "text-gray-600"
//                 }`}
//               >
//                 👤 User
//               </button>
//               <button
//                 onClick={() => setRole("provider")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-1 transition ${
//                   role === "provider" ? "text-[#1F2937]" : "text-gray-600"
//                 }`}
//               >
//                 <PeopleTeamToolbox24Filled className="w-5 h-5" />
//                 Service Provider
//               </button>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={role}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="w-full flex flex-col items-center"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[650px]">
//               <select
//                 value={loginType}
//                 onChange={(e) => setLoginType(e.target.value)}
//                 className="w-full h-[30px] border border-gray-400 rounded px-3 bg-white text-sm"
//               >
//                 <option value="email">Email Address</option>
//                 <option value="phone">Phone Number</option>
//               </select>

//               <div className="relative w-full">
//                 {loginType === "email" && (
//                   <Icon
//                     icon="heroicons-outline:mail"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4"
//                   />
//                 )}
//                 <input
//                   type="text"
//                   value={emailOrPhone}
//                   onChange={(e) => setEmailOrPhone(e.target.value)}
//                   placeholder={loginType === "email" ? "example@gmail.com" : "e.g. 08012345678"}
//                   className={`w-full h-[30px] border border-gray-400 rounded ${
//                     loginType === "email" ? "pl-10" : "px-3"
//                   } pr-3 bg-white text-sm`}
//                 />
//               </div>

//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Abc123@#"
//                   className="w-full h-[30px] border border-gray-400 rounded px-3 pr-10 bg-white text-sm"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               <AnimatePresence>
//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     className="text-red-600 text-sm"
//                   >
//                     {error}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <label>
//                   <input type="checkbox" className="mr-1 accent-[#0A66C2]" />
//                   Remember me?
//                 </label>
//                 <span className="cursor-pointer hover:underline">Forgot Password</span>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-[300px] h-[30px] bg-[#0A66C2] border border-[#0A66C2] text-white rounded-full text-sm font-semibold"
//                 >
//                   Log In
//                 </button>
//               </div>
//             </form>

//             <p className="text-sm text-center text-[#1F2937] mt-2">
//               Don’t have an account?{" "}
//               <span
//                 className="text-[#0A66C2] font-semibold cursor-pointer hover:underline"
//                 onClick={() => {
//                   onClose();
//                   onSwitchToSignup();
//                 }}
//               >
//                 Sign Up
//               </span>
//             </p>

//             <div className="flex items-center mt-5 mb-4 w-full max-w-[650px]">
//               <hr className="flex-grow border-gray-300" />
//               <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
//               <hr className="flex-grow border-gray-300" />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[650px]">
//               <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//                 <img
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="Google"
//                   className="h-5"
//                 />
//                 Continue with Google
//               </button>
//               <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//                   alt="Apple"
//                   className="h-5"
//                 />
//                 Continue with Apple
//               </button>
//             </div>

//             {/* ✅ TEST REGISTER BUTTON */}
//             <button
//               onClick={registerTestUser}
//               className="mt-4 px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded"
//             >
//               Register Test User
//             </button>
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }
// import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase"; // adjust the path based on your folder structure
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { PeopleTeamToolbox24Filled } from '@fluentui/react-icons';
// import { Icon } from "@iconify/react";

// export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
//   const [role, setRole] = useState("user");
//   const [loginType, setLoginType] = useState("email");
//   const [emailOrPhone, setEmailOrPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{11}$/;

//     if (loginType === "email") {
//       if (!emailRegex.test(emailOrPhone)) {
//         setError("Please enter a valid email address");
//         return;
//       }

//       try {
//         await signInWithEmailAndPassword(auth, emailOrPhone, password);
//         alert("Login successful!");
//         onClose(); // Close modal
//        navigate("/services");
//       } catch (error) {
//         console.error(error);
//         setError("Incorrect email or password");
//       }

//     } else {
//       if (!phoneRegex.test(emailOrPhone)) {
//         setError("Please enter a valid phone number (11 digits)");
//         return;
//       }

//       setError("Phone number login is not supported yet. Use email.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -30 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white rounded-[16px] w-[782px] px-10 py-8 shadow-lg relative flex flex-col items-center"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold text-center mb-1 text-[#1F2937]">Log In</h2>
//         <p className="text-center text-gray-700 mb-6">
//           Welcome back, Please enter your details
//         </p>

//         <div className="flex justify-center mb-5 w-full">
//           <div className="relative flex w-full max-w-[650px] border border-[#0A66C2] rounded-full bg-gray-100 overflow-hidden px-[6px] py-[6px]">
//             <motion.div
//               layout
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className={`absolute top-1 left-[6px] h-[calc(100%-8px)] w-1/2 bg-[#B3D0EC] rounded-full z-0 ${
//                 role === "provider" ? "translate-x-full" : ""
//               }`}
//             />
//             <div className="relative z-10 flex w-full gap-[10px]">
//               <button
//                 onClick={() => setRole("user")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
//                   role === "user" ? "text-[#1F2937]" : "text-gray-600"
//                 }`}
//               >
//                 👤 User
//               </button>
//               <button
//                 onClick={() => setRole("provider")}
//                 className={`flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-1 transition ${
//                   role === "provider" ? "text-[#1F2937]" : "text-gray-600"
//                 }`}
//               >
//                 <PeopleTeamToolbox24Filled className="w-5 h-5" />
//                 Service Provider
//               </button>
//             </div>
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={role}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.25 }}
//             className="w-full flex flex-col items-center"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[650px]">
//               <select
//                 value={loginType}
//                 onChange={(e) => setLoginType(e.target.value)}
//                 className="w-full h-[30px] border border-gray-400 rounded px-3 bg-white text-sm"
//               >
//                 <option value="email">Email Address</option>
//                 <option value="phone">Phone Number</option>
//               </select>

//               <div className="relative w-full">
//                 {loginType === "email" && (
//                   <Icon
//                     icon="heroicons-outline:mail"
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4"
//                   />
//                 )}
//                 <input
//                   type="text"
//                   value={emailOrPhone}
//                   onChange={(e) => setEmailOrPhone(e.target.value)}
//                   placeholder={loginType === "email" ? "example@gmail.com" : "e.g. 08012345678"}
//                   className={`w-full h-[30px] border border-gray-400 rounded ${
//                     loginType === "email" ? "pl-10" : "px-3"
//                   } pr-3 bg-white text-sm`}
//                 />
//               </div>

//               <div className="relative w-full">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Abc123@#"
//                   className="w-full h-[30px] border border-gray-400 rounded px-3 pr-10 bg-white text-sm"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>

//               <AnimatePresence>
//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -5 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -5 }}
//                     className="text-red-600 text-sm"
//                   >
//                     {error}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <label>
//                   <input type="checkbox" className="mr-1 accent-[#0A66C2]" />
//                   Remember me?
//                 </label>
//                 <span className="cursor-pointer hover:underline">Forgot Password</span>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-[300px] h-[30px] bg-[#0A66C2] border border-[#0A66C2] text-white rounded-full text-sm font-semibold"
//                 >
//                   Log In
//                 </button>
//               </div>
//             </form>

//             <p className="text-sm text-center text-[#1F2937] mt-2">
//               Don’t have an account?{" "}
//               <span
//                 className="text-[#0A66C2] font-semibold cursor-pointer hover:underline"
//                 onClick={() => {
//                   onClose();
//                   onSwitchToSignup();
//                 }}
//               >
//                 Sign Up
//               </span>
//             </p>

//             <div className="flex items-center mt-5 mb-4 w-full max-w-[650px]">
//               <hr className="flex-grow border-gray-300" />
//               <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
//               <hr className="flex-grow border-gray-300" />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[650px]">
//               <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//                 <img
//                   src="https://www.svgrepo.com/show/475656/google-color.svg"
//                   alt="Google"
//                   className="h-5"
//                 />
//                 Continue with Google
//               </button>
//               <button className="flex items-center justify-center gap-2 border border-[#0A66C2] bg-[#F3F4F6] px-4 py-2 rounded w-full text-sm">
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//                   alt="Apple"
//                   className="h-5"
//                 />
//                 Continue with Apple
//               </button>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; // adjust the path based on your folder structure
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { PeopleTeamToolbox24Filled } from '@fluentui/react-icons';
import { Icon } from "@iconify/react";

export default function LoginModal({ isOpen, onClose, onSwitchToSignup }) {
  const [role, setRole] = useState("user");
  const [loginType, setLoginType] = useState("email");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (loginType === "email") {
      if (!emailRegex.test(emailOrPhone)) {
        setError("Please enter a valid email address");
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, emailOrPhone, password);
        alert("Login successful!");
        onClose();
        navigate("/services");
      } catch (error) {
        console.error(error);
        setError("Incorrect email or password");
      }

    } else {
      if (!phoneRegex.test(emailOrPhone)) {
        setError("Please enter a valid phone number (11 digits)");
        return;
      }

      setError("Phone number login is not supported yet. Use email.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google login successful!");
      onClose();
      navigate("/services");
    } catch (error) {
      console.error("Google login error:", error);
      setError("Google login failed. Try again.");
    }
  };

  const handleAppleLogin = async () => {
    // Firebase doesn't support Apple login on web directly — you would need a custom OAuth provider setup.
    alert("Apple login is not yet implemented.");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-[16px] w-[782px] px-10 py-8 shadow-lg relative flex flex-col items-center"
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

        <div className="flex justify-center mb-5 w-full">
          <div className="relative flex w-full max-w-[650px] border border-[#0A66C2] rounded-full bg-gray-100 overflow-hidden px-[6px] py-[6px]">
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
                className={`flex-1 py-2 text-sm font-medium rounded-full flex items-center justify-center gap-1 transition ${
                  role === "provider" ? "text-[#1F2937]" : "text-gray-600"
                }`}
              >
                <PeopleTeamToolbox24Filled className="w-5 h-5" />
                Service Provider
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full flex flex-col items-center"
          >
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[650px]">
              <select
                value={loginType}
                onChange={(e) => setLoginType(e.target.value)}
                className="w-full h-[30px] border border-gray-400 rounded px-3 bg-white text-sm"
              >
                <option value="email">Email Address</option>
                <option value="phone">Phone Number</option>
              </select>

              <div className="relative w-full">
                {loginType === "email" && (
                  <Icon
                    icon="heroicons-outline:mail"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4"
                  />
                )}
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder={loginType === "email" ? "example@gmail.com" : "e.g. 08012345678"}
                  className={`w-full h-[30px] border border-gray-400 rounded ${
                    loginType === "email" ? "pl-10" : "px-3"
                  } pr-3 bg-white text-sm`}
                />
              </div>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Abc123@#"
                  className="w-full h-[30px] border border-gray-400 rounded px-3 pr-10 bg-white text-sm"
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

            <p className="text-sm text-center text-[#1F2937] mt-2">
              Don’t have an account?{" "}
              <span
                className="text-[#0A66C2] font-semibold cursor-pointer hover:underline"
                onClick={() => {
                  onClose();
                  onSwitchToSignup();
                }}
              >
                Sign Up
              </span>
            </p>

            <div className="flex items-center mt-5 mb-4 w-full max-w-[650px]">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-sm text-gray-500 font-medium">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[650px]">
              <button
                onClick={handleGoogleLogin}
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
                onClick={handleAppleLogin}
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
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
