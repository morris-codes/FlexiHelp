import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import HowToBook from "../components/HowToBook";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import SignupModal from "../components/SignUp";
import LoginModal from "../components/Login"; // Make sure this is the updated one I sent earlier

export default function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <Navbar
        onSignupClick={() => setShowSignupModal(true)}
        onLoginClick={() => setShowLoginModal(true)}
      />
      <Hero onSignupClick={() => setShowSignupModal(true)} />
      <ServiceCards onSignupClick={() => setShowSignupModal(true)} />
      <HowToBook />
      <Testimonials />
      <Faqs />
      <Footer onSignupClick={() => setShowSignupModal(true)} />

      {/* Modals */}
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      />

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
