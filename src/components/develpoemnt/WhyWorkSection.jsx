import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyWorkSection = ({ title, description, cards, buttonText }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".whywork-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Animate description with slight delay
      gsap.from(".whywork-desc", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="font-sans text-center p-6 md:p-10 mt-10"
    >
      {/* Heading */}
      <h1 className="whywork-title max-w-5xl mx-auto text-3xl md:text-5xl lg:text-[60px] font-bold">
        {title}
      </h1>

      <p className="whywork-desc max-w-3xl mx-auto text-sm md:text-lg mt-2 font-medium text-gray-500">
        {description}
      </p>

      {/* Cards */}
     <div className="flex justify-center items-start gap-6 p-6 md:p-10 flex-wrap">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-gray-50 rounded-3xl h-[360px] p-6 md:p-8 max-[640px]:h-auto
                 w-full sm:w-[calc(50%-0.75rem)] lg:w-[22rem] 
                 shadow-md text-center transition-all duration-300 
                 hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
    >
      <h2 className="text-[#00317b] text-xl md:text-2xl lg:text-3xl font-[500] font-sans mb-3">
        {card.title}
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-semibold">
        {card.text}
      </p>
    </div>
  ))}

  {/* Button */}
  {buttonText && (
    <div className="w-full flex justify-center mt-8">
      <button className="bg-[#00317b] text-white rounded-full py-3 md:py-4 font-sans w-[12rem] md:w-[15rem] text-base md:text-xl font-medium hover:bg-blue-700 transition">
        {buttonText}
      </button>
    </div>
  )}
</div>

    </div>
  );
};

export default WhyWorkSection;
