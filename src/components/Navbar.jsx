// import React, { useEffect, useState, useRef } from "react";
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
//     label: "Cloud",
//     content: [
//       { title: "Providing VPS Server", path: "/providing-vps-server" },
//       { title: "Yearly Cloud Plan", path: "/yearly-cloud-plan" },
//       { title: "Cloud Solutions", path: "/cloud-solutions" },
//       { title: "DevOps & Automations", path: "/devops-automations" },
//       { title: "Hosting Plans", path: "/hosting-plans" },
//     ],
//   },
// ];

// import {
//   FaTint,
//   FaCashRegister,
//   FaTshirt,
//   FaServer,
//   FaCloud,
//   FaCogs,
// } from "react-icons/fa";
// import { createPortal } from "react-dom";

// export const packagesTabData = [
//   {
//     label: "Packages",
//     content: [
//       {
//         title: "Marketing",
//         path: "/marketing",
//         icon: <FaServer />,
//       },
//       {
//         title: "DevOps",
//         path: "/devOps",
//         icon: <FaCloud />,
//       },
//       {
//         title: "Cloud",
//         path: "/cloud",
//         icon: <FaCogs />,
//       },
//     ],
//   },
// ];
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
//   const [activeServiceTab, setActiveServiceTab] = useState(0);
//   const [isServicesVisible, setIsServicesVisible] = useState(false);
//   const [activeIndustryTab, setActiveIndustryTab] = useState(0);
//   const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
//   const location = useLocation();
//   const activePage = location.pathname;
//   const currentServiceTab = tabData[activeServiceTab];
//   const currentIndustryTab = industriesTabData[activeIndustryTab];
//   const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
//   const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
//   const [openServiceIndex, setOpenServiceIndex] = useState(null);
//   const [isPackagesVisible, setIsPackagesVisible] = useState(false);
//   const [isMobilePackagesOpen, setIsMobilePackagesOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const triggerRef = useRef(null);
//   const productsDropdownRef = useRef(null);
//   const productsTriggerRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsServicesVisible((prev) => !prev);
//   };

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
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         triggerRef.current &&
//         !triggerRef.current.contains(event.target)
//       ) {
//         setIsServicesVisible(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (
//       productsDropdownRef.current &&
//       !productsDropdownRef.current.contains(event.target) &&
//       productsTriggerRef.current &&
//       !productsTriggerRef.current.contains(event.target)
//     ) {
//       setIsIndustriesVisible(false);
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, []);


//   return (
//     <nav className="bg-transparent fixed top-0 w-full z-50 ">
//       <div className="mx-auto p-2 flex items-center max-w-[90%] justify-between px-10 nav-hd">
//         <div className="flex items-center h-[60px]">
//           <img
//             src="/assets/newLogo.png"
//             alt="Logo"
//             className="w-[100px]  object-contain"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <div className="nav-desktop  items-center mt-2  justify-between w-[600px] max-[1000px]:w-[500px] h-[60px] relative">
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
//             className="relative"
//             ref={triggerRef}
//             // onMouseEnter={() => setIsServicesVisible(true)}
//             // onMouseLeave={() => setIsServicesVisible(false)}
//             onClick={toggleDropdown}
//           >
//             <div className="text-white hover:text-blue-500 flex items-center text-[18px] cursor-pointer">
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
//             </div>

//             {/* Services Dropdown Content */}
//             {isServicesVisible && (
//               <div
//                 ref={dropdownRef}
//                 className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* <div className="tabs-container">
//                   <div className="tab-bar">
//                     {tabData.map((tab, index) => (
//                       <button
//                         key={index}
//                         className={`tab-button ${
//                           index === activeServiceTab ? "active" : ""
//                         }`}
//                         onClick={() => setActiveServiceTab(index)}
//                       >
//                         {tab.label}
//                       </button>
//                     ))}
//                   </div>
//                   <div className="tab-content">
//                     {currentServiceTab.content.map((section, idx) => (
//                       <div className="tab-section" key={idx}>
//                         <h3>
//                           <Link
//                             to={section.path}
//                             className="text-black max-[1315px]:text-2xl"
//                             onClick={() => setIsServicesVisible(false)}
//                           >
//                             {section.title}
//                           </Link>
//                         </h3>
//                       </div>
//                     ))}
//                   </div>
//                 </div> */}
//                 <div className="tabs-container relative  bg-gray-50 p-4 rounded">
//   <div className="tab-bar flex space-x-2">
//     {tabData.map((tab, index) => (
//       <div key={index} className="relative inline-block">
//         <button
//           className={`tab-button px-4 py-2  rounded ${
//             index === activeServiceTab ? "active" : ""
//           }`}
//           onClick={() =>
//             setActiveServiceTab(index === activeServiceTab ? null : index)
//           }
//         >
//           {tab.label}
//         </button>

