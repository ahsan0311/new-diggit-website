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
           <Link to="/">
      <img
        src="/assets/newLogo.png"
        alt="Logo"
        className="w-[100px] object-contain cursor-pointer"
      />
    </Link>
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