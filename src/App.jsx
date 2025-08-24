// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ServiceDiscoveryPage from "./components/ServiceDiscoveryPage";
// import SignupModal from "./components/SignUp";
// import LoginModal from "./components/Login";

// function App() {
//   const [isSignupOpen, setSignupOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               onSignupClick={() => setSignupOpen(true)}
//               onLoginClick={() => setLoginOpen(true)} // ✅ passed here
//             />
//           }
//         />
//         <Route path="/services" element={<ServiceDiscoveryPage />} />
//       </Routes>

//       {/* Modals */}
//       <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
//       <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDiscoveryPage from "./components/ServiceDiscoveryPage";
import SignupModal from "./components/SignUp";
import LoginModal from "./components/Login";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import OTPVerificationScreen from "./components/OTPVerificationScreen"; 
import UserProfile from "./components/UserProfile";// 
import AccountSettings from "./components/AccountSettings";
import DeviceActivityLog from "./components/DeviceActivityLog";
import ChangePassword from "./components/ChangePassword";
import SecuritySettings from "./components/SecuritySettings";
import TwoFactorVerify from "./pages/TwoFactorVerify";
import TwoFactorSuccess from "./pages/TwoFactorSuccess";
import NotificationSettings from "./components/NotificationSettings";
import WalletPaymentInfo from "./components/WalletPaymentInfo";
import FundWalletPage from "./pages/FundWalletPage";
import ServiceHistory from "./components/ServiceHistory";
import SavedService from "./components/SavedService";



function App() {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSignupClick={() => setSignupOpen(true)}
              onLoginClick={() => setLoginOpen(true)}
            />
          }
        />
        <Route path="/services" element={<ServiceDiscoveryPage />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/verify-otp" element={<OTPVerificationScreen />} />
        <Route path="/profile" element={<UserProfile />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/device-activity-log" element={<DeviceActivityLog />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/security-settings" element={<SecuritySettings />} />
        <Route path="/two-factor-verify" element={<TwoFactorVerify />} />
        <Route path="/twofactor-success" element={<TwoFactorSuccess />} />
        <Route path="/notification" element={<NotificationSettings />} />
        <Route path="/wallet" element={<WalletPaymentInfo />} />
        <Route path="/fund-wallet" element={<FundWalletPage />} />
        <Route path="/service-history" element={<ServiceHistory />} />
        <Route path="/saved-service" element={<SavedService />} />

      </Routes>

      {/* Modals */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />

      {/* Hidden reCAPTCHA container (for phone auth) */}
      <div id="recaptcha-container" style={{ display: 'none' }}></div>
    </Router>
  );
}

export default App;