//         {/* Dropdown restricted inside container */}
//         <div
//           className={`absolute left-0 top-full mt-2 shadow-md bg-white  overflow-auto max-h-60 transition-all duration-300 ease-in-out ${
//             index === activeServiceTab ? "opacity-100" : "opacity-0 max-h-0"
//           }`}
//           style={{ minWidth: "200px" }}
//         >
//           <ul className="flex flex-col">
//             {tab.content.map((section, idx) => (
//               <li key={idx} className="p-2 hover:bg-gray-100">
//                 <Link
//                   to={section.path}
//                   className="text-black"
//                   onClick={() => setIsServicesVisible(false)}
//                 >
//                   {section.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//               </div>
//             )}
//           </div>

//           {/* Industries Dropdown */}
//           <div
//             className="relative services-hover"
//             // onMouseEnter={() => setIsIndustriesVisible(true)}
//             // onMouseLeave={() => setIsIndustriesVisible(false)}

//             ref={productsTriggerRef}
//   onClick={() => setIsIndustriesVisible((prev) => !prev)} 
//           >
//             <button
              
//               className="text-white hover:text-blue-500 flex items-center text-[18px] cursor-pointer"
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
//             </button>

//             {/* Industries Dropdown Content */}
//             {isIndustriesVisible && (
//               <div ref={productsDropdownRef} className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
//                 <div className="tabs-container">
//                   <div className="tab-content-industry">
//                     {currentIndustryTab.content.map((section, idx) => (
//                       <div className="tab-section-industry" key={idx}>
//                         <h3>
//                           <Link
//                             to={section.path}
//                             onClick={() => setIsIndustriesVisible(false)}
//                             className="flex items-center gap-2 text-black max-[1315px]:text-2xl"
//                           >
//                             <span className="text-xl">{section.icon}</span>
//                             {section.title}
//                           </Link>
//                         </h3>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Packages Dropdown */}
//           {/* <div
//             className="relative services-hover"
//             onMouseEnter={() => setIsPackagesVisible(true)}
//             onMouseLeave={() => setIsPackagesVisible(false)}
//           >
//             <button
              
//               className="text-white hover:text-blue-500 flex items-center text-[18px]"
//             >
//               Packages
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

//             {isPackagesVisible && (
//               <div className="services-dropdown absolute top-full left-0 mt-0 bg-white shadow-lg">
//                 <div className="tabs-container">
//                   <div className="tab-content-industry">
//                     {packagesTabData[0].content.map((pkg, idx) => (
//                      <div className="tab-section-industry" key={idx}>
//                         <h3>
//                           <Link
//                             to={pkg.path}
//                             className="flex items-center gap-2 text-black max-[1315px]:text-2xl"
//                           >
//                             <span className="text-xl">{pkg.icon}</span>
//                             {pkg.title}
//                           </Link>
//                         </h3>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div> */}

//           <Link
//             to="/packages"
//             className="text-white hover:text-blue-500 text-[18px]"
//           >
//             Packages
//           </Link>

