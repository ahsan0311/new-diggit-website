// WhyWorkSection.jsx
import React from "react";

const WhyWorkSection = ({ title, description, cards, buttonText }) => {
  return (
    <div className="font-sans text-center p-6 md:p-10 mt-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold">
        {title}
      </h1>
      <p className="text-sm md:text-lg mt-2 font-medium text-gray-500">
        {description}
      </p>

      {/* Cards */}
      <div className="flex justify-center items-start gap-6 p-6 md:p-10 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-3xl h-[305px] p-6 md:p-8 w-[20rem] shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"
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
