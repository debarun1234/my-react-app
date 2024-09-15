import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing an up arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // You can adjust this threshold based on your needs
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          style={{ width: '40px', height: '40px' }} // Small button size
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
