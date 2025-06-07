'use client';

import React, { useEffect, useState, ReactNode } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Fade from '@mui/material/Fade';

import CheckIcon from '@mui/icons-material/Check';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import peanutButterIcon from "../../../assets/images/PeanutButter.png";
import groundnutOilIcon from "../../../assets/images/GroundNutOil.png";
import confectionaryIcon from "../../../assets/images/baking.png";
import foodIcon from "../../../assets/images/Food.png";

// Certification images
import fssaiLogo from "../../../assets/images/fssai.png";
import haccpLogo from "../../../assets/images/HACCP.png";
import isoLogo from "../../../assets/images/ISO.png";

// Key feature images
import keyFeatureImg1 from "../../../assets/images/productImg/key_features/Gemini_Generated_Image_snawjosnawjosnaw.jpeg";
import keyFeatureImg2 from "../../../assets/images/productImg/key_features/medicinal-mushroom-lingzhi-mushroom-plant-legume-1946203.jpg";
import keyFeatureImg3 from "../../../assets/images/productImg/key_features/Gemini_Generated_Image_hvcuc7hvcuc7hvcu.jpeg";
import keyFeatureImg4 from "../../../assets/images/productImg/key_features/Gemini_Generated_Image_cpb11wcpb11wcpb1.jpeg";
import keyFeatureImg5 from "../../../assets/images/productImg/key_features/top-view-peanuts-green-background.jpg";

import ProductIntroTiles from '@/components/ProductIntroTiles';

interface HeadProps {
  children: ReactNode;
}

const Head = ({ children }: HeadProps) => {
  useEffect(() => {
    const processChild = (child: ReactNode) => {
      if (!React.isValidElement(child)) return;
      const element = child as React.ReactElement;
      if (element.type === 'title') {
        document.title = element.props.children;
      }
      if (element.type === 'meta') {
        const meta = element.props;
        const existingMeta = document.querySelector(`meta[${meta.name ? `name="${meta.name}"` : `property="${meta.property}"`}]`);
        if (existingMeta) {
          existingMeta.setAttribute('content', meta.content);
        } else {
          const newMeta = document.createElement('meta');
          Object.entries(meta).forEach(([key, value]) => {
            newMeta.setAttribute(key, value as string);
          });
          document.head.appendChild(newMeta);
        }
      }
      if (element.type === 'link') {
        const link = element.props;
        const existingLink = document.querySelector(`link[rel="${link.rel}"]`);
        if (!existingLink) {
          const newLink = document.createElement('link');
          Object.entries(link).forEach(([key, value]) => {
            newLink.setAttribute(key, value as string);
          });
          document.head.appendChild(newLink);
        }
      }
      if (element.type === 'script' && element.props.type === 'application/ld+json') {
        const script = element.props;
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          existingScript.textContent = script.children;
        } else {
          const newScript = document.createElement('script');
          newScript.type = 'application/ld+json';
          newScript.textContent = script.children;
          document.head.appendChild(newScript);
        }
      }
    };
    React.Children.forEach(children, processChild);
    return () => {};
  }, [children]);
  return null;
};

const MathadiPeanutPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <Head>
  {/* Primary Meta Tags */}
  <title>Premium Mathadi Peanuts | Export Quality Groundnuts from Gujarat | Balaji Exports</title>
  <meta name="description" content="Premium Mathadi Peanuts from Gujarat, India. Large, round, flat kernels ideal for roasting, snack manufacturing, oil extraction & confectionery. FSSAI, HACCP & ISO certified. Wholesale supplier to global markets." />
  <meta name="keywords" content="mathadi peanuts, export quality peanuts, Indian groundnuts, peanut exporters, Gujarat peanuts, roasted peanuts, peanut brittle, bulk peanuts supplier, peanut oil extraction, wholesale peanuts, groundnut companies, peanut importers, edible peanuts, food grade peanuts" />
  <meta name="author" content="Balaji Exports" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="distribution" content="global" />
  <meta name="rating" content="general" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://balajiexports.com/products/mathadi-peanuts" />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="product" />
  <meta property="og:url" content="https://balajiexports.com/products/mathadi-peanuts" />
  <meta property="og:title" content="Premium Mathadi Peanuts | Export Quality Groundnuts from Gujarat | Balaji Exports" />
  <meta property="og:description" content="Premium Mathadi Peanuts from Gujarat, India. Large, round, flat kernels ideal for roasting, snack manufacturing, oil extraction & confectionery. FSSAI, HACCP & ISO certified." />
  <meta property="og:image" content="https://balajiexports.com/images/mathadi-peanuts-og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Premium Mathadi Peanuts from Gujarat - Export Quality Groundnuts" />
  <meta property="og:site_name" content="Balaji Exports" />
  <meta property="og:locale" content="en_US" />
  <meta property="product:brand" content="Balaji Exports" />
  <meta property="product:availability" content="in stock" />
  <meta property="product:condition" content="new" />
  <meta property="product:price:currency" content="USD" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@BalajiExports" />
  <meta name="twitter:creator" content="@BalajiExports" />
  <meta name="twitter:title" content="Premium Mathadi Peanuts | Export Quality Groundnuts from Gujarat | Balaji Exports" />
  <meta name="twitter:description" content="Premium Mathadi Peanuts from Gujarat, India. Large, round, flat kernels ideal for roasting, snack manufacturing, oil extraction & confectionery." />
  <meta name="twitter:image" content="https://balajiexports.com/images/mathadi-peanuts-twitter.jpg" />
  <meta name="twitter:image:alt" content="Premium Mathadi Peanuts from Gujarat - Export Quality Groundnuts" />
  
  {/* Additional Meta Tags */}
  <meta name="geo.region" content="IN-GJ" />
  <meta name="geo.placename" content="Gujarat, India" />
  <meta name="geo.position" content="23.0225;72.5714" />
  <meta name="ICBM" content="23.0225, 72.5714" />
  
  {/* Mobile Optimization */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="Balaji Exports - Mathadi Peanuts" />
  
  {/* Favicon and Icons */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  
  {/* Preconnect for Performance */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  
  {/* Alternate Languages (if applicable) */}
  <link rel="alternate" hrefLang="en" href="https://balajiexports.com/products/mathadi-peanuts" />
  <link rel="alternate" hrefLang="hi" href="https://balajiexports.com/hi/products/mathadi-peanuts" />
  <link rel="alternate" hrefLang="gu" href="https://balajiexports.com/gu/products/mathadi-peanuts" />
  <link rel="alternate" hrefLang="x-default" href="https://balajiexports.com/products/mathadi-peanuts" />
  
  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Premium Mathadi Peanuts",
      "description": "High-quality Mathadi Peanuts from Gujarat, India. Large, round, and flat kernels ideal for roasting, snack manufacturing, oil extraction, and confectionery. FSSAI, HACCP & ISO certified.",
      "brand": {
        "@type": "Brand",
        "name": "Balaji Exports",
        "url": "https://balajiexports.com"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Balaji Exports",
        "url": "https://balajiexports.com",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        }
      },
      "category": "Food & Beverages > Nuts & Seeds > Peanuts",
     
      
      "offers": {
        "@type": "Offer",
        "url": "https://balajiexports.com/products/mathadi-peanuts",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Balaji Exports"
        },
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "currency": "USD"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryType",
            "minValue": 7,
            "maxValue": 21,
            "unitCode": "DAY"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": ["US", "CA", "GB", "DE", "FR", "AU", "AE", "SG"]
          }
        }
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Origin",
          "value": "Gujarat, India"
        },
        {
          "@type": "PropertyValue",
          "name": "Moisture Content",
          "value": "Max 6-7%"
        },
        {
          "@type": "PropertyValue",
          "name": "Oil Content",
          "value": "~45%"
        },
        {
          "@type": "PropertyValue",
          "name": "Shelf Life",
          "value": "8-10 months"
        },
        {
          "@type": "PropertyValue",
          "name": "Packaging",
          "value": "25kg & 50kg PP or Jute bags"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "FSSAI Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "HACCP Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "ISO Certification"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "152",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Food Industry Professional"
          },
          "reviewBody": "Excellent quality mathadi peanuts. Perfect for our snack manufacturing needs. Consistent size and flavor."
        }
      ]
    }
  `}
  </script>
  
  {/* Breadcrumb Structured Data */}
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://balajiexports.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://balajiexports.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Peanuts",
          "item": "https://balajiexports.com/products/peanuts"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mathadi Peanuts",
          "item": "https://balajiexports.com/products/mathadi-peanuts"
        }
      ]
    }
  `}
  </script>
  
  {/* Organization Structured Data */}
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Balaji Exports",
      "url": "https://balajiexports.com",
      "logo": "https://balajiexports.com/logo.png",
      "description": "Leading exporter of premium quality peanuts and groundnuts from India. FSSAI, HACCP & ISO certified supplier to global markets.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Export House Address",
        "addressLocality": "Gujarat",
        "addressRegion": "Gujarat",
        "postalCode": "000000",
        "addressCountry": "IN"
      },
      
    }
  `}
  </script>
  
  {/* FAQ Structured Data */}
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are Mathadi Peanuts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mathadi Peanuts are a distinctive variety of Indian groundnuts known for their large, flat, and round kernels with light reddish to pink skin. They are highly valued for their rich, nutty flavor and excellent roasting profile."
          }
        },
        {
          "@type": "Question",
          "name": "What is the shelf life of Mathadi Peanuts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mathadi Peanuts have a shelf life of 8-10 months when stored in cool, dry conditions in proper packaging."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications do your Mathadi Peanuts have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Mathadi Peanuts are FSSAI, HACCP, and ISO certified, ensuring the highest quality and food safety standards for international markets."
          }
        },
        {
          "@type": "Question",
          "name": "What are the applications of Mathadi Peanuts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mathadi Peanuts are ideal for various applications including snack manufacturing, oil extraction, confectionery (peanut brittle/chikki), and food products requiring consistent size and flavor."
          }
        }
      ]
    }
  `}
  </script>
