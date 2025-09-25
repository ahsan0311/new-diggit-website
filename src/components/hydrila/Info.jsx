import React from "react";

const InfoSection = ({ title, description, imgSrc, reverse = false }) => {
  return (
    <div
  className={`mx-auto flex flex-col md:flex-row justify-between items-center gap-10 my-16 
    max-w-7xl md:max-w-6xl sm:max-w-3xl px-4
    ${reverse ? "md:flex-row-reverse" : ""}
  `}
>

      {/* Text Part */}
      <div className=" max-w-3xl space-y-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold whywork-title text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
          {title}
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-xl">{description}</p>
      </div>

      {/* Image Part with Gradient Background */}
      <div className=" flex justify-center md:justify-end">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-300">
          <img
            src={imgSrc}
            alt={title}
            className="w-64 md:w-80 lg:w-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
