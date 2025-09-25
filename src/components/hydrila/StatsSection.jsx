import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "20", label: "Happy Clients" },
    { number: "1000", label: "Deliveries Managed" },
    { number: "50", label: "Countries Supported" },
    { number: "24.7", label: "Support Available" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-cyan-300 to-blue-300 py-16">
      {/* Overlay background */}
      <div className="absolute bg-gradient-to-r from-cyan-300 to-blue-300"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold whywork-title text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{stat.number}</span>
              <span className="mt-2 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