//           <Link
//             to="/contact"
//             className="text-white hover:text-blue-500 text-[18px]"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu */}
//         <div className="nav-mobile">
//           <button className=" mt-3" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <X size={24} color="white" />
//             ) : (
//               <Menu size={24} color="white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {isOpen &&
//         createPortal(
//           <div className="fixed inset-0 z-[9999] bg-black text-white w-[300px] h-full shadow-lg right-0">
//             <div className="flex justify-between items-center p-4  border-b border-gray-700">
//               <img src="/assets/newLogo.png" alt="Logo" className="w-[100px]" />
//               <button onClick={() => setIsOpen(false)}>
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="text-xl">
//               <Link
//                 to="/"
//                 className="block py-2 px-4 border-b border-gray-700 hover:text-blue-400"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className="block py-2 px-4 border-b  border-gray-700 hover:text-blue-400"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>
//               <div>
//                 <div
//                   className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
//                   onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
//                 >
//                   <span className="px-4">Services</span>
//                   <span className="px-4">
//                     {isMobileServicesOpen ? "×" : "+"}
//                   </span>
//                 </div>
//                 {isMobileServicesOpen && (
//                   <div className="bg-gray-800 px-4">
//                     {tabData.map((tab, i) => (
//                       <div key={i}>
//                         <div
//                           className="flex justify-between items-center py-2  border-b border-gray-700 hover:text-blue-400 cursor-pointer"
//                           onClick={() =>
//                             setOpenServiceIndex(
//                               openServiceIndex === i ? null : i
//                             )
//                           }
//                         >
//                           <span>{tab.label}</span>
//                           <span className="text-lg">
//                             {openServiceIndex === i ? "×" : "+"}
//                           </span>
//                         </div>

//                         {openServiceIndex === i && (
//                           <div className="space-y-1  ">
//                             {tab.content.map((service, idx) => (
//                               <Link
//                                 key={idx}
//                                 to={service.path}
//                                 className="block py-2 border-b border-gray-700 hover:text-blue-400"
//                                 onClick={() => setIsOpen(false)}
//                               >
//                                 {service.title}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <div
//                   className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
//                   onClick={() =>
//                     setIsMobileIndustriesOpen(!isMobileIndustriesOpen)
//                   }
//                 >
//                   <button className="px-4">
//                     Products
//                   </button>
//                   <span className="px-4">
//                     {isMobileIndustriesOpen ? "×" : "+"}
//                   </span>
//                 </div>
//                 {isMobileIndustriesOpen && (
//                   <div className="pl-6 py-2 space-y-2 bg-gray-900">
//                     {industriesTabData[0].content.map((industry, idx) => (
//                       <Link
//                         key={idx}
//                         to={industry.path}
//                         className="flex items-center gap-2 hover:text-blue-400"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         <span className="text-lg">{industry.icon}</span>
//                         {industry.title}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* <div>
//                 <div
//                   className="flex justify-between items-center py-2 cursor-pointer border-b border-gray-700"
//                   onClick={() => setIsMobilePackagesOpen(!isMobilePackagesOpen)}
//                 >
//                   <Link to="/packages">Packages</Link>
//                   <span>{isMobilePackagesOpen ? "×" : "+"}</span>
//                 </div>
//                 {isMobilePackagesOpen && (
//                   <div className="pl-6 py-2 space-y-2 bg-gray-900">
//                     {packagesTabData[0].content.map((pkg, idx) => (
//                       <Link
//                         key={idx}
//                         to={pkg.path}
//                         className="flex items-center gap-2 hover:text-blue-400"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         <span className="text-lg">{pkg.icon}</span>
//                         {pkg.title}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div> */}

//               <Link
//                 to="/packages"
//                 className="block py-2 px-4 border-b border-gray-700 hover:text-blue-400"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Packages
//               </Link>

//               <Link
//                 to="/contact"
//                 className="block py-2 px-4 border-b border-gray-700 hover:text-blue-400"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>,
//           document.body
//         )}
//     </nav>
//   );
// }


