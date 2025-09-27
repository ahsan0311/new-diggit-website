import React, { useState } from "react";

const VpsSavings = ({ plans }) => {
  const planKeys = Object.keys(plans);
  const [activePlan, setActivePlan] = useState(planKeys[0]); // default first

  const current = plans[activePlan];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
        See what you can save!
      </h2>

      {/* CPU Toggle Buttons */}
      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {planKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActivePlan(key)}
            className={`px-6 py-3 rounded-md border text-sm md:text-base font-medium ${
              activePlan === key
                ? "bg-gradient-to-tr from-sky-400 to-sky-600 text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <div className="font-semibold uppercase">{key.replace("cpu", "")} CPUs</div>
            <div className="text-xs">{plans[key].specs}</div>
          </button>
        ))}
      </div>

      {/* Pricing Comparison */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-8 border-t border-b py-10">
        <div className="text-center">
          <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">SSD Nodes</div>
          <div className="text-xl font-bold">{current.ssdNodes}</div>
          <div className="text-sm text-gray-500">{current.cycle}</div>
        </div>

        {current.providers.map((p, idx) => (
          <div key={idx} className="text-center md:pl-8 ">
            <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{p.name}</div>
            <div className="text-black font-semibold">{p.save}</div>
            <div className="text-black text-sm">{p.percent}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-600 mt-6">
        *Check our latest price comparison article{" "}
        <a href="#" className="text-blue-600 underline">here</a> for more details
      </p>
      <p className="text-md font-semibold text-black mt-2">
        Saver’s Tip: Get up to 25% Multi-Server Discounts!
      </p>
    </div>
  );
};

export default VpsSavings;
