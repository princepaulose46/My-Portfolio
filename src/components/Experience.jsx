import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import resumeData from '../data/resume.json';
import './Experience.css';

const Experience = () => {
    const { experience } = resumeData;

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <AnimatedSection direction="down">
                    <h2 className="section-title">Professional Journey</h2>
                </AnimatedSection>

                <div className="timeline">
                    {/* Timeline Line */}
                    <motion.div
                        className="timeline-line"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    />

                    {experience.map((job, index) => (
                        <AnimatedSection
                            key={index}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            delay={index * 0.2}
                        >
                            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-dot" />

                                <motion.div
                                    className="experience-card glass gradient-border"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)'
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div className="card-header">
                                        <h3 className="company-name gradient-text">{job.company}</h3>
                                        <div className="date-badge">
                                            <Calendar size={14} />
                                            <span>{job.startDate} - {job.endDate}</span>
                                        </div>
                                    </div>

                                    <h4 className="position-title">{job.position}</h4>

                                    <ul className="highlights-list">
                                        {job.highlights.map((highlight, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                            >
                                                {highlight}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
