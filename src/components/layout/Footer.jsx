import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    KM<span className="logo-dot">.</span>
                </div>
                <p className="footer-text">
                    Designed and built by Khaliduzzaman Mredul. &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
