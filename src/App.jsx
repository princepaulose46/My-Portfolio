import ParticleBackground from './components/ParticleBackground';
import CursorFollower from './components/CursorFollower';
import ScrollProgress from './components/ScrollProgress';
import SideNavigation from './components/SideNavigation';
import PageLoader from './components/PageLoader';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SEO from './components/SEO';
import './App.css';

function App() {
  return (
    <div className="app">
      <SEO />
      <PageLoader />
      <ParticleBackground />
      <CursorFollower />
      <ScrollProgress />
      <SideNavigation />

      <main className="main-content">
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
