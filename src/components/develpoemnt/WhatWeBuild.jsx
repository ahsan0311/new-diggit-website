import React from "react";
import { Link } from "react-router-dom";

const WhatWeBuild = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Content */}
        <div className="flex-2 ">
          <h2 className="text-5xl font-bold text-black mb-4">What We Build</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            As a mobile app design and development company in Dubai, our job is to make sure your app works for your users, your team, and your business.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you’re building something new or replacing something that’s no longer cutting it, we help you launch apps that are fast, reliable, and easy to manage across iOS, Android, or both.
          </p>
        </div>

        {/* Right Button */}
        <div className="flex-shrink-0 mt-[140px] max-[768px]:mt-[-10px]">
          <Link
            to="" 
            className="bg-[#00317B] text-white text-base px-8 py-4 rounded-full hover:bg-blue-800 transition duration-300"
          >
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
