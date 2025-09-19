import React from 'react';
import './Buttons.css'; // Normal CSS import

const Buttons = () => {
  return (
    <div className="hero-buttons">
      <a
        href="https://wa.me/6351849422"
        target="_blank"
        rel="noopener noreferrer"
        className="btn primary"
      >
        Plan on WhatsApp
      </a>
      <a href="#packages" className="btn secondary">
        Get Package Details
      </a>
    </div>
  );
};

export default Buttons;