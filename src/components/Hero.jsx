import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import BackgroundImage from '../assets/bagai.jpg';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Gen-AI Enthusiast', 'ML Engineer', 'Full-Stack Developer', 'Researcher', 'Data Analyst'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about'); // Change this to your next section's id
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-primary text-accent relative bg-cover bg-center bg-no-repeat w-full h-full"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the image
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
      }}>
      <div className="w-32 h-32 mb-4 rounded-full bg-secondary overflow-hidden">
        <img src="src/assets/IMG_1757.jpg" alt="Profile" className="w-adaptive h-adaptive object-cover" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Debarun Ghosh</h1>
      <h2 className="text-xl font-semibold mb-4">
        Site Reliability Engineer | Generative AI Developer | Innovator in Research & Technology
      </h2>
      <div
        ref={typedElement}
        className="text-lg font-mono h-8 overflow-hidden whitespace-nowrap"
        style={{ minHeight: '1.5rem' }}
      />
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/debarun1234" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://linkedin.com/in/debarunghosh2024" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-gray-400 transition duration-300" />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-center z-50"
        onClick={scrollToNextSection} // Make sure this function is defined
        >
        <span className="text-white text-sm">Scroll Down</span>
        <div className="animate-bounce mt-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
