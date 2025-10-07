import React from "react";
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
import PricingPlans from '../../components/package/PricingPlans'
import VpsSavings from "../../components/branding/VpsSavings";
import Hero from "../../components/package/Hero";




const devOpsPlans = [
  {
    title: "DevOps Starter",
    price: "$80 - $120",
    billing: "monthly",
    features: [
      { label: "2‑4 GB RAM / 1‑2 CPU", included: true },
      { label: "50‑100 GB SSD Storage", included: true },
      { label: "2‑3 TB Bandwidth", included: true },
      { label: "CI/CD pipeline setup", included: true },
      { label: "Docker container support", included: true },
      { label: "Basic monitoring (Grafana/Prometheus)", included: true },
      { label: "SSH Access", included: true },
      { label: "Git-based deployments", included: true },
    ],
    activationFee: "One-time setup fee: $30",
    buttonText: "Choose DevOps Starter",
  },
  {
    title: "DevOps Pro",
    price: "$150 - $250",
    billing: "monthly",
    features: [
      { label: "8 GB RAM / 4 CPU", included: true },
      { label: "200 GB SSD Storage", included: true },
      { label: "5 TB Bandwidth", included: true },
      { label: "Managed CI/CD pipelines", included: true },
      { label: "Kubernetes (basic setup)", included: true },
      { label: "Infrastructure as Code (Terraform)", included: true },
      { label: "Integrated logging + monitoring", included: true },
      { label: "24/7 support (email/slack)", included: true },
    ],
    activationFee: "One-time setup fee: $50",
    buttonText: "Choose DevOps Pro",
  },
  {
    title: "DevOps Enterprise",
    price: "$400 - $700+",
    billing: "monthly",
    features: [
      { label: "32‑64 GB RAM / 8‑16 CPU", included: true },
      { label: "1 TB+ NVMe Storage", included: true },
      { label: "10 TB+ Bandwidth", included: true },
      { label: "Fully managed Kubernetes cluster", included: true },
      { label: "Custom CI/CD architecture", included: true },
      { label: "DevSecOps integration", included: true },
      { label: "Infrastructure audit & optimization", included: true },
      { label: "SLA-backed 24/7 DevOps support", included: true },
      { label: "Private Slack channel or dedicated engineer", included: true },
    ],
    activationFee: "One-time onboarding: $100",
    buttonText: "Choose DevOps Enterprise",
  },
];


const cloudPlans = [
  {
    title: "Cloud Basic",
    price: "$50 - $90",
    billing: "monthly",
    features: [
      { label: "2‑4 GB RAM / 1 CPU", included: true },
      { label: "50 GB SSD Storage", included: true },
      { label: "2 TB Bandwidth", included: true },
      { label: "Auto Backups", included: true },
      { label: "Basic Firewall", included: true },
      { label: "1-click App Deployment", included: true },
    ],
    activationFee: "Setup Fee: $20",
    buttonText: "Choose Cloud Basic",
  },
  {
    title: "Cloud Pro",
    price: "$120 - $200",
    billing: "monthly",
    features: [
      { label: "8 GB RAM / 2‑4 CPU", included: true },
      { label: "200 GB SSD Storage", included: true },
      { label: "5 TB Bandwidth", included: true },
      { label: "Daily Backups", included: true },
      { label: "Advanced Firewall & DDoS Protection", included: true },
      { label: "Multi-region Deployment", included: true },
    ],
    activationFee: "Setup Fee: $40",
    buttonText: "Choose Cloud Pro",
  },
  {
    title: "Cloud Enterprise",
    price: "$400 - $650",
    billing: "monthly",
    features: [
      { label: "32‑64 GB RAM / 8‑16 CPU", included: true },
      { label: "1 TB+ NVMe Storage", included: true },
      { label: "Unlimited Bandwidth", included: true },
      { label: "Load Balancers", included: true },
      { label: "Private Networking", included: true },
      { label: "24/7 Support with SLA", included: true },
      { label: "Custom Image Support", included: true },
    ],
    activationFee: "Onboarding Fee: $100",
    buttonText: "Choose Cloud Enterprise",
  },
];


const marketingPlans = [
  {
    title: "Marketing Starter",
    price: "$100 - $180",
    billing: "monthly",
    features: [
      { label: "SEO Optimization", included: true },
      { label: "2 Blog Posts / Month", included: true },
      { label: "Basic Social Media Setup", included: true },
      { label: "Email Campaign Setup", included: true },
      { label: "Google Analytics Reports", included: true },
    ],
    activationFee: "Setup Fee: $30",
    buttonText: "Choose Marketing Starter",
  },
  {
    title: "Marketing Pro",
    price: "$250 - $400",
    billing: "monthly",
    features: [
      { label: "SEO + Keyword Research", included: true },
      { label: "4 Blog Posts / Month", included: true },
      { label: "Full Social Media Management", included: true },
      { label: "Monthly Email Campaigns", included: true },
      { label: "Landing Page Optimization", included: true },
      { label: "Lead Generation Tools", included: true },
    ],
    activationFee: "Setup Fee: $50",
    buttonText: "Choose Marketing Pro",
  },
  {
    title: "Marketing Enterprise",
    price: "$700 - $1200",
    billing: "monthly",
    features: [
      { label: "Complete SEO Audit + Execution", included: true },
      { label: "8+ Blog Posts / Month", included: true },
      { label: "Paid Ads Management (Google + Meta)", included: true },
      { label: "Custom Sales Funnel Setup", included: true },
      { label: "Conversion Rate Optimization", included: true },
      { label: "Dedicated Marketing Manager", included: true },
      { label: "24/7 Campaign Monitoring", included: true },
    ],
    activationFee: "Onboarding Fee: $100",
    buttonText: "Choose Marketing Enterprise",
  },
];






const Packages = () => {

const plansStandard = devOpsPlans.slice(0, 3); 



  return (
    <>
      <Hero
      />

       <PricingPlans
        plansStandard={plansStandard}
         plansPerformance={cloudPlans}
  plansEnterprise={marketingPlans}
        showToggle={true}
        showHeader={false}
        showButtonInCard={true}
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
        cardHeight="h-[270px]"

        cards={[
          {
            title: "State-of-the-Art Processors",
            text: "  We use the latest enterprise Intel processor architecture for your fastest-growing workloads, real-time inference, and performance where you need it most, to help you build amazing things on the web.",
            
          },
          {
            title: "RAID 10 High Reliability",
            text: "We stripe and mirror your data to both improve performance and establish redundancy in case of hardware failure or corruption. This blends performance with potentially higher fault tolerance. Get the best of both worlds.",
          },
          {
            title: "24/7 Customer Support",
            text: "Our 24/7 support experts are ready to help you overcome challenges and get back to crafting exciting projects.",
          },
          {
            title: "14-Days Money-Back Guarantee",
            text: "Your satisfaction is our priority! Enjoy peace of mind with our 14-Days Money-Back Guarantee. Start experimenting with risk-free commitment.",
          },
          
          
        ]}
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


export default Packages;
