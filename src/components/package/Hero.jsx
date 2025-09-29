import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sliderImages = [
  "https://res.cloudinary.com/dqngkcjxg/image/upload/v1759132062/WhatsApp_Image_2025-09-29_at_11.48.37_15662466_zhcn3x.jpg",
  "https://res.cloudinary.com/dqngkcjxg/image/upload/v1759132051/WhatsApp_Image_2025-09-29_at_11.48.35_670994ad_mvwl5r.jpg",
  "https://res.cloudinary.com/dqngkcjxg/image/upload/v1759132525/WhatsApp_Image_2025-09-29_at_11.48.38_df395df8_e5yqbw.jpg",
];

const Hero = () => {
  const sliderRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".slider-image",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sliderRef);

    return () => ctx.revert();
  }, [currentImageIndex]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle next/previous buttons
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[720px] overflow-hidden" ref={sliderRef}>
      {/* Slider Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          key={currentImageIndex}
          src={sliderImages[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slider-image w-full h-full object-cover object-center transition-opacity duration-1000"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;