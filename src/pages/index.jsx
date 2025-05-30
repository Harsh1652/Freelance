import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import { useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

// Import banner images with lazy loading
import bannerImage1 from '../assets/images/Home/top-view-raw-peanuts-bowl-peanut-butter-wooden-horizontal (1)_optimized.jpg';
import bannerImage2 from '../assets/images/Home/top-view-peanuts-green-background_optimized.jpg';
import bannerImage3 from '../assets/images/Home/top-view-peanuts-bowl-with-copy-space_optimized.jpg';
import bannerImage4 from '../assets/images/Home/ChatGPT Image May 25, 2025, 12_09_44 AM.png';
import ourJourneyImage from '../assets/images/Home/OurJourney1_optimized.jpeg';

// Import industrial solutions images
import cattleFieldImage from '../assets/images/Home/IndutrySolutions/Cattle Field.jpg';
import cosmeticImage from '../assets/images/Home/IndutrySolutions/cosmetic .jpg';
import peanutOilImage from '../assets/images/Home/IndutrySolutions/Peanut Oil.jpg';
import snacksImage from '../assets/images/Home/IndutrySolutions/Snacks.jpg';
import pharmaImage from '../assets/images/Home/IndutrySolutions/pharma.jpg';

// Import product images
import boldPeanutsImage from '../assets/images/Home/product_h_img/bold .jpg';
import runnerPeanutsImage from '../assets/images/Home/product_h_img/runner .jpeg';
import redSkinPeanutsImage from '../assets/images/Home/product_h_img/red skin .jpg';
import spanishPeanutsImage from '../assets/images/Home/product_h_img/spanish peanuts .jpeg';
import tjPeanutsImage from '../assets/images/Home/product_h_img/tj peanuts .jpeg';
import longJavaPeanutsImage from '../assets/images/Home/product_h_img/java .jpeg';
import virginiaPeanutsImage from '../assets/images/Home/product_h_img/virginia .jpeg';

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
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Handle hash-based scrolling
  useEffect(() => {
    if (location.hash === '#products' && productsRef.current) {
      setTimeout(() => {
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  // Video control refs and state
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  // Industrial Solutions Carousel state with animation direction
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselAutoPlaying, setIsCarouselAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'

  // Responsive cards to show based on screen size
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 4;
  
  // Products data with descriptions
  const products = [
    { 
      name: 'Bold Peanuts', 
      path: '/products/bold-peanuts',
      description: 'Large, premium-quality peanuts with an exceptional flavor profile, perfect for snacking.',
      image: boldPeanutsImage
    },
    { 
      name: 'Runner Peanuts', 
      path: '/products/runner-peanuts',
      description: 'Medium-sized uniform peanuts, ideal for peanut butter and confectionery products.',
      image: runnerPeanutsImage
    },
    { 
      name: 'Red Skin Peanuts', 
      path: '/products/red-skin-peanuts',
      description: 'Distinctive peanuts with red skin intact, rich in antioxidants and full of flavor.',
      image: redSkinPeanutsImage
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
      image: spanishPeanutsImage
    },
    { 
      name: 'TJ Peanuts', 
      path: '/products/tj-peanuts',
      description: 'Specially cultivated variety known for consistent quality and superior taste.',
      image: tjPeanutsImage
    },
    { 
      name: 'Long Java Peanuts', 
      path: '/products/long-java-peanuts',
      description: 'Elongated peanuts with distinctive shape and rich nutty flavor profile.',
      image: longJavaPeanutsImage
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
      image: virginiaPeanutsImage
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

  // Industrial Solutions data with hover information
  const industrialSolutions = [
    { 
      name: 'Cattle Feed Solutions', 
      path: '/solutions/cattle-feed',
      description: 'High-quality peanut-based cattle feed supplements for improved livestock nutrition.',
      src: cattleFieldImage,
      title: 'Cattle Feed Solutions',
      hoverInfo: 'Crushed peanut cake is a protein-rich, digestible feed for cattle. It boosts milk production and promotes animal health, making it a valuable by-product in sustainable livestock nutrition systems.'
    },
    { 
      name: 'Cosmetic Applications', 
      path: '/solutions/cosmetics',
      description: 'Natural peanut oil for cosmetic and skincare product manufacturing.',
      src: cosmeticImage,
      title: 'Cosmetic Applications',
      hoverInfo: 'Peanut oil is rich in vitamin E and antioxidants, making it ideal for skincare products. It moisturizes, soothes irritation, and helps prevent premature aging in natural cosmetic formulations.'
    },
    { 
      name: 'Peanut Oil Production', 
      path: '/solutions/oil-production',
      description: 'Pure, refined peanut oil for various industrial and culinary uses.',
      src: peanutOilImage,
      title: 'Peanut Oil Production',
      hoverInfo: 'Peanut oil, known for its high smoke point and mild flavor, is widely used in cooking. Its healthy fat profile also makes it a staple in edible oil manufacturing worldwide.'
    },
    { 
      name: 'Snack Manufacturing', 
      path: '/solutions/snack-manufacturing',
      description: 'Premium peanuts for snack and confectionery industry applications.',
      src: snacksImage,
      title: 'Snack Manufacturing',
      hoverInfo: 'Peanuts in snack manufacturing provide protein, healthy fats, and natural flavor. They are processed into roasted nuts, peanut butter, energy bars, and confectionery products for global markets.'
    },
    { 
      name: 'Pharmaceutical Industry', 
      path: '/solutions/pharmaceutical',
      description: 'Pure peanut extracts and compounds for pharmaceutical applications and drug development.',
      src: pharmaImage,
      title: 'Pharmaceutical Industry',
      hoverInfo: 'Peanut-derived oils serve as carriers in drug formulations. Their stability and non-reactive properties make them suitable for ointments, capsules, and topical applications in pharmaceutical manufacturing processes.'
    }
  ];

  // Intersection Observer for video auto-play/pause
  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = videoContainerRef.current;

    if (!videoElement || !containerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoElement.readyState >= 2) {
            // Video is visible and loaded, play it
            videoElement.play().catch((error) => {
              // Handle autoplay policy restrictions or loading errors
              console.log('Video autoplay prevented or failed to load:', error);
            });
          } else {
            // Video is not visible, pause it
            if (videoElement.readyState >= 2) {
              videoElement.pause();
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: '0px 0px -50px 0px' // Add some margin for better UX
      }
    );

    observer.observe(containerElement);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to handle product click
  const handleProductClick = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Industrial Solutions Carousel navigation - modified for 3 items per slide (responsive)
  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(industrialSolutions.length / itemsPerSlide);
  
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentSlide((prev) => {
        return prev >= totalSlides - 1 ? 0 : prev + 1;
      });
      setTimeout(() => setIsTransitioning(false), 50);
    }, 50);
  }, [totalSlides, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentSlide((prev) => {
        return prev <= 0 ? totalSlides - 1 : prev - 1;
      });
      setTimeout(() => setIsTransitioning(false), 50);
    }, 50);
  }, [totalSlides, isTransitioning]);

  // Get items for current slide
  const getCurrentSlideItems = useCallback(() => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = Math.min(startIndex + itemsPerSlide, industrialSolutions.length);
    return industrialSolutions.slice(startIndex, endIndex);
  }, [currentSlide, itemsPerSlide]);

  // Auto-play effect for Industrial Solutions Carousel
  useEffect(() => {
    let intervalId;
    if (isCarouselAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 6000); // Change slide every 6 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isCarouselAutoPlaying, nextSlide]);

  const handleManualCarouselNavigation = (direction) => {
    setIsCarouselAutoPlaying(false); // Stop auto-play when user interacts
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
    // Resume auto-play after 5 seconds of no interaction
    setTimeout(() => setIsCarouselAutoPlaying(true), 5000);
  };

  const productsRef = useRef(null);

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

      <Container 
        ref={productsRef}
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          scrollMarginTop: '100px' // Add some margin for better scrolling
        }}
      >
        {/* Products Section Header */}
        <Box 
          id="product-section"
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
                maxWidth: '450px', // Increased from 400px
              }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  maxWidth: { xs: '320px', md: '380px' }, // Increased from 280px/300px
                  mx: { xs: 'auto', md: 0 }, // Center on mobile, left-align on desktop
                  borderRadius: 3, // Increased from 1 to 3 for more rounded corners
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
                      background: product.image ? 'transparent' : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    }}
                  >
                    {product.image ? (
                      <LazyImage
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transition: 'transform 0.3s ease',
                          transform: hoveredItem === index ? 'scale(1.05)' : 'scale(1)',
                        }}
                      />
                    ) : (
                      <>
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          opacity: 0.1,
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-6 60c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
                      </>
                    )}
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

        {/* Industrial Solutions Section */}
        <Box 
          sx={{ 
            textAlign: 'center',
            mt: { xs: 6, md: 8 },
            mb: { xs: 4, md: 6 },
            position: 'relative'
          }}
        >
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h2" 
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
            Industrial Solutions
          </Typography>
        </Box>

        {/* Industrial Solutions Carousel */}
        <Box sx={{ 
          position: 'relative', 
          overflow: 'hidden',
          maxWidth: { xs: '95%', sm: '90%', md: '85%', lg: '90%' }, // Increase to better use page width
          mx: 'auto' // Center the container
        }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={() => handleManualCarouselNavigation('prev')}
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.9)',
              color: theme.palette.primary.main,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              zIndex: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronLeft size={24} />
          </IconButton>
          
          <IconButton
            onClick={() => handleManualCarouselNavigation('next')}
            sx={{
              position: 'absolute',
              right: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.9)',
              color: theme.palette.primary.main,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              zIndex: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChevronRight size={24} />
          </IconButton>

          {/* Three Cards Display with 3D Flip Animation */}
          <Box 
            sx={{ 
              position: 'relative',
              overflow: 'hidden',
              px: { xs: 6, md: 8 }, // Add padding to accommodate navigation buttons
              perspective: '1000px', // Enable 3D perspective
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                transform: isTransitioning 
                  ? slideDirection === 'next' 
                    ? 'rotateY(-90deg) scale(0.8)' 
                    : 'rotateY(90deg) scale(0.8)'
                  : 'rotateY(0deg) scale(1)',
                transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                opacity: isTransitioning ? 0.3 : 1,
                transformStyle: 'preserve-3d',
              }}
              key={`slide-${currentSlide}`}
            >
              {getCurrentSlideItems().map((solution, index) => (
                <Card 
                  key={index}
                  sx={{ 
                    height: '100%',
                    maxWidth: { xs: '280px', sm: '300px', md: '320px' },
                    width: '100%',
                    flex: 1,
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: hoveredItem === (currentSlide * itemsPerSlide + index)
                      ? '0 15px 35px rgba(0,0,0,0.25)' 
                      : '0 8px 20px rgba(0,0,0,0.12)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: `
                      ${hoveredItem === (currentSlide * itemsPerSlide + index) ? 'translateY(-15px) rotateX(5deg)' : 'translateY(0) rotateX(0deg)'} 
                      ${isTransitioning ? `rotateY(${slideDirection === 'next' ? '15deg' : '-15deg'}) translateZ(-50px)` : 'rotateY(0deg) translateZ(0px)'}
                    `,
                    bgcolor: theme.palette.primary.main,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    backfaceVisibility: 'hidden',
                  }}
                  onMouseEnter={() => setHoveredItem(currentSlide * itemsPerSlide + index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Image */}
                  <Box sx={{ 
                    height: { xs: 200, md: 230 }, 
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <LazyImage
                      src={solution.src}
                      alt={solution.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'all 0.4s ease',
                        transform: hoveredItem === (currentSlide * itemsPerSlide + index) ? 'scale(1.05)' : 'scale(1)',
                        filter: hoveredItem === (currentSlide * itemsPerSlide + index) ? 'blur(3px)' : 'blur(0px)',
                      }}
                    />
                    {/* Base overlay for better text contrast */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: hoveredItem === (currentSlide * itemsPerSlide + index) 
                          ? 'rgba(0,0,0,0.4)' 
                          : 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.2) 100%)',
                        transition: 'background 0.3s ease',
                      }}
                    />
                    
                    {/* Hover Information Overlay */}
                    <Fade in={hoveredItem === (currentSlide * itemsPerSlide + index)} timeout={300}>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            fontSize: { xs: '0.75rem', md: '0.85rem' },
                            fontFamily: 'Inter, sans-serif',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                            fontWeight: 500,
                            background: 'rgba(38, 77, 54, 0.8)',
                            borderRadius: '8px',
                            p: 2,
                            backdropFilter: 'blur(2px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                          }}
                        >
                          {solution.hoverInfo}
                        </Typography>
                      </Box>
                    </Fade>
                  </Box>

                  <CardContent sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                  }}>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      fontFamily="Lato, sans-serif"
                      fontWeight="700"
                      color={theme.palette.customColors.darkGold}
                      sx={{
                        position: 'relative',
                        textAlign: 'center',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        transition: 'transform 0.3s ease',
                        transform: hoveredItem === (currentSlide * itemsPerSlide + index) ? 'translateY(-2px)' : 'translateY(0)',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: '50%',
                          transform: 'translateX(-50%)',
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
                      {solution.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Carousel Indicators */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}>
            {Array.from({ length: totalSlides }, (_, index) => (
              <Box
                key={index}
                onClick={() => {
                  if (isTransitioning) return;
                  setIsTransitioning(true);
                  setSlideDirection(index > currentSlide ? 'next' : 'prev');
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsCarouselAutoPlaying(false);
                    setTimeout(() => {
                      setIsTransitioning(false);
                      setTimeout(() => setIsCarouselAutoPlaying(true), 5000);
                    }, 50);
                  }, 50);
                }}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: currentSlide === index
                    ? theme.palette.customColors.accentGreen 
                    : 'rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isTransitioning ? 'scale(1.2)' : 'scale(1)',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    bgcolor: theme.palette.customColors.accentGreen,
                  },
                }}
              />
            ))}
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

        {/* Our Journey & Specialization */}
        <Box sx={{ mb: 4, mt: 6 }}>
          {/* First Row: Our Journey Card + Image */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'column', md: 'row' }, 
            gap: { xs: 0, sm: 3, md: 3, lg: 4 },
            mb: 3,
            alignItems: 'center'
          }}>
            {/* Our Journey Card - Shows second on mobile/tablet, first on desktop */}
            <Box sx={{
              width: { xs: '100%', sm: '100%', md: '54%', lg: '52%' },
              display: 'flex',
              alignItems: 'center',
              minHeight: { xs: 350, sm: 400, md: 500, lg: 600 },
              px: { xs: 0, sm: 2, md: 0 },
              order: { xs: 2, sm: 2, md: 1 } // Second on mobile/tablet, first on desktop
            }}>
              <Card 
                elevation={4}
                sx={{ 
                  borderRadius: 2,
                  background: theme.customGradients.greenDark,
                  overflow: 'hidden',
                  width: '100%',
                  height: { xs: 160, sm: 180, md: 200, lg: 220 },
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                  },
                }}
              >
                <CardContent sx={{ 
                  p: { xs: 2.5, sm: 3, md: 3, lg: 3.5 },
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
                    sx={{ 
                      mb: { xs: 1, sm: 1.5, md: 1.5, lg: 2 },
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem' }
                    }}
                  >
                    Our Journey
                  </Typography>
                  <Typography 
                    variant="body1" 
                    fontFamily="Inter, sans-serif"
                    sx={{ 
                      color: theme.palette.customColors.lightGold,
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' },
                      lineHeight: { xs: 1.4, sm: 1.5, md: 1.5, lg: 1.6 }
                    }}
                  >
                    At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology and operate a state-of-the-art groundnut processing unit.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
             
            {/* Standalone Image - Shows first on mobile/tablet, second on desktop */}
            <Box
              sx={{
                width: { xs: '100%', sm: '100%', md: '42%', lg: '44%' },
                height: { xs: 350, sm: 400, md: 500, lg: 600 },
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                mx: { xs: 0, sm: 2, md: 0 },
                mt: { xs: -1, sm: 0, md: 0 },
                order: { xs: 1, sm: 1, md: 2 }, // First on mobile/tablet, second on desktop
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
            mt: { xs: 2, sm: 3, md: 3, lg: 4 },
            px: { xs: 1, sm: 2, md: 0 }
          }}>
            <Card 
              elevation={4}
              sx={{ 
                borderRadius: 2,
                background: theme.customGradients.greenDark,
                overflow: 'hidden',
                width: { xs: '100%', sm: '90%', md: '70%', lg: '60%' },
                maxWidth: '800px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                },
              }}
            >
              <CardContent sx={{ 
                p: { xs: 2.5, sm: 3, md: 3, lg: 3.5 },
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
                  sx={{ 
                    mb: { xs: 1.5, sm: 2, md: 2, lg: 2.5 },
                    fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem', lg: '1.5rem' },
                    textAlign: 'left'
                  }}
                >
                  Our Specialization
                </Typography>
                <Typography 
                  variant="body1" 
                  fontFamily="Inter, sans-serif"
                  sx={{ 
                    color: theme.palette.customColors.lightGold,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.2rem' },
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.6, lg: 1.7 },
                    textAlign: 'justify'
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



