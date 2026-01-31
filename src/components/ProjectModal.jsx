import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-content glass gradient-border"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose} aria-label="Close modal">
                        <X size={24} />
                    </button>

                    <div className="modal-header">
                        <h2 className="modal-title gradient-text">{project.name}</h2>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-link"
                            >
                                <ExternalLink size={20} />
                                <span>View on GitHub</span>
                            </a>
                        )}
                    </div>

                    <p className="modal-description">{project.description}</p>

                    {project.details && project.details.features && (
                        <div className="modal-features">
                            <h3 className="features-title">Key Features</h3>
                            <ul className="features-list">
                                {project.details.features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <CheckCircle size={20} className="feature-icon" />
                                        <span>{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="modal-tech">
                        <h3 className="tech-title">Technologies Used</h3>
                        <div className="tech-stack-modal">
                            {project.technologies.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="tech-badge-modal"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
