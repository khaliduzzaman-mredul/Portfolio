import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, GraduationCap, Award, Users } from 'lucide-react';
import './AcademicsAndAchievements.css';

const AcademicsAndAchievements = () => {
    const achievements = [
        {
            title: "National Champion",
            event: "30 lbs. Feather Weight RoboWar",
            details: ["Bit Arena, NSU – 2022", "INIT_3.0, IUB – 2023", "Technocrats_v1, IUBAT – 2023", "MechaFest, BUET – 2024"]
        },
        {
            title: "National Runner-up",
            event: "30 lbs. Feather Weight RoboWar",
            details: ["TechFest, IIT Bombay Zonal – 2022", "Technoxian_8.0, Delhi Zonal – 2024"],
            subEvents: [
                {
                    event: "Drone Race",
                    details: ["Technocrats_v1, IUBAT – 2023"]
                }
            ]
        },
        {
            title: "Global Recognitions",
            event: "International Robotics",
            details: [
                "Top 10 Worldwide: International Rover Challenge (IRC) - India 2023",
                "Qualified Participant: University Rover Challenge (URC) - Utah, USA 2022",
                "Qualified Participant: NHRL - Connecticut, USA 2024, 2025"
            ]
        }
    ];

    return (
        <section id="academics-achievements" className="section acad-achiev-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="acad-achiev-container">

                    {/* Left Column: Academics & Extracurriculars */}
                    <div className="academics-col">

                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: 0 }}>Academic History</h2>

                        <motion.div
                            className="academic-card glass-panel"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="acad-header">
                                <GraduationCap size={24} className="acad-icon" />
                                <h3>B.Sc. in Computer Science Engineering</h3>
                            </div>
                            <div className="acad-university">American International University-Bangladesh (AIUB)</div>

                            <div className="acad-details-container">
                                <ul className="acad-details-list">
                                    <li>
                                        <span className="acad-detail-label">Major:</span>
                                        <span className="acad-detail-value">Computer Engineering</span>
                                    </li>
                                    <li>
                                        <span className="acad-detail-label">Graduation Year:</span>
                                        <span className="acad-detail-value">2023</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="acad-award">
                                <Award size={18} className="award-icon" />
                                <span>Dr. Anwarul Abedin Leadership Award (Chairman's Gold)</span>
                            </div>
                        </motion.div>

                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: '3rem' }}>Extracurricular Activities</h2>

                        <div className="extracurricular-list">
                            <motion.div
                                className="extra-card glass-panel"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="extra-header">
                                    <Users size={20} className="extra-icon" />
                                    <h4>AIUB Robotic Crew (ARC)</h4>
                                </div>
                                <div className="extra-roles">
                                    <div className="extra-role">
                                        <span className="extra-role-title">Team Captain</span>
                                        <span className="extra-role-date">Sep. 2022 – Aug. 2023</span>
                                    </div>
                                    <div className="extra-role">
                                        <span className="extra-role-title">Team Lead (Software)</span>
                                        <span className="extra-role-date">Sep. 2021 – Aug. 2022</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="extra-card glass-panel"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="extra-header">
                                    <Users size={20} className="extra-icon" />
                                    <h4>IEEE AIUB Student Branch</h4>
                                </div>
                                <div className="extra-roles">
                                    <div className="extra-role">
                                        <span className="extra-role-title">Student Member</span>
                                        <span className="extra-role-date">Jul. 2021 – Jun. 2023</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>

                    {/* Right Column: Achievements */}
                    <div className="achievements-col">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: 0 }}>Achievements</h2>

                        <div className="achievements-list">
                            {achievements.map((ach, idx) => (
                                <motion.div
                                    className="achievement-card"
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className="ach-accent"></div>
                                    <div className="ach-content">
                                        <h4>
                                            {ach.title}
                                            {ach.link && (
                                                <a href={ach.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: 'var(--accent-cyan)' }}>
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </h4>
                                        <div className="ach-event">{ach.event}</div>
                                        {ach.details && ach.details.length > 0 && (
                                            <ul className="ach-details">
                                                {ach.details.map((detail, dIdx) => (
                                                    <li key={dIdx}>{detail}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {ach.subEvents && ach.subEvents.length > 0 && (
                                            <div className="ach-sub-events" style={{ marginTop: '1rem' }}>
                                                {ach.subEvents.map((sub, sIdx) => (
                                                    <div key={sIdx} className="ach-sub-event-group" style={{ marginBottom: '1rem' }}>
                                                        <div className="ach-event" style={{ marginBottom: '0.5rem' }}>{sub.event}</div>
                                                        {sub.details && sub.details.length > 0 && (
                                                            <ul className="ach-details">
                                                                {sub.details.map((detail, dIdx) => (
                                                                    <li key={dIdx}>{detail}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {ach.description && (
                                            <p className="ach-description" style={{ marginTop: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                                {ach.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default AcademicsAndAchievements;
