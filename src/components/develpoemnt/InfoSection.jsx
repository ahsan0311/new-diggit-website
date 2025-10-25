import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoSection = ({ title, paragraphs, align = "center" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".info-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Animate paragraphs with stagger
      gsap.from(".info-paragraph", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`font-sans text-${align} p-6 md:p-10`}
    >
      {/* Heading */}
      <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 max-w-3xl md:text-2xl mx-auto lg:text-[60px] font-bold info-heading">
        {title}
      </h1>

      {/* Paragraphs */}
      {paragraphs.map((para, index) => (
        <p
          key={index}
          className={`${
            index === 0 ? "mt-4" : "mt-4"
          } text-sm md:text-[16px] text-gray-600 max-w-4xl leading-relaxed mx-auto info-paragraph`}
        >
          {para}
        </p>
      ))}
    </div>
  );
};

export default InfoSection;
