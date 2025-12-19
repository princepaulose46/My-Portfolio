import { Home, Briefcase, FolderOpen, Wrench, Mail } from "lucide-react";
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FloatingDock from './components/FloatingDock';
import SEO from './components/SEO';
import './App.css';

function App() {
  const navItems = [
    { icon: Home, label: "Home", href: "#hero" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: FolderOpen, label: "Projects", href: "#projects" },
    { icon: Wrench, label: "Skills", href: "#skills" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  return (
    <div className="app">
      <SEO />
      <FloatingDock items={navItems} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
