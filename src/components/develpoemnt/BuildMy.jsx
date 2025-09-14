import React from "react";
import { Link } from "react-router-dom";

const BuildMy = ({
  heading = "Built With the Best in Tech",
  buttonText = "Start your project",
  buttonLink = "#",
  showButton = true,
}) => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="text-center">
        {/* Button */}
        {showButton && (
          <div className="flex-shrink-0 mt-[10px]">
            <Link
              to={buttonLink}
              className="bg-[#00317B] text-white text-xl px-12 py-5 rounded-full hover:bg-blue-800 transition duration-300"
            >
              {buttonText}
            </Link>
          </div>
        )}

        {/* Heading */}
        <div className="flex-2">
          <h2
            className={`text-5xl font-bold text-black mb-4 ${
              showButton ? "mt-20" : "mt-0"
            }`}
          >
            {heading}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BuildMy;
