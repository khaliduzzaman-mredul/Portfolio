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
                            My interest primarily lies at the intersection of AI, Robotics and Embedded systems, where I turn applied research into deployable real-world products. I specialize in Computer Vision, NLP, Edge-AI, Sensor Fusion and Autonomous Systems, with proven experience leading industrial-grade research projects and a track record of national and international recognition in robotics competitions.
                        </p>
                        <p>
                            I currently work as a Research Engineer at D2A2I Institute of Innovation, AIUB, contributing to R&D projects across robotics and intelligent embedded systems. I began there as a Research Assistant, working on edge-AI model development, dataset refinement, and system update automation. I also work remotely at Sonzaikan Ltd. as a Product Design Engineer and Backend Developer for Tagore, a modern digital typewriter, contributing to its product design, device-level integration, and desktop deployment.
                        </p>
                        <p>
                            I graduated from American International University-Bangladesh (AIUB) with a B.Sc. in Computer Science and Engineering, majoring in Computer Engineering and received the university’s highest distinction, the Chairman’s Gold: Dr. Anwarul Abedin Leadership Award.
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
