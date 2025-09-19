import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';
import Counter from './Counter.jsx';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(statsRef.current);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <section className="about-section" id="about"> {/* Id added for navigation */}
            <div className="about-container">
                <div className="sub-heading">
                    <span>ABOUT TEXTTILE TRAVELS</span>
                </div>
                <h2 className="main-heading">
                    Designing <span>Timeless</span> Adventures
                </h2>
                <p className="about-text">
                    For more than 15 years, Texttile Travels has been redefining the art of exploration, serving as a trusted partner for travelers who seek authenticity and sophistication. Every journey we create is a work of art — thoughtfully designed, seamlessly executed, and tailored to reflect your unique aspirations
                </p>
                <p className="about-text">
                    From intimate escapes and thrilling adventures to immersive cultural encounters, we specialize in experiences that transcend the ordinary. With an unwavering commitment to excellence, trust, and personalized service, we transform travel into unforgettable stories worth cherishing for a lifetime.
                </p>

                <div className="stats-container" ref={statsRef}>
                    {/* Happy Travelers */}
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        {isVisible && <Counter end={10000} duration={2000} suffix="+" />}
                        <p>Happy Travelers</p>
                    </div>

                    {/* Countries */}
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        {isVisible && <Counter end={20} duration={2000} suffix="+" />}
                        <p>Countries</p>
                    </div>

                    {/* Years Experience */}
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                        </div>
                        {isVisible && <Counter end={15} duration={2000} suffix="+" />}
                        <p>Years Experience</p>
                    </div>

                    {/* Rating - now with decimal counter */}
                    <div className="stat-item">
                        <div className="stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        {isVisible && <Counter end={4.9} duration={2000} decimals={1} />}
                        <p>Rating</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;