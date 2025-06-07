"use client";
import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Fade from '@mui/material/Fade';
import CheckIcon from '@mui/icons-material/Check';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import ProductIntroTiles from '@/components/ProductIntroTiles';

import fssaiLogo from "@/assets/images/fssai.png";
import haccpLogo from "@/assets/images/HACCP.png";
import isoLogo from "@/assets/images/ISO.png";
import peanutButterIcon from "@/assets/images/PeanutButter.png";
import bakingLogo from "@/assets/images/baking.png";
import cosmeticsLogo from "@/assets/images/Cosmetics.png";
import keyFeatureImg1 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_snawjosnawjosnaw.jpeg";
import keyFeatureImg2 from "@/assets/images/productImg/key_features/medicinal-mushroom-lingzhi-mushroom-plant-legume-1946203.jpg";
import keyFeatureImg3 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_hvcuc7hvcuc7hvcu.jpeg";
import keyFeatureImg4 from "@/assets/images/productImg/key_features/Gemini_Generated_Image_cpb11wcpb11wcpb1.jpeg";
import keyFeatureImg5 from "@/assets/images/productImg/key_features/top-view-peanuts-green-background.jpg";

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
      setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
      setImageLoaded(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    setImageLoaded(false);
  };
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    setImageLoaded(false);
  };
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: 3, overflow: 'hidden', boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}>
      <IconButton onClick={handlePrevImage} sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }, boxShadow: 2 }}>
        <ChevronLeft />
      </IconButton>
      <IconButton onClick={handleNextImage} sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' }, boxShadow: 2 }}>
        <ChevronRight />
      </IconButton>
      <Fade in={true} timeout={500}>
        <Box sx={{ width: '100%', height: '100%' }}>
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            fill
            style={{ objectFit: 'cover', opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentImageIndex === 0}
          />
        </Box>
      </Fade>
      <Box sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1, zIndex: 2 }}>
        {images.map((_, index) => (
          <Box key={index} onClick={() => setCurrentImageIndex(index)} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
        ))}
      </Box>
    </Box>
  );
};

