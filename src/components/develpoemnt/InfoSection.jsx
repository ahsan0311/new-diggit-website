import React from "react";

const InfoSection = ({ title, paragraphs, align = "center" }) => {
  return (
    <div
      className={`font-sans text-${align} p-6 md:p-10`}
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold">
        {title}
      </h1>

      {/* Paragraphs */}
      {paragraphs.map((para, index) => (
       <p
  key={index}
  className={`${
    index === 0 ? "mt-4" : "mt-6"
  } text-sm md:text-[16px] text-gray-600 max-w-4xl leading-relaxed mx-auto`}
>
  {para}
</p>

      ))}
    </div>
  );
};

export default InfoSection;
