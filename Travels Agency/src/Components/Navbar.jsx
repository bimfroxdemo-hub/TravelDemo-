import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Normal CSS import


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Normal string class names
    let navClasses = 'navbar';
    if (scrolled) navClasses += ' scrolled';
    if (isOpen) navClasses += ' nav-open';

    return (
        <nav className={navClasses}>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home"></a>
                <a href="#about"></a>
                <a href="#packages"></a>
                <a href="#contact"></a>
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar;