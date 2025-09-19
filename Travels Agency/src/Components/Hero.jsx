import React from 'react';
import './Hero.css';
import Buttons from './Buttons.jsx';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Journey in <span>Style</span>
        </h1>
        {/* Neeche "World" ko span mein daala gaya hai */}
        <h2>
          Explore the <span>World</span>
        </h2>
        <p className="subtitle">Luxury Tours, Curated Experiences</p>
        <p className="description">
          Discover breathtaking destinations with premium comfort and unforgettable memories.
        </p>
        <Buttons />
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;