import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextContent = ({ heading, subheading, description }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // jab section ka top viewport ke 80% pe aayega
        toggleActions: "play none none none", 
        // play (jab aaye), baaki repeat/scroll back pe na chale
      },
    });

    // Heading animation
    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Paragraph animation
    tl.from(
      paraRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="text-center w-[1100px] mb-6 max-w-full rounded-xl mx-auto text-black mt-20"
    >
     <h1
  ref={headingRef}
  className="text-2xl md:text-4xl font-bold mb-4"
>
  {heading}
  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
    {subheading}
  </span>
</h1>


      <p
        ref={paraRef}
        className="text-sm md:text-base leading-relaxed mx-auto"
      >
        {description}
      </p>
    </div>
  );
};

export default TextContent;
