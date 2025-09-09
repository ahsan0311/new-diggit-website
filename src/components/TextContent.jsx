import React from "react";

const TextContent = ({ heading, subheading, description }) => {
 return (
  <div className="text-center w-[1100px] mb-6 max-w-full rounded-xl mx-auto text-black ">
  <h1 className="text-3xl md:text-5xl font-bold  mb-4">
  {heading}
  <br />
  {subheading}
</h1>


<p className="text-sm md:text-base leading-relaxed mx-auto">
  {description}
</p>

</div>

  );
};

export default TextContent;
