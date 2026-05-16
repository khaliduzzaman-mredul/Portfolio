import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, Code2, Database, Wrench, Box } from 'lucide-react';
import './ExperienceAndSkills.css';

const ExperienceAndSkills = () => {
    const experiences = [
        {
            role: "AI/ML Research Engineer [Computer Vision AI]",
            company: "D2A2I Institute of Innovation, AIUB",
            date: "Sep. 2023 - Present",
            link: "https://d2a2i.aiub.edu/project-bscl.html",
            points: [
                "Led the R&D team for the 'Real-time Object Detection based TRP Measurement System' for Bangladesh Satellite Company Limited (BSCL).",
                "Developed SOTA visual detection algorithms achieving 15% better accuracy with 65% smaller dataset.",
                "Created a custom annotated dataset of 250K+ image samples across 264 classes of TV channel logos.",
                "Developing a Smart-sensor Attachment Module using Realtime Object Detection and Laser Sensing (LIDAR, ToF, RGB-D) for power wheelchairs."
            ]
        },
        {
            role: "Full Stack AI Developer & Product Designer",
            company: "Sonzaikan LTD, London, UK [Remote]",
            date: "Mar. 2025 - Present",
            link: "https://writetagore.com",
            points: [
                "Designed and developed 'Tagore', an AI-powered smart typewriter device for rigorous writing.",
                "Developed an LLM backend 'Author Intelligence' for paraphrasing, concept mapping, and tone changing.",
                "Collaborated with University of Oxford and University of Sheffield to fabricate the initial prototype.",
                "Implemented a custom embedded Linux system for the proprietary product development."
            ]
        },
        {
            role: "Research Assistant [AI | Robotics]",
            company: "D2A2I Institute of Innovation, AIUB",
            date: "Feb. 2023 - Aug. 2023",
            points: [
                "Contributed to the design of a Half-body Humanoid Desk Assistant Robot featuring LLM and Computer Vision.",
                "Conducted performance evaluation of deep learning models for the intended use cases.",
                "Managed production-grade Linux-operated SBCs (Raspberry Pi, Jetson Orin Nano).",
                "Contributed to manual image annotation for training production-level deployed models."
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

                    {/* Left Column: Experience */}
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
                                                <h3 className="exp-role">{exp.role}</h3>
                                            </div>
                                            <div className="exp-meta">
                                                <span className="exp-company">
                                                    {exp.company}
                                                    {exp.link && (
                                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="exp-link-icon" style={{ marginLeft: '8px', color: 'var(--accent-cyan)' }}>
                                                            <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </span>
                                                <span className="exp-duration">
                                                    {exp.date}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="exp-points">
                                            {exp.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
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
