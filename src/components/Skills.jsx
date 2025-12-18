import './Skills.css';
import resumeData from '../data/resume.json';
import FadeIn from './FadeIn';

const Skills = () => {
    const { skills } = resumeData;

    return (
        <section id="skills" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">Technical Skills</h2>
                </FadeIn>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <FadeIn key={index} delay={index * 0.1} className="skill-category glass">
                            <h3 className="category-title">{category}</h3>
                            <div className="skill-tags">
                                {items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
