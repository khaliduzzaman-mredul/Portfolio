import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "IR-Based Automation System with Telegram Bot Integration",
            type: "Publication",
            link: "https://ieeexplore.ieee.org/document/10914456",
            desc: "Architected an IR-based environmental automation IoT system using Telegram Bot API endpoints, culminating in a peer-reviewed IEEE robotics publication.",
            tags: ["IoT", "Automation", "Python"]
        },
        {
            title: "Autonomous Visual & GPS Navigation System for Mars Rover",
            type: "Project",
            desc: "Engineered an autonomous traversal stack fusing OpenCV and GPS telemetry via ROS, successfully enabling dynamic obstacle avoidance in simulated Mars terrains.",
            tags: ["Computer Vision", "ROS", "OpenCV"]
        },
        {
            title: "Voice Control System for Power wheelchair for people with physical disability",
            type: "Project",
            desc: "Developed a critically-acclaimed embedded NLP-driven wheelchair mobility module, achieving reliable voice-activated navigation to eliminate manual joystick dependency.",
            tags: ["NLP", "Embedded Systems", "Hardware"]
        },
        {
            title: "Vision based Abnormal Anomaly Detection System inside ATM Booth",
            type: "Project",
            desc: "Designed an AI-powered surveillance pipeline leveraging real-time Computer Vision architectures to autonomously detect and flag anomalous behavioral patterns in high-security ATM booths.",
            tags: ["Computer Vision", "Security", "AI"]
        },
        {
            title: "Autonomous solar panel cleaning system based on visual dust detection",
            type: "Project",
            desc: "Built a fully autonomous hardware-cleaning robotic infrastructure using custom visual dust-classification models to scale solar panel efficiency without human intervention.",
            tags: ["Computer Vision", "Automation", "Robotics"]
        },
        {
            title: "Finless Maneuver System for Projectiles",
            type: "Undergoing Research",
            desc: "Simulated core advanced aerodynamic control systems for finless projectiles by dynamically manipulating hardware intake flow from subsonic to supersonic edge velocities.",
            tags: ["Aerodynamics", "Simulation", "Control Systems"]
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Projects & Publications</h2>

                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <motion.div
                            className="project-card glass-panel"
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-card-inner">
                                <div className="project-header">
                                    <div className="project-type-badge">
                                        {proj.type === 'Publication' ? <BookOpen size={16} /> : <Github size={16} />}
                                        {proj.type}
                                    </div>
                                    {proj.link && (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="External Link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <h3 className="project-title">{proj.title}</h3>
                                <p className="project-desc">{proj.desc}</p>

                                <div className="project-tags">
                                    {proj.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
