import React, { useState, useEffect } from 'react';
import '../App.css'; // Assuming CSS is included in the same directory

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

const ScrollGuide = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        const offsetTop = sectionElement?.offsetTop || 0;

        if (window.scrollY >= offsetTop - window.innerHeight / 3) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-guide fixed left-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-4">
      {sections.map((section) => (
        <div
          key={section.id}
          className="scroll-guide-item flex items-center space-x-2 cursor-pointer"
          onClick={() => handleClick(section.id)}
        >
          <div
            className={`dot w-4 h-4 rounded-full ${
              activeSection === section.id ? 'bg-white' : 'bg-gray-500'
            }`}
          />
          <span
            className={`section-label text-sm text-gray-400 transition-opacity duration-300 ${
              activeSection === section.id ? 'opacity-100 text-white' : 'opacity-0'
            }`}
          >
            {section.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ScrollGuide;
