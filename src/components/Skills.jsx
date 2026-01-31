import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import resumeData from '../data/resume.json';
import './Skills.css';

const Skills = () => {
    const { skills } = resumeData;

    const skillCategories = Object.entries(skills);

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <AnimatedSection direction="down">
                    <h2 className="section-title">Technical Expertise</h2>
                </AnimatedSection>

                <div className="skills-grid">
                    {skillCategories.map(([category, skillList], categoryIndex) => (
                        <AnimatedSection
                            key={category}
                            direction="scale"
                            delay={categoryIndex * 0.1}
                        >
                            <motion.div
                                className="skill-category glass gradient-border"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <h3 className="category-title gradient-text">{category}</h3>

                                <div className="skills-list">
                                    {skillList.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="skill-item"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)'
                                            }}
                                        >
                                            <span>{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
