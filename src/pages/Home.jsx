import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCards from "../components/ServiceCards";
import HowToBook from "../components/HowToBook";
import Testimonials from "../components/Testimonials";



export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ServiceCards />
            <HowToBook />
            <Testimonials />
        </>
    );
}