import React, { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTint,
  FaCashRegister,
  FaTshirt,
  FaServer,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import { createPortal } from "react-dom";
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
    label: "Cloud",
    content: [
      { title: "Providing VPS Server", path: "/providing-vps-server" },
      { title: "Yearly Cloud Plan", path: "/yearly-cloud-plan" },
      { title: "Cloud Solutions", path: "/cloud-solutions" },
      { title: "DevOps & Automations", path: "/devops-automations" },
      { title: "Hosting Plans", path: "/hosting-plans" },
    ],
  },
];

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
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  const [openProducts, setOpenProducts] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll effect for navbar
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

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50">
      <div className="mx-auto p-2 flex items-center max-w-[90%] justify-between px-10 nav-hd">
        <div className="flex items-center h-[60px]">
          <img
            src="/assets/newLogo.png"
            alt="Logo"
            className="w-[100px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="nav-desktop items-center mt-2 justify-between w-[600px] max-[1000px]:w-[500px] h-[60px] relative">
          <Link to="/" className="nav-link" onClick={closeAllDropdowns}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={closeAllDropdowns}>
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              className="nav-link flex items-center"
              onClick={() => toggleDropdown('services')}
            >
              Services
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {activeDropdown === 'services' && (
              <div
                ref={dropdownRef}
                className="dropdown-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="dropdown-content">
                  <div className="dropdown-tabs">
                    {tabData.map((tab, index) => (
                      <div key={index} className="dropdown-tab">
                        <h3 className="dropdown-tab-title">{tab.label}</h3>
                        <ul className="dropdown-tab-list">
                          {tab.content.map((section, idx) => (
                            <li key={idx}>
                              <Link
                                to={section.path}
                                className="dropdown-link"
                                onClick={closeAllDropdowns}
                              >
                                {section.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              className="nav-link flex items-center"
              onClick={() => toggleDropdown('products')}
            >
              Products
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {activeDropdown === 'products' && (
              <div
                ref={dropdownRef}
                className="dropdown-menu "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="dropdown-content">
                  <div className="dropdown-grid-p">
                    {industriesTabData[0].content.map((section, idx) => (
                      <Link
                        key={idx}
                        to={section.path}
                        className="dropdown-grid-item"
                        onClick={closeAllDropdowns}
                      >
                        <span className="dropdown-icon">{section.icon}</span>
                        <span>{section.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/packages" className="nav-link" onClick={closeAllDropdowns}>
            Packages
          </Link>

          <Link to="/contact" className="nav-link" onClick={closeAllDropdowns}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="nav-mobile">
          <button className="mt-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen &&
        createPortal(
          <MobileSidebar 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            closeAllDropdowns={closeAllDropdowns}
            openServiceIndex={openServiceIndex}
            setOpenServiceIndex={setOpenServiceIndex}
            openProducts={openProducts}
            setOpenProducts={setOpenProducts}
          />,
          document.body
        )}
    </nav>
  );
}

// Mobile Sidebar Component
function MobileSidebar({ 
  isOpen, 
  setIsOpen, 
  closeAllDropdowns,
  openServiceIndex,
  setOpenServiceIndex,
  openProducts,
  setOpenProducts
}) {

  const handleLinkClick = () => {
    closeAllDropdowns();
  };

  const toggleServices = (index) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  const toggleProducts = () => {
    setOpenProducts(!openProducts);
  };

  return (
    <div className="mobile-sidebar">
      {/* Fixed Header */}
      <div className="mobile-sidebar-header">
        {/* <img src="/assets/newLogo.png" alt="Logo" className="w-[100px]" /> */}
        <button onClick={() => setIsOpen(false)} style={{cursor:"pointer"}}>
          <X size={24} />
        </button>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="mobile-sidebar-scrollable">
        <div className="mobile-sidebar-content">
          <Link to="/" className="mobile-link" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="mobile-link" onClick={handleLinkClick}>
            About
          </Link>
          
          {/* Mobile Services Section */}
          <div className="mobile-dropdown-section">
            <button 
              className="mobile-dropdown-header"
              onClick={() => toggleServices('all')}
            >
              <span>Services</span>
              <span>{openServiceIndex !== null ? "−" : "+"}</span>
            </button>
            
            {openServiceIndex !== null && (
              <div className="mobile-dropdown-content">
                {tabData.map((tab, i) => (
                  <div key={i} className="mobile-tab-section">
                    <h4 className="mobile-tab-title">{tab.label}</h4>
                    <div className="mobile-tab-links">
                      {tab.content.map((service, idx) => (
                        <Link
                          key={idx}
                          to={service.path}
                          className="mobile-tab-link"
                          onClick={handleLinkClick}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile Products Section */}
          <div className="mobile-dropdown-section">
            <button 
              className="mobile-dropdown-header"
              onClick={toggleProducts}
            >
              <span>Products</span>
              <span>{openProducts ? "−" : "+"}</span>
            </button>
            
            {openProducts && (
              <div className="mobile-dropdown-content">
                {industriesTabData[0].content.map((product, idx) => (
                  <Link
                    key={idx}
                    to={product.path}
                    className="mobile-product-link"
                    onClick={handleLinkClick}
                  >
                    <span className="mobile-product-icon">{product.icon}</span>
                    <span>{product.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/packages" className="mobile-link" onClick={handleLinkClick}>
            Packages
          </Link>
          <Link to="/contact" className="mobile-link" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}