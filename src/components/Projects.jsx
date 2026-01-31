import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ProjectModal from './ProjectModal';
import resumeData from '../data/resume.json';
import './Projects.css';

const Projects = () => {
    const { projects } = resumeData;
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <AnimatedSection direction="down">
                    <h2 className="section-title">Featured Projects</h2>
                </AnimatedSection>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <AnimatedSection
                            key={index}
                            direction="scale"
                            delay={index * 0.15}
                        >
                            <motion.div
                                className="project-card glass gradient-border"
                                whileHover={{ y: -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Holographic overlay */}
                                <div className="holographic-overlay" />

                                <div className="project-header">
                                    <h3 className="project-title gradient-text">{project.name}</h3>
                                    <div className="project-links">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="project-link"
                                                aria-label="GitHub Repository"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="tech-stack">
                                    {project.technologies.map((tech, idx) => (
                                        <motion.span
                                            key={idx}
                                            className="tech-badge"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="project-cta">
                                    <span>Click to learn more</span>
                                    <ExternalLink size={16} />
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
