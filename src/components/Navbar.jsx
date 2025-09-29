// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import "../style/tabs.css";

// const tabData = [
//   {
//     label: "Development",
//     content: [
//       { title: "Mobile App Development", path: "/mobile-app" },
//       { title: "Web App Development", path: "/web-app" },
//       { title: "Website Development", path: "/web-development" },
//       { title: "Customized ERP Development", path: "/customize-erp" },
//     ],
//   },
//   {
//     label: "Digital Marketing",
//     content: [
//       { title: "Social Media Marketing", path: "/social-media" },
//       { title: "SEO Marketing", path: "/seo" },
//       { title: "Email Marketing", path: "/email-marketing" },
//     ],
//   },
//   {
//     label: "Branding",
//     content: [
//       { title: "Providing VPS Server", path: "/providing-vps-server" },
//       { title: "Yearly Cloud Plan", path: "/yearly-cloud-plan" },
//       { title: "Cloud Solutions", path: "/cloud-solutions" },
//       { title: "DevOps & Automations", path: "/devops-automations" },
//       { title: "Hosting Plans", path: "/hosting-plans" },
//     ],
//   },
// ];

// import { FaTint, FaCashRegister, FaTshirt } from "react-icons/fa";
// export const industriesTabData = [
//   {
//     label: "Products",
//     content: [
//       {
//         title: "Hydrila (Water Delivery Software)",
//         path: "/Hydrila",
//         icon: <FaTint />,
//       },
//       {
//         title: "POS (Point of Sale)",
//         path: "/Point-Of-Sale",
//         icon: <FaCashRegister />,
//       },
//       {
//         title: "Laundry Management",
//         path: "/Laundary-management",
//         icon: <FaTshirt />,
//       },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Services tabs
//   const [activeServiceTab, setActiveServiceTab] = useState(0);
//   const [isServicesVisible, setIsServicesVisible] = useState(false);

//   // Industries tabs
//   const [activeIndustryTab, setActiveIndustryTab] = useState(0);
//   const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);

//   const location = useLocation();
//   const activePage = location.pathname;

//   const currentServiceTab = tabData[activeServiceTab];
//   const currentIndustryTab = industriesTabData[activeIndustryTab];

//   // New states for mobile only
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
//   const [openServiceIndex, setOpenServiceIndex] = useState(null);

//   // Navbar scroll style
//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector(".nav-hd");
//       if (window.scrollY > 10) {
//         nav?.classList.add("active");
//       } else {
//         nav?.classList.remove("active");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="bg-transparent fixed top-0 w-full z-50 ">
//       <div className="mx-auto p-4 flex items-center max-w-[90%] justify-between px-10 nav-hd">
//         <div className="flex items-center">
//           <img
//             src="/assets/logo.png"
//             alt="Logo"
//             className="w-[150px] h-[70px] object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="nav-desktop  items-center justify-between w-[600px] max-[1000px]:w-[500px] h-[60px] relative">
//           <Link to="/" className="text-white hover:text-blue-500 text-[18px]">
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-white hover:text-blue-500 text-[18px]"
//           >
//             About
//           </Link>

//           {/* Services Dropdown */}
//           <div
//             className="services-hover"
//             onMouseEnter={() => setIsServicesVisible(true)}
//             onMouseLeave={() => setIsServicesVisible(false)}
//           >
//             <button className="text-white hover:text-blue-500 flex items-center text-[18px]">
//               Services
//               <svg
//                 className="ml-1 w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//           </div>

//           {/* Industries Dropdown */}
//           {/* Industries Dropdown */}
//           <div
//             className="services-hover"
//             onMouseEnter={() => setIsIndustriesVisible(true)}
//             onMouseLeave={() => setIsIndustriesVisible(false)}
//           >
//             <Link
//               to="/product"
//               className="text-white hover:text-blue-500 flex items-center text-[18px]"
//             >
//               Products
//               <svg
//                 className="ml-1 w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </Link>
//           </div>

