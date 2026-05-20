import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, Code2, Database, Wrench, Box } from 'lucide-react';
import './ExperienceAndSkills.css';

const ExperienceAndSkills = () => {
    const experiences = [
        {
            company: "D2A2I Institute of Innovation, AIUB",
            link: "https://d2a2i.aiub.edu/project-bscl.html",
            roles: [
                {
                    title: "AI/ML Research Engineer [Computer Vision AI]",
                    date: "Sep. 2023 - Present",
                    points: [
                        <>Led the R&D team to develop the second iteration of the <strong>Real-time Object Detection-based TRP Measurement System</strong> for Bangladesh Satellite Company Limited, improving mean Average Precision (mAP) by over 30% with a 50% smaller custom annotated dataset using state-of-the-art object detection models.</>,
                        "Identified the most feasible architecture for the target use case by benchmarking multiple object detection models, including YOLO, RT-DETR and RF-DETR, across mAP, inference latency, hardware compatibility and resource efficiency.",
                        "Improved overall system efficiency through inference and architecture-level optimization, reducing average hardware resource utilization by nearly 25%, achieving better real-time performance on lower-spec hardware compared to the previous system.",
                        "Built a fully functional half-body humanoid robot for university newcomer guidance, integrating 6-DoF arm kinematics, synchronized head and eye tracking and LLM-powered interaction for gesture-augmented communication.",
                        "Currently developing a universal perception module for power wheelchairs, enabling real-time traffic sign recognition and collision avoidance in Canadian outdoor scenarios by combining a custom computer vision system with multi-sensor fusion data."
                    ]
                },
                {
                    title: "Research Assistant [AI | Robotics]",
                    date: "Feb. 2023 - Aug. 2023",
                    points: [
                        "Engineered an automated GitHub-based Over-The-Air (OTA) update system and streamlined the annotation/training pipeline, completely eliminating manual software updates across all deployed edge devices and drastically reducing operational costs.",
                        "Conducted rigorous performance benchmarking of deep learning architectures (ResNet, MobileNet) by iteratively augmenting and validating datasets, systematically selecting the optimal model for constrained real-time inference.",
                        "Deployed and profiled the v1 TRP Measurement System across diverse embedded Linux platforms (Raspberry Pi 4/5, Jetson Nano/Orin Nano, Orange Pi) to evaluate hardware feasibility and maximize computational efficiency.",
                        "Interfaced edge compute units with diverse microcontrollers (ESP32, ESP8266, STM32, Arduino, Portenta H7) to orchestrate robust low-latency sensor data acquisition and hardware actuation."
                    ]
                }
            ]
        },
        {
            company: "Sonzaikan LTD, London, UK [Remote]",
            link: "https://writetagore.com",
            roles: [
                {
                    title: "Full-Stack AI Developer & Product Design Engineer",
                    date: "Mar. 2025 - Present",
                    points: [
                        "Designed and developed 'Tagore', an AI-powered smart typewriter device for rigorous writing.",
                        "Developed an LLM backend 'Author Intelligence' for paraphrasing, concept mapping, and tone changing.",
                        "Collaborated with University of Oxford and University of Sheffield to fabricate the initial prototype.",
                        "Implemented a custom embedded Linux system for the proprietary product development."
                    ]
                }
            ]
        }
    ];

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
        <section id="experience-skills" className="section exp-skills-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="exp-skills-container">

                    {/* Top Row: Experience */}
                    <div className="experience-col">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: 0, marginLeft: '2rem' }}>Professional Experience</h2>

                        <div className="timeline">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    className="timeline-item"
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                >
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content glass-panel">
                                        <div className="exp-header">
                                            <div className="exp-title-row">
                                                <Briefcase size={20} className="exp-icon" />
                                                <h3 className="exp-company-title">
                                                    {exp.company}
                                                    {exp.link && (
                                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-link-icon" style={{ marginLeft: '8px', color: 'var(--accent-cyan)' }}>
                                                            <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="exp-roles-container">
                                            {exp.roles.map((role, rIdx) => (
                                                <div key={rIdx} className="exp-role-item">
                                                    <div className="exp-role-header">
                                                        <span className="exp-role-name">{role.title}</span>
                                                        <span className="exp-duration">{role.date}</span>
                                                    </div>
                                                    <ul className="exp-points">
                                                        {role.points.map((point, i) => (
                                                            <li key={i}>{point}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

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

export default ExperienceAndSkills;
