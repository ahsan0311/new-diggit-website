import React, { useEffect, useState } from "react";

const SearchSection = ({
  letters = ["S", "E", "A", "R", "C", "H"],
  heading = "Strategy First",
  paragraph = "We don’t jump into campaigns without a plan. We start by aligning SEO with your business goals, identifying the right keywords, and mapping out opportunities across your market. It’s how we build custom, scalable SEO services in UAE, not cookie-cutter checklists.",
  buttonText = "Let's talk business",
  buttonLink = "#",
  showParagraph = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % letters.length);
    }, 800);
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <section className="w-full text-center  px-4">
      {/* Letters with animation */}
      <div className="flex justify-center gap-4 sm:gap-6 mb-12 flex-wrap">
  {letters.map((letter, idx) => (
    <div
      key={idx}
      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
        rounded-full border-2 flex items-center justify-center 
        text-lg sm:text-xl font-bold
        animate-pulse transition-all duration-700 ease-in-out
        ${
          activeIndex === idx
            ? "bg-gradient-to-tr from-sky-400 to-sky-600 text-white shadow-xl shadow-sky-400/60 border-sky-500 scale-110"
            : "border-sky-400 text-sky-500 bg-white"
        }`}
    >
      {letter}
    </div>
  ))}
</div>


      {/* Content card */}
      <div className="max-w-3xl text-start mx-auto bg-gray-50 rounded-4xl shadow-sm px-8 py-10 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 mb-4 ">
          {heading}
        </h2>
        {showParagraph && (
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            {paragraph}
          </p>
        )}
       
      </div>
       <a
          href={buttonLink}
          className="inline-block bg-gradient-to-r from-blue-600 to-sky-500  text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors hover:bg-[#0045aa]"
        >
          {buttonText}
        </a>
    </section>
  );
};

export default SearchSection;
