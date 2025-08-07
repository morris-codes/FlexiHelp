import React, { useState } from "react";
import LoginModal from "./components/Login";
import SignupModal from "./components/SignUp";

export default function AuthModalContainer() {
  const [activeModal, setActiveModal] = useState(null);

  const openLogin = () => setActiveModal("login");
  const openSignup = () => setActiveModal("signup");
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <button onClick={openLogin}>Log In</button>
      <button onClick={openSignup}>Sign Up</button>

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={closeModal}
        onSwitchToSignup={() => setActiveModal("signup")}
      />

      <SignupModal
        isOpen={activeModal === "signup"}
        onClose={closeModal}
        onSwitchToLogin={() => setActiveModal("login")} // ✅ FIXED
      />
    </div>
  );
}
