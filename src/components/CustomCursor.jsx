import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default'); // default, hover, scrollUp, scrollDown
  const scrollTimeout = useRef(null);
  const lastScrollPos = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    // Check if element is clickable
    const checkClickable = (target) => {
      if (!target) return false;
      
      // Check direct element tags
      const tagName = target.tagName;
      if (tagName === 'A' || tagName === 'BUTTON') {
        return true;
      }

      // Check for data-clickable on current element and parents
      let el = target;
      let depth = 0;
      while (el && el !== document.body && depth < 10) {
        // Only check data-clickable attribute - most reliable
        const dataClickable = el.getAttribute?.('data-clickable');
        if (dataClickable === 'true') {
          return true;
        }
        
        // Check for Chakra UI button/link wrapper
        const className = el.className;
        if (className && typeof className === 'string') {
          if (className.includes('chakra-button') || 
              className.includes('chakra-link')) {
            return true;
          }
        }
        
        // Check for explicit role
        const role = el.getAttribute?.('role');
        if (role === 'button') {
          return true;
        }
        
        el = el.parentElement;
        depth++;
      }
      
      return false;
    };

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Don't change cursor state while scrolling
      if (isScrolling.current) {
        return;
      }

      const target = e.target;
      const isClickable = checkClickable(target);
      
      setCursorState(isClickable ? 'hover' : 'default');
    };

    // Track scrolling with direction
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDifference = currentScrollPos - lastScrollPos.current;
      
      // Only update if there's a meaningful scroll (more than 1px)
      if (Math.abs(scrollDifference) > 1) {
        isScrolling.current = true;
        
        if (scrollDifference > 0) {
          setCursorState('scrollDown');
        } else if (scrollDifference < 0) {
          setCursorState('scrollUp');
        }
      }
      
      lastScrollPos.current = currentScrollPos;
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        
        // Check what's under cursor after scroll ends
        const target = document.elementFromPoint(mousePos.current.x, mousePos.current.y);
        const isClickable = checkClickable(target);
        
        setCursorState(isClickable ? 'hover' : 'default');
      }, 200);
    };

    // Smooth animation for cursor
    const animateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, true);
    const animationId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll, true);
      cancelAnimationFrame(animationId);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const getCursorContent = () => {
    switch (cursorState) {
      case 'hover':
        return (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="cursor-svg">
            {/* Pointer finger click icon */}
            <circle cx="12" cy="12" r="9" fill="url(#gradient)" opacity="0.2"/>
            <circle cx="12" cy="12" r="6" fill="url(#gradient)" opacity="0.4"/>
            <circle cx="12" cy="12" r="3" fill="url(#gradient)"/>
            <path d="M12 2L12 8M12 16L12 22M2 12L8 12M16 12L22 12" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'scrollUp':
        return (
          <svg width="52" height="52" viewBox="0 0 32 32" fill="none" className="cursor-svg">
            {/* Outer circle */}
            <circle cx="16" cy="16" r="14" stroke="url(#gradientUp)" strokeWidth="2" opacity="0.4"/>
            {/* Inner glow */}
            <circle cx="16" cy="16" r="10" fill="url(#gradientUp)" opacity="0.2"/>
            {/* Triple arrow up */}
            <path d="M16 8L16 24M16 8L10 14M16 8L22 14" stroke="url(#gradientUp)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 4L16 12M16 4L12 8M16 4L20 8" stroke="url(#gradientUp)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <defs>
              <linearGradient id="gradientUp" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'scrollDown':
        return (
          <svg width="52" height="52" viewBox="0 0 32 32" fill="none" className="cursor-svg">
            {/* Outer circle */}
            <circle cx="16" cy="16" r="14" stroke="url(#gradientDown)" strokeWidth="2" opacity="0.4"/>
            {/* Inner glow */}
            <circle cx="16" cy="16" r="10" fill="url(#gradientDown)" opacity="0.2"/>
            {/* Triple arrow down */}
            <path d="M16 24L16 8M16 24L22 18M16 24L10 18" stroke="url(#gradientDown)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 28L16 20M16 28L20 24M16 28L12 24" stroke="url(#gradientDown)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <defs>
              <linearGradient id="gradientDown" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return (
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" className="cursor-svg">
            <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="url(#gradient)" stroke="url(#gradient)" strokeWidth="1.5" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor"
      data-state={cursorState}
    >
      {getCursorContent()}
    </div>
  );
};

export default CustomCursor;
