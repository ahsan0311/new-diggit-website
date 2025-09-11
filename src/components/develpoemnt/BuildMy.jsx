import React from "react";
import { Link } from "react-router-dom";

const BuildMy = () => {
  return (
    <section className="w-full py-16 bg-white">
       <div className="text-center">
         <div className="flex-shrink-0 mt-[10px] ">
          <Link
            to="" 
            className="bg-[#00317B] text-white text-base px-12 py-5 rounded-full hover:bg-blue-800 transition duration-300"
          >
            Start your project
          </Link>
        </div>
        <div className="flex-2 ">
          <h2 className="text-5xl font-bold text-black mb-4 mt-20">Built With the Best in Tech</h2>
        </div>
       </div>
    </section>
  );
};

export default BuildMy;
