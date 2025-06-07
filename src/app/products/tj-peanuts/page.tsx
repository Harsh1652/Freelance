'use client';

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Fade, Zoom, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import GradientCard from "@/components/GradientCard";
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
import peanutButterIcon from "@/assets/images/PeanutButter.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
import bakingIcon from "@/assets/images/baking.png";

// Import key feature images
import keyFeatureImg1 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_snawjosnawjosnaw.jpeg";
import keyFeatureImg2 from "@/assets/images/productImg/key_features/medicinal-mushroom-lingzhi-mushroom-plant-legume-1946203.jpg";
import keyFeatureImg3 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_hvcuc7hvcuc7hvcu.jpeg";
import keyFeatureImg4 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_cpb11wcpb11wcpb1.jpeg";
import keyFeatureImg5 from "@/assets/images/productImg/key_features/top-view-peanuts-green-background.jpg";

import ProductIntroTiles from '@/components/ProductIntroTiles';

import type { ReactNode } from "react";

const TJPeanutsSEOHead = () => {
  const pageTitle = "Premium Export Quality TJ Peanuts (Tirupati Java) | Balaji Exports";
  const pageDescription = "Top-grade TJ Peanuts (Tirupati Java) with light pink skin, uniform shape, and 44–47% oil content. Ideal for snacks, peanut butter, and confectionery. Export-ready from India.";
  const pageUrl = "https://balajiexports.com/products/tj-peanuts";
  const imageUrl = "https://balajiexports.com/images/tj-peanuts-main.jpg";

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="TJ peanuts, Tirupati Java peanuts, Java peanuts India, export quality peanuts, light pink peanuts, Indian groundnuts, peanut exporters, bulk peanut supplier, medium-sized peanuts, wholesale peanuts India, groundnut export, peanut butter manufacturing, food grade peanuts, FSSAI certified peanuts, Gujarat peanuts, Andhra Pradesh groundnuts" />
      <meta name="author" content="Balaji Exports" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en" href={pageUrl} />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content="Balaji Exports" />
      <meta property="og:description" content="Export-quality TJ Peanuts from India with light pink skin, medium-round size, and rich flavor. Ideal for snacks, peanut butter, and food processing industries." />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Premium TJ Peanuts (Tirupati Java) - Export Quality from India" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2025-06-07T00:00:00+00:00" />

      {/* Product Specific Open Graph Tags */}
      <meta property="product:brand" content="Balaji Exports" />
      <meta property="product:availability" content="in stock" />
      <meta property="product:condition" content="new" />
      <meta property="product:price:currency" content="USD" />
      <meta property="product:retailer_item_id" content="TJ-PEANUTS-001" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BalajiExports" />
      <meta name="twitter:creator" content="@BalajiExports" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content="High-quality TJ Peanuts with light pink skin, consistent size, and 44–47% oil. Perfect for snacks, sweets, and export markets. Sourced from Gujarat & Andhra Pradesh." />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Premium TJ Peanuts (Tirupati Java) - Export Quality from India" />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Gujarat, India" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />

      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      <meta httpEquiv="Expires" content="Wed, 07 Jun 2026 00:00:00 GMT" />
      <meta name="theme-color" content="#2E5D31" />
      <meta name="msapplication-TileColor" content="#2E5D31" />

      {/* Favicon Links */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preload Resources */}
      <link rel="preload" href="/fonts/Lato-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Premium Export Quality TJ Peanuts (Tirupati Java)",
            "alternateName": ["Tirupati Java Peanuts", "TJ Groundnuts", "Java Peanuts India"],
            "description": "TJ Peanuts, also known as Tirupati Java Peanuts, are medium-sized Indian peanuts with light pink skin, consistent shape, and 44–47% oil content. Used in snacks, sweets, and peanut butter production.",
            "brand": {
              "@type": "Brand",
              "name": "Balaji Exports",
              "logo": "https://balajiexports.com/logo.png"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Balaji Exports",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Gujarat"
              }
            },
            "offers": {
              "@type": "Offer",
              "url": pageUrl,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "Balaji Exports"
              },
              "businessFunction": "https://schema.org/Sell",
              "eligibleRegion": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "23.0225",
                  "longitude": "72.5714"
                },
                "geoRadius": "50000"
              }
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Oil Content",
                "value": "44-47%"
              },
              {
                "@type": "PropertyValue",
                "name": "Moisture Content",
                "value": "Max 6-8%"
              },
              {
                "@type": "PropertyValue",
                "name": "Size Grades",
                "value": "50/60, 60/70 counts per ounce"
              },
              {
                "@type": "PropertyValue",
                "name": "Shelf Life",
                "value": "12 months"
              }
            ],
            "hasEnergyConsumption": {
              "@type": "EnergyConsumptionDetails",
              "energyEfficiencyScaleMax": "A+++",
              "hasEnergyEfficiencyCategory": "A"
            },
            "isAccessoryOrSparePartFor": [
              "Peanut Butter Manufacturing",
              "Snack Food Production",
              "Confectionery Industry"
            ]
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Balaji Exports",
            "url": "https://balajiexports.com",
            "logo": "https://balajiexports.com/logo.png",
            "description": "Leading exporter of premium quality peanuts and groundnuts from India. Specializing in TJ Peanuts, Bold Peanuts, and other varieties for global markets.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "Gujarat",
              "addressLocality": "Gujarat"
            },
           
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "TJ Peanuts",
                "item": pageUrl
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are TJ Peanuts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TJ Peanuts, also known as Tirupati Java Peanuts, are premium-grade Indian peanuts with light pink skin, medium-round size, and 44-47% oil content. They are ideal for snacks, peanut butter, and confectionery applications."
                }
              },
              {
                "@type": "Question",
                "name": "What is the shelf life of TJ Peanuts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TJ Peanuts have a shelf life of 12 months when stored in cool, dry conditions away from direct sunlight."
                }
              },
              {
                "@type": "Question",
                "name": "What certifications do your TJ Peanuts have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our TJ Peanuts are FSSAI certified, ISO certified, HACCP certified, and approved for export quality standards."
                }
              }
            ]
          })
        }}
      />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Balaji Exports" />
      <meta name="pinterest-rich-pin" content="true" />
      <meta property="article:author" content="Balaji Exports" />
      <meta property="article:publisher" content="https://balajiexports.com" />
      <meta property="linkedin:owner" content="Balaji Exports" />
      <meta property="whatsapp:title" content="Premium TJ Peanuts from Balaji Exports" />
      <meta property="whatsapp:description" content="Export quality Tirupati Java Peanuts with 44-47% oil content" />
    </Head>
  );
};

const TJPeanutPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <TJPeanutsSEOHead />

      {/* Introduction Section with improved styling */}
      <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 5, md: 10 } }}>
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
              Why Choose Tirupati Java Peanuts?
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
              <span style={{ fontWeight: 700 }}> TJ Peanuts, also known as Tirupati Java Peanuts. </span>
              These are a premium-grade variety of Indian peanuts recognized for their medium size, uniform shape, and distinct flavor.
              
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
                These peanuts have a light pink skin, are round to slightly oval, and are widely favored for both direct consumption and industrial processing.
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
                Grown primarily in Gujarat and Andhra Pradesh, TJ peanuts are carefully harvested and processed to meet international quality standards.
                Their moderate oil content (approx. 44–47%), crunchy texture, and pleasant aroma make them highly versatile.
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
              {/* Certification Logos - using imported images without boxes */}
              {[
                { src: fssaiLogo, alt: "FSSAI Certification" },
                { src: haccpLogo, alt: "HACCP Certification" },
                { src: isoLogo, alt: "ISO 27001 Certification" }
              ].map((logo, index) => (
                <Image 
                  key={index}
                  src={logo.src} 
                  alt={logo.alt}
                  style={{ 
                    height: '55px',
                    maxWidth: '100px',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
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
          TJ Peanuts are a perfect choice for buyers looking for high-quality, multipurpose peanuts with consistent sizing and superior taste.
          Available in bulk quantities and custom packaging for domestic and export markets.

        </Typography>
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
            Tirupati Java peanuts are highly versatile with exceptional nutritional properties and consistent quality, 
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
                  title: "Peanut Butter", 
                  icon: <Image src={peanutButterIcon} alt="Peanut Butter" width={28} height={28} />,
                  desc: "Used in commercial peanut paste manufacturing" 
                },
                { 
                  title: "Snacks", 
                  icon: "🍿", 
                  desc: "Roasted, salted, or flavored peanut products" 
                },
                { 
                  title: "Confectionary", 
                  icon: "🍫",
                  desc: "Chikki, sweets, and traditional snacks." 
                },
                { 
                  title: "Food Service", 
                  icon: <Image src={bakingIcon} alt="Baking Products" width={28} height={28} />,
                  desc: "Bakery, cereal mixes, and food garnishing." 
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
            Our Tirupati Java peanuts' consistent quality ensures reliable performance across all these applications, 
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
                  title: "High Yield", 
                  description: "Offers exceptional yield for farmers and excellent oil extraction ratio for processors, maximizing production efficiency and profitability."
                },
                { 
                  title: "Consistent Size", 
                  description: "Uniform kernel size ensures even roasting, consistent flavor development, and reliable processing performance in commercial applications."
                },
                { 
                  title: "Industry Preferred", 
                  description: "The top choice for food processors worldwide due to its dependable quality, taste profile, and excellent handling characteristics."
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
              Why Choose Our Tirupati Java Peanuts?
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
              Food industries requiring consistent size and flavor for premium products and international applications choose our TJ peanuts for reliable quality.
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality TJ peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
            </Typography>
            
            {/* CTA Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                variant="contained"
                component={Link}
                href="/contact"
                size="large"
                aria-label="Request a quotation for TJ Peanuts"
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
            <span style={{ color: theme.palette.primary.main }}>Tirupati Java Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

const ProductSpecifications = () => {
  const theme = useTheme();

  // Updated specifications data with the new information
  const specSections = {
    qualities: {
      title: "Product Qualities",
      icon: <EmojiEventsIcon />,
      items: [
        { name: "Shape", value: "Medium-round kernels" },
        { name: "Color", value: "Light pink skin" },
        { name: "Oil Content", value: "44% – 47%" },
        { name: "Size Grades", value: "50/60, 60/70 counts per ounce" },
        { name: "Aflatoxin-Free", value: "Sorted and tested for safe consumption" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon />,
      items: [
        { name: "Packaging", value: "25kg, 50kg, PP bags, jute bags, vacuum packs, or customizable" },
        { name: "Shelf Life", value: "12 months" },
        { name: "Storage", value: "Cool, dry place away from direct sunlight" }
      ]
    },
    quality: {
      title: "Quality Parameters",
      icon: <BarChartIcon />,
      items: [
        { name: "Moisture Content", value: "Max. 6–8%" },
      ]
    },
    certifications: {
      title: "Certifications",
      icon: <CheckIcon />,
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
          Our Tirupati Java peanuts meet the highest quality standards for international markets
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
          src={images[currentImageIndex].src}
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

export default TJPeanutPage; 