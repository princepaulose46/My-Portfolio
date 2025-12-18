import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./FloatingDock.css";

const DockItem = ({ mouseX, icon: Icon, label, href }) => {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            ref={ref}
            style={{ width }}
            className="dock-item"
        >
            <Icon className="dock-icon" />
            <span className="dock-tooltip">{label}</span>
        </motion.a>
    );
};

const FloatingDock = ({ items }) => {
    let mouseX = useMotionValue(Infinity);

    return (
        <div className="dock-container">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="dock-panel"
            >
                {items.map((item, index) => (
                    <DockItem key={index} mouseX={mouseX} {...item} />
                ))}
            </motion.div>
        </div>
    );
};

export default FloatingDock;
