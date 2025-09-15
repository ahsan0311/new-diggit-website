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

const Devops_Automation = () => {
  return (
    <>
      <Hero
        smallHeading="DevOps & Automation Services"
        mainHeading={<>Scale Faster. Deploy Smarter.</>}
        description={
          <>
            Manual deployments waste time and cause errors. Diggit’s DevOps & 
            automation services <br /> streamline your CI/CD pipelines, 
            infrastructure, and monitoring. <br />
            We help engineering teams, startups, and enterprises <br /> 
            automate workflows from code to cloud with zero hassle.
          </>
        }
        buttonText="Start DevOps Automation"
      />

      <BuildMy heading="We Use the Best in DevOps Tech" showButton={false} />

      <LogoMarquee
        logos={[
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
          "https://diggitglobal.com/assets/images/logo_19.png",
          "https://diggitglobal.com/assets/images/logo_20.png",
          "https://diggitglobal.com/assets/images/logo_21.png",
        ]}
        slidesToShow={6}
        speed={3000}
      />

      <WhyWorkSection
        title="Our DevOps & Automation Services"
        description={
          <>
            We help businesses speed up releases, reduce downtime, and 
            scale infrastructure with confidence. <br /> 
            Our DevOps automation services cover everything from CI/CD 
            to monitoring and security.
          </>
        }
        buttonText="Automate My Infrastructure"
        cards={[
          {
            title: "CI/CD Pipeline Setup",
            text: "We design and implement CI/CD pipelines that automate your builds, tests, and deployments. Faster releases, fewer errors, and reliable rollouts."
          },
          {
            title: "Infrastructure as Code (IaC)",
            text: "We build repeatable, version-controlled infrastructure using tools like Terraform, Ansible, and AWS CloudFormation for scalable environments."
          },
          {
            title: "Cloud Automation",
            text: "Automate your cloud workloads with scripts and workflows. From auto-scaling to backup management, we make your cloud work smarter."
          },
          {
            title: "Monitoring & Alerts",
            text: "Stay ahead of issues with smart monitoring tools like Prometheus, Grafana, and ELK stack. We set up alerts to fix problems before users notice."
          },
          {
            title: "Containerization & Orchestration",
            text: "We containerize your apps with Docker and orchestrate them using Kubernetes for faster scaling, better reliability, and easier management."
          },
          {
            title: "Security Automation",
            text: "Integrate automated security scans and compliance checks into your pipelines, ensuring safe and secure deployments every time."
          },
          {
            title: "Custom Workflow Automation",
            text: "Every team works differently. We create custom scripts and workflows to reduce manual tasks, save time, and improve efficiency."
          },
        ]}
      />

      <NoMoreSilos
        heading="More Engineers Won’t Fix Slow Releases. Automation Will."
        buttonText="Start Automating Now"
      />

      <InfoSection
        title="A.C.T Framework for DevOps Automation"
        paragraphs={[
          `Most DevOps setups fail because they’re ad-hoc, manual, or unscalable. At Diggit, 
          we use the A.C.T framework — Automate, Containerize, Track — 
          to ensure reliability, speed, and visibility across your infrastructure.`
        ]}
      />

      <SearchSection
        letters={["A", "C", "T"]}
        heading="Automate First"
        paragraph="We start by automating repetitive tasks like testing, deployments, and monitoring so your team can focus on building, not fixing."
        buttonText="Fix My DevOps Pipeline"
        buttonLink="#growth"
        showParagraph={true}
      />

      <FAQSection
        faqs={[
          {
            question: "What is DevOps automation?",
            answer:
              "DevOps automation means using tools and scripts to reduce manual work in software development and IT operations. It covers CI/CD, monitoring, and infrastructure setup."
          },
          {
            question: "Do you set up CI/CD pipelines?",
            answer:
              "Yes. We build and optimize CI/CD pipelines for reliable, repeatable deployments with tools like GitHub Actions, Jenkins, GitLab CI, and Azure DevOps."
          },
          {
            question: "Can you manage cloud infrastructure?",
            answer:
              "Definitely. We automate AWS, Azure, and GCP environments using Infrastructure as Code (IaC) to make scaling and managing cloud simple."
          },
          {
            question: "Will automation work with my existing setup?",
            answer:
              "Yes. We integrate DevOps automation into your current stack, so you don’t have to rebuild everything. Our approach is flexible and non-disruptive."
          },
          {
            question: "Which tools do you use?",
            answer:
              "We work with Terraform, Ansible, Docker, Kubernetes, Jenkins, GitHub Actions, Prometheus, Grafana, ELK, and more — depending on your business needs."
          },
        ]}
      />

      <Contact
        heading="We Can Make Your Infrastructure Run on Autopilot."
        highlightText="Our DevOps & automation services help you release faster, scale smarter, and reduce downtime. If you're ready to future-proof your systems, we’re here to help."
        buttonText="Talk to a DevOps Expert"
      />
    </>
  );
};

export default Devops_Automation;
