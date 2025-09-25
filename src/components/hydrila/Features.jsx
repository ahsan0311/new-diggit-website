import React from "react";

const Features = ({ data = [] }) => {
  return (
   <div className="mb-20 mt-10">
  {/* Heading */}
  <div className="text-center">
    <h3 className="whywork-title text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 max-w-6xl mx-auto text-3xl md:text-5xl lg:text-[60px] font-bold">
      What Our Clients Say
    </h3>
    <p className="mt-8 whywork-desc max-w-3xl mx-auto text-sm md:text-lg mt-2 font-medium text-gray-500">
      Hear from our satisfied clients who have transformed <br /> their businesses with Hydrila.
    </p>
  </div>

  {/* Cards */}
  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-6 mt-12 px-6 ">
  {data.map((feature, index) => (
    <div
      key={index}
      className={`hover:-translate-y-1 transition duration-300  ${
        index === 1
          ? "p-px rounded-[16px]"
          : ""
      }`}
    >
      <div className="p-6 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-xl flex flex-col items-center justify-between max-w-96 w-90 h-[300px] text-center">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 mb-4">
          {feature.icon}
        </div>

        {/* Description */}
        <p className="text-white  leading-relaxed mb-4">
          {feature.description}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold whywork-title text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
          {feature.title}
        </h3>

        {/* Small title (optional subtitle) */}
        <p className="text-sm text-black font-semibold">
          {feature.smallTitle || "Trusted by professional"}
        </p>
      </div>
    </div>
  ))}
</div>

</div>

  );
};

export default Features;
