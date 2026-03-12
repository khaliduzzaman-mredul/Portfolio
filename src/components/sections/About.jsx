import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    const cards = [
        {
            icon: <Brain size={32} className="about-card-icon" />,
            title: "AI & Machine Learning",
            desc: "Architecting scalable computer vision and NLP models. Deploying SOTA models for real-world applications."
        },
        {
            icon: <Cpu size={32} className="about-card-icon" />,
            title: "Robotics & Hardware",
            desc: "Experience with ROS2, Jetson Orin Nano, and Raspberry Pi. Designing smart sensor attachment modules."
        },
        {
            icon: <Globe size={32} className="about-card-icon" />,
            title: "Full-Stack Development",
            desc: "Building robust backend architectures with FastAPI and engaging frontends using React and modern CSS."
        }
    ];

    return (
        <section id="about" className="section about-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass-panel">
                        <p className="lead-text">
                            AI & Robotics Engineer with 3+ years of experience architecting scalable, real-time computer vision systems and end-to-end machine learning pipelines.
                        </p>
                        <p>
                            Specializing in the deployment of high-performance CV and NLP models, I have a proven track record of leading AI research and securing top-tier achievements in global robotics competitions. My core mission is to bridge the critical gap between advanced algorithmic research and production-ready, highly scalable software products.
                        </p>
                        <p>
                            Currently driving innovation as an AI/ML Research Engineer at the D2A2I Institute of Innovation and engineering sophisticated systems as a Full Stack AI Developer & Product Designer for Sonzaikan LTD, London.
                        </p>
                        <p>
                            I hold a B.Sc. in Computer Science Engineering (Major in CoE) from the American International University-Bangladesh (AIUB), where I was honored with the Dr. Anwarul Abedin Leadership Award (Chairman's Gold). I am also a certified CISCO CyberOps Associate.
                        </p>
                    </div>

                    <div className="about-cards">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                className="about-card glass-panel"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
                            >
                                {card.icon}
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
