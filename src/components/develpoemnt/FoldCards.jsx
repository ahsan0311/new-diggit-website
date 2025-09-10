import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
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

export default function FoldCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const cardHeight = 400;
    const gap = 50;
    const numCards = cards.length;
    const numSegments = numCards - 1;
    const sectionDuration = 1 / numSegments; 

    gsap.set(cards, {
      y: (i) => i * (cardHeight + gap),
      opacity: 1,
      scale: 1,
      zIndex: (i) => i, 
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${numSegments * (cardHeight + gap)}`, 
      scrub: 0.5, 
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
  const progress = self.progress;
  const peek = 8; 

  const progresses = new Array(numCards).fill(0);
  for (let i = 1; i < numCards; i++) {
    const cardProgress = Math.max(0, (progress - (i - 1) * sectionDuration) / sectionDuration);
    progresses[i] = Math.min(1, cardProgress);
  }

  let cumulativeOffset = 0;
  for (let i = 1; i < numCards; i++) {
    cumulativeOffset += progresses[i] * (cardHeight + gap - peek); 
    const yPosition = i * (cardHeight + gap) - cumulativeOffset;

    gsap.to(cards[i], {
      y: yPosition,
      duration: 0.1,
      overwrite: true,
      ease: "none",
    });
  }
}

    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef}  className="relative w-full max-w-7xl mx-auto pt-32">
     <div
  className="relative w-full"
    style={{ height: `${(cardsData.length - 1) * (60 + 50)}px` }}
>

        {cardsData.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute w-full h-[400px] rounded-xl shadow-xl px-10 py-6 text-white flex items-center justify-between border-2 border-gray-800 will-change-transform"
            style={{
              backgroundColor: i % 2 === 0 ? "#000" : "#00317B",
              top: 0,
              left: 0,
              zIndex: i,
            }}
          >
            <div className="w-1/2">
              <h2 className="text-4xl font-bold mb-4">{card.title}</h2>
              <p className="text-gray-300 text-lg">{card.description}</p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={card.image} alt={card.title} className="w-[280px] h-auto object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}