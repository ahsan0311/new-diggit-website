import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#323B42] text-white px-8 md:px-16 py-12 w-full">
      <div className="max-w-[1300px] mx-auto">
        <img
          src="/assets/newLogo.png"
          alt="DIGGIT Logo"
          className="w-[100px]"
        />
      </div>

      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between gap-12  ">
        <div className="flex-2 ">
          <h2 className="text-4xl font-bold text-white">
            Empowering Your Business <br />
            with{" "}
            <span className="text-[#00AEEF] font-extrabold">
              Digital Innovation
            </span>
          </h2>
          <p className="mt-6 text-base text-gray-300 max-w-md leading-7 font-medium">
            From Custom Software Development to AI Solutions and Mobile App
            Development, we transform your ideas into powerful digital solutions
            that drive success and elevate your brand.
          </p>
          <p className="mt-5 text-base text-gray-300 font-medium">
            Ready to bring your digital vision to life?
          </p>
          <p className="mt-2 text-base text-gray-300 font-medium">
            Get in touch with us today and let’s turn your digital dreams into
            reality!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 ">
          <h3 className="text-[#00AEEF] font-extrabold text-2xl mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3 text-base text-gray-300 font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Location Columns */}
        <div className="flex-[2] grid max-[770px]:grid-cols-2 grid-cols-2 text-base text-gray-300 font-medium">
          {/* Dubai */}
           <div className="">
            <h4 className="text-[#00AEEF] font-extrabold text-2xl mb-3">
              Pakistan
            </h4>
            <p className="font-bold text-xl mb-2">
              ATS Global Solutions
            </p>
            <p className="mb-3">
              207 Sumya Business Avenue, 11-B, Mohammad Ali Society, Karachi,
              Pakistan
            </p>
          </div>

         
         
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto text-gray-300 text-sm ">
        {/* Top Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center  md:items-center gap-6 max-[768px]:border-t-[2px] max-[768px]:border-[#00AEEF]
         max-[768px]:mt-2
      
         "
        >
          <div className="text-center md:text-left">
            <h3 className="text-blue-400 font-extrabold text-3xl mb-2">
              Contact
            </h3>

            <p className="mb-1">92 319 2033 051</p>
            <p>Info@atsglobalsolutions.com </p>
          </div>

          <div className="flex gap-3 mb-[-40px] max-[768px]:mb-[10px]">
            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              <Link to="https://www.instagram.com/ats_globalsolutions
"><FaInstagram /></Link>
            </div>
            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              
              <Link to="https://www.facebook.com/profile.php?id=61558656503098
"><FaFacebookF /></Link>
            </div>
            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              
              <Link to="https://www.linkedin.com/company/real-ats-global-solutions/
"><FaLinkedinIn /></Link>

            </div>
            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              
              <Link to="https://www.youtube.com/channel/UCAFT_ZzpmSxO0-J_jcTQ_YA "><FaYoutube /></Link>

            </div>
            {/* <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center text-white text-lg hover:scale-105 cursor-pointer transition">
              
              <Link to=""><FaTiktok /></Link>

            </div> */}
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-3 border border-[#00A8E7]" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          {/* Left Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>

          {/* Right Copyright */}
          <div>Copyright © 2025 DIGGIT Solution. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
