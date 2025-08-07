// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function RegistrationSuccess() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
//         <div className="flex justify-center mb-4">
//           <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
//             <svg
//               className="w-10 h-10 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="3"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//         </div>
//         <h2 className="text-2xl font-semibold mb-2">Registration Successful</h2>
//         <p className="mb-6 text-sm text-gray-700">
//           Welcome to <span className="font-bold">FlexiHelp</span>, your journey starts now. You can now
//           explore wide range of services and connect with skilled professionals with ease.
//         </p>
//         <button
//           className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
//           onClick={() => navigate("/services")}
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Registration Successful</h2>
        <p className="mb-6 text-sm text-gray-700">
          Welcome to <span className="font-bold">FlexiHelp</span>, your journey starts now. You can now
          explore a wide range of services and connect with skilled professionals with ease.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="text-white px-6 py-2"
          style={{
            backgroundColor: "#0A66C2",
            borderRadius: "10px"
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
