import "../../style/propCard.css"

const PropCard = ({ title, image }) => {
  return (
  <div className="prop-card bg-gradient-to-r from-cyan-300 to-blue-300 rounded-3xl p-6 w-full max-w-xs flex flex-col items-center text-center md:items-start md:text-left shadow-md">
  <div className="mb-4 w-16 h-16 flex justify-center md:justify-start image-flip">
    <div className="image-inner">
      <div className="image-front">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="image-back">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
    </div>
  </div>

  <h2 className="text-white font-[500] font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug break-words w-full min-h-[72px]">
    {title}
  </h2>
</div>

  );
};

export default PropCard;
