'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  IconButton,
  useTheme
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Import banner images
import bannerImage1 from '@/assets/images/Home/top-view-raw-peanuts-bowl-peanut-butter-wooden-horizontal (1)_optimized.jpg';
import bannerImage2 from '@/assets/images/Home/top-view-peanuts-green-background_optimized.jpg';
import bannerImage3 from '@/assets/images/Home/top-view-peanuts-bowl-with-copy-space_optimized.jpg';
import bannerImage4 from '@/assets/images/Home/ChatGPT Image May 25, 2025, 12_09_44 AM.png';

const Banner = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4];

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleManualNavigation = (direction: 'next' | 'prev') => {
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    if (direction === 'next') {
      nextImage();
    } else {
      prevImage();
    }
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-play effect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextImage();
      }, 5000); // Change image every 5 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextImage]);

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: { xs: '500px', sm: '600px', md: '100vh' },
      maxHeight: '800px',
      overflow: 'hidden',
      mb: 0
    }}>
      {/* Banner Images Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                zIndex: 1
              }
            }}
          >
            <Image
              src={img}
              alt={`Balaji Exports Banner ${index + 1}`}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'scale(1.1)',
              }}
              priority={index === 0}
            />
          </Box>
        ))}

        {/* Content Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pt: { xs: 1, md: 2 },
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ 
              textAlign: 'center',
              color: 'white',
              maxWidth: '1000px',
              mx: 'auto',
              px: { xs: 2, md: 4 },
              py: { xs: 2, md: 3 },
              position: 'relative',
              mt: { xs: 8, sm: 10, md: 6 }
            }}>
              <Typography 
                variant="h1" 
                component="h1" 
                fontFamily="Lato, sans-serif"
                fontWeight="bold"
                sx={{ 
                  mb: 2,
                  textAlign: 'center',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  letterSpacing: '0.02em',
                  color: '#FFFFFF',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: '100px', sm: '150px', md: '200px' },
                    height: '3px',
                    background: theme.palette.customColors.lightGold,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  }
                }}
              >
                Welcome to Balaji Exports
              </Typography>

              <Box sx={{
                position: 'relative',
                mb: 6,
                mt: 4,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: '10%', md: '15%' },
                  top: 0,
                  width: '3px',
                  height: '100%',
                  background: `linear-gradient(to bottom, transparent, ${theme.palette.customColors.lightGold}, transparent)`,
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: { xs: '10%', md: '15%' },
                  top: 0,
                  width: '3px',
                  height: '100%',
                  background: `linear-gradient(to bottom, transparent, ${theme.palette.customColors.lightGold}, transparent)`,
                }
              }}>
                <Typography 
                  variant="h5" 
                  component="div"
                  fontFamily="Inter, sans-serif"
                  sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                    lineHeight: 2,
                    maxWidth: '400px',
                    mx: 'auto',
                    px: { xs: 3, md: 4 },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    color: 'rgba(255,255,255,0.95)',
                    position: 'relative',
                    textAlign: 'center',
                    '& strong': {
                      color: theme.palette.customColors.lightGold,
                      fontWeight: 600,
                    },
                    py: 4,
                  }}
                >
                  Excellence in Every Shell
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Contact Us Button - Positioned at bottom */}
        <Button
          variant="outlined"
          component={Link}
          href="/contact"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          sx={{
            position: 'absolute',
            bottom: { xs: 80, md: 100 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            borderColor: theme.palette.customColors.lightGold,
            color: theme.palette.customColors.lightGold,
            borderWidth: 2,
            px: { xs: 3, md: 6 },
            py: { xs: 1.2, md: 2 },
            fontSize: { xs: '0.9rem', md: '1.2rem' },
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            '&:hover': {
              borderWidth: 2,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: theme.palette.customColors.lightGold,
              transform: 'translateX(-50%) translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Contact Us
        </Button>

        {/* Navigation Buttons */}
        <IconButton
          onClick={() => handleManualNavigation('prev')}
          sx={{
            position: 'absolute',
            left: { xs: 8, md: 20 },
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.1)',
            color: theme.palette.customColors.lightGold,
            width: { xs: 40, md: 56 },
            height: { xs: 40, md: 56 },
            zIndex: 3,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.2)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(4px)',
          }}
        >
          <ChevronLeft sx={{ fontSize: 32 }} />
        </IconButton>
        <IconButton
          onClick={() => handleManualNavigation('next')}
          sx={{
            position: 'absolute',
            right: { xs: 8, md: 20 },
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255,255,255,0.1)',
            color: theme.palette.customColors.lightGold,
            width: { xs: 40, md: 56 },
            height: { xs: 40, md: 56 },
            zIndex: 3,
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.2)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(4px)',
          }}
        >
          <ChevronRight sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Navigation Dots */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            zIndex: 3,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => {
                setCurrentImage(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              sx={{
                width: { xs: 10, md: 12 },
                height: { xs: 10, md: 12 },
                borderRadius: '50%',
                bgcolor: currentImage === index 
                  ? theme.palette.customColors.lightGold 
                  : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)',
                  bgcolor: theme.palette.customColors.lightGold,
                },
                boxShadow: currentImage === index 
                  ? '0 0 8px rgba(255,255,255,0.5)' 
                  : 'none',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Banner; 