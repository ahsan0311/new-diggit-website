import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        y: 50,
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
        x: 100,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, originRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-16 px-4 bg-white" ref={originRef}>
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 origin-left">
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
            <strong className="text-black font-semibold">
              deliver technology that truly fuels business success.
            </strong>
          </p>

          <div className="mt-8 origin-left">
            <button className="bg-[#002D74] hover:bg-[#003D99] text-white font-medium text-lg px-6 py-3 rounded-full transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://diggitglobal.com/assets/images/story_img.png"
            alt="Developer working"
            className="w-full max-w-[600px] h-auto object-cover rounded-[2rem] origin-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OriginStory;
