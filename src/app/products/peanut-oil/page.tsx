'use client';

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import Fade from '@mui/material/Fade';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ProductIntroTiles from '@/components/ProductIntroTiles';

// Import icons
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning';

// Import images
import fssaiLogo from "@/assets/images/fssai.png";
import haccpLogo from "@/assets/images/HACCP.png";
import isoLogo from "@/assets/images/ISO.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
import cosmetic from "@/assets/images/Cosmetics.png";
import industry from "@/assets/images/industry.png";
import oilImage from "@/assets/images/productImg/Oil.jpg";

// Import key feature images
import keyFeatureImg1 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_snawjosnawjosnaw.jpeg";
import keyFeatureImg2 from "@/assets/images/productImg/key_features/medicinal-mushroom-lingzhi-mushroom-plant-legume-1946203.jpg";
import keyFeatureImg3 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_hvcuc7hvcuc7hvcu.jpeg";
import keyFeatureImg4 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_cpb11wcpb11wcpb1.jpeg";
import keyFeatureImg5 from "@/assets/images/productImg/key_features/top-view-peanuts-green-background.jpg";

// Meta tags component
const MetaTags: React.FC = () => {
  useEffect(() => {
    // Set meta tags
    document.title = "Premium Peanut Oil | High-Quality Cooking Oil";
    
    // Add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover our premium peanut oil, perfect for cooking, cosmetics, and industrial applications. High smoke point, neutral flavor, and heart-healthy benefits.';
    document.head.appendChild(metaDescription);
    
    // Add meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'peanut oil, cooking oil, high smoke point, heart-healthy oil, industrial oil, cosmetic oil';
    document.head.appendChild(metaKeywords);
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Premium Peanut Oil",
      "description": "High-quality peanut oil for cooking, cosmetics, and industrial applications",
      "brand": {
        "@type": "Brand",
        "name": "Your Brand Name"
      }
    });
    document.head.appendChild(script);
    
    // Cleanup function
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(script);
    };
  }, []);
  
  return null;
};

