import React from "react";
import { Rocket } from "lucide-react"; // Icon import

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create your account and get started.",
    },
    {
      title: "Set Up",
      description: "Add products, customers and salesman.",
    },
    {
      title: "Manage",
      description: "Track sales, workers, and finances.",
    },
    {
      title: "Analyze",
      description: "Generate reports and gain insights.",
    },
    {
      title: "Insights",
      description: "Dashboard to monitor sales and revenue.",
    },
    {
      title: "Grow",
      description: "Scale your business effortlessly.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-cyan-300 to-blue-300 py-20">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
          Hydrila simplifies your workflow with a seamless process designed to
          save you time and effort.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Gradient Icon */}
              <Rocket
                size={40}
                className="mb-3 text-blue-500 "
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
