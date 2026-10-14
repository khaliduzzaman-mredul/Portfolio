import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import './Publications.css';

const Publications = () => {
    const publications = [
        {
            title: "Optimizing Humanoid Arm Actuation: Motor Selection, Material Trade-offs, and Transition to Low-Inertia Tension-Amplified Mechanisms",
            publisher: "ResearchGate",
            link: "https://www.researchgate.net/publication/405492378_Optimizing_Humanoid_Arm_Actuation_Motor_Selection_Material_Trade-offs_and_Transition_to_Low-Inertia_Tension-Amplified_Mechanisms",
            desc: "Research evaluating BLDC motor selection, cycloidal drive reduction, and structural material trade-offs, transitioning toward low-inertia tension-amplified humanoid arm mechanisms.",
            tags: ["Robotics", "Actuation", "Humanoid", "Hardware"]
        },
        {
            title: "IR-Based Automation System with Telegram Bot Integration",
            publisher: "IEEE Xplore",
            link: "https://ieeexplore.ieee.org/document/10914456",
            desc: "IEEE published research on automating environments using IR sensing coupled with remote Telegram bot management.",
            tags: ["IoT", "Automation", "Python", "IEEE"]
        }
    ];

    return (
        <section id="publications" className="section publications-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Research Publications</h2>

                <div className="publications-grid">
                    {publications.map((pub, idx) => (
                        <motion.div
                            className="publication-card glass-panel"
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="publication-card-inner">
                                <div className="publication-header">
                                    <div className="publication-badge">
                                        <BookOpen size={16} />
                                        <span>{pub.publisher}</span>
                                    </div>
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="publication-link"
                                            aria-label="View Publication"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <h3 className="publication-title">
                                    {pub.link ? (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                            {pub.title}
                                        </a>
                                    ) : (
                                        pub.title
                                    )}
                                </h3>

                                <p className="publication-desc">{pub.desc}</p>

                                <div className="publication-footer">
                                    <div className="publication-tags">
                                        {pub.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="publication-tag">{tag}</span>
                                        ))}
                                    </div>
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="publication-btn"
                                        >
                                            Read Paper <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Publications;
