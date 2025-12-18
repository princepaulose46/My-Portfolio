import './Projects.css';
import resumeData from '../data/resume.json';
import SpotlightCard from './SpotlightCard';
import FadeIn from './FadeIn';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const { projects } = resumeData;
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">Things I've Built</h2>
                </FadeIn>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <SpotlightCard>
                                <div className="project-content">
                                    <h3 className="project-title">{project.name}</h3>
                                    <p className="project-desc">{project.description}</p>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <button
                                            className="project-link btn-text"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            Learn More <span>→</span>
                                        </button>
                                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                            Code <span>↗</span>
                                        </a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
            <ProjectModal
                selectedProject={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