// Product Specifications Component
const ProductSpecifications: React.FC = () => {
  const theme = useTheme();
  
  // Updated Specifications data organized by sections
  const specSections = {
    appearance: {
      title: "Appearance & Color",
      icon: <EmojiEventsIcon />,
      items: [
        { name: "Appearance", value: "Light yellow, clear" },
        { name: "Color", value: "Pale yellow to golden" }
      ]
    },
    composition: {
      title: "Composition & Properties",
      icon: <BarChartIcon />,
      items: [
        { name: "Moisture & Impurities", value: "≤ 0.1%" },
        { name: "Free Fatty Acids (FFA)", value: "≤ 1% as Oleic Acid" },
        { name: "Iodine Value", value: "87 – 96 units" },
        { name: "Saponification Value", value: "189 – 195 mg KOH/g" }
      ]
    },
    usage: {
      title: "Usage & Characteristics",
      icon: <LocalShippingIcon />,
      items: [
        { name: "Smoke Point", value: "450°F (232°C)" },
        { name: "Fat Content", value: "49% to 50% (mainly unsaturated fats)" }
      ]
    },
    quality: {
      title: "Quality Parameters",
      icon: <CheckIcon />,
      items: [
        { name: "Unsaponifiable Matter", value: "≤ 0.9%" },
        { name: "Aflatoxin Level", value: "Below permissible limits (≤ 15 ppb)" }
      ]
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: '6xl', 
      mx: 'auto', 
      px: 4, 
      py: { xs: 6, md: 4 },
      mb: { xs: -2, md: -3 }
    }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '1.875rem', sm: '2.25rem' }, 
            fontWeight: 'bold', 
            mb: 3,
            fontFamily: 'Lato, sans-serif',
          }}
        >
          <Typography 
            component="span" 
            variant="inherit" 
            sx={{ color: theme.palette.primary.main }}
          >
            Product
          </Typography>{" "}
          <Typography 
            component="span" 
            variant="inherit"
            sx={{ color: theme.palette.secondary.main }}
          >
            Specifications
          </Typography>
        </Typography>
        <Box sx={{ width: '5rem', height: '0.25rem', bgcolor: theme.palette.primary.main, mx: 'auto', mb: 2 }}></Box>
        <Typography 
          variant="body1"
          sx={{ 
            color: theme.palette.secondary.main, 
            fontSize: '1rem',
            maxWidth: '2xl', 
            mx: 'auto',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Our premium oil meets the highest quality standards for international markets
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Object.entries(specSections).map(([key, section]) => (
          <Paper 
            key={key}
            elevation={2}
            sx={{ 
              border: 1, 
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
              transition: 'all 300ms ease-in-out',
              bgcolor: theme.palette.customColors.lightGold, 
              width: '100%'
            }}
          >
            <Box
              sx={{
                width: '100%', 
                display: 'flex', 
                justifyContent: 'flex-start',
                alignItems: 'center', 
                p: 2,
                textAlign: 'left',
                color: theme.palette.secondary.main
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar 
                  sx={{ 
                    height: 40, 
                    width: 40, 
                    bgcolor: theme.palette.primary.main,
                    color: 'white'
                  }}
                >
                  {section.icon}
                </Avatar>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontSize: '1.125rem', 
                    fontWeight: 600,
                    fontFamily: 'Lato, sans-serif',
                    color: theme.palette.primary.main
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
            </Box>
            
            <Box 
              sx={{ 
                p: 3, 
                borderTop: 1, 
                bgcolor: theme.palette.customColors.darkGold,
                borderColor: 'rgba(255,255,255,0.2)',
              }}
            >
              {section.items.map((item, idx) => (
                <Box 
                  key={idx} 
                  sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap',
                    py: 2,
                    borderBottom: idx !== section.items.length - 1 ? 1 : 0,
                    borderColor: 'rgba(255,255,255,0.2)',
                  }}
                >
                  <Box sx={{ 
                    width: { xs: '100%', sm: '40%' }, 
                    fontWeight: 700, 
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{ mr: 1, color: theme.palette.customColors.darkGold, fontSize: '1.5rem' }}>
                      🥜
                    </Typography>
                    {item.name}:
                  </Box>
                  <Box sx={{ 
                    width: { xs: '100%', sm: '60%' },
                    fontWeight: 500, 
                    mt: { xs: 1, sm: 0 },
                    pl: { xs: 6, sm: 0 },
                    color: theme.palette.secondary.main,
                  }}>
                    {item.value}
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

// Key Features Carousel Component
const KeyFeaturesCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    { src: keyFeatureImg1, alt: "Premium Quality Peanut Oil" },
    { src: keyFeatureImg2, alt: "Natural and Pure Ingredients" },
    { src: keyFeatureImg3, alt: "Health Benefits" },
    { src: keyFeatureImg4, alt: "Versatile Applications" },
    { src: keyFeatureImg5, alt: "Sustainable Production" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setImageLoaded(false);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageLoaded(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoaded(false);
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 15px 30px rgba(0,0,0,0.2)',
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconButton
        onClick={handlePrevImage}
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { 
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            transform: 'translateY(-50%) scale(1.1)',
          },
          boxShadow: 2,
          transition: 'all 0.3s ease',
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={handleNextImage}
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { 
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            transform: 'translateY(-50%) scale(1.1)',
          },
          boxShadow: 2,
          transition: 'all 0.3s ease',
        }}
      >
        <ChevronRight />
      </IconButton>

      <Fade in={true} timeout={800}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            onLoad={() => setImageLoaded(true)}
            fill
            style={{
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
              transform: imageLoaded ? 'scale(1)' : 'scale(1.05)',
            }}
            priority
          />
        </Box>
      </Fade>

      <Box sx={{
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1,
        zIndex: 2,
        bgcolor: 'rgba(0,0,0,0.3)',
        px: 2,
        py: 1,
        borderRadius: 2,
        backdropFilter: 'blur(4px)',
      }}>
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                bgcolor: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.8)',
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const PeanutOilPage: React.FC = () => {
  const theme = useTheme();
  
  return (
    <>
      <MetaTags />
      <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
        {/* Introduction Section */}
        <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 3, md: 5 } }}>
          <Grid 
            container 
            spacing={{ xs: 4, md: 4 }} 
            alignItems="center" 
            justifyContent="space-between"
          >
            {/* Left side for image */}
            <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
              <Box 
                sx={{ 
                  height: { xs: 300, sm: 400, md: 450 }, 
                  borderRadius: 4,
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  }
                }}
              >
                <Image
                  src={oilImage}
                  alt="Premium Peanut Oil"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
            
            {/* Right side for text */}
            <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
              <Typography 
                variant="h3"
                component="h3"
                gutterBottom
                sx={{ 
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                  position: 'relative',
                  pb: 2,
                  mt: -9,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '80px',
                    height: '4px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '2px'
                  }
                }}
              >
                What Is Peanut Oil ?
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  my: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.8,
                }}
              >
                <span style={{ fontWeight: 700 }}> Peanut Oil (also known as Groundnut Oil) </span>
                is a vegetable oil derived from the seeds of peanuts. It is known for its neutral flavor, high smoke point, and nutritional benefits, making it an ideal choice for cooking and frying.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.8,
                }}
              >
                Peanut oil is rich in monounsaturated and polyunsaturated fats, making it a heart-healthy option compared to many other oils.
              </Typography>
              
              {/* Certification Logos - using Next.js Image component */}
              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                justifyContent: 'center', 
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                {[
                  { src: fssaiLogo, alt: "FSSAI Certification" },
                  { src: haccpLogo, alt: "HACCP Certification" },
                  { src: isoLogo, alt: "ISO 27001 Certification" }
                ].map((logo, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'relative',
                      height: '55px',
                      width: '100px',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      style={{
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          
          <Typography
            variant="body1" 
            sx={{ 
              my: 4,
              fontFamily: 'Inter, sans-serif',
              color: theme.palette.secondary.main,
              fontSize: { xs: '0.95rem', md: '1rem' },
              lineHeight: 1.8,
              textAlign: { xs: 'left', md: 'center' },
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            There are several types of peanut oil available, including refined, unrefined, cold-pressed, and roasted, each with its own flavor profile and uses. 
            Refined Peanut Oil is typically the most common type used for cooking, while Roasted Peanut Oil has a distinctive nutty flavor suitable for salads and dressings.
          </Typography>
        </Container>

        
        <Box 
          component="section"
          aria-label="Product Applications"
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: theme.palette.customColors.darkGold,
            mt: { xs: 8, md: 12 }, 
            py: { xs: 6, md: 8 },
            borderRadius: { md: '100px 0 100px 0' },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background decoration */}
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0.05,
              backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10.5%), radial-gradient(circle, #ffffff 10%, transparent 10.5%)',
              backgroundSize: '30px 30px',
              backgroundPosition: '0 0, 15px 15px'
            }}
          />
          <Container maxWidth="lg">
            <Typography 
              variant="h3"
              component="h2"
              align="center" 
              sx={{ 
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                position: 'relative',
                display: 'inline-block',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                width: '100%',
                color: theme.palette.customColors.darkGold,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  backgroundColor: theme.palette.customColors.darkGold,
                  borderRadius: '2px'
                }
              }}
            >
              Applications
            </Typography>

            {/* Application bullet points */}
            <Box sx={{
              maxWidth: '800px',
              mx: 'auto',
              mt: 4,
              px: 3
            }}>
              {[
                {
                  title: "Cooking and Frying:",
                  icon: <Image src={groundnutOilIcon} alt="Peanut Oil" width={28} height={28} />,
                  desc: "Peanut oil is ideal for deep frying, sautéing, and stir-frying due to its high smoke point (around 450°F / 232°C). It can withstand high temperatures without breaking down or producing harmful compounds."
                },
                {
                  title: "Snacks",
                  icon: "🍿",
                  desc: "Used in the preparation of snacks like chips, fries, and roasted peanuts."
                },
                {
                  title: "Confectionery Applications",
                  icon: "🍫",
                  desc: "Peanut oil is used in various chocolate and candy preparations due to its neutral flavor."
                },
                {
                  title: "Cosmetics",
                  icon: <Image src={cosmetic} alt="Cosmetics" width={28} height={28} />,
                  desc: "Due to its moisturizing properties, peanut oil is used in skincare products like lotions, creams, and soaps."
                },
                {
                  title: "Industrial Uses",
                  icon: <Image src={industry} alt="Industries" width={28} height={28} />,
                  desc: "Peanut oil is sometimes utilized in biodiesel production and as a lubricant in industrial applications."
                }
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    mb: 3.5,
                    alignItems: 'flex-start'
                  }}
                >
                  {/* Icon container */}
                  <Box 
                    sx={{ 
                      minWidth: '42px',
                      width: '42px', 
                      height: '42px',
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {typeof item.icon === 'string' ? (
                      <Typography
                        variant="h5"
                        component="span"
                        sx={{
                          fontSize: '1.8rem',
                          lineHeight: 1,
                          color: theme.palette.customColors.darkGold
                        }}
                      >
                        {item.icon}
                      </Typography>
                    ) : (
                      item.icon
                    )}
                  </Box>
                  
                  {/* Text content */}
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontFamily: 'Lato, sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        mb: 0.5,
                        color: theme.palette.customColors.darkGold
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        color: theme.palette.customColors.lightGold,
                        lineHeight: 1.6
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Conclusion */}
            <Typography 
              variant="body1"
              sx={{ 
                mt: 4,
                fontFamily: 'Inter, sans-serif',
                fontSize: { xs: '1rem', md: '1.05rem' },
                color: theme.palette.customColors.lightGold,
                textAlign: 'center',
                maxWidth: '850px',
                mx: 'auto',
                fontStyle: 'italic',
                p: 2,
                borderRadius: 2,
                background: 'rgba(255,255,255,0.07)'
              }}
            >
              Our Peanut Oil' consistent quality ensures reliable performance across all these applications, 
              making them a preferred choice for businesses requiring premium ingredients.
            </Typography>
          </Container>
        </Box>

        {/* Product Specifications Section */}
        <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
          <ProductSpecifications />
        </Container>

        {/* Key Features Section */}
        <Container component="section" aria-label="Key Features" maxWidth="lg" sx={{ mt: { xs: 1, md: 2 }, mb: { xs: 5, md: 7 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
            <Typography 
              variant="h2" 
              component="h2" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.primary.main}
              sx={{ 
                mb: 0,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                display: 'inline'
              }}
            >
              Key{' '}
            </Typography>
            <Typography 
              variant="h2" 
              component="span" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              sx={{ 
                color: theme.palette.secondary.main,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                display: 'inline'
              }}
            >
              Features
            </Typography>
            
            <Box 
              sx={{ 
                width: '80px', 
                height: '4px', 
                backgroundColor: theme.palette.primary.main, 
                mx: 'auto', 
                mt: 2, 
                mb: 4,
                borderRadius: '2px'
              }} 
            />
          </Box>

          {/* Features and Carousel Container */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: '4%' }
          }}>
            {/* Features Section - Left side */}
            <Box sx={{ 
              width: { xs: '100%', md: '48%' }
            }}>
              <Paper 
                elevation={3}
                sx={{ 
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark || '#1a3526'} 100%)`,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)'
                  }
                }}
              >
                {[
                  { 
                    title: "Shape", 
                    description: "Large, round, and flat kernels"
                  },
                  { 
                    title: "Color", 
                    description: "Light reddish to pink skin"
                  },
                  { 
                    title: "Taste", 
                    description: "Rich and nutty with excellent roasting profile"
                  },
                  { 
                    title: "Cultivation Area", 
                    description: "Gujarat, India"
                  },
                  { 
                    title: "Shelf Life", 
                    description: "8–10 months in cool, dry conditions"
                  }
                ].map((feature, index, array) => (
                  <Box 
                    key={index}
                    sx={{
                      p: 3,
                      borderBottom: index !== array.length - 1 ? `1px solid rgba(255,255,255,0.1)` : 'none',
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      fontFamily="Lato, sans-serif"
                      fontWeight="bold"
                      sx={{ 
                        color: theme.palette.customColors.darkGold, 
                        mb: 1.5,
                        fontSize: { xs: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography 
                      variant="body2"
                      fontFamily="Inter, sans-serif"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        lineHeight: 1.6
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Box>

            {/* Image Carousel - Right side */}
            <Box sx={{ 
              width: { xs: '100%', md: '48%' },
              height: { xs: '300px', md: '400px' }
            }}>
              <KeyFeaturesCarousel />
            </Box>
          </Box>
        </Container>

        {/* Additional Information Section */}
        <Container component="section" aria-label="Why Choose Our Products" maxWidth="lg" sx={{ my: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
              {/* Section title */}
              <Typography 
                variant="h3"
                component="h2"
                sx={{ 
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  mb: 4,
                  textAlign: { xs: 'left', md: 'center' },
                  fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' }
                }}
              >
                Why Choose Our Peanut Oil?
              </Typography>
              
              {/* Industry applications */}
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                Whether you are looking to buy groundnuts in bulk, need reliable peanut exporters from India to Europe, or want to source bulk peanuts for the Middle East market, Balaji Exports is your trusted partner.
              </Typography>

              {/* Wholesale information */}
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                Our wholesale peanut supply team in India offers competitive groundnut prices per ton, along with flexible shipping options tailored to your business needs.
              </Typography>

              {/* Quality focus */}
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                As one of the top peanut exporters from India, we ensure that every shipment undergoes strict quality checks, hygienic processing, and secure packaging — delivering only the finest products to your destination.
              </Typography>

              {/* Call to action */}
              <Typography 
                variant="body1" 
                component="p"
                sx={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: theme.palette.secondary.main,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  position: 'relative',
                  pl: 3,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }
                }}
              >
                Partner with Balaji Exports, a leading peanut export company in India, to source premium-quality peanut oil and groundnuts for your global operations. Trust our expertise, consistency, and commitment to deliver excellence — from India's fertile fields to your business.
              </Typography>
              
              {/* CTA Button */}
              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Button 
                  variant="contained"
                  component={Link}
                  href="/contact"
                  size="large"
                  aria-label="Request a quotation for Peanut Oil"
                  sx={{ 
                    bgcolor: theme.palette.primary.main,
                    fontFamily: 'Inter, sans-serif',
                    px: { xs: 4, md: 5 }, 
                    py: { xs: 1, md: 1.5 }, 
                    fontSize: { xs: 15, md: 16 },
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.main,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    }
                  }}
                >
                  Request Quotation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Breadcrumbs */}
        <Container sx={{ mb: 4, mt: 8 }}>
          <nav aria-label="breadcrumb">
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                fontFamily: 'Inter, sans-serif',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1
              }}
            >
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
              <span style={{ color: theme.palette.primary.main }}>Peanut Oil</span>
            </Typography>
          </nav>
        </Container>
      </Box>
    </>
  );
};

export default PeanutOilPage;