//           <Link to="/contact" className="text-white hover:text-blue-500 text-[18px]">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu */}
//         <div className="nav-mobile">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <X size={24} color="white" />
//             ) : (
//               <Menu size={24} color="white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Services Dropdown Content */}
//       {isServicesVisible && (
//         <div
//           className="services-dropdown"
//           onMouseEnter={() => setIsServicesVisible(true)}
//           onMouseLeave={() => setIsServicesVisible(false)}
//         >
//           <div className="tabs-container">
//             <div className="tab-bar">
//               {tabData.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`tab-button ${
//                     index === activeServiceTab ? "active" : ""
//                   }`}
//                   onClick={() => setActiveServiceTab(index)}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             <div className="tab-content">
//               {currentServiceTab.content.map((section, idx) => (
//                 <div className="tab-section" key={idx}>
//                   <h3>
//                     <Link
//                       to={section.path}
//                       className="text-black max-[1315px]:text-2xl"
//                     >
//                       {section.title}
//                     </Link>
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Industries Dropdown Content */}
//       {isIndustriesVisible && (
//         <div
//           className="services-dropdown"
//           onMouseEnter={() => setIsIndustriesVisible(true)}
//           onMouseLeave={() => setIsIndustriesVisible(false)}
//         >
//           <div className="tabs-container">
//             <div className="tab-content-industry">
//               {currentIndustryTab.content.map((section, idx) => (
//                 <div className="tab-section-industry" key={idx}>
//                   <h3 className="">
//                     <Link
//                       to={section.path}
//                       className="flex items-center gap-2 text-black max-[1315px]:text-2xl "
//                     >
//                       <span className="text-xl">{section.icon}</span>
//                       {section.title}
//                     </Link>
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-black text-white w-[280px] h-full shadow-lg right-0">
//           {/* Header */}
//           <div className="flex justify-between items-center p-4 border-b border-gray-700">
//             <img src="/assets/logo.png" alt="Logo" className="w-[100px]" />
//             <button onClick={() => setIsOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           {/* Sidebar Items */}
//           <div className="p-4 space-y-2">
//             {/* Home */}
//             <Link
//               to="/"
//               className="block py-2 border-b border-gray-700 hover:text-blue-400"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </Link>

//             {/* About */}
//             <Link
//               to="/about"
//               className="block py-2 border-b border-gray-700 hover:text-blue-400"
//               onClick={() => setIsOpen(false)}
//             >
//               About
//             </Link>

//             {/* Services Accordion */}
//             <div>
//               <div
//                 className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
//                 onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//               >
//                 <span>Services</span>
//                 <span>{isMobileServicesOpen ? "×" : "+"}</span>
//               </div>

//               {/* Show service categories */}
//               {isMobileServicesOpen && (
//                 <div className="pl-4 py-2 bg-gray-900">
//                   {tabData.map((tab, i) => (
//                     <div key={i}>
//                       {/* Parent service category */}
//                       <div
//                         className="flex justify-between items-center py-2 cursor-pointer"
//                         onClick={() =>
//                           setOpenServiceIndex(openServiceIndex === i ? null : i)
//                         }
//                       >
//                         <span>{tab.label}</span>
//                         <span>{openServiceIndex === i ? "×" : "+"}</span>
//                       </div>

//                       {/* Sub-items only if active */}
//                       {openServiceIndex === i && (
//                         <div className="ml-4 space-y-1">
//                           {tab.content.map((service, idx) => (
//                             <Link
//                               key={idx}
//                               to={service.path}
//                               className="block hover:text-blue-400"
//                               onClick={() => setIsOpen(false)}
//                             >
//                               {service.title}
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Industries Accordion */}
//             <div>
//               <div
//                 className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
//                 onClick={() =>
//                   setIsMobileIndustriesOpen(!isMobileIndustriesOpen)
//                 }
//               >
//                 <Link to="/product">Products</Link>
//                 <span>{isMobileIndustriesOpen ? "×" : "+"}</span>
//               </div>

//               {isMobileIndustriesOpen && (
//                 <div className="pl-6 py-2 space-y-2 bg-gray-900">
//                   {industriesTabData[0].content.map((industry, idx) => (
//                     <Link
//                       key={idx}
//                       to={industry.path}
//                       className="flex items-center gap-2 hover:text-blue-400"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <span className="text-lg">{industry.icon}</span>
//                       {industry.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Contact */}
//             <Link
//               to="/contact"
//               className="block py-2 border-b border-gray-700 hover:text-blue-400"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../style/tabs.css";

