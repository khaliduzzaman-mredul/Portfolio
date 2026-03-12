import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Experience & Skills', id: 'experience-skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Academics & Achievements', id: 'academics-achievements' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
            <div className="nav-content">
                <a href="/" className="logo">
                    KM<span className="logo-dot">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="nav-link"
                        >
                            {link.name}
                        </button>
                    ))}
                    <a href="/api/resume" className="resume-btn" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="mobile-menu-btn mobile-only"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} glass-panel`}>
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.id)}
                        className="mobile-nav-link"
                    >
                        {link.name}
                    </button>
                ))}
                <a href="/api/resume" className="mobile-resume-btn">
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
