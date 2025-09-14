import { useState } from "react";

export default function FAQSection({
  heading = "FAQ",
  faqs = [
    {
      question: "How Much Does Mobile App Development Cost In Dubai?",
      answer:
        "The cost depends on the features, platform (iOS, Android, or both), and complexity. We offer custom mobile app development packages that fit different business needs and budgets—no bloated pricing.",
    },
    {
      question: "How Long Does It Take To Develop A Mobile App?",
      answer:
        "It depends on the complexity of the app. Simple apps may take 4–6 weeks, while complex ones could take several months including design, development, and testing.",
    },
    {
      question: "Do You Build Apps For Both IOS And Android?",
      answer:
        "Yes, we develop apps for both iOS and Android platforms using native or cross-platform technologies depending on your business needs.",
    },
    {
      question: "Can You Redesign Or Fix My Existing Mobile App?",
      answer:
        "Absolutely. We can audit, redesign, or rebuild your existing mobile app to align it with modern standards and performance requirements.",
    },
    {
      question: "What’s Included In Your Mobile App Development Services?",
      answer:
        "We offer complete mobile app solutions including design, development, testing, deployment, and maintenance post-launch.",
    },
  ],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mb-10">
      <h2 className="text-5xl font-bold text-center mb-10">{heading}</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg md:text-3xl font-semibold text-black">
                {faq.question}
              </span>

              {/* Custom SVG arrow icon */}
              <span
                className={`ml-4 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#212529"
                  width="20"
                  height="20"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