</Head>

      {/* Introduction Section with improved styling */}
      <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 3, md: 5 } }}>
        <Grid 
          container 
          spacing={{ xs: 4, md: 4 }} 
          alignItems="center" 
          justifyContent="space-between"
        >
          {/* Left side for image - takes 48% of the space */}
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
              <Typography variant="body2" color="text.secondary" fontFamily="Inter, sans-serif">Image will be placed here</Typography>
            </Box>
            <ProductIntroTiles />
          </Grid>
          
          {/* Right side for text - takes 48% of the space */}
          <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
            <Typography 
              variant="h3" // Changed for proper heading hierarchy
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
                Premium Mathadi Peanuts from Gujarat – Ideal for Roasting, Snacking, and Oil Extraction
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
              <span style={{ fontWeight: 700 }}>Mathadi Peanuts are a distinctive variety of Indian groundnuts </span>
              known for their large, flat, and round kernels. 
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
                At Balaji Exports, we ensure that our Mathadi peanuts are carefully processed, sorted, and packed to maintain their natural freshness and nutritional value.
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 5 }, alignItems: 'center', justifyContent: { xs: 'center', sm: 'flex-start' }, mb: 3 }}>
              {[
                { src: fssaiLogo, alt: "FSSAI Certification" },
                { src: haccpLogo, alt: "HACCP Certification" },
                { src: isoLogo, alt: "ISO 27001 Certification" }
              ].map((logo, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={55}
                    style={{
                      maxWidth: '100px',
                      objectFit: 'contain'
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>Mathadi peanuts are a premium variety of groundnuts that are highly valued in both domestic and international markets for their superior quality and versatility.</Typography>
      </Container>

      {/* Applications Section with improved design */}
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
            Mathadi peanuts are highly versatile with exceptional nutritional properties and consistent quality, 
            making them suitable for various industrial and commercial applications. Our premium peanuts 
            are specifically cultivated to meet the demanding requirements of the following industries:
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
                  title: "Food Products", 
                  icon: <Image src={foodIcon} alt="Food Product" width={28} height={28} style={{ objectFit: 'contain' }} />,
                  desc: "Peanut-based food products" 
                },
                { 
                  title: "Snack Manufacturing", 
                  icon: "🍿", 
                  desc: "Roasted and salted snack peanuts" 
                },
                { 
                  title: "Oil Extraction", 
                  icon: <Image src={groundnutOilIcon} alt="Groundnut Oil" width={28} height={28} style={{ objectFit: 'contain' }} />,
                  desc: "Oil extraction for edible oil use" 
                },
                { 
                  title: "Confectionery", 
                  icon: <Image src={confectionaryIcon} alt="Confectionary" width={28} height={28} style={{ objectFit: 'contain' }} />,
                  desc: "Peanut brittle (chikki) and traditional sweets" 
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
            Our mathadi peanuts' consistent quality ensures reliable performance across all these applications, 
            making them a preferred choice for businesses requiring premium ingredients.
          </Typography>
        </Container>
      </Box>

      {/* Product Specifications Section with enhanced styling - REDUCED MARGIN */}
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

      {/* Additional Information Section with improved layout */}
      <Container component="section" aria-label="Why Choose Our Products" maxWidth="lg" sx={{ my: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
            {/* Section title */}
            <Typography 
              variant="h3" // Changed for proper heading hierarchy
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
              Why Choose Our Mathadi Peanuts?
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
              Food industries requiring consistent size and flavor for premium products and international applications choose our mathadi peanuts for reliable quality.
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
              As leading wholesale peanuts suppliers in India, we offer competitive groundnut prices per ton for large-scale buyers looking to buy groundnuts in bulk. We specialize in supplying to peanut importers worldwide, groundnut companies in Andhra Pradesh, and peanut exporters from India to UAE, Europe, and beyond.
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
              Our focus is always on delivering best quality groundnuts from India with strict attention to hygienic packaging and lab-tested groundnuts that are safe, healthy, and fresh. Whether you need edible peanuts for food industries or bulk groundnuts for snack manufacturing, Balaji Exports is your most reliable partner in the peanut export business.
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality mathadi peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
            </Typography>
            
            {/* CTA Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                variant="contained"
                component={Link}
                href="/contact"
                size="large"
                aria-label="Request a quotation for Mathadi Peanuts"
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

      {/* Added Breadcrumbs for SEO */}
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
            <span style={{ color: theme.palette.primary.main }}>Mathadi Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

// Product Specifications Component
const ProductSpecifications = () => {
  const theme = useTheme();
  
  // Updated specifications data organized by sections
  const specSections = {
    qualities: {
      title: "Product Qualities",
      icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Counts per Ounce", value: "38/42, 40/50 (based on customer requirement)" },
        { name: "Oil Content", value: "~45%" }
      ]
    },
    quality: {
      title: "Quality Parameters",
      icon: <BarChartIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Moisture", value: "Max 6–7%" },
        { name: "Admixture", value: "Max 1%" },
        { name: "Foreign Material", value: "Max 0.5%" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Packaging", value: "25 kg & 50 kg PP or jute bags (customized packing available)" }
      ]
    },
    certifications: {
      title: "Certifications",
      icon: <CheckIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Food Safety", value: "FSSAI Certified" },
        { name: "Quality Management", value: "ISO Certified" },
        { name: "Hazard Control", value: "HACCP Certified" },
        { name: "Exportation", value: "Export Quality Approved" }
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
          Our mathadi peanuts meet the highest quality standards for international markets
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

      <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
        
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

export default MathadiPeanutPage;
