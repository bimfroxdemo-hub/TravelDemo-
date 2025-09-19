import React from 'react';
import './SocialMediaSection.css'; // Is component ki CSS file

const SocialMediaSection = () => {
    return (
        <section className="social-section">
            <div className="social-container">
                <p className="social-text">
                    Join thousands of satisfied travelers on social media
                </p>
                <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">@texttile_travels</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Follow our journey</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Share your experience</a>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;