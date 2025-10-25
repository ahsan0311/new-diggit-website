import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation
      gsap.from(".mv-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Text Blocks Animation (Mission + Vision)
      gsap.from(".mv-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 mt-8 px-4 md:px-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <img
            src="https://media.istockphoto.com/id/1355569095/vector/digital-eye-data-network-cyber-security-technology.jpg?s=612x612&w=0&k=20&c=b5moC17mfe_--IMWUnv1ez6sZpXcuWRFw3HwCp5n4Q4="
            alt="Target"
            className="max-w-[600px] w-full h-auto object-contain mv-image rounded-lg "
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-end gap-16 md:gap-20">
          {/* Mission */}
          <div className="mv-text">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To merge human expertise with intelligent technology, building
              smarter systems that empower businesses to work efficiently and
              grow with ease. We focus on automating repetitive processes so
              teams can concentrate on what matters most—innovation and impact.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-text">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be recognized as a trusted partner for digital transformation
              worldwide, redefining what modern business tools should
              be—intelligent, streamlined, and designed around people, not just
              platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
