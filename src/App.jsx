import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDiscoveryPage from "./components/ServiceDiscoveryPage";
import SignupModal from "./components/SignUp";
import LoginModal from "./components/Login";

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
              onLoginClick={() => setLoginOpen(true)} // ✅ passed here
            />
          }
        />
        <Route path="/services" element={<ServiceDiscoveryPage />} />
      </Routes>

      {/* Modals */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </Router>
  );
}

export default App;