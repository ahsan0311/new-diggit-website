import React from 'react'
import ProductCard from '../../components/product/ProductCard'
import Contact from '../../components/Contact';
import Hero from '../../components/develpoemnt/Hero';
import Features from '../../components/hydrila/Features';
import FeaturesSection from '../../components/hydrila/FeatureCard';
import InfoSection from '../../components/hydrila/Info';
import PricingPlans from '../../components/hydrila/PricingCard';
import StatsSection from '../../components/hydrila/StatsSection';
import HowWeWork from '../../components/develpoemnt/WorkCards';
import Card from '../../components/Card';
import Timeline from '../../components/HowWeWork';

const Hydrila = () => {
  const products = [
    {
      name: "Nike Pegasus 41 shoes",
      category: "Sports",
      price: 189,
      offerPrice: 159,
      rating: 4,
      images: [
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
      ],
      description: [
        "High-quality material",
        "Comfortable for everyday use",
        "Available in different sizes",
      ],
    },
  ];

  const featuresData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8 mt-4"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      ),
      title: "Himalayan Water",
      smallTitle : "Business Owner",
      description:
        "Hydrila has been a game-changer for our delivery business. The reports and management tools are exceptional.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8 mt-4"
        >
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      ),
      title: "Refresh H2o Water",
      smallTitle : "Business Owner",

      description: "The software is easy to use and has significantly improved our efficiency. Highly recommended!",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-500 size-8 mt-4"
        >
          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <circle cx="17.5" cy="17.5" r="3.5" />
        </svg>
      ),
      title: "Fit Water",
      smallTitle : "Business Owner",
      description: "Hydrila has helped us streamline our operations and grow our business. The support team is fantastic!",
    },
  ];


  const plansData = [
  {
    title: "Starter",
    price: "PKR 2,500",
    billing: "monthly",
    features: [
      { label: "Up to 1 Salesman", included: true },
      { label: "Customer Limit Up to 150", included: true },
      { label: "Basic Modules Included", included: true },
      { label: "1. Products", included: true },
      { label: "2. Employees", included: true },
      { label: "3. Customers", included: true },
      { label: "4. CS Order Module", included: false },
      { label: "5. Accounts", included: true },
      { label: "6. Expenditure", included: true },
      { label: "7. Reports", included: true },
      { label: "8. Vendors", included: false },
      { label: "9. Stocks", included: false },
      { label: "10. Download All Bills", included: false },
      { label: "11. Whatsapp Notifications", included: false },
    ],
    activationFee: "One Time Activation Rs.5000/-",
    buttonText: "Get Started",
  },
  {
    title: "Professional",
    price: "PKR 4,500",
    billing: "monthly",
    features: [
      { label: "Up to 3 Salesman", included: true },
      { label: "Customer Limit Up to 300", included: true },
      { label: "9 Modules Included", included: true },
      { label: "1. Products", included: true },
      { label: "2. Employees", included: true },
      { label: "3. Customers", included: true },
      { label: "4. CS Order Module", included: false },
      { label: "5. Accounts", included: true },
      { label: "6. Expenditure", included: true },
      { label: "7. Reports", included: true },
      { label: "8. Vendors", included: true },
      { label: "9. Stocks", included: true },
      { label: "10. Download All Bills", included: false },
      { label: "11. Whatsapp Notifications", included: true },
    ],
    activationFee: "One Time Activation Rs.5000/-",
    buttonText: "Get Started",
  },
  {
    title: "Enterprise",
    price: "PKR 7,000",
    billing: "monthly",
    features: [
      { label: "Up to 5 Salesman", included: true },
      { label: "Customer Limit Up to 500", included: true },
      { label: "11 Modules Included", included: true },
      { label: "1. Products", included: true },
      { label: "2. Employees", included: true },
      { label: "3. Customers", included: true },
      { label: "4. CS Order Module", included: true },
      { label: "5. Accounts", included: true },
      { label: "6. Expenditure", included: true },
      { label: "7. Reports", included: true },
      { label: "8. Vendors", included: true },
      { label: "9. Stocks", included: true },
      { label: "10. Download All Bills", included: true },
      { label: "11. Whatsapp Notifications", included: true },
    ],
    activationFee: "One Time Activation Rs.5000/-",
    buttonText: "Get Started",
  },
  {
    title: "Customized",
    price: "PKR ****",
    billing: "monthly | yearly",
    features: [
      { label: "Up to requested Salesman", included: true },
      {
        label: "For every customer exceeding 500, a charge of PKR 13 will apply",
        included: true,
      },
      { label: "Requested Modules Included", included: true },
      { label: "1. Products", included: true },
      { label: "2. Employees", included: true },
      { label: "3. Customers Orders", included: true },
      { label: "4. Customers Registration", included: true },
      { label: "5. Accounts", included: true },
      { label: "6. Expenditure", included: true },
      { label: "7. Reports", included: true },
      { label: "8. Vendors", included: true },
      { label: "9. Stocks", included: true },
      { label: "10. Download All Bills", included: true },
      { label: "11. Whatsapp Notifications", included: true },
    ],
    activationFee: "One Time Activation Rs.5000/-",
    buttonText: "Get Started",
  },
];


  return (
    <div >
       <Hero  
       mainHeading={<>Empower Your Water Delivery Business with Hydrila</>}
       showSmallHeading={false}
       buttonText="Sign Up"
       description={<>Hydrila is a comprehensive software solution designed to streamline your <br /> mineral water delivery operations. Manage finances, sales, workers, and <br /> more with ease.</>}
       />
       
     

      <Features data={featuresData} />
      {/* <InfoSection
  title="Revolutionize Your Delivery Business"
  description="Hydrila is designed to help you manage every aspect of your mineral water delivery business. From tracking sales to managing workers, our software provides the tools you need to succeed."
  imgSrc="https://www.hydrila.com/assets/images/left-image.png"
/>

<InfoSection
  title="Grow Your Business with Ease"
  description="With Hydrila, you can focus on growing your business while we handle the complexities. Our software is intuitive, reliable, and tailored to meet the needs of water delivery vendors."
  imgSrc="https://www.hydrila.com/assets/images/right-image.png"
  reverse
/> */}
<Timeline />

<PricingPlans 
 plansStandard={plansData}
  plansPerformance={[]}
  showToggle={false}
  showHeader={true}
  showButtonInCard={true}
 />;
<StatsSection/>

      <FeaturesSection />
       {/* {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))} */}
      <Contact/>
    </div>
  );
};



export default Hydrila