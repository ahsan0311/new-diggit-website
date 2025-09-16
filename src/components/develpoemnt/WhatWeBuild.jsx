import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeBuild = ({
  heading = "What We Build",
  para1 = "As a mobile app design and development company in Dubai, our job is to make sure your app works for your users, your team, and your business.",
  para2 = "Whether you’re building something new or replacing something that’s no longer cutting it, we help you launch apps that are fast, reliable, and easy to manage across iOS, Android, or both.",
  buttonText = "Start your project",
  buttonLink = "#",
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".wwb-heading", {
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

      // Paragraphs
      gsap.from(".wwb-paragraph", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Button
      gsap.from(".wwb-button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Content */}
        <div className="flex-2">
          <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 font-bold  mb-4 wwb-heading">
            {heading}
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed wwb-paragraph">
            {para1}
          </p>
          <p className="text-lg  text-gray-700 font-bold leading-relaxed wwb-paragraph">
            {para2}
          </p>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0 mt-[140px] max-[768px]:mt-[-10px] wwb-button">
          <Link
            to={buttonLink}
            className="bg-gradient-to-r from-blue-600 to-sky-500 text-white text-base px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
