import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './MagneticButton.css';

const MagneticButton = ({
    children,
    className = '',
    onClick,
    strength = 0.3,
    ...props
}) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={buttonRef}
            className={`magnetic-button ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            animate={position}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton;
