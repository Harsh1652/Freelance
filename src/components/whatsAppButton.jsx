// WhatsAppButton.jsx
import React, { useState, useEffect } from 'react';
import { Fab, Tooltip, Box, Typography } from '@mui/material';
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
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  backgroundColor: '#25D366',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
  zIndex: 1000,
  animation: `${pulse} 2s infinite, ${glow} 4s infinite`,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
}));

// Styled component for chat bubble
const ChatBubble = styled(Box)(({ theme, show }) => ({
  position: 'fixed',
  bottom: theme.spacing(10),
  right: theme.spacing(12),
  backgroundColor: 'white',
  color: '#333',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  maxWidth: '200px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 999,
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: '15px',
    right: '-10px',
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    transform: 'rotate(45deg)',
    zIndex: -1,
  },
  animation: show ? `${fadeIn} 0.5s forwards` : `${fadeOut} 0.5s forwards`,
}));

const WhatsAppButton = ({ phoneNumber = '+919778888339', message = 'Hello, I have a question about your peanut products' }) => {
  const [showBubble, setShowBubble] = useState(false);
  
  // Show chat bubble periodically
  useEffect(() => {
    const showInterval = setInterval(() => {
      setShowBubble(true);
      
      // Hide bubble after 5 seconds
      setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    }, 15000); // Show every 15 seconds
    
    // Show initially after 3 seconds
    const initialTimeout = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 5000);
    }, 3000);
    
    return () => {
      clearInterval(showInterval);
      clearTimeout(initialTimeout);
    };
  }, []);
  
  const handleClick = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat bubble that appears periodically */}
      {(showBubble || showBubble === false) && (
        <ChatBubble show={showBubble}>
          <Typography variant="body2" fontWeight="medium">
            Need help with peanut selection? Chat with us now!
          </Typography>
        </ChatBubble>
      )}
      
      {/* WhatsApp button */}
      <Tooltip title="Chat with us on WhatsApp" arrow placement="left">
        <WhatsAppFab
          onClick={handleClick}
          aria-label="WhatsApp"
          size="medium"
        >
          <WhatsAppIcon fontSize="medium" />
        </WhatsAppFab>
      </Tooltip>
    </>
  );
};

export default WhatsAppButton;