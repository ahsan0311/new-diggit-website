import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-heading", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(".hero-paragraph", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={heroRef}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://diggitglobal.com/assets/images/about_banner.png"
          alt="Background"
          className="w-full h-full object-cover object-[center_20%] rounded-b-[4rem] md:rounded-none"
        />
      </div>

      {/* Top Gradient */}
     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent z-10"></div>


      {/* Bottom Gradient */}
      <div className="absolute bottom-[-40px] left-0 w-full h-[200px] z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 text-white text-center">
        <div className="max-w-4xl mt-20">
          <h3 className="text-3xl md:text-2xl font-semibold hero-heading">
            We Build Business Solutions That Drive Team Success
          </h3>
          <h1 className="text-5xl text-[#01a9eb] md:text-6xl font-extrabold mb-6 hero-heading">
            Built to Be the Strength
            <br />
            Behind Your Success
          </h1>

          <p className="text-white mb-8 hero-paragraph">
            We’re a digital solutions company dedicated to helping businesses
            work smarter, scale faster, and simplify complexity. From
            AI-powered systems to fully customized tools, we create business
            solutions that strengthen operations and transform the way teams
            achieve success.
          </p>

          <div className="flex justify-center hero-button">
            <button className="bg-[#00317B] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full text-lg transition duration-300">
              Explore our services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
