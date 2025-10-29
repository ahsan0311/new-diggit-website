import React from "react";
import { Link } from "react-router-dom";

import {
  FaHandsHelping,
  FaShoppingCart,
  FaTruck,
  FaHome,
  FaMoneyBill,
  FaGraduationCap,
  FaPlane,
  FaCar,
  FaTv,
  FaIndustry,
  FaLandmark,
} from "react-icons/fa";
import PropCard from "./PropCard";

const iconsMap = {
  "hands-heart": FaHandsHelping,
  "shopping-cart": FaShoppingCart,
  package: FaTruck,
  "home-handshake": FaHome,
  "money-stack": FaMoneyBill,
  "graduation-cap": FaGraduationCap,
  airplane: FaPlane,
  car: FaCar,
  "tv-play": FaTv,
  factory: FaIndustry,
  "government-building": FaLandmark,
};

let cardsData = [
  {
    text: "Healthcare & Healthtech",
    image: "https://diggitglobal.com/assets/images/icon_15.png",
  },
  {
    text: "Retail & E-Commerce",
    image: "https://diggitglobal.com/assets/images/icon_9.png",
  },
  {
    text: "Logistics & Transportation",
    image: "https://diggitglobal.com/assets/images/icon_17.png",
  },
  {
    text: "Real Estate and Property",
    image: "https://diggitglobal.com/assets/images/icon_23.png",
  },
  {
    text: "Finance & Fintech",
    image: "https://diggitglobal.com/assets/images/icon_16.png",
  },
  {
    text: "Education & EdTech",
    image: "https://diggitglobal.com/assets/images/icon_20.png",
  },
  {
    text: "Hospitality & Travel",
    image: "https://diggitglobal.com/assets/images/icon_19.png",
  },
  {
    text: "Automotive Industry",
    image: "https://diggitglobal.com/assets/images/icon_24.png",
  },
  {
    text: "Media & Entertainment",
    image: "https://diggitglobal.com/assets/images/icon_21.png",
  },
  {
    text: "Manufacturing Industry",
    image: "https://diggitglobal.com/assets/images/icon_22.png",
  },
  {
    text: "Government & Public sectors",
    image: "https://diggitglobal.com/assets/images/icon_25.png",
  },
];

const AllCards = () => {
  const groups = [
    cardsData.slice(0, 4),
    cardsData.slice(4, 7),
    cardsData.slice(7, 11),
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 md:px-8 max-w-6xl mx-auto">
        {groups.map((group, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-6 justify-center items-center mb-6 w-full md:w-1/3"
          >
            {group.map((card, index) => (
              <PropCard
                key={`${colIndex}-${index}`}
                title={card.text}
                image={card.image}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mb-6 flex justify-center mt-10">
  <Link
    to="/contact"
    className="bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-amber-50 text-base md:text-lg font-sans font-[500] hover:bg-gray-800 transition text-center inline-block"
  >
    Startups & Saas
  </Link>
</div>
    </>
  );
};

export default AllCards;
