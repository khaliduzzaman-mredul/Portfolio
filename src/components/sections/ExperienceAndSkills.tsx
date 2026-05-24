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
                    title: "Research Engineer [AI | Robotics]",
                    date: "Sep. 2023 - Present",
                    points: [
                        <>Led the R&D team to develop the second iteration of the <strong>Real-time Object Detection-based TRP Measurement System</strong> for Bangladesh Satellite Company Limited, improving mean Average Precision (mAP) by over 30% with a 50% smaller custom annotated dataset using state-of-the-art object detection models.</>,
                        <>Identified the most feasible architecture for the target use case by benchmarking multiple object detection models, including YOLO, RT-DETR and RF-DETR, across mAP, inference latency, hardware compatibility and resource efficiency.</>,
                        <>Improved overall system efficiency through inference and architecture-level optimization, reducing average hardware resource utilization by nearly 25%, achieving better real-time performance on lower-spec hardware compared to the previous system.</>,
                        <>Built a fully functional half-body humanoid robot for university newcomer guidance, integrating 6-DoF arm kinematics, synchronized head and eye tracking and LLM-powered interaction for gesture-augmented communication.</>,
                        <>Currently developing a universal perception module for power wheelchairs, enabling real-time traffic sign recognition and collision avoidance in Canadian outdoor scenarios by combining a custom computer vision system with multi-sensor fusion data.</>
                    ]
                },
                {
                    title: "Research Assistant [RA]",
                    date: "Feb. 2023 - Aug. 2023",
                    points: [
                        <>Benchmarked multiple CNN-based classifiers, including ResNet, VGGNet, and EfficientNet variants, across iterative dataset and training updates to identify failure cases, expand the dataset with targeted samples and improve model accuracy under real-time inference constraints.</>,
                        <>Deployed the evaluated models across multiple embedded Linux-based SBC platforms to identify the optimal hardware configuration for real-time performance, resource efficiency and computational reliability.</>,
                        <>Developed a system-wide automated update mechanism from scratch, eliminating dependency on resource-heavy third-party solutions to improve reliability and reduce operational cost.</>
                    ]
                }
            ]
        },
        {
            company: "Sonzaikan LTD, London, UK [Remote]",
            link: "https://writetagore.com",
            roles: [
                {
                    title: "Product Design Engineer & Backend Developer",
                    date: "Mar. 2025 - Present",
                    points: [
                        <>Modeled Tagore, a smart typewriter built for distraction-free long-form writing, delivering a fabrication-ready functional design and finalized 3D renders for product visualization.</>,
                        <>Collaborated with teams from the University of Oxford and the University of Sheffield to fabricate Tagore’s initial prototype based on the finalized functional design.</>,
                        <>Developed Tagore’s backend software layer with core hardware integration and packaged the application for desktop deployment to ensure seamless coordination between the hardware and software stack.</>,
                        <>Migrated the entire system stack into a custom embedded Linux environment, enabling Tagore to function as a dedicated proprietary device with a controlled runtime.</>
                    ]
                }
            ]
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


                </div>
            </motion.div>
        </section>
    );
};

export default ExperienceAndSkills;
