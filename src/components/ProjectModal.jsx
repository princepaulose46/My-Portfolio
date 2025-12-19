import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import "./ProjectModal.css";

const ProjectModal = ({ selectedProject, onClose }) => {
    return (
        <AnimatePresence>
            {selectedProject && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="modal-backdrop"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="modal-container glass"
                    >
                        <button onClick={onClose} className="modal-close-btn">
                            <X size={24} />
                        </button>

                        <div className="modal-content">
                            <h2 className="modal-title">{selectedProject.name}</h2>
                            <div className="modal-tech-stack">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>

                            <div className="modal-scroll-area">
                                <p className="modal-description">
                                    {selectedProject.details?.longDescription || selectedProject.description}
                                </p>

                                {selectedProject.details?.features && (
                                    <div className="modal-section">
                                        <h3>Key Features</h3>
                                        <ul className="feature-list">
                                            {selectedProject.details.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <CheckCircle size={16} className="feature-icon" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedProject.details?.challenges && (
                                    <div className="modal-section">
                                        <h3>Technical Challenges</h3>
                                        <ul className="challenge-list">
                                            {selectedProject.details.challenges.map((challenge, idx) => (
                                                <li key={idx}>
                                                    <AlertTriangle size={16} className="challenge-icon" />
                                                    {challenge}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="modal-actions">
                                {selectedProject.details?.liveDemo && (
                                    <a
                                        href={selectedProject.details.liveDemo}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live Demo
                                    </a>
                                )}
                                <a
                                    href={selectedProject.link}
                                    className={selectedProject.details?.liveDemo ? "btn btn-outline" : "btn btn-primary"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
