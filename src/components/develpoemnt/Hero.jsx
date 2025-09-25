import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({
  bgImage = "https://diggitglobal.com/assets/images/about_banner.png",
  showSmallHeading = true, // 👈 yeh prop add ki
  smallHeading = "Mobile App Development in Dubai",
  mainHeading = (
    <>
      People Actually <br /> Want To Use
    </>
  ),
  description = (
    <>
      We design and develop iOS, Android, and cross-platform apps that feel good
      to use and easy to <br /> maintain. Our mobile app development company in
      Dubai guarantees simple UX, sharp design, and tech <br /> that doesn’t fall
      apart.
    </>
  ),
  buttonText = "Explore our services",
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-small-heading", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-main-heading", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });

      gsap.from(".hero-button", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" ref={heroRef}>
      {/* Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src={bgImage}
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
      <div className="relative z-10 max-w-[1300px] mx-auto min-h-screen flex items-center justify-start px-4 sm:px-6 text-white text-start">
        <div className="max-w-5xl mt-15">
         {showSmallHeading && (
            <h3 className="text-4xl md:text-4xl max-[768px]:text-4xl font-semibold hero-small-heading">
              {smallHeading}
            </h3>
          )}
         <h1 className="text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 md:text-7xl font-extrabold mb-6 max-[768px]:text-5xl max-[585px]:text-5xl max-[401px]:text-4xl hero-main-heading">
  {mainHeading}
</h1>


          <p className="text-white mb-8 font-bold hero-description max-[768px]:text-sm">
            {description}
          </p>

          <div className="flex justify-start hero-button">
            <button className="bg-gradient-to-r from-blue-600 to-sky-500 
             text-whitehover:bg-blue-700 text-white font-bold py-4 px-7 rounded-full text-lg transition duration-300">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
