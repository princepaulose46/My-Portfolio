import './Contact.css';
import resumeData from '../data/resume.json';
import FadeIn from './FadeIn';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const { basics } = resumeData;

    return (
        <section id="contact" className="section">
            <div className="container">
                <FadeIn className="contact-wrapper">
                    <h2 className="section-title">Get In Touch</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <Mail size={20} />
                            <a href={`mailto:${basics.email}`}>{basics.email}</a>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} />
                            <a href={`tel:${basics.phone}`}>{basics.phone}</a>
                        </div>
                        <div className="contact-item">
                            <MapPin size={20} />
                            <span>{basics.location}</span>
                        </div>
                    </div>

                    <div className="contact-social">
                        <a href={basics.profiles?.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href={basics.profiles?.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>

                    <a href={`mailto:${basics.email}`} className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem', marginTop: '2rem' }}>
                        Say Hello
                    </a>
                </FadeIn>
            </div>
            <footer className="footer">
                <p>Built with React & Vanilla CSS by Prince Paulose.</p>
            </footer>
        </section>
    );
};

export default Contact;
