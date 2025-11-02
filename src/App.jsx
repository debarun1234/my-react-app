import { useEffect } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from './theme';
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
import ThemeToggle from "./components/ThemeToggle";

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
    <Box minH="100vh" position="relative">
      <ScrollGuide sections={sections} /> {/* Passing the sections */}
      <ParallaxProvider>
        <Box>
          <Box as="section" id="hero">
            <Hero />
          </Box>
          <Box as="section" id="about">
            <About />
          </Box>
          <Box as="section" id="skills">
            <Skills />
          </Box>
          <Box as="section" id="experience">
            <Experience />
          </Box>
          <Box as="section" id="education">
            <Education />
          </Box>
          <Box as="section" id="projects">
            <Projects />
          </Box>
          <Box as="section" id="publications">
            <Publications />
          </Box>
          <Box as="section" id="certifications">
            <Certifications />
          </Box>
          <Box as="section" id="awards">
            <Awards />
          </Box>
          <Box as="section" id="contact">
            <Contact />
          </Box>
        </Box>
      </ParallaxProvider>
      <ScrollToTop /> {/* Add the ScrollToTop button */}
      <Footer /> {/* Include Footer at the end */}
    </Box>
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
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
