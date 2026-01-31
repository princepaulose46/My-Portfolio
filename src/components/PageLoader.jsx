import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageLoader.css';

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Reduced loading time for better performance
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="page-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="loader-content">
                        <motion.div
                            className="loader-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="gradient-text">PRINCE PAULOSE</span>
                        </motion.div>

                        <motion.div
                            className="loader-bar"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
