'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  useTheme,
  Paper
} from '@mui/material';
import Image from 'next/image';
import ourJourneyImage1 from '@/assets/images/Home/OurJourney1_optimized.jpeg';
import ourJourneyImage2 from '@/assets/images/Home/OurJourney__2.jpeg';
import GradientCard from './GradientCard';

const OurJourney = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [ourJourneyImage1, ourJourneyImage2];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Our Journey Card */}
          <Box sx={{
            width: { xs: '100%', md: '54%', lg: '52%' },
            minHeight: { xs: 160, sm: 180, md: 200, lg: 220 },
            display: 'flex',
            alignItems: 'center',
            order: { xs: 2, md: 1 },
          }}>
            <GradientCard
              title="Our Journey"
              description={
                'At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology and operate a state-of-the-art groundnut processing unit.'
              }
              gradient="greenDark"
              height={220}
              cardSx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                background: theme.customGradients.greenDark,
              }}
              contentSx={{
                p: { xs: 2.5, sm: 3, md: 3, lg: 3.5 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              buttonText={undefined}
            />
          </Box>
          {/* Image Carousel */}
          <Box
            sx={{
              width: { xs: '100%', md: '42%', lg: '44%' },
              height: { xs: 350, sm: 400, md: 500, lg: 600 },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              mx: { xs: 0, sm: 2, md: 0 },
              mt: { xs: -1, sm: 0, md: 0 },
              order: { xs: 1, md: 2 },
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <Image
              src={images[currentImage]}
              alt={`Our Journey - Balaji Exports farming heritage image ${currentImage + 1}`}
              fill
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.3s ease',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)',
              }}
            />
            {/* Carousel Arrows */}
            <Box sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', zIndex: 2 }}>
              <button onClick={handlePrev} style={{ background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 22, fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>&lt;</button>
            </Box>
            <Box sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', zIndex: 2 }}>
              <button onClick={handleNext} style={{ background: 'rgba(255,255,255,0.7)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: 22, fontWeight: 'bold', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>&gt;</button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurJourney; 