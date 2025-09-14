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
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end -mt-12">
          <img
            src="https://diggitglobal.com/assets/images/about_img.png"
            alt="Target"
            className="max-w-[600px] w-full h-auto object-contain mv-image"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-16 text-end mt-18 md:mt-20 pr-5">
          {/* Mission */}
          <div className="mv-text">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
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
