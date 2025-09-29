import React from 'react'
import Hero from '../../components/develpoemnt/Hero'
import Contact from '../../components/Contact'
import PricingPlans from '../../components/package/PricingPlans'

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
     // 3 cards
const plansPerformance = [                          
  {
    title: "Performance Basic",
    price: "$100 - $150",
    billing: "monthly",
    features: [
      { label: "4‑8 GB RAM / 2‑4 CPU", included: true },
      { label: "150 GB SSD", included: true },
      { label: "3 TB Bandwidth", included: true },
      { label: "CI/CD + Docker", included: true },
      { label: "Monitoring tools", included: true },
      { label: "Staging environment", included: true },
      { label: "Basic scaling", included: true },
    ],
    activationFee: "Setup: $40",
    buttonText: "Choose Performance Basic",
  },
  {
    title: "Performance Pro",
    price: "$180 - $300",
    billing: "monthly",
    features: [
      { label: "8 GB RAM / 4‑6 CPU", included: true },
      { label: "300 GB SSD", included: true },
      { label: "6 TB Bandwidth", included: true },
      { label: "Kubernetes support", included: true },
      { label: "Custom pipelines", included: true },
      { label: "Advanced monitoring", included: true },
    ],
    activationFee: "Setup: $60",
    buttonText: "Choose Performance Pro",
  },
  {
    title: "Performance Max",
    price: "$350 - $500",
    billing: "monthly",
    features: [
      { label: "16‑32 GB RAM / 8 CPU", included: true },
      { label: "500 GB NVMe SSD", included: true },
      { label: "10 TB Bandwidth", included: true },
      { label: "Auto-scaling & Failover", included: true },
      { label: "Custom DevOps tooling", included: true },
      { label: "Dedicated DevOps engineer", included: true },
    ],
    activationFee: "Setup: $90",
    buttonText: "Choose Performance Max",
  },
];

const plansEnterprise = [
  {
    title: "Enterprise Essential",
    price: "$500 - $800",
    billing: "monthly",
    features: [
      { label: "32 GB RAM / 8 CPU", included: true },
      { label: "1 TB SSD", included: true },
      { label: "15 TB Bandwidth", included: true },
      { label: "Private GitLab CI/CD", included: true },
      { label: "On-call support", included: true },
      { label: "Compliance checks", included: true },
    ],
    activationFee: "Onboarding: $100",
    buttonText: "Choose Enterprise Essential",
  },
  {
    title: "Enterprise Plus",
    price: "$900 - $1200",
    billing: "monthly",
    features: [
      { label: "64 GB RAM / 16 CPU", included: true },
      { label: "2 TB NVMe SSD", included: true },
      { label: "Unlimited Bandwidth", included: true },
      { label: "Infrastructure design", included: true },
      { label: "24/7 SLA support", included: true },
    ],
    activationFee: "Onboarding: $150",
    buttonText: "Choose Enterprise Plus",
  },
  {
    title: "Enterprise Ultra",
    price: "$1500+",
    billing: "monthly",
    features: [
      { label: "128 GB RAM / 32 CPU", included: true },
      { label: "4 TB SSD RAID", included: true },
      { label: "Global CDN & WAF", included: true },
      { label: "Advanced DevSecOps", included: true },
      { label: "Custom security policies", included: true },
      { label: "Dedicated Slack + Engineer", included: true },
    ],
    activationFee: "Onboarding: $200",
    buttonText: "Choose Enterprise Ultra",
  },
];

const DevOps = () => {

const plansStandard = devOpsPlans.slice(0, 3); 
    
  return (
    <>
      <Hero  
        mainHeading={<>Empower Your Water Delivery Business with Hydrila</>}
        showSmallHeading={false}
        buttonText="Sign Up"
        description={<>Hydrila is a comprehensive software solution designed to streamline your <br /> mineral water delivery operations. Manage finances, sales, workers, and <br /> more with ease.</>}
      />

      <PricingPlans
        plansStandard={plansStandard}
        plansPerformance={plansPerformance}
        plansEnterprise={plansEnterprise}
        showToggle={true}
        showHeader={true}
        showButtonInCard={true}
      />

      <Contact />
    </>
  );
};


export default DevOps