"use client";

import React, { useState, useEffect } from 'react';
import { Fab, Tooltip, Box, Typography, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Define pulsing animation
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

// Define glow animation
const glow = keyframes`
  0% {
    filter: brightness(100%);
    transform: scale(1);
  }
  50% {
    filter: brightness(120%);
    transform: scale(1.08);
  }
  100% {
    filter: brightness(100%);
    transform: scale(1);
  }
`;

// Define fade-in animation for bubble
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Define fade-out animation for bubble
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`;

// Styled component for the WhatsApp button with animation
const WhatsAppFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  right: 24,
  backgroundColor: '#25D366',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
  zIndex: 2000,
  animation: `${pulse} 2s infinite, ${glow} 4s infinite`,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease-in-out',
  width: 56,
  height: 56,
  [theme.breakpoints.down('sm')]: {
    width: 50,
    height: 50,
  },
  '&.MuiFab-root': {
    position: 'fixed',
  },
}));

// Styled component for chat bubble
const ChatBubble = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 24,
  right: 90,
  backgroundColor: 'white',
  color: '#333',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  maxWidth: '240px',
  minWidth: '160px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 2100,
  display: 'flex',
  alignItems: 'center',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '-10px',
    transform: 'translateY(-50%) rotate(45deg)',
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    zIndex: -1,
    boxShadow: '-2px 2px 6px rgba(0,0,0,0.08)',
  }
}));

const WhatsAppButton = ({ phoneNumber = '+919778888339', message = 'Hello, I have a question about your peanut products' }) => {
  const [showBubble, setShowBubble] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  // Show chat bubble periodically
  useEffect(() => {
    const showInterval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    }, 15000);

    // Show initially after 3 seconds
    const initialTimeout = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 5000);
    }, 3000);

    // Check scroll position
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 300);
      setIsScrollButtonVisible(scrollTop > 300);
    };

    // Initial check
    handleScroll();

    // Set visible immediately on mount
    setIsVisible(true);

    // Show on all screen sizes, but adjust positioning
    const handleResize = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(showInterval);
      clearTimeout(initialTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(whatsappUrl, '_blank');
  };

  // Calculate bottom position for WhatsApp button and chat bubble
  const whatsappBottom = isScrolled ? 100 : 24;
  const chatBubbleBottom = isScrollButtonVisible ? 90 : 24;

  if (!isVisible) return null;

  return (
    <>
      {/* Chat bubble that appears periodically */}
      {showBubble && (
        <ChatBubble className="notranslate" style={{ bottom: chatBubbleBottom }}>
          <Typography variant="body2" fontWeight="medium">
            Need help? Chat with us!
          </Typography>
        </ChatBubble>
      )}

      {/* WhatsApp button */}
      <Tooltip title="Chat with us on WhatsApp" arrow placement="left">
        <WhatsAppFab
          onClick={handleClick}
          aria-label="WhatsApp"
          size="medium"
          className="notranslate"
          style={{ bottom: whatsappBottom }}
        >
          <WhatsAppIcon fontSize="medium" />
        </WhatsAppFab>
      </Tooltip>
    </>
  );
};

export default WhatsAppButton; 