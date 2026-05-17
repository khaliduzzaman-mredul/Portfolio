import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import resumePdf from '../../../Resources/resume.pdf';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        
        // Theme initialization
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock background scroll when mobile menu is open (iOS Safari compatible)
    useEffect(() => {
        if (mobileMenuOpen) {
            const scrollY = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
        } else {
            const top = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            if (top) window.scrollTo(0, -parseInt(top, 10));
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

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
                    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href={resumePdf} download="Khaliduzzaman_Mredul_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
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

            {/* Full-screen Blur Backdrop */}
            <div 
                className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
                onClick={() => setMobileMenuOpen(false)} 
            />

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
                <button onClick={toggleTheme} className="mobile-theme-toggle-btn" aria-label="Toggle Theme">
                    {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
                </button>
                <a href={resumePdf} download="Khaliduzzaman_Mredul_Resume.pdf" target="_blank" rel="noopener noreferrer" className="mobile-resume-btn">
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
