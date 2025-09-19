import React, { useState, useEffect, useRef } from 'react';
import './TestimonialsSection.css';
import SectionHeader from './SectionHeader.jsx';
import Counter from './Counter.jsx';

// Image ko import karein
import rahulImg from '../assets/rahul.jpeg';
import veerImg from '../assets/veer.jpg';
import ankitImg from '../assets/ankit.jpeg';
import rajProfileImg from '../assets/raj-profile.jpg'; // Iska naam 'raj.jpg' ya 'raj-profile.jpg' rakhein

// Data for testimonials (Corrected)
const testimonialsData = [
    {
        id: 1,
        stars: 5,
        text: "Kerala backwaters trip with kids was wonderfully managed. The houseboat was luxurious and the cultural experiences were enriching. Highly recommend for family vacations!",
        package: "Kerala Backwaters Tour",
        author: "Rahul Rai",
        location: "Surat",
        initials: "RR", // <-- Initials theek kiye gaye
        image: rahulImg,
    },
    {
        id: 2,
        stars: 5,
        text: "The Europe tour was beyond our expectations. Every hotel, every transfer, every experience was seamlessly organized. The team's expertise really showed throughout our journey.",
        package: "European Grand Tour",
        author: "Veer Patel",
        location: "Delhi",
        initials: "VP", // <-- Initials theek kiye gaye
        image: veerImg,
    },
    {
        id: 3,
        stars: 5,
        text: "Dubai trip was phenomenal! From Burj Khalifa to desert safari, everything was top-notch. The WhatsApp support during the trip was incredibly helpful.",
        package: "Dubai Luxury Trip",
        author: "Ankit Mourya",
        location: "Gorakhpur", // <-- Capitalization theek ki gayi
        initials: "AM",
        image: ankitImg,
    },
    {
        id: 4,
        stars: 5,
        text: "Our Maldives honeymoon was absolutely magical! Texttile Travels arranged everything perfectly - from the overwater villa to the private dinners. The attention to detail was exceptional.",
        package: "Maldives Honeymoon Package",
        author: "Raj Lilawala",
        location: "Mumbai",
        initials: "RL", // <-- Initials theek kiye gaye
        image: rajProfileImg,
    },
];

// StarRating component ko bahar define karna behtar practice hai
const StarRating = ({ count }) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        );
    }
    return <div className="star-rating">{stars}</div>;
};

const TestimonialsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.5 });

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <SectionHeader
                    subHeading="TESTIMONIALS"
                    mainHeading="What Our Travelers Say"
                    description="Read authentic stories from our happy travelers who experienced the magic of professionally curated journeys with Texttile Travels."
                />

                <div className="stats-bar" ref={statsRef}>
                    <div className="stat-item">
                        {isVisible && <Counter end={500} duration={2000} suffix="+" />}
                        <p>5-Star Reviews</p>
                    </div>
                    <div className="stat-item">
                        {isVisible && <Counter end={98} duration={2000} suffix="%" />}
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className="stat-item">
                        {isVisible && <Counter end={4.9} duration={2000} decimals={1} suffix="/5" />}
                        <p>Average Rating</p>
                    </div>
                    <div className="stat-item">
                        {isVisible && <Counter end={85} duration={2000} suffix="%" />}
                        <p>Repeat Customers</p>
                    </div>
                </div>

                <div className="testimonials-grid">
                    {testimonialsData.map(testimonial => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="testimonial-content-wrapper">
                                <div className="testimonial-header">
                                    <StarRating count={testimonial.stars} />
                                    <span className="quote-icon">”</span>
                                </div>
                                <blockquote className="testimonial-text">
                                    {testimonial.text}
                                </blockquote>
                                <a href="#" className="package-link">{testimonial.package}</a>
                            </div>
                            <div className="author-info">
                                {testimonial.image ? (
                                    <img src={testimonial.image} alt={testimonial.author} className="author-profile-img" />
                                ) : (
                                    <div className="author-avatar">{testimonial.initials}</div>
                                )}
                                <div className="author-details">
                                    <span className="author-name">{testimonial.author}</span>
                                    <span className="author-location">{testimonial.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;