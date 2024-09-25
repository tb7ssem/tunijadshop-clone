// src/components/HeroSection.js
import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, buttonText }) => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button>{buttonText}</button>
        </div>
        <div className="hero-image">
          {/* You can add an image here if needed */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
