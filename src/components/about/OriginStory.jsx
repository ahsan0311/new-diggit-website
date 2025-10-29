import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
         import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const OriginStory = () => {
  const originRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text animation
      gsap.from(".origin-left", {
        scrollTrigger: {
          trigger: originRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20, // reduced from 50 to avoid clipping
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Right image animation
      gsap.from(".origin-image", {
        scrollTrigger: {
          trigger: originRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: 50, // reduced from 100 for smoother entrance
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, originRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-10 mt-8 px-4 bg-white overflow-visible" ref={originRef}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-6 origin-left">
            Our Origin Story
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed origin-left">
            Most businesses don’t need endless tools—they need smarter ones that
            actually get the job done.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed origin-left">
            We started our journey after seeing too many teams waste time
            juggling disconnected platforms and calling it “digital
            transformation.” Our focus has always been simple: build solutions
            that matter. Whether it’s developing a smart eCommerce platform,
            creating a powerful mobile app, driving growth with SEO, or shaping
            a unified brand identity, our goal remains the same:{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 font-semibold">
              deliver technology that truly fuels business success.
            </strong>
          </p>


<div className="mt-8 origin-left">
  <Link
    to="/contact"
    className="bg-gradient-to-r from-blue-600 to-sky-500 
               text-white hover:bg-[#003D99] font-medium text-lg 
               px-6 py-3 rounded-full transition duration-300"
  >
    Contact Us
  </Link>
</div>

        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="Developer working"
            className="w-full max-w-[580px] h-[500px] object-cover rounded-[2rem] origin-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OriginStory;
