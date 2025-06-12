import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import ScrollGuide from './components/ScrollGuide'; // Import the ScrollGuide
import Footer from './components/Footer'; // Import the Footer
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop
import PrivacyPolicy from "./components/PrivacyPolicy";

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

function MainContent() {
  return (
    <div>
      <ScrollGuide sections={sections} /> {/* Passing the sections */}
      <ParallaxProvider>
        <div className="app">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="publications">
            <Publications />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
          <section id="awards">
            <Awards />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </ParallaxProvider>
      <ScrollToTop /> {/* Add the ScrollToTop button */}
      <Footer /> {/* Include Footer at the end */}
    </div>
  );
}

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
