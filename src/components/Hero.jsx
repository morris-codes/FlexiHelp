import React from "react";
import image1 from "../assets/cook.png";
import image2 from "../assets/makeup.png";
import image3 from "../assets/carpenter.png";
import image4 from "../assets/cleaner.png";
import { Link } from "react-router-dom";

export default function Hero({ onSignupClick }) {
    
    return (
        <section className="w-full min-h-screen bg-white text-[#0F172A] px-6 md:px-16 py-10">
            {/*Hero Section*/}
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-5xl font-medium leading-snug mt-15">
                    <span className="text-yellow-500">Need Help?</span> <span className="text-[#095CAF]">Get it done{" "}
                        <br className="hidden md:block" />
                    with professionals!</span>
                </h1>
                <p className="mt-8 text-base text-[#095CAF] font-semibold md:text-lg">
                    Whether it’s a quick fix or a deep clean, Flexihelp connects you <br /> with
                    trusted service providers nearby. One time job, zero hassle.
                </p>
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <button onClick={onSignupClick} className="bg-[#095CAF] text-white px-14 py-2 rounded-2xl text-sm hover:bg-blue-800 font-semibold transition">
                        Book A Trusted Helper <span><img src="" alt="" /></span>
                    </button>
                    <button onClick={onSignupClick} className="border border-[#095CAF] text-[#095CAF] px-14 py-2 font-semibold rounded-2xl text-sm hover:bg-blue-50 transition">
                        Become A Service Provider
                    </button>
                </div>
            </div>

      <div className="mx-auto mt-[60px] w-[1402.5px] h-[438px] flex gap-[30px]">
  {[image1, image2, image3, image4].map((img, idx) => (
    <div
      key={idx}
      className="flex-1 rounded-xl overflow-hidden"
    >
      <img
        src={img}
        alt={`Provider ${idx + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>



            {/* What We Do Section */}
            {/* What We Do Section */}
<div className="mt-16 bg-whitesmoke px-7 py-4 rounded-[20px] border border-gray-200 shadow-sm max-w-[1290px] mx-auto opacity-100">
  <h2 className="text-2xl font-bold mb-3">
    What We Do <span className="text-yellow-500">?</span>
  </h2>
  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
    We connect you with trusted, verified service providers in your area all in one app. Whether you need help once in a while or just for today, we’re built for speed, trust, and convenience. No more guessing. No more waiting. Just help, when you need it. From trying to get a plumber who shows up, to searching endlessly for someone to clean your space or fix a quick issue, Flexihelp makes it simple.
  </p>
</div>
        </section>
    );
}



// <div className="mt-14 flex justify-center items-stretch gap-4 flex-wrap">
//     {[1, 2, 3, 4].map((i) => (
//         <div
//             key={i}
//             className="w-[180px] h-[260px] rounded-xl overflow-hidden shadow-md bg-gray-200"
//         >
//             <img
//                 src={`/images/image${i}.jpg`} // replace with placeholder if needed
//                 alt={`Provider ${i}`}
//                 className="w-full h-full object-cover"
//             />
//         </div>
//     ))}
// </div>
