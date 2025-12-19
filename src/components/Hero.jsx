import './Hero.css';
import resumeData from '../data/resume.json';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
    const { basics } = resumeData;

    return (
        <section id="hero" className="section hero">
            <div className="hero-bg-glow"></div>
            <div className="container">
                <div className="hero-content">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="greeting"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="name"
                    >
                        {basics.name}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="title-wrapper"
                    >
                        <h2 className="title">{basics.label}</h2>
                        <span className="experience-badge">{basics.yearsOfExperience}+ Years Experience</span>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px' }}
                    >
                        I build scalable, high-performance applications with React, Node.js, Java, and modern microservices architecture. Specializing in full-stack development and cloud solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="cta-buttons"
                    >
                        <a href="#experience" className="btn btn-primary">Check my work</a>
                        <a href="/resume.html" target="_blank" className="btn btn-outline">
                            <Download size={18} />
                            View Resume
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="hero-quote"
                    >
                        <p>"Code is like humor. When you have to explain it, it's bad." — Cory House</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
