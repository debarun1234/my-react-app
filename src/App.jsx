import React from 'react';
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

function App() {
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
    </div>
  );
}

export default App;