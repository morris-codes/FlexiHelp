import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import HowToBook from "../components/HowToBook";
import Testimonials from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ServiceCards />
            <HowToBook />
            <Testimonials />
            <Faqs />
            <Footer />
        </>
    );
}
