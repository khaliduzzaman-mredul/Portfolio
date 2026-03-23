import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Animated Background Elements */}
            <div className="hero-bg-glow glow-1"></div>
            <div className="hero-bg-glow glow-2"></div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text-container"
                >
                    <div className="hero-name-box">
                        <span className="hero-greeting">HI, I'M</span>
                        <h1 className="hero-name">
                            KHALIDUZZAMAN<br />MREDUL
                        </h1>
                    </div>
                    <h2 className="hero-title">
                        <span className="gradient-text">AI/ML || Computer Vision || NLP || Robotics || IoT</span>
                    </h2>

                    <p className="hero-description">
                        AI & Robotics Enthusiast with 3+ years of professional experience building scalable AI/ML systems in the Computer Vision and NLP domains. Specialized in transforming advanced research into industry-standard embedded products and IoT solutions. Possess a deep interest in robotics and intelligent systems with noteworthy competitive achievements.
                    </p>

                    <div className="hero-cta">
                        <button className="primary-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View My Work <ArrowRight size={18} className="btn-icon" />
                        </button>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/khaliduzzaman-mredulb5ab93225" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:khaliduzzaman.medul@gmail.com" className="social-icon">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* 3D or abstract visual representation area */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="abstract-shape">
                        <div className="ring ring-1">
                            <div className="planet color-1 p-top"><div className="counter-spin-1">AI</div></div>
                            <div className="planet color-2 p-bottom"><div className="counter-spin-1">ML</div></div>
                        </div>
                        <div className="ring ring-2">
                            <div className="planet color-3 p-right"><div className="counter-spin-2">CV</div></div>
                            <div className="planet color-4 p-left"><div className="counter-spin-2">NLP</div></div>
                        </div>
                        <div className="ring ring-3">
                            <div className="planet color-5 p-tr"><div className="counter-spin-3">IoT</div></div>
                            <div className="planet color-6 p-bl">
                                <div className="counter-spin-3">
                                    <div className="saturn-ring-shape"></div>
                                    Bot
                                </div>
                            </div>
                        </div>
                        <div className="core-element">KM</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
