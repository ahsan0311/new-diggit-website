import React from "react";

const FeatureCard = ({ imgSrc, bgColor, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-80 mx-auto">
      {/* Icon Container */}
      <div
        className={`p-6 aspect-square rounded-full flex items-center justify-center ${bgColor}`}
      >
        <img src={imgSrc} alt={title} className="w-10 h-10 object-contain" />
      </div>

      {/* Title & Description */}
      <div className="mt-5 space-y-2 text-center">
        <h3 className="text-base font-bold whywork-title text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
          {title}
        </h3>
        <p className="text-sm font-semibold text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const featuresData = [
    {
      bgColor: "bg-gradient-to-r from-cyan-300 to-blue-300",
      imgSrc: "https://www.hydrila.com/assets/images/featured-item-01.png",
      title: "Efficient Management",
      description:
        "Simplify your operations with tools for finance, sales, and worker management.",
    },
    {
      bgColor: "bg-gradient-to-r from-cyan-300 to-blue-300",
      imgSrc: "https://www.hydrila.com/assets/images/featured-item-01.png",
      title: "Real-Time Reports",
      description:
        "Access detailed reports to make informed decisions and grow your business.",
    },
    {
      bgColor: "bg-gradient-to-r from-cyan-300 to-blue-300",
      imgSrc: "https://www.hydrila.com/assets/images/featured-item-01.png",
      title: "Customer Support",
      description:
        "Dedicated support to help you maximize the potential of Hydrila.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10 px-4">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="w-full border border-slate-200 rounded-xl p-6"
        >
          <FeatureCard
            imgSrc={feature.imgSrc}
            bgColor={feature.bgColor}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