const ProductSpecifications = () => {
  const theme = useTheme();
  const specSections = {
    qualities: {
      title: "Product Qualities",
      icon: <EmojiEventsIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Type", value: "Blanched Peanuts" },
        { name: "Color", value: "White to Light cream" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Packaging", value: "Vacuum-sealed, bulk, or customized" }
      ]
    },
    quality: {
      title: "Quality Parameters",
      icon: <BarChartIcon sx={{ fontSize: 20 }} />,
      items: [
        { name: "Moisture", value: "≤5% max" },
        { name: "Foreign Matter", value: "≤0.5% max" },
        { name: "Damaged Kernels", value: "≤1% max" },
        { name: "Aflatoxin", value: "Compliant with international standards" }
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
    <Box sx={{ width: '100%', maxWidth: '6xl', mx: 'auto', px: 4, py: { xs: 6, md: 4 }, mb: { xs: -2, md: -3 } }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', sm: '2.25rem' }, fontWeight: 'bold', mb: 3, fontFamily: 'Lato, sans-serif' }}>
          <Typography component="span" variant="inherit" sx={{ color: theme.palette.primary.main }}>Product</Typography>{" "}
          <Typography component="span" variant="inherit" sx={{ color: theme.palette.secondary.main }}>Specifications</Typography>
        </Typography>
        <Box sx={{ width: '5rem', height: '0.25rem', bgcolor: theme.palette.primary.main, mx: 'auto', mb: 2 }}></Box>
        <Typography variant="body1" sx={{ color: theme.palette.secondary.main, fontSize: '1rem', maxWidth: '2xl', mx: 'auto', fontFamily: 'Inter, sans-serif' }}>
          Our blanched peanuts meet the highest quality standards for international markets
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {Object.entries(specSections).map(([key, section]) => (
          <Paper key={key} elevation={2} sx={{ border: 1, borderColor: 'divider', borderRadius: 2, overflow: 'hidden', transition: 'all 300ms ease-in-out', bgcolor: theme.palette.customColors.lightGold, width: '100%' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 2, textAlign: 'left', color: theme.palette.secondary.main }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ height: 40, width: 40, bgcolor: theme.palette.primary.main, color: 'white' }}>{section.icon}</Avatar>
                <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 600, fontFamily: 'Lato, sans-serif', color: theme.palette.primary.main }}>{section.title}</Typography>
              </Box>
            </Box>
            <Box sx={{ p: 3, borderTop: 1, bgcolor: theme.palette.customColors.darkGold, borderColor: 'rgba(255,255,255,0.2)' }}>
              {section.items.map((item, idx) => (
                <Box key={idx} sx={{ display: 'flex', flexWrap: 'wrap', py: 2, borderBottom: idx !== section.items.length - 1 ? 1 : 0, borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Box sx={{ width: { xs: '100%', sm: '40%' }, fontWeight: 700, color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 1, color: theme.palette.customColors.darkGold, fontSize: '1.5rem' }}>🥜</Typography>
                    {item.name}:
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: '60%' }, fontWeight: 500, mt: { xs: 1, sm: 0 }, pl: { xs: 6, sm: 0 }, color: theme.palette.secondary.main }}>{item.value}</Box>
                </Box>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
      <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}></Box>
    </Box>
  );
};

const BlanchedPeanutPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <Head>
  {/* Primary Meta Tags */}
  <title>Premium Export Quality Blanched Peanuts | Balaji Exports India</title>
  <meta name="title" content="Premium Export Quality Blanched Peanuts | Balaji Exports India" />
  <meta name="description" content="High-quality Blanched Peanuts with skins removed for enhanced flavor and smooth texture. FSSAI, ISO & HACCP certified. Ideal for peanut butter, snacks, baking, and confectionery. Global shipping available from India's leading peanut exporter." />
  <meta name="keywords" content="blanched peanuts, skinless peanuts, peanut butter grade peanuts, export quality peanuts, Indian peanuts exporter, smooth peanuts, peanut snacks, confectionery peanuts, bulk peanut supplier, groundnut exporters India, wholesale peanuts suppliers, FSSAI certified peanuts, ISO certified groundnuts, HACCP peanuts, peanut butter manufacturing, snack grade peanuts, bakery peanuts, cosmetic grade peanuts, animal feed peanuts" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="author" content="Balaji Exports India" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://balajiexports.com/products/blanched-peanuts" />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="Balaji Exports India" />
  <meta property="og:title" content="Premium Export Quality Blanched Peanuts | Balaji Exports India" />
  <meta property="og:description" content="Blanched peanuts with skins removed for smooth texture and rich flavor. FSSAI, ISO & HACCP certified. Ideal for snacks, peanut butter, and confectionery. Exported globally with premium quality standards from India's leading exporter." />
  <meta property="og:url" content="https://balajiexports.com/products/blanched-peanuts" />
  <meta property="og:image" content="https://balajiexports.com/images/blanched-peanuts-og-image.jpg" />
  <meta property="og:image:alt" content="Premium Quality Blanched Peanuts from Balaji Exports India" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@BalajiExportsIN" />
  <meta name="twitter:creator" content="@BalajiExportsIN" />
  <meta name="twitter:title" content="Premium Export Quality Blanched Peanuts | Balaji Exports India" />
  <meta name="twitter:description" content="High-quality skinless peanuts with smooth texture and rich flavor. FSSAI, ISO & HACCP certified. Perfect for baking, peanut butter, and snacks. Global export-ready from India's leading peanut exporter." />
  <meta name="twitter:image" content="https://balajiexports.com/images/blanched-peanuts-twitter-card.jpg" />
  <meta name="twitter:image:alt" content="Premium Quality Blanched Peanuts from Balaji Exports India" />
  
  {/* Additional Meta Tags */}
  <meta name="application-name" content="Balaji Exports India" />
  <meta name="msapplication-TileColor" content="#2E7D32" />
  <meta name="theme-color" content="#2E7D32" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  
 
  {/* Business Information */}
  <meta name="contact" content="info@balajiexports.com" />
  <meta name="reply-to" content="info@balajiexports.com" />
  <meta name="category" content="Food Export, Agriculture, Peanuts, Groundnuts" />
  <meta name="coverage" content="Worldwide" />
  <meta name="distribution" content="Global" />
  <meta name="rating" content="General" />
  
  {/* Structured Data - Product Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Premium Export Quality Blanched Peanuts",
      "description": "High-quality Blanched Peanuts with skins removed for enhanced flavor and smooth texture. FSSAI, ISO & HACCP certified. Used in peanut butter, confectionery, snacks, baking, and cosmetic production. Compliant with international export standards.",
      "brand": {
        "@type": "Brand",
        "name": "Balaji Exports India",
        "url": "https://balajiexports.com"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Balaji Exports India",
        "url": "https://balajiexports.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "Andhra Pradesh"
        }
      },
      "category": "Food Products > Nuts & Seeds > Peanuts",
      "additionalType": "https://schema.org/Food",
      "offers": {
        "@type": "Offer",
        "url": "https://balajiexports.com/products/blanched-peanuts",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01",
        "seller": {
          "@type": "Organization",
          "name": "Balaji Exports India"
        },
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": "567 calories per 100g",
        "proteinContent": "25.8g per 100g",
        "fatContent": "49.2g per 100g",
        "carbohydrateContent": "16.1g per 100g"
      },
      "hasEnergyConsumption": {
        "@type": "EnergyConsumption",
        "energyEfficiencyScaleMax": "5",
        "energyEfficiencyScaleMin": "1"
      }
    })
  }} />
  
  {/* Structured Data - Organization Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Balaji Exports India",
      "alternateName": "Balaji Exports",
      "url": "https://balajiexports.com",
      "logo": "https://balajiexports.com/images/balaji-exports-logo.png",
      "description": "Leading exporter of premium quality peanuts and groundnuts from India. FSSAI, ISO & HACCP certified with global shipping capabilities.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Andhra Pradesh",
        "addressLocality": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "availableLanguage": ["English", "Hindi"]
      },
      
    })
  }} />
  
  {/* Structured Data - BreadcrumbList Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://balajiexports.com/"
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
          "name": "Blanched Peanuts",
          "item": "https://balajiexports.com/products/blanched-peanuts"
        }
      ]
    })
  }} />
  
  {/* Structured Data - FAQ Schema */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are blanched peanuts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Blanched peanuts are raw peanuts that have been subjected to a heat treatment process to remove their skins, resulting in a clean, smooth appearance and lighter color while retaining all nutritional benefits."
          }
        },
        {
          "@type": "Question",
          "name": "What are the main uses of blanched peanuts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Blanched peanuts are primarily used in peanut butter production, snack manufacturing, confectionery applications, baking, cosmetics, and animal feed industry due to their smooth texture and enhanced flavor."
          }
        },
        {
          "@type": "Question",
          "name": "Are your blanched peanuts certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our blanched peanuts are FSSAI certified for food safety, ISO certified for quality management, and HACCP certified for hazard control, with export quality approval."
          }
        }
      ]
    })
  }} />
  
  {/* Alternative Language Links */}
  <link rel="alternate" hrefLang="en" href="https://balajiexports.com/products/blanched-peanuts" />
  <link rel="alternate" hrefLang="hi" href="https://balajiexports.com/hi/products/blanched-peanuts" />
  
  {/* Preconnect for Performance */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  
  {/* DNS Prefetch */}
  <link rel="dns-prefetch" href="//www.google-analytics.com" />
  <link rel="dns-prefetch" href="//www.googletagmanager.com" />
  
  {/* Favicon */}
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>
      <Container component="section" aria-label="Product Introduction" maxWidth="lg" sx={{ mt: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 4 }} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
            <Box sx={{ height: { xs: 300, sm: 400, md: 450 }, borderRadius: 4, backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <Typography variant="body2" color="text.secondary" fontFamily="Inter, sans-serif">Image will be placed here</Typography>
            </Box>
            <ProductIntroTiles />
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: { md: '48%' } }}>
            <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }, position: 'relative', pb: 2, '&:after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, borderRadius: '2px' } }}>What Are Blanched Peanuts?</Typography>
            <Typography variant="body1" sx={{ my: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>Blanched peanuts are raw peanuts that have been subjected to a heat treatment process to remove their skins. This results in a clean, smooth appearance and a lighter color. The blanched peanuts retain all the nutritional benefits of regular peanuts but without the outer skin, offering a smoother texture and enhanced flavor.</Typography>
            <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>These peanuts are primarily used in products that require a uniform appearance and texture, such as peanut butter, snacks, and confectionery. The removal of the skin also helps improve the flavor and consistency of the final product.</Typography>
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
        <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>Blanched peanuts are a versatile ingredient in the food industry and are particularly valued in the creation of premium food products.</Typography>
      </Container>
      <Box component="section" aria-label="Product Applications" sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, color: theme.palette.customColors.darkGold, mt: { xs: 8, md: 12 }, py: { xs: 6, md: 8 }, borderRadius: { md: '100px 0 100px 0' }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10.5%), radial-gradient(circle, #ffffff 10%, transparent 10.5%)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }} />
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, mb: { xs: 3, md: 4 }, position: 'relative', display: 'inline-block', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, width: '100%', color: theme.palette.customColors.darkGold, '&:after': { content: '""', position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', backgroundColor: theme.palette.customColors.darkGold, borderRadius: '2px' } }}>Applications</Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', lineHeight: 1.8 }}>Blanched peanuts are highly versatile with exceptional nutritional properties and consistent quality, making them suitable for various industrial and commercial applications. Our premium peanuts are specifically cultivated to meet the demanding requirements of the following industries:</Typography>
          <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4, px: 3 }}>
            {[
              { title: "Peanut Butter Production", icon: <Image src={peanutButterIcon} alt="Peanut Butter" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "Blanched peanuts are widely used to make smooth and creamy peanut butter, as they provide a consistent texture without the presence of skins." },
              { title: "Snack Manufacturing", icon: <span role="img" aria-label="popcorn" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🍿</span>, desc: "Roasted blanched peanuts are a popular snack, often salted or seasoned." },
              { title: "Confectionery Applications", icon: <span role="img" aria-label="chocolate" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🍫</span>, desc: "Used in chocolates, candies, and other sweets to provide a smooth nutty flavor." },
              { title: "Animal Feed Industry", icon: <span role="img" aria-label="cow" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🐄</span>, desc: "Nutritious ingredient for high-protein animal feed, with peanut cake meal supporting healthy growth and development in livestock." },
              { title: "Baking", icon: <Image src={bakingLogo} alt="Baking Logo" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "Incorporated into cakes, cookies, muffins, and pastries for added crunch and nutrition." },
              { title: "Cosmetics", icon: <Image src={cosmeticsLogo} alt="Cosmetics Logo" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "Peanut extracts are used in skincare products due to their moisturizing and antioxidant properties" }
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'grid', gridTemplateColumns: '40px 1fr', mb: 4, alignItems: 'start', gap: 2 }}>
                <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</Box>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 1, color: theme.palette.customColors.darkGold, lineHeight: 1.2 }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.9rem', md: '1rem' }, color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.05rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', fontStyle: 'italic', p: 2, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }}>Our blanched peanuts' consistent quality ensures reliable performance across all these applications, making them a preferred choice for businesses requiring premium ingredients.</Typography>
        </Container>
      </Box>
      <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <ProductSpecifications />
      </Container>
      <Container component="section" aria-label="Key Features" maxWidth="lg" sx={{ mt: { xs: 1, md: 2 }, mb: { xs: 5, md: 7 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
          <Typography variant="h2" component="h2" fontFamily="Lato, sans-serif" fontWeight={800} color={theme.palette.primary.main} sx={{ mb: 0, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, display: 'inline' }}>Key{' '}</Typography>
          <Typography variant="h2" component="span" fontFamily="Lato, sans-serif" fontWeight={800} sx={{ color: theme.palette.secondary.main, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, display: 'inline' }}>Features</Typography>
          <Box sx={{ width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, mx: 'auto', mt: 2, mb: 4, borderRadius: '2px' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: { xs: 4, md: '4%' } }}>
          <Box sx={{ width: { xs: '100%', md: '48%' } }}>
            <Paper elevation={3} sx={{ borderRadius: 3, background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark || '#1a3526'} 100%)`, transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' } }}>
              {[
                { title: "Skin-Free & Smooth Texture", description: "The removal of outer skin gives a clean look and consistent texture — ideal for peanut butter, snacks, and baking." },
                { title: "Enhanced Flavor", description: "Blanching improves the natural nutty taste, making them perfect for premium food products." },
                { title: "Nutrient-Rich", description: "Retains all essential nutrients like protein, healthy fats, and fiber — just without the skin." },
                { title: "Versatile Usage", description: "Widely used in peanut butter, confectionery, baked goods, snacks, and even cosmetics or animal feed." }
              ].map((feature, index, array) => (
                <Box key={index} sx={{ p: 3, borderBottom: index !== array.length - 1 ? `1px solid rgba(255,255,255,0.1)` : 'none' }}>
                  <Typography variant="h6" component="h3" fontFamily="Lato, sans-serif" fontWeight="bold" sx={{ color: theme.palette.customColors.darkGold, mb: 1.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{feature.title}</Typography>
                  <Typography variant="body2" fontFamily="Inter, sans-serif" sx={{ color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{feature.description}</Typography>
                </Box>
              ))}
            </Paper>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '48%' }, height: { xs: '300px', md: '400px' } }}>
            <KeyFeaturesCarousel />
          </Box>
        </Box>
      </Container>
      <Container component="section" aria-label="Why Choose Our Products" maxWidth="lg" sx={{ my: { xs: 6, md: 10 }, px: { xs: 3, md: 4 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
            <Typography variant="h3" component="h2" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, mb: 4, textAlign: { xs: 'left', md: 'center' }, fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' } }}>Why Choose Our Blanched Peanuts?</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Food industries requiring consistent size and flavor for premium products and international applications choose our runner peanuts for reliable quality.</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>As leading wholesale peanuts suppliers in India, we offer competitive groundnut prices per ton for large-scale buyers looking to buy groundnuts in bulk. We specialize in supplying to peanut importers worldwide, groundnut companies in Andhra Pradesh, and peanut exporters from India to UAE, Europe, and beyond.</Typography>
            <Typography variant="body1" component="p" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Our focus is always on delivering best quality groundnuts from India with strict attention to hygienic packaging and lab-tested groundnuts that are safe, healthy, and fresh. Whether you need edible peanuts for food industries or bulk groundnuts for snack manufacturing, Balaji Exports is your most reliable partner in the peanut export business.</Typography>
            <Typography variant="body1" component="p" sx={{ fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1rem' }, position: 'relative', pl: 3, '&:before': { content: '""', position: 'absolute', left: 0, top: '8px', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: theme.palette.primary.main } }}>Partner with Balaji Exports, the top peanut export company in India, and source the highest quality blanched peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.</Typography>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button variant="contained" component={Link} href="/contact" size="large" aria-label="Request a quotation for Blanched Peanuts" sx={{ bgcolor: theme.palette.primary.main, fontFamily: 'Inter, sans-serif', px: { xs: 4, md: 5 }, py: { xs: 1, md: 1.5 }, fontSize: { xs: 15, md: 16 }, fontWeight: 600, boxShadow: '0 4px 14px rgba(0,0,0,0.2)', borderRadius: '6px', transition: 'all 0.3s ease', '&:hover': { bgcolor: theme.palette.secondary.main, transform: 'translateY(-3px)', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' } }}>Request Quotation</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ mb: 4, mt: 8 }}>
        <nav aria-label="breadcrumb">
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
            <span style={{ color: theme.palette.primary.main }}>Blanched Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

export default BlanchedPeanutPage; 