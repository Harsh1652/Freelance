'use client';

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import Fade from '@mui/material/Fade';
import type { ReactNode } from "react";

import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

// Import images
import fssaiLogo from "@/assets/images/fssai.png";
import haccpLogo from "@/assets/images/HACCP.png";
import isoLogo from "@/assets/images/ISO.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";

// Import key feature images
import keyFeatureImg1 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_snawjosnawjosnaw.jpeg";
import keyFeatureImg2 from "@/assets/images/productImg/key_features/medicinal-mushroom-lingzhi-mushroom-plant-legume-1946203.jpg";
import keyFeatureImg3 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_hvcuc7hvcuc7hvcu.jpeg";
import keyFeatureImg4 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_cpb11wcpb11wcpb1.jpeg";
import keyFeatureImg5 from "@/assets/images/productImg/key_features/top-view-peanuts-green-background.jpg";

import ProductIntroTiles from '@/components/ProductIntroTiles';

const Head = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Extract and apply meta tags from children
    React.Children.forEach(children, child => {
      if (!child) return;
      
      if (React.isValidElement(child) && child.type === 'title') {
        const el = child as React.ReactElement<any, any>;
        document.title = el.props.children;
      }
      
      if (React.isValidElement(child) && (child.type === 'meta' || child.type === 'link')) {
        const el = child as React.ReactElement<any, any>;
        const domEl = document.createElement(el.type as string);
        Object.entries(el.props).forEach(([key, value]) => {
          domEl.setAttribute(key, value as string);
        });
        document.head.appendChild(domEl);
      }
      
      if (React.isValidElement(child) && child.type === 'script' && (child as React.ReactElement<any, any>).props.type === 'application/ld+json') {
        const el = child as React.ReactElement<any, any>;
        const domEl = document.createElement('script');
        domEl.type = 'application/ld+json';
        domEl.textContent = el.props.children;
        document.head.appendChild(domEl);
      }
    });
    
    // Cleanup on unmount
    return () => {
      // Remove any added elements when component unmounts
      // (Implementation would need to track added elements)
    };
  }, [children]);
  
  return null;
};

const PeanutButterPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <Head>
        <title>Premium Peanut Butter – Creamy & Crunchy | Balaji Exports</title>
        <meta
          name="description"
          content="Delicious and nutritious peanut butter made from ≥90% roasted peanuts. High in protein and healthy fats. Ideal for food industry, fitness diets, and retail markets."
        />
        <meta
          name="keywords"
          content="peanut butter, creamy peanut butter, crunchy peanut butter, natural peanut butter, protein spread, vegan spread, wholesale peanut butter, peanut butter exporter India"
        />
        <link rel="canonical" href="https://balajiexports.com/products/peanut-butter" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Premium Peanut Butter – Creamy & Crunchy | Balaji Exports" />
        <meta
          property="og:description"
          content="High-protein, non-GMO peanut butter made from ≥90% roasted peanuts. No preservatives or hydrogenated oils. Perfect for baking, fitness, or daily use."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://balajiexports.com/products/peanut-butter" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Peanut Butter – Creamy & Crunchy | Balaji Exports" />
        <meta
          name="twitter:description"
          content="Natural peanut butter rich in protein and flavor. Suitable for food processing, health diets, and export markets."
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Premium Peanut Butter",
              "description": "Delicious and nutritious peanut butter made from ≥90% roasted peanuts. Available in creamy and crunchy textures. FSSAI, HACCP, ISO 22000 certified. USDA Organic on request.",
              "brand": {
                "@type": "Brand",
                "name": "Balaji Exports"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://balajiexports.com/products/peanut-butter",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Head>

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
                overflow: 'hidden'
              }}
            >
              <Image
                src={""}
                alt="Premium Peanut Butter"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
            <ProductIntroTiles />
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
              Peanut Butter – Nutritious, Protein-Rich Spread Made from Premium Roasted Peanuts
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
              <span style={{ fontWeight: 700 }}> Peanut Butter is a rich, creamy spread </span>
              made from premium-grade roasted peanuts. Packed with protein, healthy fats, and essential nutrients, it is a delicious and nutritious food product suitable for a variety of culinary and health applications.
            </Typography>
        
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                fontFamily: 'Inter, sans-serif',
                color: theme.palette.secondary.main,
                fontSize: { xs: '0.95rem', md: '1rem' },
                lineHeight: 1.8,
              }}
            >
              Available in both creamy and crunchy textures, our peanut butter is made without artificial preservatives or added hydrogenated oils.
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: { xs: 4, md: 5 },
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                mb: 3
              }}
            >
              {/* Certification Logos */}
              {[
                { src: fssaiLogo.src, alt: "FSSAI Certification" },
                { src: haccpLogo.src, alt: "HACCP Certification" },
                { src: isoLogo.src, alt: "ISO 27001 Certification" }
              ].map((logo, index) => (
                <Image 
                  key={index}
                  src={logo.src} 
                  alt={logo.alt}
                  width={100}
                  height={55}
                  style={{ 
                    maxWidth: '100px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                />
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
          Our peanut butter is made without artificial preservatives or added hydrogenated oils.
        </Typography>
      </Container>

      {/* Applications Section */}
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

          {/* Introduction paragraph */}
          <Typography 
            variant="body1"
            sx={{ 
              mt: 5,
              mb: 4,
              fontFamily: 'Inter, sans-serif',
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: theme.palette.customColors.lightGold,
              textAlign: 'center',
              maxWidth: '850px',
              mx: 'auto',
              lineHeight: 1.8
            }}
          >
            Peanut Butter is highly versatile with exceptional nutritional properties and consistent quality, 
            making it suitable for various industrial and commercial applications. Our premium peanut butter 
            is specifically crafted to meet the demanding requirements of the following industries:
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
                title: "Food Industry", 
                icon: "🍞", 
                desc: "Used in bakery products, protein bars, smoothies, sauces, and confectionery items." 
              },
              { 
                title: "Retail & Household Use", 
                icon: "🏠", 
                desc: "Popular as a sandwich spread, breakfast topping, or ingredient in home cooking and desserts." 
              },
              { 
                title: "Nutritional Supplements", 
                icon: "💪", 
                desc: "Favored in fitness diets and meal plans for its high protein and energy content." 
              },
              { 
                title: "Export Markets", 
                icon: "🌍", 
                desc: "High demand in countries with growing health-conscious populations and plant-based diet trends." 
              }
            ].map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  mb: 4,
                  alignItems: 'start',
                  gap: 2
                }}
              >
                <Box 
                  sx={{ 
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
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
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      mb: 1,
                      color: theme.palette.customColors.darkGold,
                      lineHeight: 1.2
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
            Our peanut butter's consistent quality ensures reliable performance across all these applications, 
            making it a preferred choice for businesses requiring premium ingredients.
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
                "100% Natural & Non-GMO",
                "High Protein & Fiber Content",
                "No Artificial Colors or Preservatives",
                "Vegan-Friendly and Gluten-Free",
                "Smooth Texture & Rich Taste",
                "Customizable Flavors and Packaging for B2B Orders"
              ].map((feature, index, array) => (
                <Box 
                  key={index}
                  sx={{
                    p: 3,
                    borderBottom: index !== array.length - 1 ? `1px solid rgba(255,255,255,0.1)` : 'none',
                  }}
                >
                  <Typography 
                    variant="body1" 
                    fontFamily="Inter, sans-serif"
                    fontWeight={500}
                    sx={{ 
                      color: theme.palette.customColors.lightGold,
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {feature}
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
              Why Choose Our Peanut Butter?
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
              Food industries requiring consistent quality and flavor for premium products and international applications choose our peanut butter for reliable performance.
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
              As leading peanut butter suppliers in India, we offer competitive prices for large-scale buyers looking to source peanut butter in bulk. We specialize in supplying to food manufacturers worldwide, retail chains, and distributors across global markets.
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
              Our focus is always on delivering the best quality peanut butter with strict attention to hygienic packaging and lab-tested products that are safe, healthy, and fresh. Whether you need peanut butter for food industries or retail markets, Balaji Exports is your most reliable partner in the peanut butter export business.
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
              Partner with Balaji Exports, the top peanut butter export company in India, and source the highest quality peanut butter for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
            </Typography>
            
            {/* CTA Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                variant="contained"
                component={Link}
                href="/contact"
                size="large"
                aria-label="Request a quotation for Peanut Butter"
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
            <span style={{ color: theme.palette.primary.main }}>Peanut Butter</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

const ProductSpecifications = () => {
  const theme = useTheme();

  // Specifications data organized by sections
  const specSections = {
    productDetails: {
      title: "Product Details",
      icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Type", value: "Creamy / Crunchy" },
        { name: "Ingredients", value: "Roasted peanuts (≥90%), salt, sugar (optional), and natural stabilizers" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Packaging Options", value: "PET jars, sachets, bulk drums (as per buyer requirement), or customizable" },
        { name: "Shelf Life", value: "12 to 18 months from manufacturing date" },
        { name: "Storage Condition", value: "Store in a cool, dry place away from direct sunlight" }
      ]
    },
    certifications: {
      title: "Certifications",
      icon: <CheckIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "FSSAI", value: "Certified" },
        { name: "HACCP", value: "Certified" },
        { name: "ISO 22000", value: "Certified" },
        { name: "USDA Organic", value: "Available on request" }
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
          Our Peanut Butter meets the highest quality standards for international markets
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
const KeyFeaturesCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = [
    { src: keyFeatureImg1, alt: "Key Feature Image 1" },
    { src: keyFeatureImg2, alt: "Key Feature Image 2" },
    { src: keyFeatureImg3, alt: "Key Feature Image 3" },
    { src: keyFeatureImg4, alt: "Key Feature Image 4" },
    { src: keyFeatureImg5, alt: "Key Feature Image 5" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setImageLoaded(false);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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
    <Box sx={{ 
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 3,
      overflow: 'hidden',
      boxShadow: '0px 10px 20px rgba(0,0,0,0.1)'
    }}>
      <IconButton
        onClick={handlePrevImage}
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
          boxShadow: 2
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
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
          boxShadow: 2
        }}
      >
        <ChevronRight />
      </IconButton>

      <Fade in={true} timeout={500}>
        <Box
          component={Image}
          src={images[currentImageIndex].src.src}
          alt={images[currentImageIndex].alt}
          fill
          style={{
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          onLoad={() => setImageLoaded(true)}
        />
      </Fade>

      <Box sx={{
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1,
        zIndex: 2
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
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PeanutButterPage;
