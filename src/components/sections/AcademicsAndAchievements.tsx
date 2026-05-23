import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, GraduationCap, Award, Users, Medal, Globe, Bot } from 'lucide-react';
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
            event: "RoboWar [30 lb Feather Weight Class]",
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
            event: "RoboWar [30 lb Feather Weight Class]",
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
                        <div className="acad-history-grid">
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
                                            <span className="acad-detail-label">Graduation Date:</span>
                                            <span className="acad-detail-value">June, 2023</span>
                                        </li>
                                        <li>
                                            <span className="acad-detail-label">Award Conferred:</span>
                                            <span className="acad-detail-value">August, 2024</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                className="academic-award-card glass-panel"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="acad-award-header">
                                    <Award size={24} className="award-icon" />
                                    <span>Academic Award</span>
                                </div>
                                <div className="acad-award-name">Chairman's Gold: Dr. Anwarul Abedin Leadership Award</div>
                                <p className="acad-award-desc">
                                    The highest distinction awarded by AIUB in recognition of outstanding leadership, exemplary performance, sustained dedication and noteworthy achievements and contributions throughout the period of studentship.
                                </p>
                            </motion.div>
                        </div>
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
                                        <div className="extra-title-row">
                                            <Bot size={20} className="extra-icon" />
                                            <h4>AIUB Robotic Crew (ARC)</h4>
                                        </div>
                                    </div>
                                    <div className="extra-roles">
                                        <div className="extra-role">
                                            <div className="extra-role-header">
                                                <span className="extra-role-title">Team Captain</span>
                                                <span className="extra-role-date">Sep. 2022 – Aug. 2023</span>
                                            </div>
                                            <ul className="extra-role-points">
                                                <li>Redesigned the existing Mars Rover chassis by replacing the previous spring-based suspension with a Rocker-Bogie suspension system, improving rough-terrain maneuverability and mechanical stability across uneven surfaces.</li>
                                                <li>Developed a 6-DoF robotic manipulator for the rover, using AMBIDEX LIMS-2 and Differential Joint mechanism with inverse kinematics for smooth end-effector control in precision tasks such as micro-switch flipping, USB cable insertion and keyboard typing.</li>
                                                <li>Developed real-time visual navigation system for the rover using <strong>Arrow Detection Based Directional Pose Estimation</strong> for precise heading recognition and autonomous spatial navigation.</li>
                                                <li>Simulated the entire rover perception stack in <strong>ROS2</strong> using <strong>Gazebo</strong> and <strong>Webots</strong>, fusing <strong>LiDAR</strong> and <strong>RGB-D</strong> sensor data for <strong>Visual Inertial Odometry</strong> and <strong>3D reconstruction</strong> with autonomous navigation before hardware deployment, reducing physical prototyping time and costs by nearly 80%.</li>
                                            </ul>
                                        </div>
                                        <div className="extra-role">
                                            <div className="extra-role-header">
                                                <span className="extra-role-title">Team Lead (Software)</span>
                                                <span className="extra-role-date">Sep. 2021 – Aug. 2022</span>
                                            </div>
                                            <ul className="extra-role-points">
                                                <li>Developed a two-stage autonomous navigation system for a Mars rover, integrating U-Blox ZED C099-F9P RTK GNSS-based global positioning in the initial stage with local ArUco marker guidance in the final stage.</li>
                                                <li>Implemented pose estimation for the rover using visual ArUco marker detection with ChArUco board-based camera calibration for precise spatial localization during post-GNSS final-stage traversal.</li>
                                                <li>Developed a real-time obstacle detection and collision avoidance system for the rover by integrating Hector SLAM-based LiDAR localization with Time-of-Flight and ultrasonic sensor fusion for close-range collision awareness.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="extra-card glass-panel"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <div className="extra-header">
                                        <div className="extra-title-row">
                                            <Bot size={20} className="extra-icon" />
                                            <h4>ARC PERCEPTRON</h4>
                                        </div>
                                    </div>
                                    <div className="extra-roles">
                                        <div className="extra-role">
                                            <div className="extra-role-header">
                                                <span className="extra-role-title">Founding Team Captain</span>
                                                <span className="extra-role-date">Jun. 2022 – Oct. 2025</span>
                                            </div>
                                            <ul className="extra-role-points">
                                                <li>Founded and led ARC PERCEPTRON, a specialized combat robotics unit under AIUB Robotic Crew, by forming a dedicated 5-member team to develop competition-grade combat robots.</li>
                                                <li>Built a 30 lb vertical spinner combat robot with a custom CNC-machined 6061 aluminum billet chassis and 2-wheel direct-drive DC drivetrain for featherweight combat robotics events.</li>
                                                <li>Improved the robot body and weapon system with a modular aluminum-nylon composite chassis and extended spinner reach from 72 mm to 90 mm, increasing impact resistance, repairability and weapon engagement capability while maintaining weight compliance.</li>
                                                <li>Upgraded the robot drivetrain to a 4-wheel belt-driven BLDC system and redesigned the spinner from a symmetric to an asymmetric profile with an increased 120 mm reach, improving maneuverability and weapon kinetic energy for higher-level combat performance.</li>
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
                                        <div className="extra-title-row">
                                            <Users size={20} className="extra-icon" />
                                            <h4>IEEE AIUB Student Branch</h4>
                                        </div>
                                    </div>
                                    <div className="extra-roles">
                                        <div className="extra-role">
                                            <div className="extra-role-header">
                                                <span className="extra-role-title">Student Member</span>
                                                <span className="extra-role-date">Jul. 2021 – Jun. 2023</span>
                                            </div>
                                            <ul className="extra-role-points">
                                                <li>Participated in IEEE technical workshops and knowledge-sharing sessions focused on engineering, research and emerging technologies.</li>
                                                <li>Supported promotional activities for IEEE events through student outreach, social media sharing and campus-level communication.</li>
                                                <li>Contributed to activities during IEEE-led competitions, seminars and networking events.</li>
                                            </ul>
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
