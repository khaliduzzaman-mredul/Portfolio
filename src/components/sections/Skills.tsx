import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Database, Wrench, Box } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 size={24} />,
            skills: ["Python", "C/C++", "JavaScript"]
        },
        {
            title: "Frameworks/Libs",
            icon: <Box size={24} />,
            skills: ["PyTorch", "TensorFlow", "FastAPI", "React", "Django"]
        },
        {
            title: "Tools & OS",
            icon: <Wrench size={24} />,
            skills: ["Docker", "Git/GitHub", "ROS2", "Linux", "Tauri", "Buildroot", "Yocto"]
        },
        {
            title: "Database",
            icon: <Database size={24} />,
            skills: ["MySQL", "PostgreSQL", "SQLite"]
        },
        {
            title: "3D Design & Simulation",
            icon: <Wrench size={24} />,
            skills: ["Autodesk Fusion 360", "Blender", "Gazebo", "Webots", "COMSOL"]
        },
        {
            title: "Prototyping",
            icon: <Wrench size={24} />,
            skills: ["3/5 Axis CAM Programming", "3D Printing"]
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="skills-container">
                    {/* Right Column: Skills */}
                    <div className="skills-col">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: 0 }}>Skills & Expertise</h2>
                        <div className="skills-grid">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    className="skill-category glass-panel"
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className="skill-header">
                                        {category.icon}
                                        <h3>{category.title}</h3>
                                    </div>
                                    <div className="skill-tags">
                                        {category.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: '3rem' }}>Certifications</h2>
                        <div className="cert-list">
                            <motion.div
                                className="cert-card"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="cert-accent"></div>
                                <div className="cert-content">
                                    <h4>
                                        CISCO
                                        <a href="https://www.credly.com/badges/fb228585-240f-4c7a-a945-a759572dc276?source=linked_in_profile" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: 'var(--accent-cyan)' }}>
                                            <ExternalLink size={16} />
                                        </a>
                                    </h4>
                                    <div className="cert-event">CyberOps Associate</div>
                                    <p className="cert-description" style={{ marginTop: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify', letterSpacing: '0.2px' }}>
                                        Cisco verifies the earner of this certificate successfully completed the CyberOps Associate course. The holder of this credential has a broad understanding of Security Operations. They developed problem solving skills to detect and analyze intrusions and monitor the network.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
