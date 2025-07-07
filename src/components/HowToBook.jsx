import React from "react";
import searchIcon from "../assets/srch_service.png";
import chatIcon from "../assets/chat_service.png";
import paymentIcon from "../assets/book_service.png";
import feedbackIcon from "../assets/rate_service.png";

const steps = [
    {
        icon: searchIcon,
        text: "Search and locate service providers near you",
    },
    {
        icon: chatIcon,
        text: "Connect with your preferred service provider",
    },
    {
        icon: paymentIcon,
        text: "Book a service and make payment",
    },
    {
        icon: feedbackIcon,
        text: "Give reviews and feedback",
    },
];

export default function HowToBook() {
    return (
        <section className="bg-[#F9FBFD] px-6 md:px-16 py-10">
            <h2 className="text-5xl md:text-3xl font-bold text-[#0F172A] mb-10">
                How To Book A Service
            </h2>

            <div className="flex flex-col gap-10">
                {steps.map((step, index) => {
                    return (
                        <div key={index} className="flex items-center gap-6">
                            {/* Icon border box */}
                            <div className="w-15 h-15 min-w-[48px] border border-[#095CAF] rounded-lg flex items-center justify-center">
                                <img
                                    src={step.icon}
                                    alt={`icon-${index + 1}`}
                                    className="h-5 w-5"
                                />
                            </div>

                            {/* Description text */}
                            <p className="text-[#0F172A] text-3xl md:text-l font-semibold">{step.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
