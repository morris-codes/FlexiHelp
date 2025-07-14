import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import HowToBook from "../components/HowToBook";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import SignupModal from "../components/SignUp";

export default function Home() {
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    return (
        <>
            <Navbar onSignupClick={() => setShowSignUpModal(true)} />
            <Hero onSignupClick={() => setShowSignUpModal(true)} />
            <ServiceCards onSignupClick={() => setShowSignUpModal(true)} />
            <HowToBook />
            <Testimonials />
            <Faqs />
            <Footer onSignupClick={() => setShowSignUpModal(true)} />

            <SignupModal
                isOpen={showSignUpModal}
                onClose={() => setShowSignUpModal(false)}
            />
        </>
    );
}
