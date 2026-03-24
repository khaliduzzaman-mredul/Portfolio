import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        const encodedSubject = encodeURIComponent(formData.subject);
        const encodedBody = encodeURIComponent(`${formData.message}\n\nFrom\n${formData.name}`);
        
        window.location.href = `mailto:khaliduzzaman.medul@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

        setStatus({ submitting: false, success: false, error: null });
        setFormData({ name: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="section contact-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    {/* Contact Info */}
                    <div className="contact-info glass-panel">
                        <h3>Let's Connect</h3>
                        <p className="contact-desc">
                            Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:khaliduzzaman.medul@gmail.com">khaliduzzaman.medul@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+8801971170798">+8801971170798</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Bashundhara R/A, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container glass-panel">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Connecting regarding..."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${status.submitting ? 'submitting' : ''}`}
                                disabled={status.submitting}
                            >
                                {status.submitting ? 'Sending...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {status.error && (
                                <div className="form-status error">
                                    {status.error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
