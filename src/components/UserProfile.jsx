// import React from "react";
// import { FiSearch, FiEdit2 } from "react-icons/fi";
// import doe from "../assets/doe.jpg";
// import { FiLogOut } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";


// export default function UserProfile() {
//   const navigate = useNavigate(); // ✅ Moved inside the component

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className="bg-white border-r flex flex-col justify-between px-4 py-6"
//         style={{
//           width: "317px",
//           height: "728px",
//           opacity: 1,
//         }}
//       >
//         <div>
//           <div className="mb-8 font-bold text-lg text-[#0A66C2]">
//             FLEXI<span className="text-black">HELP</span>
//           </div>

//           <div className="mb-6">
//             <button className="px-4 py-2 text-left text-sm rounded hover:bg-[#E6F0FB] hover:text-[#0A66C2] transition">
//               Home
//             </button>
//           </div>

//          <nav className="flex flex-col gap-2">
//   {[
//     "My Profile",
//     "Account Settings",
//     "Security Settings",
//     "Notification",
//     "Wallet & Payment Info",
//     "Service History",
//     "Saved Service",
//   ].map((item, index) => (
//     <button
//       key={index}
//       className="text-left px-4 py-2 rounded hover:bg-[#E6F0FB] hover:text-[#0A66C2] transition-colors"
//       style={{
//         fontFamily: "Inter, sans-serif",
//         fontWeight: 600,
//         fontStyle: "normal",
//         fontSize: "15px",
//         lineHeight: "30px",
//         letterSpacing: "0px",
//       }}
//     >
//       {item}
//     </button>
//   ))}
// </nav>

//         </div>

//        <button
//   className="flex items-center gap-3 px-4 py-2 text-red-600 font-medium text-base hover:bg-red-100 rounded-md transition w-full"
// >
//   <FiLogOut size={20} />
//   Log Out
// </button>

//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col items-center justify-center px-6">
//         {/* Search Bar */}
//         <div className="w-[950px] flex justify-end mb-4">
//           <div className="relative w-72">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
//             />
//             <FiSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//         </div>

//         {/* Profile Card */}
//         <div className="w-[948px] h-[598px] bg-white border border-[#B3D0EC] rounded-[12px] flex shadow-sm overflow-hidden">
//           {/* Left Section */}
//           <div className="w-[562px] h-[598px] flex flex-col items-center justify-center px-6">
//             <img
//               src={doe}
//               alt="Profile"
//               className="w-[120px] h-[120px] rounded-[18px] object-cover mb-4"
//             />
//             <h2 className="font-semibold text-lg mb-1">Sam Loco</h2>
//             <p className="text-gray-600 text-sm mb-4">example@gmail.com</p>

//             {/* ✅ Edit Button Navigates to /edit-profile */}
//             <button
//               onClick={() => navigate("/edit-profile")}
//               className="flex items-center gap-2 px-6 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-medium hover:bg-[#084b99] transition"
//             >
//               Edit <FiEdit2 size={16} />
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="w-[1px] h-[80%] bg-[#B3D0EC] my-auto"></div>

