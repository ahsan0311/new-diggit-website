import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="https://diggitglobal.com/assets/images/about_banner.png"
          alt="Background"
          className="w-full h-full object-cover object-[center_20%] rounded-b-[4rem] md:rounded-none"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent z-10"></div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-[-40px] left-0 w-full h-[200px] z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] mx-auto  min-h-screen  flex items-center justify-start px-4 sm:px-6 text-white text-start">
        <div className="max-w-5xl mt-15 ">
          <h3 className="text-3xl md:text-3xl font-semibold">
            Mobile App Development in Dubai
          </h3>
          <h1 className="text-7xl text-[#01a9eb] md:text-8xl font-extrabold mb-6 max-[585px]:text-5xl max-[401px]:text-4xl">
            People Actually <br />
            Want to Use
          </h1>

          <p className=" text-white  mb-8">
            We design and develop iOS, Android, and cross-platform apps that
            feel good to use and easy to maintain. Our mobile app development
            company in Dubai guarantees simple UX, sharp design, and tech that
            doesn’t fall apart.
          </p>

          <div className="flex justify-start">
            <button className="bg-[#00317B] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full text-lg transition duration-300">
              Explore our services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
