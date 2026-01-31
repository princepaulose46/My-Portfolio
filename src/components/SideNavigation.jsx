import { useState, useEffect } from 'react';
import { Home, Briefcase, FolderOpen, Wrench, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './SideNavigation.css';

const SideNavigation = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: FolderOpen, label: 'Projects' },
        { id: 'skills', icon: Wrench, label: 'Skills' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const sections = navItems.map(item => document.getElementById(item.id));
                    const scrollPosition = window.scrollY + window.innerHeight / 2;

                    for (let i = sections.length - 1; i >= 0; i--) {
                        const section = sections[i];
                        if (section && section.offsetTop <= scrollPosition) {
                            setActiveSection(navItems[i].id);
                            break;
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="side-navigation">
            <div className="nav-items">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <div key={item.id} className="nav-item-wrapper">
                            <button
                                className={`nav-item ${isActive ? 'active' : ''}`}
                                onClick={() => scrollToSection(item.id)}
                                aria-label={item.label}
                            >
                                <Icon size={20} />
                                {isActive && (
                                    <motion.div
                                        className="active-indicator"
                                        layoutId="activeIndicator"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                            <span className="nav-tooltip">{item.label}</span>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default SideNavigation;
