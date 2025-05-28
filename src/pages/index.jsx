import React, { useState, useEffect, useCallback } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card, 
  CardActionArea, 
  CardContent,
  Chip,
  useMediaQuery,
  Fade,
  useTheme,
  Paper,
  Divider,
  Button,
  IconButton
} from '@mui/material';
import { Leaf as LeafIcon, ChevronRight as ChevronRightIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

// Import banner images with lazy loading
import bannerImage1 from '../assets/images/Home/top-view-raw-peanuts-bowl-peanut-butter-wooden-horizontal (1).jpg';
import bannerImage2 from '../assets/images/Home/top-view-peanuts-green-background.jpg';
import bannerImage3 from '../assets/images/Home/top-view-peanuts-bowl-with-copy-space.jpg';
import bannerImage4 from '../assets/images/Home/ChatGPT Image May 25, 2025, 12_09_44 AM.png';
import ourJourneyImage from '../assets/images/Home/OurJourney1.jpeg';

// Banner Component
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

  const handleManualNavigation = (direction) => {
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
    let intervalId;
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
      mb: 6
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
            <LazyImage
              src={img}
              alt={`Balaji Exports Banner ${index + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'scale(1.1)',
              }}
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
            pt: { xs: 2, md: 3 },
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ 
              textAlign: 'center',
              color: 'white',
              maxWidth: '1000px',
              mx: 'auto',
              px: { xs: 2, md: 4 },
              py: { xs: 4, md: 6 },
              position: 'relative',
            }}>
              <Typography 
                variant="h1" 
                component="h1" 
                fontFamily="Lato, sans-serif"
                fontWeight="bold"
                sx={{ 
                  mb: 4,
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
                mt: 6,
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
          component={RouterLink}
          to="/contact"
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
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 500,
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
          <ChevronLeft size={32} />
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
          <ChevronRight size={32} />
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

const ProductsListing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  // Products data with descriptions
  const products = [
    { 
      name: 'Bold Peanuts', 
      path: '/products/bold-peanuts',
      description: 'Large, premium-quality peanuts with an exceptional flavor profile, perfect for snacking.',
      imagePlaceholder: 'bold-peanuts'
    },
    { 
      name: 'Runner Peanuts', 
      path: '/products/runner-peanuts',
      description: 'Medium-sized uniform peanuts, ideal for peanut butter and confectionery products.',
      imagePlaceholder: 'runner-peanuts'
    },
    { 
      name: 'Red Skin Peanuts', 
      path: '/products/red-skin-peanuts',
      description: 'Distinctive peanuts with red skin intact, rich in antioxidants and full of flavor.',
      imagePlaceholder: 'red-skin-peanuts'
    },
    { 
      name: 'Blanched Peanuts', 
      path: '/products/blanched-peanuts',
      description: 'Skinless peanuts with clean taste, perfect for various culinary applications.',
      imagePlaceholder: 'blanched-peanuts'
    },
    { 
      name: 'Spanish Peanuts', 
      path: '/products/spanish-peanuts',
      description: 'Smaller peanuts with higher oil content, ideal for candies and snack products.',
      imagePlaceholder: 'spanish-peanuts'
    },
    { 
      name: 'TJ Peanuts', 
      path: '/products/tj-peanuts',
      description: 'Specially cultivated variety known for consistent quality and superior taste.',
      imagePlaceholder: 'tj-peanuts'
    },
    { 
      name: 'Long Java Peanuts', 
      path: '/products/long-java-peanuts',
      description: 'Elongated peanuts with distinctive shape and rich nutty flavor profile.',
      imagePlaceholder: 'long-java-peanuts'
    },
    { 
      name: 'G20 Peanuts', 
      path: '/products/g20-peanuts',
      description: 'High-yield variety with excellent nutritional value and consistent size.',
      imagePlaceholder: 'g20-peanuts'
    },
    { 
      name: 'K6 Peanuts', 
      path: '/products/k6-peanuts',
      description: 'Popular variety known for drought resistance and exceptional quality.',
      imagePlaceholder: 'k6-peanuts'
    },
    { 
      name: 'Mathadi Peanuts', 
      path: '/products/mathadi-peanuts',
      description: 'Traditional variety with distinctive taste and cultural significance.',
      imagePlaceholder: 'mathadi-peanuts'
    },
    { 
      name: 'Girnar 4 - Girnar 5 Peanuts', 
      path: '/products/girnar-peanuts',
      description: 'Improved varieties with enhanced disease resistance and higher yields.',
      imagePlaceholder: 'girnar-peanuts'
    },
    { 
      name: 'ICGV 03043 Peanuts', 
      path: '/products/icgv03043-peanuts',
      description: 'Research-backed variety with improved nutritional profile and yield potential.',
      imagePlaceholder: 'icgv03043-peanuts'
    },
    { 
      name: 'ICGV 15099 Peanuts', 
      path: '/products/icgv15099-peanuts',
      description: 'Modern peanut variety with enhanced resistance to environmental stressors.',
      imagePlaceholder: 'icgv15099-peanuts'
    },
    { 
      name: 'Virginia Peanuts', 
      path: '/products/virginia-peanuts',
      description: 'Large-kerneled peanuts, perfect for in-shell roasting and gourmet applications.',
      imagePlaceholder: 'virginia-peanuts'
    },
    { 
      name: 'Peanut Butter', 
      path: '/products/peanut-butter',
      description: 'Creamy, all-natural peanut butter made from freshly ground organic peanuts.',
      imagePlaceholder: 'peanut-butter'
    },
    { 
      name: 'Peanut Oil', 
      path: '/products/peanut-oil',
      description: 'Pure, cold-pressed peanut oil with rich flavor, ideal for cooking and frying.',
      imagePlaceholder: 'peanut-oil'
    }
  ];

  // Function to handle product click
  const handleProductClick = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Box sx={{ 
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.customColors.accentGreen}22 0%, transparent 70%)`,
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.customColors.darkGold}33 0%, transparent 70%)`,
          zIndex: 0
        }}
      />
      
      {/* Banner Section */}
      <Banner />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Products Section Header */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mb: { xs: 5, md: 8 },
            position: 'relative'
          }}
        >
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h1" 
            fontFamily="Lato, sans-serif"
            fontWeight="700"
            sx={{ 
              mb: 2,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              position: 'relative',
              display: 'inline-block',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.customColors.accentGreen} 90%)`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: theme.palette.primary.main, // Fallback for older browsers
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: isMobile ? '80px' : '120px',
                height: '3px',
                background: theme.palette.customColors.accentGreen,
                borderRadius: '2px'
              }
            }}
          >
            Our Premium Peanut Products
        </Typography>
        
        <Typography 
          variant="body1" 
          fontFamily="Inter, sans-serif"
            color={theme.palette.primary.main}
          sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mt: 5,
              mb: 5, 
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
              padding: { xs: '0 16px', md: 0 }
          }}
        >
            Discover our extensive range of high-quality peanut varieties and peanut-derived products.
            Sourced from our own organic farms and processed with care to deliver exceptional quality.
        </Typography>
      </Box>
        
        {/* Products Grid */}
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-12px',
          justifyContent: 'center',
        }}>
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',            // Full width on mobile
                  sm: 'calc(50% - 24px)', // 2 cards per row on tablet (accounting for margins)
                  md: 'calc(33.33% - 24px)'  // Exactly 3 cards per row on desktop
                },
                padding: '12px',
                boxSizing: 'border-box',
                transition: 'transform 0.3s ease',
                maxWidth: '400px', // Set a max width for each card
              }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: hoveredItem === index 
                    ? '0 10px 25px rgba(0,0,0,0.18)' 
                    : '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredItem === index ? 'translateY(-12px)' : 'translateY(0)',
                  bgcolor: theme.palette.primary.main,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardActionArea 
                  onClick={() => handleProductClick(product.path)}
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  {/* Image placeholder with pattern */}
                  <Box 
                    sx={{ 
                      height: 200, 
                      position: 'relative',
                      overflow: 'hidden',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    }}
                  >
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0.1,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32-63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}/>
                    
                    <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      width: '100%',
                    }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.customColors.lightGold,
                          fontWeight: 700,
                          fontFamily: 'Lato, sans-serif',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        }}
                      >
                        {product.imagePlaceholder.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    pb: '16px !important', // Override default padding
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="h3"
                      fontFamily="Lato, sans-serif"
                      fontWeight="700"
                      color={theme.palette.customColors.darkGold}
                      sx={{
                        position: 'relative',
                        pb: 1.5,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '40px',
                          height: '2px',
                          backgroundColor: theme.palette.customColors.accentGreen,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '60px',
                        }
                      }}
                    >
                      {product.name}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color={theme.palette.customColors.lightGold}
                      fontFamily="Inter, sans-serif"
                      sx={{ 
                        mb: 2, 
                        flexGrow: 1,
                        lineHeight: 1.6,
                        fontSize: '0.875rem',
                      }}
                    >
                      {product.description}
                    </Typography>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'flex-end',
                      alignItems: 'center', 
                      mt: 'auto' 
                    }}>
                      <Fade in={hoveredItem === index}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          color: theme.palette.customColors.lightGold
                        }}>
                          <Typography 
                            variant="caption" 
                            sx={{ fontStyle: 'italic', mr: 0.5 }}
                          >
                            View Details
                          </Typography>
                          <ChevronRightIcon size={16} />
                        </Box>
                      </Fade>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Divider after products */}
        <Divider sx={{ 
          my: 8, 
          width: '80%',
          maxWidth: '1000px',
          mx: 'auto',
          borderColor: `${theme.palette.primary.main}30`
        }} />
      
      {/* Our Journey & Specialization */}
      <Box sx={{ mb: 6, mt: 8 }}>
        {/* First Row: Our Journey Card + Image */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 3,
          mb: 3,
          alignItems: 'center'
        }}>
          {/* Our Journey Card */}
          <Box sx={{
            width: { xs: '100%', md: '48%' },
            display: 'flex',
            alignItems: 'center',
            minHeight: { xs: 450, md: 600 },
          }}>
            <Card 
              elevation={4}
              sx={{ 
                borderRadius: 2,
                background: theme.customGradients.greenDark,
                overflow: 'hidden',
                width: '100%',
                height: { xs: 225, md: 300 },
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                },
              }}
            >
              <CardContent sx={{ 
                p: { xs: 3, md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  fontFamily="Lato, sans-serif"
                  fontWeight={800}
                  color={theme.palette.customColors.darkGold}
                  sx={{ mb: 2 }}
                >
                  Our Journey
                </Typography>
                <Typography 
                  variant="body1" 
                  fontFamily="Inter, sans-serif"
                  sx={{ 
                    color: theme.palette.customColors.lightGold,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.6
                  }}
                >
                  At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology and operate a state-of-the-art groundnut processing unit.
                </Typography>
              </CardContent>
            </Card>
          </Box>
            
          {/* Standalone Image */}
          <Box
            sx={{
              width: { xs: '100%', md: '48%' },
              height: { xs: 450, md: 600 },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <LazyImage
              src={ourJourneyImage}
              alt="Our Journey - Balaji Exports farming heritage"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.3s ease',
              }}
            />
            {/* Overlay for better visual appeal */}
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
          </Box>
        </Box>
        
        {/* Second Row: Our Specialization Card */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          mt: 3
        }}>
          <Card 
            elevation={4}
            sx={{ 
              borderRadius: 2,
              background: theme.customGradients.greenDark,
              overflow: 'hidden',
              width: { xs: '100%', md: '48%' },
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography 
                variant="h5" 
                component="h3" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.customColors.darkGold}
                sx={{ mb: 2 }}
              >
                Our Specialization
              </Typography>
              <Typography 
                variant="body1" 
                fontFamily="Inter, sans-serif"
                sx={{ 
                  color: theme.palette.customColors.lightGold,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}
              >
                We specialize in a wide range of peanut products, including bold groundnuts, Java groundnuts, red skin peanuts, split peanuts, shelled peanuts, and blanched peanuts for export. Our extensive portfolio also features peanut oil and peanut butter.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Divider after products */}
      <Divider sx={{ 
          my: 8, 
          width: '80%',
          maxWidth: '1000px',
          mx: 'auto',
          borderColor: `${theme.palette.primary.main}30`
        }} />
      
      {/* Why Choose Us Section */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h3" 
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          color={theme.palette.primary.main}
          sx={{ 
            mb: 4,
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
          }}
        >
          Why Choose <span style={{ color: theme.palette.secondary.main }}>Balaji Exports?</span>
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mx: 'auto',
          maxWidth: '1100px'
        }}>
          {[
            {
              title: "65+ Years of Farming Expertise", 
              description: "Generations of knowledge in groundnut cultivation." 
            },
            {
              title: "Modern Processing Unit", 
              description: "4 metric tons/hour capacity with advanced technology." 
            },
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
              key={index}
              elevation={3}
              sx={{ 
                p: 3, 
                borderRadius: 3,
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' },
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
                minHeight: '180px'
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
                sx={{ color: theme.palette.customColors.lightGold }}
              >
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/about"
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
    </Box>
  );
};

export default ProductsListing;