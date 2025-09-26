import React from "react";
import Hero from "../../components/develpoemnt/Hero";
import WhatWeBuild from "../../components/develpoemnt/WhatWeBuild";
import FoldCards from "../../components/develpoemnt/FoldCards";
import LogoMarquee from "../../components/develpoemnt/Marwuee";
import BuildMy from "../../components/develpoemnt/BuildMy";
import FAQSection from "../../components/develpoemnt/Faqs";
import Contact from "../../components/Contact";
import WhyWorkSection from "../../components/develpoemnt/WhyWorkSection";
import SearchSection from "../../components/digitalMarketing/SearchSection";
import NoMoreSilos from "../../components/NoMoreSilos";
import InfoSection from "../../components/develpoemnt/InfoSection";
import PricingPlans from "../../components/hydrila/PricingCard";

const Hosting = () => {

  // Example plansData based on “Shared Hosting / Basic Tier” image data

const sharedHostingPlans = [
  {
    title: "Starter Shared",
    price: "$8 - $12",
    billing: "monthly",
    features: [
      { label: "1 GB RAM / 1 CPU", included: true },
      { label: "20‑30 GB SSD Storage", included: true },
      { label: "1 TB Bandwidth / Transfer", included: true },
      { label: "1 site / small site", included: true },
      { label: "Free SSL", included: true },
      { label: "Basic support", included: true },
      { label: "Daily backup", included: true },
    ],
    activationFee: null,
    buttonText: "Choose Starter",
  },
  {
    title: "Business Shared",
    price: "$15 - $25",
    billing: "monthly",
    features: [
      { label: "2 GB RAM / 1‑2 CPU", included: true },
      { label: "50‑60 GB SSD Storage", included: true },
      { label: "2‑3 TB Bandwidth / Transfer", included: true },
      { label: "Up to 3 sites", included: true },
      { label: "Free SSL", included: true },
      { label: "Staging", included: true },
      { label: "Moderate support", included: true },
      { label: "Free migration", included: true },
    ],
    activationFee: null,
    buttonText: "Choose Business",
  },
  {
    title: "Premium Shared",
    price: "$30 - $50",
    billing: "monthly",
    features: [
      { label: "4 GB RAM / 2 CPUs", included: true },
      { label: "100‑120 GB SSD Storage", included: true },
      { label: "5 TB Bandwidth / Transfer", included: true },
      { label: "Up to 5‑10 sites", included: true },
      { label: "Faster I/O", included: true },
      { label: "Caching", included: true },
      { label: "Higher support (maybe 24/7)", included: true },
      { label: "Some performance guarantees", included: true },
    ],
    activationFee: null,
    buttonText: "Choose Premium",
  },

  // ✅ New Plans from the image:
  {
    title: "Isolated Small",
    price: "$60 - $90",
    billing: "monthly",
    features: [
      { label: "4‑8 GB RAM / 2‑4 CPU", included: true },
      { label: "120‑200 GB SSD Storage", included: true },
      { label: "5‑6 TB Bandwidth / Transfer", included: true },
      { label: "Dedicated container or VM", included: true },
      { label: "Isolated environment", included: true },
      { label: "Full SSH / root access", included: true },
      { label: "Backup retention", included: true },
      { label: "Monitoring", included: true },
    ],
    activationFee: null,
    buttonText: "Choose Isolated",
  },
  {
    title: "Dedicated Standard",
    price: "$120 - $200",
    billing: "monthly",
    features: [
      { label: "16 GB RAM / 4‑6 CPU", included: true },
      { label: "300‑500 GB SSD Storage", included: true },
      { label: "8‑10 TB Bandwidth / Transfer", included: true },
      { label: "Dedicated server or VM", included: true },
      { label: "Guaranteed resources", included: true },
      { label: "Enhanced support", included: true },
      { label: "Staging environment (maybe)", included: true },
      { label: "Disaster recovery", included: true },
      { label: "Load balancing (maybe)", included: true },
    ],
    activationFee: null,
    buttonText: "Choose Dedicated",
  },
  {
    title: "High Performance / Enterprise",
    price: "$300 - $500+",
    billing: "monthly",
    features: [
      { label: "32‑64 GB RAM / 8‑16 CPU", included: true },
      { label: "1 TB+ SSD Storage", included: true },
      { label: "10‑20 TB+ Bandwidth / Transfer", included: true },
      { label: "Full dedicated server", included: true },
      { label: "High SLAs", included: true },
      { label: "Premium network", included: true },
      { label: "Custom DevOps support", included: true },
      { label: "Migrations", included: true },
      { label: "Performance tuning", included: true },
      { label: "Priority SLA", included: true },
    ],
    activationFee: null,
    buttonText: "Choose Enterprise",
  },
];


// Phir aap <PricingPlans plans={sharedHostingPlans} /> ka use kar sakte hain

  return (
    <>
      <Hero
        smallHeading="Cloud & VPS Hosting Services"
        mainHeading={<>Reliable Hosting Plans for Every Business</>}
        description={
          <>
            Fast, secure, and scalable hosting solutions tailored to your needs. 
            Diggit provides high-performance VPS and Cloud Hosting with 99.9% uptime, 
            24/7 expert support, and flexible plans. Whether you’re a startup or an enterprise, 
            we’ve got the right hosting solution for you.
          </>
        }
        buttonText="View Hosting Plans"
      />
      <BuildMy heading="We Use the Best in Hosting Tech" showButton={false} />

      <LogoMarquee
        logos={[
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_22.png",
          "https://diggitglobal.com/assets/images/logo_23.png",
        ]}
        slidesToShow={6}
      />

      <WhyWorkSection
        title="Our Hosting Services"
        description={
          <>
            Choose from our flexible VPS and Cloud Hosting plans designed to keep your 
            business online and running smoothly. From small businesses to enterprise-grade 
            setups, we deliver performance, security, and scalability.
          </>
        }
        buttonText="Explore Hosting Plans"
        cards={[
          {
            title: "VPS Hosting",
            text: "Dedicated resources, full control, and unmatched performance for growing businesses that need more than shared hosting.",
          },
          {
            title: "Cloud Hosting",
            text: "Scalable, reliable, and built to handle traffic spikes. Pay only for what you use and grow without limits.",
          },
          {
            title: "Managed Hosting",
            text: "Let our experts handle updates, backups, and server monitoring so you can focus on your business.",
          },
          {
            title: "Business Hosting",
            text: "Perfect for eCommerce stores, SaaS, and SMEs who need faster speeds and guaranteed uptime.",
          },
          {
            title: "Enterprise Hosting",
            text: "Custom hosting solutions with advanced security, high availability, and dedicated support teams.",
          },
          {
            title: "Reseller Hosting",
            text: "Launch your own hosting business with our reseller plans, complete with white-label branding.",
          },
        ]}
      />

      <NoMoreSilos
        heading="Stop Worrying About Downtime.
Start Scaling with Confidence."
        buttonText="Get a Hosting Plan"
      />

      <InfoSection
        title="Why Choose Diggit Hosting?"
        paragraphs={[
          `Our hosting infrastructure is built to deliver unmatched speed, uptime, and security. 
           With data centers worldwide and 24/7 monitoring, we ensure your business stays online, 
           no matter what.`,
        ]}
      />

      <PricingPlans plans={sharedHostingPlans} />

      <SearchSection
        letters={["S", "A", "F", "E"]}
        heading="Secure. Affordable. Fast. Easy."
        paragraph="From startups to enterprises, we make hosting simple, scalable, and worry-free. Pick a plan that grows with your business."
        buttonText="See Hosting Plans"
        buttonLink="#plans"
        showParagraph={true}
      />

      <FAQSection
        faqs={[
          {
            question: "What type of hosting do you offer?",
            answer:
              "We offer VPS Hosting, Cloud Hosting, Managed Hosting, Reseller Hosting, and Enterprise-grade custom hosting solutions.",
          },
          {
            question: "Do you provide 24/7 support?",
            answer:
              "Yes, our hosting support team is available 24/7 to resolve technical issues and ensure smooth operations.",
          },
          {
            question: "Can I upgrade my hosting plan later?",
            answer:
              "Absolutely. Our hosting plans are fully scalable, so you can upgrade or downgrade based on your needs without downtime.",
          },
          {
            question: "Do you provide free SSL and backups?",
            answer:
              "Yes, all our hosting plans come with free SSL certificates and automated daily backups for added security.",
          },
          {
            question: "Where are your servers located?",
            answer:
              "We have multiple data centers worldwide, including UAE, Europe, and the US, to ensure fast and reliable performance globally.",
          },
        ]}
      />

      <Contact
        heading="Power Your Business with Reliable Hosting."
        highlightText="Our VPS and Cloud Hosting plans are built for speed, security, and scalability. Start today and experience the difference."
        buttonText="Talk to a Hosting Expert"
      />
    </>
  );
};


export default Hosting;
