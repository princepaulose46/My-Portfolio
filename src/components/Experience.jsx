import './Experience.css';
import resumeData from '../data/resume.json';
import FadeIn from './FadeIn';

const Experience = () => {
    const { experience } = resumeData;

    return (
        <section id="experience" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">Where I've Worked</h2>
                </FadeIn>
                <div className="timeline">
                    {experience.map((job, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="experience-card glass">
                                <div className="exp-header">
                                    <div>
                                        <h3 className="exp-company">{job.company}</h3>
                                        <div className="exp-position">{job.position}</div>
                                    </div>
                                    <div className="exp-date">
                                        {job.startDate} - {job.endDate}
                                    </div>
                                </div>
                                <ul className="exp-list">
                                    {job.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
