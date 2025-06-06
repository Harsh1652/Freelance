'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card, 
  CardActionArea, 
  CardContent,
  useTheme,
  useMediaQuery,
  Fade
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import styled from '@emotion/styled';

// Import product images
import boldPeanutsImage from '@/assets/images/Home/product_h_img/bold .jpg';
import runnerPeanutsImage from '@/assets/images/Home/product_h_img/runner .jpeg';
import redSkinPeanutsImage from '@/assets/images/Home/product_h_img/red skin .jpg';
import spanishPeanutsImage from '@/assets/images/Home/product_h_img/spanish peanuts .jpeg';
import tjPeanutsImage from '@/assets/images/Home/product_h_img/tj peanuts .jpeg';
import longJavaPeanutsImage from '@/assets/images/Home/product_h_img/java .jpeg';
import virginiaPeanutsImage from '@/assets/images/Home/product_h_img/virginia .jpeg';
import peanutOilImage from '@/assets/images/Home/product_h_img/PeanutOil.jpeg';

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
    image: undefined
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
    image: undefined
  },
  {
    name: 'K6 Peanuts',
    path: '/products/k6-peanuts',
    description: 'Popular variety known for drought resistance and exceptional quality.',
    image: undefined
  },
  {
    name: 'Mathadi Peanuts',
    path: '/products/mathadi-peanuts',
    description: 'Traditional variety with distinctive taste and cultural significance.',
    image: undefined
  },
  {
    name: 'Girnar 4 - Girnar 5 Peanuts',
    path: '/products/girnar-peanuts',
    description: 'Improved varieties with enhanced disease resistance and higher yields.',
    image: undefined
  },
  {
    name: 'ICGV 03043 Peanuts',
    path: '/products/icgv03043-peanuts',
    description: 'Research-backed variety with improved nutritional profile and yield potential.',
    image: undefined
  },
  {
    name: 'ICGV 15099 Peanuts',
    path: '/products/icgv-15099-peanuts',
    description: 'Modern peanut variety with enhanced resistance to environmental stressors.',
    image: undefined
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
    image: undefined
  },
  {
    name: 'Peanut Oil',
    path: '/products/peanut-oil',
    description: 'Pure, cold-pressed peanut oil with rich flavor, ideal for cooking and frying.',
    image: peanutOilImage
  }
];

const ChatBubble = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 24,
  right: 90,
  backgroundColor: 'white',
  color: '#333',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  maxWidth: '220px',
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

const ProductsListing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <Box sx={{ 
      py: 8, 
      backgroundColor: theme.palette.background.default,
      position: 'relative',
      overflow: 'hidden'
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: -2, mt: '-32px' }}>
        <Typography 
          variant={isMobile ? "h4" : "h3"} 
          component="h1" 
          fontFamily="Lato, sans-serif"
          fontWeight="700"
          align="center"
          sx={{ 
            mb: 2,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
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
          align="center"
          sx={{ 
            maxWidth: '800px', 
            mx: 'auto', 
            mb: 6,
            color: theme.palette.primary.main,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6
          }}
        >
          Discover our extensive range of high-quality peanut varieties and peanut-derived products.
          Sourced from our own organic farms and processed with care to deliver exceptional quality.
        </Typography>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-8px',
          justifyContent: 'center',
        }}>
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(33.33% - 16px)'
                },
                padding: '8px',
                boxSizing: 'border-box',
                transition: 'transform 0.3s ease',
                maxWidth: '350px',
              }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  maxWidth: { xs: '280px', md: '320px' },
                  mx: { xs: 'auto', md: 0 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: hoveredItem === index 
                    ? '0 8px 20px rgba(0,0,0,0.18)'
                    : '0 3px 10px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredItem === index ? 'translateY(-8px)' : 'translateY(0)',
                  bgcolor: theme.palette.primary.main,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardActionArea 
                  component={Link} 
                  href={product.path}
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <Box 
                    sx={{ 
                      height: 160,
                      position: 'relative',
                      overflow: 'hidden',
                      background: !product.image ? theme.palette.customColors.accentGreen + '22' : (product.name === 'Peanut Oil' ? '#fff' : undefined),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ 
                          objectFit: product.name === 'Peanut Oil' ? 'contain' : 'cover',
                          background: product.name === 'Peanut Oil' ? '#fff' : undefined,
                          transform: hoveredItem === index ? 'scale(1.05)' : 'scale(1)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    ) : null}
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    pb: '12px !important',
                    px: 2,
                    pt: 2,
                  }}>
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ 
                        color: theme.palette.customColors.darkGold,
                        fontWeight: 700,
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        position: 'relative',
                        pb: 1,
                        mb: 1,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '30px',
                          height: '2px',
                          backgroundColor: theme.palette.customColors.accentGreen,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '50px',
                        }
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: theme.palette.customColors.lightGold,
                        fontSize: '0.8rem',
                        lineHeight: 1.5,
                        flexGrow: 1
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
                          <ChevronRight size={16} />
                        </Box>
                      </Fade>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsListing; 