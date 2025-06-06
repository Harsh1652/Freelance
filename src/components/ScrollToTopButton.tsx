"use client";

import React, { useState, useEffect } from 'react';
import { Fab, Tooltip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Define fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Define fade-out animation
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

// Styled component for the scroll-to-top button with animation
const ScrollFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 24, // Place at the same position as WhatsApp button originally
  right: 24,
  backgroundColor: theme.palette.primary.main,
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  zIndex: 2100, // Higher z-index than WhatsApp button
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&.visible': {
    opacity: 1,
    visibility: 'visible',
    animation: `${fadeIn} 0.5s forwards`,
  },
  '&.hidden': {
    animation: `${fadeOut} 0.5s forwards`,
  }
}));

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Tooltip title="Scroll to top" arrow placement="left">
      <ScrollFab
        onClick={scrollToTop}
        aria-label="scroll to top"
        size="medium"
        className={`notranslate ${isVisible ? 'visible' : 'hidden'}`}
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </ScrollFab>
    </Tooltip>
  );
};

export default ScrollToTopButton; 