import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import MagneticButton from './MagneticButton';
import resumeData from '../data/resume.json';
import './Contact.css';

const Contact = () => {
    const { basics } = resumeData;
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <AnimatedSection direction="down">
                    <h2 className="section-title">Get In Touch</h2>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                    <p className="contact-intro">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                        Feel free to reach out!
                    </p>
                </AnimatedSection>

                <div className="contact-content">
                    <AnimatedSection direction="left" delay={0.3}>
                        <div className="contact-info glass gradient-border">
                            <h3 className="gradient-text">Contact Information</h3>

                            <div className="info-items">
                                <motion.div
                                    className="info-item"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="info-icon">
                                        <Mail size={20} />
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">Email</span>
                                        <a href={`mailto:${basics.email}`} className="info-value">
                                            {basics.email}
                                        </a>
                                    </div>
                                    <button
                                        className="copy-btn"
                                        onClick={() => copyToClipboard(basics.email, 'email')}
                                        aria-label="Copy email"
                                    >
                                        {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </motion.div>

                                <motion.div
                                    className="info-item"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="info-icon">
                                        <Phone size={20} />
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">Phone</span>
                                        <a href={`tel:${basics.phone}`} className="info-value">
                                            {basics.phone}
                                        </a>
                                    </div>
                                    <button
                                        className="copy-btn"
                                        onClick={() => copyToClipboard(basics.phone, 'phone')}
                                        aria-label="Copy phone"
                                    >
                                        {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                                    </button>
                                </motion.div>

                                <motion.div
                                    className="info-item"
                                    whileHover={{ x: 10 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="info-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">Location</span>
                                        <span className="info-value">{basics.location}</span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="social-links">
                                <a
                                    href={basics.profiles.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link-3d"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={basics.profiles.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link-3d"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.3}>
                        <div className="contact-cta glass gradient-border">
                            <h3 className="gradient-text">Let's Work Together</h3>
                            <p>
                                Whether you have a project in mind or just want to connect, I'd love to hear from you.
                            </p>
                            <MagneticButton
                                className="btn-primary"
                                onClick={() => window.location.href = `mailto:${basics.email}`}
                            >
                                Send Email
                            </MagneticButton>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Contact;
