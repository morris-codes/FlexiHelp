import React, { useState } from "react";

const faqs = [
    {
        question: "What is FlexiHelp?",
        answer:
            "FlexiHelp is an online platform that connects you with trusted, verified service providers for one-time tasks like cleaning, fixing, or home help quickly and easily.",
    },
    {
        question: "How Do I Book A Service?",
        answer: "You can book directly on the platform using the search and booking feature.",
    },
    {
        question: "Are The Helpers Verified?",
        answer: "Yes, every helper on the platform is verified before they can offer services.",
    },
    {
        question: "How Do I Get Paid As A Service Provider?",
        answer: "Payments are processed securely via our system once jobs are completed.",
    },
    {
        question: "What If There's A Problem With My Booking?",
        answer: "You can reach out to our support via the Contact Us button below.",
    },
];

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-[#F9FBFD] px-6 md:px-16 py-16">
            <h2 className="text-5xl md:text-3xl font-bold text-[#0F172A] mb-10">
                Frequently Asked Questions
            </h2>
            <div className="border-t border-gray-200">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 py-4 text-xl cursor-pointer"
                        onClick={() => toggle(index)}
                    >
                        <h3 className="font-semibold text-[#0F172A] flex justify-between items-center">
                            {faq.question}
                            <span className="text-yellow-500">▼</span>
                        </h3>
                        {activeIndex === index && (
                            <p className="text-gray-500 mt-2 text-sm md:text-base">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-xl font-semibold">Still got questions?</p>
                <button className="mt-4 md:mt-0 border border-[#FBBF24] text-[#0F172A] px-15 py-2 rounded-full font-semibold">
                    Contact Us
                </button>
            </div>
        </section>
    );
}
