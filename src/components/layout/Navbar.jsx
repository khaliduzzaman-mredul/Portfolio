import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
                    KM<span className="logo-dot">.</span>
                </Link>

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
                    <a href="#" className="resume-btn" onClick={(e) => { e.preventDefault(); alert('Resume not available yet. Please upload resume.pdf.'); }}>
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
                <a href="#" className="mobile-resume-btn" onClick={(e) => { e.preventDefault(); alert('Resume not available yet. Please upload resume.pdf.'); }}>
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
