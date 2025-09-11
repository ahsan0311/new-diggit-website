import React from 'react'
import Hero from '../../components/develpoemnt/Hero'
import WhatWeBuild from '../../components/develpoemnt/WhatWeBuild'
import FoldCards from '../../components/develpoemnt/FoldCards'
import LogoMarquee from '../../components/develpoemnt/Marwuee'
import BuildMy from '../../components/develpoemnt/BuildMy'
import WorkCards from '../../components/develpoemnt/WorkCards'
import AllCards from '../../components/develpoemnt/AllCards'
import FAQSection from '../../components/develpoemnt/Faqs'
import Contact from '../../components/Contact'

const cardsForPage1 = [
  {
    title: "iOS App Development",
    description:
      "We build iOS apps that are smooth, secure, and ready for the App Store. Our iOS apps use the latest tech to deliver great user experience and performance.",
    image: "https://diggitglobal.com/assets/images/IOS.png",
  },
  {
    title: "Android App Development",
    description:
      "We create Android apps that run well across a wide range of devices, no bugs, no weird crashes. Our team focuses on speed, usability, and consistency.",
    image: "https://diggitglobal.com/assets/images/android.png",
  },
  {
    title: "Cross Platform Native App Development",
    description:
      "If you want native-like performance without managing separate codebases, our cross platform native app development approach is the way to go.",
    image: "https://diggitglobal.com/assets/images/native.png",
  },
  {
    title: "React Native Mobile App Architecture",
    description:
      "A solid app starts with solid structure. We design React Native mobile app architecture that's flexible, easy to maintain, and ready to grow with you.",
    image: "https://diggitglobal.com/assets/images/react_native_arch.png",
  },
  {
    title: "Custom Mobile Solutions",
    description:
      "Tailored mobile solutions designed to perfectly match your unique business needs and deliver excellent user engagement.",
    image: "https://diggitglobal.com/assets/images/native_app_design.png",
  },
];
const SocialMedia = () => {
  return (
    <>
    <Hero/>
    <WhatWeBuild/>
    <FoldCards cardsData={cardsForPage1} containerHeight="600px"/>
    <BuildMy/>
    <LogoMarquee/>
    <AllCards/>
    <WorkCards/>
    <FAQSection/>
    <Contact/>
    </>
  )
}

export default SocialMedia