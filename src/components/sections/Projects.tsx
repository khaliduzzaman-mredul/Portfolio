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
            desc: "IEEE published research on automating environments using IR sensing coupled with remote Telegram bot management.",
            tags: ["IoT", "Automation", "Python"]
        },
        {
            title: "Fully Autonomous Mars Rover System (URC 2022 & IRC 2023)",
            type: "Project",
            desc: "Led the fabrication and software architecture of a Mars rover featuring a Rocker-Bogie chassis and a 6-DOF ambidex LIMS-2 manipulator. Engineered a custom ROS2 stack achieving autonomous traversal via visual ArUco/arrow detection and high-precision sensor fusion (ublox RTK GNSS, RPLidar A1, ToF, Ultrasonic). Extensively validated via Gazebo and Webots physics simulations.",
            tags: ["ROS2", "Sensor Fusion", "Computer Vision", "Gazebo/Webots", "Kinematics"]
        },
        {
            title: "Voice Control System for Power wheelchair for people with physical disability",
            type: "Project",
            desc: "Innovative mobility solution for the physically disabled, employing speech recognition to control wheelchair movements safely.",
            tags: ["NLP", "Embedded Systems", "Hardware"]
        },
        {
            title: "Vision based Abnormal Anomaly Detection System inside ATM Booth",
            type: "Project",
            desc: "Computer vision deployed anomaly detection system designed to identify and flag abnormal activities within ATM booths for enhanced security.",
            tags: ["Computer Vision", "Security", "AI"]
        },
        {
            title: "Autonomous solar panel cleaning system based on visual dust detection",
            type: "Project",
            desc: "Automated cleaning system that utilizes visual detection to assess dust levels on solar panels and trigger cleaning operations.",
            tags: ["Computer Vision", "Automation", "Robotics"]
        },
        {
            title: "Finless Maneuver System for Projectiles",
            type: "Undergoing Research",
            desc: "Design and development of a finless maneuver system for projectiles at subsonic to supersonic velocity by manipulating the intake.",
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
