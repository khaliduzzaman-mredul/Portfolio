import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, GraduationCap, Award, Users, Medal, Globe } from 'lucide-react';
import './AcademicsAndAchievements.css';

const AcademicsAndAchievements = () => {
    interface Achievement {
        title: string;
        icon: React.ReactNode;
        event?: string;
        details?: (string | React.ReactNode)[];
        subEvents?: {
            event: string;
            details: (string | React.ReactNode)[];
        }[];
        link?: string;
        description?: string;
    }

    const achievements: Achievement[] = [
        {
            title: "National Champion",
            icon: <Trophy size={20} style={{ color: 'var(--accent-cyan)' }} />,
            event: "RoboWar [30 lbs. Feather Weight Class]",
            details: [
                <><span><strong>Bit Arena - 2022</strong></span><span className="ach-detail-venue">North South University (NSU)</span></>,
                <><span><strong>INIT_3.0 - 2023</strong></span><span className="ach-detail-venue">Independent University, Bangladesh (IUB)</span></>,
                <><span><strong>Technocrats_v1 - 2023</strong></span><span className="ach-detail-venue">International University of Business Agriculture and Technology (IUBAT)</span></>,
                <><span><strong>MechaFest - 2024</strong></span><span className="ach-detail-venue">Bangladesh University of Engineering and Technology (BUET)</span></>
            ]
        },
        {
            title: "National Runner-up",
            icon: <Medal size={20} style={{ color: 'var(--accent-cyan)' }} />,
            event: "RoboWar [30 lbs. Feather Weight Class]",
            details: [
                <><span><strong>TechFest - 2022</strong></span><span className="ach-detail-venue">IIT Bombay Zonal</span></>,
                <><span><strong>Technoxian_8.0 - 2024</strong></span><span className="ach-detail-venue">Delhi Zonal</span></>
            ],
            subEvents: [
                {
                    event: "Drone Race [5 inch Quadcopter]",
                    details: [<><span><strong>Technocrats_v1 - 2023</strong></span><span className="ach-detail-venue">International University of Business Agriculture and Technology (IUBAT)</span></>]
                }
            ]
        },
        {
            title: "Global Events",
            icon: <Globe size={20} style={{ color: 'var(--accent-cyan)' }} />,
            subEvents: [
                {
                    event: "National Havoc Robot League (NHRL)",
                    details: ["Norwalk, Connecticut, USA - 2024, 2025"]
                },
                {
                    event: "University Rover Challenge (URC)",
                    details: ["Hanksville, Utah, USA - 2022"]
                },
                {
                    event: "International Rover Challenge (IRC)",
                    details: ["Bangalore, Karnataka, India - 2023"]
                }
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

                    {/* Top Row: Academic History - full width */}
                    <div className="acad-top-row">
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
                    </div>

                    {/* Bottom Row: Extracurricular + Achievements side by side */}
                    <div className="acad-bottom-row">

                        {/* Left: Extracurricular */}
                        <div className="extra-col">
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: 0 }}>Extracurricular Activities</h2>
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
                                            <ul className="extra-role-points">
                                                <li>Designed and fabricated Mars rover chassis based on the <strong>Rocker-Bogie</strong> principle for optimum rough-terrain maneuverability.</li>
                                                <li>Developed a 6-DoF manipulator implementing the <strong>AMBIDEX LIMS-2</strong> and <strong>Differential Joint</strong> mechanism with <strong>Inverse Kinematics</strong> to achieve smooth end-effector control for performing precision tasks such as flipping micro switches, plugging USB cables and typing on a keyboard.</li>
                                                <li>Developed real-time visual navigation system for the rover using <strong>Arrow Detection Based Directional Pose Estimation</strong> for precise heading recognition and autonomous spatial navigation.</li>
                                                <li>Simulated the entire rover perception stack in <strong>ROS2</strong> using <strong>Gazebo</strong> and <strong>Webots</strong>, fusing <strong>LiDAR</strong> and <strong>RGB-D ToF</strong> sensor data for <strong>Visual Inertial Odometry</strong> and <strong>3D reconstruction</strong> with autonomous navigation before hardware deployment, reducing physical prototyping time and costs by nearly 80%.</li>
                                            </ul>
                                        </div>
                                        <div className="extra-role">
                                            <span className="extra-role-title">Team Lead (Software)</span>
                                            <span className="extra-role-date">Sep. 2021 – Aug. 2022</span>
                                            <ul className="extra-role-points">
                                                <li>Built a two-stage autonomous navigation system for mars rover using <strong>U-Blox ZED C099-F9P RTK GNSS</strong> module for high-precision global positioning before local marker-guided traversal.</li>
                                                <li>Implemented visual <strong>ArUco marker based pose estimation</strong> with camera calibration using <strong>ChArUco board</strong> for precise spatial localization that allows the rover to transition from GNSS navigation to marker-guided traversal for precise final-stage movement.</li>
                                                <li>Developed a real-time obstacle detection and collision avoidance system for the rover using <strong>Hector SLAM</strong> algorithm for LiDAR-based localization, along with <strong>Time of Flight</strong> and <strong>Ultrasonic Sensor</strong> fusion for close-range collision awareness.</li>
                                            </ul>
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

                        {/* Right: Achievements */}
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
                                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                {ach.icon}
                                                {ach.title}
                                                {ach.link && (
                                                    <a href={ach.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: 'var(--accent-cyan)' }}>
                                                        <ExternalLink size={16} />
                                                    </a>
                                                )}
                                            </h4>
                                            {ach.event && <div className="ach-event">{ach.event}</div>}
                                            {ach.details && ach.details.length > 0 && (
                                                <ul className="ach-details">
                                                    {ach.details.map((detail, dIdx) => (
                                                        <li key={dIdx}>{detail}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {ach.subEvents && ach.subEvents.length > 0 && (
                                                <div className="ach-sub-events" style={{ marginTop: '0.8rem' }}>
                                                    {ach.subEvents.map((sub, sIdx) => (
                                                        <div key={sIdx} className="ach-sub-event-group" style={{ marginBottom: '1rem' }}>
                                                            <div className="ach-event" style={{ marginBottom: '0.2rem' }}>{sub.event}</div>
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

                    </div>{/* end acad-bottom-row */}

                </div>{/* end acad-achiev-container */}
            </motion.div >
        </section >
    );
};

export default AcademicsAndAchievements;
