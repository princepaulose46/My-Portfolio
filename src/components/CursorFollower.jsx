import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CursorFollower.css';

const CursorFollower = () => {
    const cursorRef = useRef(null);
    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        // Hide on mobile/tablet
        if (window.innerWidth < 1024) return;

        // Throttle mouse movement for performance
        let lastUpdate = 0;
        const moveCursor = (e) => {
            const now = Date.now();
            if (now - lastUpdate > 16) { // ~60fps
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
                lastUpdate = now;
            }
        };

        const handleMouseEnter = (e) => {
            const target = e.target;
            if (target instanceof Element && target.closest('a, button, [role="button"]')) {
                cursorRef.current?.classList.add('cursor-hover');
            }
        };

        const handleMouseLeave = (e) => {
            const target = e.target;
            if (target instanceof Element && target.closest('a, button, [role="button"]')) {
                cursorRef.current?.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, [cursorX, cursorY]);

    // Don't render on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return null;
    }

    return (
        <motion.div
            ref={cursorRef}
            className="cursor-follower"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        />
    );
};

export default CursorFollower;
