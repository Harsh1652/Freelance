'use client';

import React, { useRef } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Button, 
  Container,
  useTheme 
} from '@mui/material';
import Link from 'next/link';

const WhyChooseUs = () => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, sm: 3, md: 5, lg: 8 } }}>
      {/* Why Choose Us Section */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h3" 
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          color={theme.palette.primary.main}
          sx={{ 
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
          }}
        >
          Why Choose <span style={{ color: theme.palette.secondary.main }}>Balaji Exports?</span>
        </Typography>
        
        {/* Single Row Layout: Cards + Video + Cards */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, lg: 3 },
          mx: 'auto',
          maxWidth: '1400px',
          alignItems: 'stretch'
        }}>
          
          {/* First Part - First 2 Cards */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            {[
              {
                title: "65+ Years of Farming Expertise", 
                description: "Generations of knowledge in groundnut cultivation." 
              },
              {
                title: "Modern Processing Unit", 
                description: "4 metric tons/hour capacity with advanced technology." 
              }
            ].map((feature, index) => (
              <Paper 
                key={index}
                elevation={3}
                sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  background: theme.customGradients.greenDark,
                  color: theme.palette.customColors.lightGold,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  height: '100%',
                  flex: 1
                }}
              >
                <Typography 
                  variant="h6" 
                  component="h4" 
                  fontFamily="Lato, sans-serif"
                  fontWeight="bold"
                  sx={{ 
                    color: theme.palette.customColors.darkGold, 
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2"
                  fontFamily="Inter, sans-serif"
                  sx={{ 
                    color: theme.palette.customColors.lightGold,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Second Part - Video/Image Placeholder */}
          <Box sx={{ 
            flex: { xs: 1, lg: 1.5 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Box
              ref={videoContainerRef}
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', lg: '500px' },
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.primary.main,
                minHeight: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Temporary placeholder until video is hosted externally */}
              <Box sx={{
                textAlign: 'center',
                color: theme.palette.customColors.lightGold,
                p: 4
              }}>
                <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Lato, sans-serif', fontWeight: 'bold' }}>
                  🎥 Balaji Exports Video
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Inter, sans-serif', opacity: 0.8 }}>
                  State-of-the-art peanut processing facility
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 2, fontStyle: 'italic' }}>
                  Video loading...
                </Typography>
              </Box>
              
              {/* Hidden video element for future use when hosted externally */}
              <video
                ref={videoRef}
                controls
                muted
                loop
                playsInline
                preload="none"
                style={{
                  display: 'none' // Hidden until we have external hosting
                }}
                onError={() => {
                  console.log('Video failed to load');
                }}
              >
                <source src="https://your-cdn-url.com/BalajiExportsVideo.mp4" type="video/mp4" />
                <p>Video showcasing our state-of-the-art peanut processing facility.</p>
              </video>
            </Box>
          </Box>

          {/* Third Part - Last 2 Cards */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            {[
              { 
                title: "Organic, Non-GMO Products", 
                description: "Focus on organic and pesticide-free groundnuts." 
              },
              { 
                title: "Certified Quality", 
                description: "FSSAI, HACCP, ISO certifications ensure top food safety standards." 
              }
            ].map((feature, index) => (
              <Paper 
                key={index + 2}
                elevation={3}
                sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  background: theme.customGradients.greenDark,
                  color: theme.palette.customColors.lightGold,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  height: '100%',
                  flex: 1
                }}
              >
                <Typography 
                  variant="h6" 
                  component="h4" 
                  fontFamily="Lato, sans-serif"
                  fontWeight="bold"
                  sx={{ 
                    color: theme.palette.customColors.darkGold, 
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2"
                  fontFamily="Inter, sans-serif"
                  sx={{ 
                    color: theme.palette.customColors.lightGold,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            component={Link}
            href="/about"
            onClick={() => {
              window.scrollTo(0, 0);
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.customColors.lightGold,
              backgroundColor: theme.palette.secondary.main,
              borderWidth: 2,
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.5 },
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 500,
              borderRadius: '50px',
              minWidth: 'auto',
              '&:hover': {
                borderWidth: 2,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                color: theme.palette.customColors.darkGold,
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Learn More About Us
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyChooseUs; 