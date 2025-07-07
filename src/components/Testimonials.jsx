import React from "react";
import adaImage from "../assets/ada.png";
import chukaImage from "../assets/chuka.png";
import folaImage from "../assets/fola.png";

const testimonials = [
    {
        name: "Ada.O, Lagos",
        text:
            "As a working mom, I barely have time to breathe let alone fix things around the house. I booked a cleaner in minutes on FlexiHelp, and they showed up right on time. Lifesaver!",
        image: adaImage,
    },
    {
        name: "Chuka.A , Electrician",
        text:
            "I used to rely on word of mouth for jobs. Now with FlexiHelp, I get notified when there's a task nearby. It's helped me stay busy and get paid faster.",
        image: chukaImage,
    },
    {
        name: "Fola.M , Abuja",
        text:
            "I wasn't sure what to expect, but booking a handyman was super easy. I got a reminder before he arrived, and payment was a breeze. Definitely using this again!",
        image: folaImage,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white px-6 md:px-16 py-16">
            <h2 className="text-5xl md:text-3xl font-bold text-[#0F172A] mb-10">
                Testimonials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="border border-yellow-300 rounded-xl p-6 flex flex-col items-center"
                    >
                        {/* Profile Image */}
                        <div className="w-14 h-14 rounded-full bg-gray-200 mb-4 overflow-hidden">
                            <img src={item.image} alt={`user-${index}`} className="w-full h-full object-cover" />
                        </div>

                        <p className="text-sm text-gray-700 mb-4">"{item.text}"</p>
                        <p className="text-sm font-semibold text-[#0F172A]">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
