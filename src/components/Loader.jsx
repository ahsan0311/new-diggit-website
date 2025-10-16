import React, { useEffect, useState } from "react";

const Loader = () => {
  const [text, setText] = useState("");
  const message = "ATS GLOBAL";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= message.length) {
        setText(message.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <h1 className="text-6xl font-extrabold text-blue-500 tracking-widest flex items-center">
        {text}
        <span className="ml-1 w-2 h-12 bg-blue-500 animate-pulse"></span>
      </h1>
    </div>
  );
};

export default Loader;