const tabData = [
  {
    label: "Development",
    content: [
      { title: "Mobile App Development", path: "/mobile-app" },
      { title: "Web App Development", path: "/web-app" },
      { title: "Website Development", path: "/web-development" },
      { title: "Customized ERP Development", path: "/customize-erp" },
    ],
  },
  {
    label: "Digital Marketing",
    content: [
      { title: "Social Media Marketing", path: "/social-media" },
      { title: "SEO Marketing", path: "/seo" },
      { title: "Email Marketing", path: "/email-marketing" },
    ],
  },
  {
    label: "Branding",
    content: [
      { title: "Providing VPS Server", path: "/providing-vps-server" },
      { title: "Yearly Cloud Plan", path: "/yearly-cloud-plan" },
      { title: "Cloud Solutions", path: "/cloud-solutions" },
      { title: "DevOps & Automations", path: "/devops-automations" },
      { title: "Hosting Plans", path: "/hosting-plans" },
    ],
  },
];

import {
  FaTint,
  FaCashRegister,
  FaTshirt,
  FaServer,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import { createPortal } from "react-dom";

export const packagesTabData = [
  {
    label: "Packages",
    content: [
      {
        title: "Marketing",
        path: "/marketing",
        icon: <FaServer />,
      },
      {
        title: "DevOps",
        path: "/devOps",
        icon: <FaCloud />,
      },
      {
        title: "Cloud",
        path: "/cloud",
        icon: <FaCogs />,
      },
    ],
  },
];
export const industriesTabData = [
  {
    label: "Products",
    content: [
      {
        title: "Hydrila (Water Delivery Software)",
        path: "/Hydrila",
        icon: <FaTint />,
      },
      {
        title: "POS (Point of Sale)",
        path: "/Point-Of-Sale",
        icon: <FaCashRegister />,
      },
      {
        title: "Laundry Management",
        path: "/Laundary-management",
        icon: <FaTshirt />,
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const location = useLocation();
  const activePage = location.pathname;
  const currentServiceTab = tabData[activeServiceTab];
  const currentIndustryTab = industriesTabData[activeIndustryTab];
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  const [isPackagesVisible, setIsPackagesVisible] = useState(false);
  const [isMobilePackagesOpen, setIsMobilePackagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav-hd");
      if (window.scrollY > 10) {
        nav?.classList.add("active");
      } else {
        nav?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50 ">
      <div className="mx-auto p-4 flex items-center max-w-[90%] justify-between px-10 nav-hd">
        <div className="flex items-center ">
          <img
            src="/assets/newLogo.png"
            alt="Logo"
            className="w-[100px]  object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="nav-desktop  items-center  justify-between w-[600px] max-[1000px]:w-[500px] h-[60px] relative">
          <Link to="/" className="text-white hover:text-blue-500 text-[18px]">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-500 text-[18px]"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative services-hover"
            onMouseEnter={() => setIsServicesVisible(true)}
            onMouseLeave={() => setIsServicesVisible(false)}
          >
            <button className="text-white hover:text-blue-500 flex items-center text-[18px]">
              Services
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Services Dropdown Content */}
            {isServicesVisible && (
              <div className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg">
                <div className="tabs-container">
                  <div className="tab-bar">
                    {tabData.map((tab, index) => (
                      <button
                        key={index}
                        className={`tab-button ${
                          index === activeServiceTab ? "active" : ""
                        }`}
                        onClick={() => setActiveServiceTab(index)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                  <div className="tab-content">
                    {currentServiceTab.content.map((section, idx) => (
                      <div className="tab-section" key={idx}>
                        <h3>
                          <Link
                            to={section.path}
                            className="text-black max-[1315px]:text-2xl"
                          >
                            {section.title}
                          </Link>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative services-hover"
            onMouseEnter={() => setIsIndustriesVisible(true)}
            onMouseLeave={() => setIsIndustriesVisible(false)}
          >
            <Link
              to="/product"
              className="text-white hover:text-blue-500 flex items-center text-[18px]"
            >
              Products
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>

            {/* Industries Dropdown Content */}
            {isIndustriesVisible && (
              <div className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg">
                <div className="tabs-container">
                  <div className="tab-content-industry">
                    {currentIndustryTab.content.map((section, idx) => (
                      <div className="tab-section-industry" key={idx}>
                        <h3>
                          <Link
                            to={section.path}
                            className="flex items-center gap-2 text-black max-[1315px]:text-2xl"
                          >
                            <span className="text-xl">{section.icon}</span>
                            {section.title}
                          </Link>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Packages Dropdown */}
          {/* <div
            className="relative services-hover"
            onMouseEnter={() => setIsPackagesVisible(true)}
            onMouseLeave={() => setIsPackagesVisible(false)}
          >
            <button
              
              className="text-white hover:text-blue-500 flex items-center text-[18px]"
            >
              Packages
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {isPackagesVisible && (
              <div className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg">
                <div className="tabs-container">
                  <div className="tab-content-industry">
                    {packagesTabData[0].content.map((pkg, idx) => (
                     <div className="tab-section-industry" key={idx}>
                        <h3>
                          <Link
                            to={pkg.path}
                            className="flex items-center gap-2 text-black max-[1315px]:text-2xl"
                          >
                            <span className="text-xl">{pkg.icon}</span>
                            {pkg.title}
                          </Link>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div> */}

          <Link
            to="/packages"
            className="text-white hover:text-blue-500 text-[18px]"
          >
            Packages
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-blue-500 text-[18px]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="nav-mobile">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </button>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-black text-white w-[280px] h-full shadow-lg right-0">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <img src="/assets/newLogo.png" alt="Logo" className="w-[100px]" />
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <Link
                to="/"
                className="block py-2 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Services</span>
                  <span>{isMobileServicesOpen ? "×" : "+"}</span>
                </div>
                {isMobileServicesOpen && (
                  <div className="pl-4 py-2 bg-gray-900">
                    {tabData.map((tab, i) => (
                      <div key={i}>
                        <div
                          className="flex justify-between items-center py-2 cursor-pointer"
                          onClick={() =>
                            setOpenServiceIndex(
                              openServiceIndex === i ? null : i
                            )
                          }
                        >
                          <span>{tab.label}</span>
                          <span>{openServiceIndex === i ? "×" : "+"}</span>
                        </div>
                        {openServiceIndex === i && (
                          <div className="ml-4 space-y-1">
                            {tab.content.map((service, idx) => (
                              <Link
                                key={idx}
                                to={service.path}
                                className="block hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
                  onClick={() =>
                    setIsMobileIndustriesOpen(!isMobileIndustriesOpen)
                  }
                >
                  <Link to="/product">Products</Link>
                  <span>{isMobileIndustriesOpen ? "×" : "+"}</span>
                </div>
                {isMobileIndustriesOpen && (
                  <div className="pl-6 py-2 space-y-2 bg-gray-900">
                    {industriesTabData[0].content.map((industry, idx) => (
                      <Link
                        key={idx}
                        to={industry.path}
                        className="flex items-center gap-2 hover:text-blue-400"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg">{industry.icon}</span>
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* <div>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
                  onClick={() => setIsMobilePackagesOpen(!isMobilePackagesOpen)}
                >
                  <Link to="/packages">Packages</Link>
                  <span>{isMobilePackagesOpen ? "×" : "+"}</span>
                </div>
                {isMobilePackagesOpen && (
                  <div className="pl-6 py-2 space-y-2 bg-gray-900">
                    {packagesTabData[0].content.map((pkg, idx) => (
                      <Link
                        key={idx}
                        to={pkg.path}
                        className="flex items-center gap-2 hover:text-blue-400"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg">{pkg.icon}</span>
                        {pkg.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div> */}

               <Link
                to="/packages"
                className="block py-2 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </Link>

              <Link
                to="/contact"
                className="block py-2 border-b border-gray-700 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}
