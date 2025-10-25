// import React, { useState } from "react";

// const PricingCard = ({
//   title,
//   price,
//   billing,
//   features,
//   activationFee,
//   buttonText,
//   showButton,
// }) => {
//   return (
//     <div className="w-95 min-h-[600px] rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-300 p-6 flex flex-col">
//       <div className="flex flex-col items-center border-b border-gray-300 pb-6">
//         <span className="mb-6 text-gray-800 text-lg font-semibold">
//           {title}
//         </span>
//         <span className="mb-1 text-3xl font-bold">{price}</span>
//         <span className="text-gray-500 text-sm">{billing}</span>
//       </div>

//       <div className="space-y-4 py-6 flex-1">
//         {features.map((feature, idx) => (
//           <div key={idx} className="flex items-start gap-3">
//             <span className="grid size-5 place-content-center rounded-full text-sm">
//               {feature.included ? "✔️" : "❌"}
//             </span>
//             <span
//               className={`text-sm ${
//                 feature.included
//                   ? "text-gray-700"
//                   : "text-gray-400 line-through"
//               }`}
//             >
//               {feature.label}
//             </span>
//           </div>
//         ))}
//       </div>

//       {activationFee && (
//         <p className="text-center text-sm text-gray-500 mb-4">
//           {activationFee}
//         </p>
//       )}

//       {showButton && (
//         <button className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium hover:bg-indigo-600 transition">
//           {buttonText}
//         </button>
//       )}
//     </div>
//   );
// };

// const TripleToggleSwitch = ({ active, onToggle }) => {
//   return (
//     <div className="flex mb-6 justify-center">
//       <div className="flex rounded-full bg-gradient-to-tr from-sky-400 to-sky-600 p-1 w-[500px]">
//         <button
//           onClick={() => onToggle("devops")}
//           className={`flex-1 px-4 py-3 rounded-full text-base font-semibold transition ${
//             active === "devops" ? "bg-white text-gray-900" : "text-white"
//           }`}
//         >
//           DevOps
//         </button>
//         <button
//           onClick={() => onToggle("cloud")}
//           className={`flex-1 px-4 py-3 rounded-full text-base font-semibold transition ${
//             active === "cloud" ? "bg-white text-gray-900" : "text-white"
//           }`}
//         >
//           Cloud
//         </button>
//         <button
//           onClick={() => onToggle("marketing")}
//           className={`flex-1 px-4 py-3 rounded-full text-base font-semibold transition ${
//             active === "marketing" ? "bg-white text-gray-900" : "text-white"
//           }`}
//         >
//           Marketing
//         </button>
//       </div>
//     </div>
//   );
// };

// const PricingPlans = ({
//   plansStandard = [],
//   plansPerformance = [],
//   plansEnterprise = [],
//   showToggle = true,
//   showHeader = true,
//   showButtonInCard = true,
// }) => {
//   const [activePlan, setActivePlan] = useState("devops");
//   let currentPlans = [];
//   if (activePlan === "devops") currentPlans = plansStandard;
//   else if (activePlan === "cloud") currentPlans = plansPerformance;
//   else if (activePlan === "marketing") currentPlans = plansEnterprise;

//   return (
//     <div className="py-10 max-w-7xl mx-auto px-4">
//       {showHeader && (
//         <>
//           <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
//             Pricing
//           </h1>
//           <p className="text-center text-gray-400 md:text-lg mt-2 mb-6">
//             Use it for free for yourself, upgrade when your team needs advanced
//             control.
//           </p>
//         </>
//       )}

//       {showToggle && (
//         <TripleToggleSwitch active={activePlan} onToggle={setActivePlan} />
//       )}

//       <div className="flex justify-around gap-3 flex-wrap mt-10">
//         {currentPlans.map((plan, idx) => (
//           <PricingCard key={idx} {...plan} showButton={showButtonInCard} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;



import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const PricingCard = ({
  title,
  price,
  billing,
  features,
  activationFee,
  buttonText,
  showButton,
}) => {
  return (
    <div className="w-95 min-h-[600px] rounded-2xl bg-gradient-to-r from-cyan-300 to-blue-300 p-6 flex flex-col">
      <div className="flex flex-col items-center border-b border-gray-300 pb-6">
        <span className="mb-6 text-gray-800 text-lg font-semibold">
          {title}
        </span>
        <span className="mb-1 text-3xl font-bold">{price}</span>
        <span className="text-gray-500 text-sm">{billing}</span>
      </div>

      <div className="space-y-4 py-6 flex-1">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="grid size-5 place-content-center rounded-full text-sm">
              {feature.included ? "✔️" : "❌"}
            </span>
            <span
              className={`text-sm ${
                feature.included
                  ? "text-gray-700"
                  : "text-gray-400 line-through"
              }`}
            >
              {feature.label}
            </span>
          </div>
        ))}
      </div>

      {activationFee && (
        <p className="text-center text-sm text-gray-500 mb-4">
          {activationFee}
        </p>
      )}

      {/* ✅ Replaced button with Link */}
      {showButton && (
        <Link
          to="/contact"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-medium hover:bg-indigo-600 transition text-center inline-block"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

const TripleToggleSwitch = ({ active, onToggle }) => {
  return (
    <div className="flex mb-6 justify-center">
      <div className="flex rounded-full bg-gradient-to-tr from-sky-400 to-sky-600 p-1 w-[500px]">
        <button
          onClick={() => onToggle("devops")}
          className={`flex-1 px-4 py-3 rounded-full text-base font-semibold transition ${
            active === "devops" ? "bg-white text-gray-900" : "text-white"
          }`}
        >
          DevOps
        </button>
        <button
          onClick={() => onToggle("cloud")}
          className={`flex-1 px-4 py-3 rounded-full text-base font-semibold transition ${
            active === "cloud" ? "bg-white text-gray-900" : "text-white"
          }`}
        >
          Cloud
        </button>
        <button
          onClick={() => onToggle("marketing")}
          className={`flex-1 px-4 py-3 rounded-full text-base font-semibold transition ${
            active === "marketing" ? "bg-white text-gray-900" : "text-white"
          }`}
        >
          Marketing
        </button>
      </div>
    </div>
  );
};

const PricingPlans = ({
  plansStandard = [],
  plansPerformance = [],
  plansEnterprise = [],
  showToggle = true,
  showHeader = true,
  showButtonInCard = true,
}) => {
  const [activePlan, setActivePlan] = useState("devops");

  let currentPlans = [];
  if (activePlan === "devops") currentPlans = plansStandard;
  else if (activePlan === "cloud") currentPlans = plansPerformance;
  else if (activePlan === "marketing") currentPlans = plansEnterprise;

  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      {showHeader && (
        <>
          <h1 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Pricing
          </h1>
          <p className="text-center text-gray-400 md:text-lg mt-2 mb-6">
            Use it for free for yourself, upgrade when your team needs advanced
            control.
          </p>
        </>
      )}

      {showToggle && (
        <TripleToggleSwitch active={activePlan} onToggle={setActivePlan} />
      )}

      <div className="flex justify-around gap-3 flex-wrap mt-10">
        {currentPlans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} showButton={showButtonInCard} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
