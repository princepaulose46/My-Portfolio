import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import MagneticButton from './MagneticButton';
import AnimatedSection from './AnimatedSection';
import resumeData from '../data/resume.json';
import './Hero.css';

const Hero = () => {
    const { basics } = resumeData;

    const floatingShapes = [
        { delay: 0, duration: 3 },
        { delay: 0.5, duration: 4 },
        { delay: 1, duration: 3.5 },
        { delay: 1.5, duration: 4.5 },
    ];

    return (
        <section id="hero" className="hero">
            {/* Floating geometric shapes */}
            <div className="floating-shapes">
                {floatingShapes.map((shape, index) => (
                    <motion.div
                        key={index}
                        className={`shape shape-${index + 1}`}
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: shape.duration,
                            delay: shape.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            <div className="container hero-content">
                <AnimatedSection direction="down" delay={0.2}>
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {basics.name}
                    </motion.h1>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.4}>
                    <div className="hero-subtitle">
                        <TypeAnimation
                            sequence={[
                                basics.label,
                                2000,
                                'Full Stack Developer',
                                2000,
                                'AI Integration Specialist',
                                2000,
                                'Frontend Architect',
                                2000,
                            ]}
                            wrapper="h2"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.6}>
                    <p className="hero-description">
                        {basics.summary}
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.8}>
                    <div className="hero-actions">
                        <MagneticButton
                            className="btn-primary"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Projects
                        </MagneticButton>
                        <MagneticButton
                            className="btn-secondary"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get In Touch
                        </MagneticButton>
                    </div>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={1}>
                    <div className="hero-social">
                        <a
                            href={basics.profiles.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={basics.profiles.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${basics.email}`}
                            className="social-link"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </AnimatedSection>

                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown size={24} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