//           {/* Right Section */}
//           <div
//             className="flex flex-col justify-center pl-12"
//             style={{
//               width: "254px",
//               height: "483px",
//               gap: "24px",
//             }}
//           >
//             <div className="space-y-6 text-gray-800 text-base">
//               <div>
//                 <p className="text-gray-500 mb-1">Phone Number</p>
//                 <p className="font-medium">0900 000 000</p>
//               </div>
//               <div>
//                 <p className="text-gray-500 mb-1">Gender</p>
//                 <p className="font-medium">Male</p>
//               </div>
//               <div>
//                 <p className="text-gray-500 mb-1">State</p>
//                 <p className="font-medium">Lagos</p>
//               </div>
//               <div>
//                 <p className="text-gray-500 mb-1">Zip Code</p>
//                 <p className="font-medium">100111</p>
//               </div>
//               <div>
//                 <p className="text-gray-500 mb-1">Home Address</p>
//                 <p className="font-medium">No 123 Allen Avenue, Ikeja</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FiSearch, FiCamera } from "react-icons/fi";
import doe from "../assets/doe.jpg";
import Sidebar from "../components/Sidebar";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Sam Loco",
    email: "example@gmail.com",
    phone: "0900 000 000",
    gender: "Male",
    state: "Lagos",
    zip: "100111",
    address: "No 123 Allen Avenue, Ikeja",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Profile updated:", formData);
    setIsEditing(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 flex flex-col items-center justify-start p-10 relative">
        {/* Search Bar */}
        <div className="w-[950px] flex justify-end mb-4">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-lg text-sm shadow-sm outline-none placeholder-gray-700 bg-white"
              style={{
                border: "1px solid #B3D0EC",
              }}
            />
            <FiSearch
              className="absolute left-3 top-2.5 text-gray-600"
              size={18}
            />
          </div>
        </div>

        {/* Profile Container */}
        <div className="w-[948px] bg-white border border-[#B3D0EC] rounded-[12px] flex shadow-sm overflow-hidden">
          {/* If NOT editing - Show Profile View */}
          {!isEditing ? (
            <>
              {/* Left Section */}
              <div className="w-[562px] flex flex-col items-center justify-center px-6">
                <img
                  src={doe}
                  alt="Profile"
                  className="w-[120px] h-[120px] rounded-[18px] object-cover mb-4"
                />
                <h2 className="font-semibold text-lg mb-1">
                  {formData.fullName}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{formData.email}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-2 bg-[#0A66C2] text-white rounded-md text-sm font-medium hover:bg-[#084b99] transition"
                >
                  Edit
                </button>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-[80%] bg-[#B3D0EC] my-auto"></div>

              {/* Right Section */}
              <div
                className="flex flex-col justify-center pl-12"
                style={{ width: "254px", height: "483px", gap: "24px" }}
              >
                <div className="space-y-6 text-gray-800 text-base">
                  <div>
                    <p className="text-gray-500 mb-1">Phone Number</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Gender</p>
                    <p className="font-medium">{formData.gender}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">State</p>
                    <p className="font-medium">{formData.state}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Zip Code</p>
                    <p className="font-medium">{formData.zip}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Home Address</p>
                    <p className="font-medium">{formData.address}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // If editing - Show Edit Form
            <div
              className="bg-white shadow flex gap-[10px] w-full"
              style={{
                padding: "36px 45px",
                borderRadius: "12px",
                borderWidth: "3px",
                borderStyle: "solid",
                borderColor: "#e5e7eb",
              }}
            >
              {/* Left Side: Image, Name, Email */}
              <div
                style={{
                  width: "404px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRight: "1px solid #e5e7eb",
                  paddingRight: "32px",
                }}
              >
                <div className="relative">
                  <img
                    src={doe}
                    alt="Profile"
                    className="w-40 h-40 rounded-2xl object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow">
                    <FiCamera size={18} />
                  </div>
                </div>
                <div className="mt-6 w-full">
                  <label className="text-gray-500 text-sm">Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div className="mt-4 w-full">
                  <label className="text-gray-500 text-sm">Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  />
                </div>
              </div>

              {/* Right Side: Phone, Gender, State, Zip, Address */}
              <div
                style={{
                  flexGrow: 1,
                  paddingLeft: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div>
                  <label className="text-gray-500 text-sm">Phone Number:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  />
                </div>

                <div>
                  <label className="text-gray-500 text-sm">Gender:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-500 text-sm">State:</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  >
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Kano</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-500 text-sm">Zip Code:</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  />
                </div>

                <div>
                  <label className="text-gray-500 text-sm">Home Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2 mt-1 text-sm"
                  />
                </div>

                <div className="flex gap-4 justify-end mt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 px-4 py-2 rounded-md text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
