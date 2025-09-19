import React from 'react';
import './PackagesSection.css'; // Component's CSS file

// Import images
import maldivesImg from '../assets/maldives-paradise.jpg';
import dubaiImg from '../assets/dubai-luxury.jpg';
import parisImg from '../assets/paris-romance.jpg';
import KeralaImg from "../assets/kerala backwaters.jpg";
import baliImg from "../assets/bali bliss.jpg";
import rajasthanImg from "../assets/Rajasthan Royal.jpg";

const packagesData = [
    {
        id: 1,
        image: maldivesImg,
        type: 'International',
        rating: '4.9',
        locationIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        location: 'Maldives',
        title: 'Maldives Paradise',
        daysIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        days: '5 Days',
        price: '₹1,25,000',
        tags: ['Overwater Villas', 'Private Beach', 'Spa & Wellness'],
    },
    {
        id: 2,
        image: dubaiImg,
        type: 'International',
        rating: '4.8',
        locationIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        location: 'United Arab Emirates',
        title: 'Dubai Luxury',
        daysIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        days: '6 Days',
        price: '₹95,000',
        tags: ['Burj Khalifa', 'Desert Safari', 'Shopping Festival'],
    },
    {
        id: 3,
        image: parisImg,
        type: 'International',
        rating: '4.9',
        locationIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        location: 'France',
        title: 'Paris Romance',
        daysIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        days: '7 Days',
        price: '₹1,50,000',
        tags: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise'],
    },
    {
        id: 4,
        image: KeralaImg,
        type: 'International',
        rating: '4.7',
        locationIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        location: 'India',
        title: 'kerala Backwaters',
        daysIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        days: '5 Days',
        price: '₹35,000',
        tags: ['Houseboat Stay', 'Spice Gardens', 'Ayurveda'],
    },
    {
        id: 5,
        image: baliImg,
        type: 'International',
        rating: '4.7',
        locationIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        location: 'India',
        title: 'Bali Bliss',
        daysIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        days: '6 Days',
        price: '₹85,000',
        tags: ['Temple Tours', 'Volcano Trek', 'Beach Resorts'],
    },
    {
        id: 6,
        image: rajasthanImg,
        type: 'International',
        rating: '4.7',
        locationIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
        location: 'India',
        title: 'Rajasthan Royal',
        daysIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        days: '8 Days',
        price: '₹55,000',
        tags: ['Palace Hotels', 'Camel Safari', 'Cultural Shows'],
    },

];

const PackagesSection = () => {
    const whatsappNumber = '916351849422'; // <-- Apna WhatsApp number yahan daalein

    return (
        <section className="packages-section" id="packages">
            <div className="packages-container">
                <div className="sub-heading">
                    <span>CURATED EXPERIENCES</span>
                </div>
                <h2 className="main-heading">
                    Discover Your Next <span>Adventure</span>
                </h2>
                <p className="section-description">
                    From exotic international destinations to incredible domestic escapes, explore our handpicked collection of premium travel packages.
                </p>

                <div className="packages-grid">
                    {packagesData.map((pkg) => {
                        const message = `Hello, I'm interested in the "${pkg.title}" package for ${pkg.price}.`;
                        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

                        return (
                            <div className="package-card" key={pkg.id}>
                                <div className="package-image-wrapper">
                                    <img src={pkg.image} alt={pkg.title} className="package-image" />
                                    <span className="package-type">{pkg.type}</span>
                                    <span className="package-rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                        {pkg.rating}
                                    </span>
                                </div>
                                <div className="package-content">
                                    <div className="package-location">
                                        {pkg.locationIcon}
                                        <span>{pkg.location}</span>
                                    </div>
                                    <h3>{pkg.title}</h3>
                                    <div className="package-details">
                                        <span className="package-days">
                                            {pkg.daysIcon}
                                            {pkg.days}
                                        </span>
                                        <span className="package-price">{pkg.price}</span>
                                    </div>
                                    <div className="package-tags">
                                        {pkg.tags.map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={whatsappUrl} className="btn-book" target="_blank" rel="noopener noreferrer">
                                        Book on WhatsApp
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PackagesSection;