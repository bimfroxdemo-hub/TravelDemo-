import React from 'react';
import './ServicesSection.css';
import SectionHeader from './SectionHeader.jsx'; // Reusable header import kiya

const ServicesSection = () => {
    // WhatsApp button ke liye zaroori code
    const whatsappNumber = '916351849422'; // Apna WhatsApp number yahan daalein
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to enquire about your travel solutions.")}`;

    return (
        <section className="services-section" id="services">
            <div className="services-container">

                {/* Reusable SectionHeader component */}
                <SectionHeader
                    subHeading="OUR SERVICES"
                    mainHeading="Complete Travel Solutions"
                    description="From flight bookings to custom itineraries, we handle every aspect of your journey with professional expertise and personalized attention."
                />

                <div className="services-grid">
                    {/* Card 1: Flight Booking */}
                    <div className="service-card">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        </div>
                        <h3>Flight Booking</h3>
                        <p>Premium airline partnerships for the best routes and prices</p>
                        <ul>
                            <li>Business Class Options</li>
                            <li>Flexible Dates</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>

                    {/* Card 2: Hotels & Resorts */}
                    <div className="service-card">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        </div>
                        <h3>Hotels & Resorts</h3>
                        <p>Handpicked luxury accommodations worldwide</p>
                        <ul>
                            <li>5-Star Properties</li>
                            <li>Exclusive Deals</li>
                            <li>Room Upgrades</li>
                        </ul>
                    </div>

                    {/* Card 3: Visa & Insurance */}
                    <div className="service-card">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>Visa & Insurance</h3>
                        <p>Complete documentation and travel insurance services</p>
                        <ul>
                            <li>Visa Processing</li>
                            <li>Travel Insurance</li>
                            <li>Document Assistance</li>
                        </ul>
                    </div>

                    {/* Card 4: Custom Itineraries */}
                    <div className="service-card">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <h3>Custom Itineraries</h3>
                        <p>Personalized travel plans crafted just for you</p>
                        <ul>
                            <li>Tailored Experiences</li>
                            <li>Local Guides</li>
                            <li>Flexible Planning</li>
                        </ul>
                    </div>

                    {/* Card 5: Travel Protection */}
                    <div className="service-card">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h3>Travel Protection</h3>
                        <p>Comprehensive coverage for peace of mind</p>
                        <ul>
                            <li>Emergency Support</li>
                            <li>Medical Coverage</li>
                            <li>Trip Protection</li>
                        </ul>
                    </div>

                    {/* Card 6: Event Planning */}
                    <div className="service-card">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3>Event Planning</h3>
                        <p>Special occasions and celebration travel</p>
                        <ul>
                            <li>Honeymoon Packages</li>
                            <li>Anniversary Trips</li>
                            <li>Group Events</li>
                        </ul>
                    </div>
                </div>

                {/* Enquire on WhatsApp Button */}
                <a
                    href={whatsappUrl}
                    className="cta-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Enquire on WhatsApp
                </a>
            </div>
        </section>
    );
};

export default ServicesSection;