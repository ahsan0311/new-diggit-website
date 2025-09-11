import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../style/tabs.css";

const tabData = [
  {
    label: "Development",
    content: [
      {
        title: "Mobile App Development",
        path: "/mobile-app",
        items: [
          {
            subItems: ["iOS App Development", " Android App Development"],
          },
        ],
      },
      {
        title: "Web App Development",
        path: "/web-app",
        items: [
          {
            subItems: ["Custom Web Design", "Client Portal"],
          },
        ],
      },
      {
        title: "Website Development",
        path: "/web-development",
        items: [
          {
            subItems: [
              "Online Store Development",
              "Shopify",
              "Magento Development",
            ],
          },
        ],
      },
      {
        title: "Customized ERP Development",
        path: "/customize-erp",
        items: [
          {
            subItems: ["ERP", "CRM", "CMS"],
          },
        ],
      },
      {
        title: "AI & Machine Learning",
        items: [
          {
            subItems: ["AI Chabot", "Predective Analytics"],
          },
        ],
      },
    ],
  },
  {
    label: "Digital Marketing",
    content: [
      {
        title: "Social Media Marketing",
        path: "/social-media",
        items: [
          {
            icon: "📱",
            label: "Mobile Design",
            subItems: ["iOS", "Android"],
          },
        ],
      },
      {
        title: "SEO Marketing",
        path: "/seo",
        items: [
          {
            icon: "📱",
            label: "Mobile Design",
            subItems: ["iOS", "Android"],
          },
        ],
      },
      {
        title: "Email Marketing",
        path: "/email-marketing",
        items: [
          {
            icon: "📱",
            label: "Mobile Design",
            subItems: ["iOS", "Android"],
          },
        ],
      },
    ],
  },
  {
    label: "Branding",
    content: [
      {
        title: "Product Design",
        items: [
          {
            icon: "📱",
            label: "Mobile Design",
            subItems: ["iOS", "Android"],
          },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isTabsVisible, setIsTabsVisible] = useState(false);
  const location = useLocation();
  const activePage = location.pathname;

  const currentTab = tabData[activeTab];

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50">
      <div className="mx-auto p-4 flex items-center justify-around gap-[210px]">
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-[150px] h-[70px] object-contain"
          />
        </div>

        <div className="hidden md:flex items-center justify-between w-[744px] h-[60px] relative">
          <Link to="/" className="text-white hover:text-blue-500 text-[18px]">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-500 text-[18px]"
          >
            About
          </Link>

          <div
            className="services-hover"
            onMouseEnter={() => setIsTabsVisible(true)}
            onMouseLeave={() => setIsTabsVisible(false)}
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
          </div>

          <a href="#" className="text-white hover:text-blue-500 text-[18px]">
            Industries
          </a>
          <a href="#" className="text-white hover:text-blue-500 text-[18px]">
            GACS
          </a>
          <a
            href="#"
            className="bg-[#00317B] text-white px-[30px] py-3 rounded-full hover:bg-blue-700 text-[20px]"
          >
            Get free consultation
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </button>
        </div>
      </div>

      {isTabsVisible && (
        <div
          className="services-dropdown"
          onMouseEnter={() => setIsTabsVisible(true)}
          onMouseLeave={() => setIsTabsVisible(false)}
        >
          <div className="tabs-container">
            <div className="tab-bar">
              {tabData.map((tab, index) => (
                <button
                  key={index}
                  className={`tab-button ${
                    index === activeTab ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {currentTab.content.map((section, idx) => (
                <div className="tab-section" key={idx}>
                  <h3>
                    {section.path ? (
                      <Link to={section.path} className="text-black">
                        {section.title}
                      </Link>
                    ) : (
                      section.title
                    )}
                  </h3>
                  <div className="section-items">
                    {section.items.map((item, i) => (
                      <div className="tab-item" key={i}>
                        <ul className="sub-list">
                          {item.subItems.map((sub, si) => (
                            <li key={si}>
                              <Link to="#" className="hover:text-blue-500">
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700">
            Home
          </a>
          <a href="#" className="block text-gray-700">
            About
          </a>
          <a href="#" className="block text-gray-700">
            Services
          </a>
          <a href="#" className="block text-gray-700">
            Industries
          </a>
          <a href="#" className="block text-gray-700">
            GACS
          </a>
          <a
            href="#"
            className="block bg-blue-900 text-white px-4 py-2 rounded-full text-center"
          >
            Get free consultation
          </a>
        </div>
      )}
    </nav>
  );
}
