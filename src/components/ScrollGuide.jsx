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
  { id: 'awards', label: 'Awards' }
];

const ScrollGuide = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  let hideTimer = null;

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

  // Handle Hover for Desktop/Laptop
  const handleMouseEnter = () => {
    clearTimeout(hideTimer); // Clear previous hide timer
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    // Hide after a delay when mouse leaves
    hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2 second delay before hiding
  };

  // Swipe detection for mobile
  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;
      if (startX - touchX > 100) {
        // Swipe left to hide
        setIsVisible(false);
      } else if (touchX - startX > 100) {
        // Swipe right to show
        setIsVisible(true);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Auto-hide after a delay in both desktop and mobile cases
  useEffect(() => {
    if (isVisible) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 2000); // 5 second delay before hiding
    }

    return () => {
      clearTimeout(hideTimer); // Clear timeout if the component unmounts
    };
  }, [isVisible]);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-guide-wrapper">      
      {/* Invisible hover trigger area */}
      <div
        className="scroll-guide-trigger"
        onMouseEnter={handleMouseEnter}
      ></div>

      {/* Pillar Element */}
      <div className="scroll-guide-pillar"></div>

      {/* Scroll Guide */}
      <div
        className={`scroll-guide ${isVisible ? 'visible' : ''}`}
        onMouseLeave={handleMouseLeave}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`scroll-guide-item flex items-center space-x-2 cursor-pointer ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleClick(section.id)}
          >
            <div className={`dot ${activeSection === section.id ? 'bg-black' : 'bg-gray-500'}`} />
            <span className={`section-label text-sm ${activeSection === section.id ? 'text-black' : 'text-gray-400'}`}>
              {section.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollGuide;
