import React from "react";
import "../style/silo.css";

const NoMoreSilos = ({
  heading = " Say Goodbye to Disconnected Systems",
  paragraph = "Empower your business with technology that unifies operations, speeds up workflows, and delivers seamless user experiences. Partner with us to build smarter, scalable solutions tailored to your growth.",
  buttonText = " Start Your Project Today",
  onButtonClick = () => {},
}) => {
  return (
    <div className="no-more-silos-container">
      
      <div className="floating-image">
        <img src="https://diggitglobal.com/assets/images/vector_3.png" alt="Floating Cube" />
      </div>

      <section className="silos-section">
        <div className="silos-content">
          <h2 className="silo-heading">{heading}</h2>
          <p className="silo-paragraph">{paragraph}</p>
          <button className="silo-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </section>

    </div>
  );
};

export default NoMoreSilos;
