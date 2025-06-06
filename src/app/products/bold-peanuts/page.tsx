"use client";
import React, { useEffect, useState } from "react";
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
import WarningIcon from '@mui/icons-material/Warning';
import ProductIntroTiles from '@/components/ProductIntroTiles';

import fssaiLogo from "@/assets/images/fssai.png";
import haccpLogo from "@/assets/images/HACCP.png";
import isoLogo from "@/assets/images/ISO.png";
import peanutButterIcon from "@/assets/images/PeanutButter.png";
import groundnutOilIcon from "@/assets/images/GroundNutOil.png";
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
      icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
      items: [
        { name: "Type", value: "Natural / Raw / Blanched / Roasted / Split"},
        { name: "Origin", value: "Rajasthan, Gujarat, Andhra Pradesh, India" },
        { name: "Varieties Available", value: "38/42, 40/50, 50/60, 60/70 counts (kernels per ounce)" },
        { name: "Oil Content", value: "48%–52%" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon sx={{ fontSize: 28 }} />,
      items: [
        { name: "Packaging", value: "25kg, 50kg PP bags, jute bags,  vacuum packing or customizable"},
        { name: "Shelf Life", value: "12 months" },
        { name: "Storage", value: "Cool, dry place away from direct sunlight" }
      ]
    },
    quality: {
      title: "Quality Parameters",
      icon: <BarChartIcon sx={{ fontSize: 28 }} />,
      items: [
        { name: "Moisture", value: "7% max" },
        { name: "Admixture", value: "0.5% max" },
        { name: "Damaged Kernels", value: "1% max" },
        { name: "Aflatoxin", value: "Below 10 ppb" }
      ]
    },
    certifications: {
      title: "Certifications",
      icon: <CheckIcon sx={{ fontSize: 28 }} />,
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
          Our bold peanuts meet the highest quality standards for international markets
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

const BoldPeanutPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <Head>
        <title>Premium Export Quality Bold Peanuts | Balaji Exports</title>
        <meta name="description" content="High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more. Global shipping available." />
        <meta name="keywords" content="bold peanuts, export quality peanuts, Indian groundnuts, peanut exporters, wholesale peanuts, organic groundnuts, bulk peanuts supplier, peanut exports India" />
        <link rel="canonical" href="https://balajiexports.com/products/bold-peanuts" />
        <meta property="og:title" content="Premium Export Quality Bold Peanuts | Balaji Exports" />
        <meta property="og:description" content="High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more. Global shipping available." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://balajiexports.com/products/bold-peanuts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Export Quality Bold Peanuts | Balaji Exports" />
        <meta name="twitter:description" content="High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org/","@type":"Product","name":"Premium Export Quality Bold Peanuts","description":"High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more.","brand":{"@type":"Brand","name":"Balaji Exports"},"offers":{"@type":"Offer","url":"https://balajiexports.com/products/bold-peanuts","priceCurrency":"USD","availability":"https://schema.org/InStock"}}` }} />
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
            <Typography variant="h3" component="h3" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: theme.palette.primary.main, fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }, position: 'relative', pb: 2, '&:after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '80px', height: '4px', backgroundColor: theme.palette.primary.main, borderRadius: '2px' } }}>Bold Peanuts – India's Finest Groundnuts</Typography>
            <Typography variant="body1" sx={{ my: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}><span style={{ fontWeight: 700 }}> Bold Peanuts – Premium Quality Indian Groundnuts for Export </span> At Balaji Exports, we are proud to offer the finest quality Bold Peanuts, sourced directly from the rich agricultural regions of Rajasthan, Gujarat, and Tamil Nadu, India. </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>With over 65 years of farming excellence and two decades in the groundnut export business, we have mastered the art of delivering Indian groundnuts for international markets.</Typography>
            <Typography variant="body1" sx={{ mb: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8 }}>Our organic groundnuts India are grown under natural conditions, ensuring non-GMO, pesticide-free groundnuts that meet the highest FSSAI, HACCP, and ISO certified standards.</Typography>
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
        <Typography variant="body1" sx={{ my: 4, fontFamily: 'Inter, sans-serif', color: theme.palette.secondary.main, fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, textAlign: { xs: 'left', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>Bold groundnuts are known worldwide for their large oval kernels, reddish-brown skin, high oil content, and strong nutty flavor, making them the preferred choice for peanut butter manufacturers, snack food producers, oil extraction industries, and health food companies. As trusted peanut exporters from India, we guarantee top-quality peanuts that meet the needs of buyers in the UAE, Europe, Africa, Russia, and the USA.</Typography>
      </Container>
      <Box component="section" aria-label="Product Applications" sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, color: theme.palette.customColors.darkGold, mt: { xs: 8, md: 12 }, py: { xs: 6, md: 8 }, borderRadius: { md: '100px 0 100px 0' }, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10.5%), radial-gradient(circle, #ffffff 10%, transparent 10.5%)', backgroundSize: '30px 30px', backgroundPosition: '0 0, 15px 15px' }} />
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, mb: { xs: 3, md: 4 }, position: 'relative', display: 'inline-block', fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, width: '100%', color: theme.palette.customColors.darkGold, '&:after': { content: '""', position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '3px', backgroundColor: theme.palette.customColors.darkGold, borderRadius: '2px' } }}>Applications</Typography>
          <Typography variant="body1" sx={{ mt: 5, mb: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', lineHeight: 1.8 }}>Bold peanuts are highly versatile with exceptional nutritional properties and consistent quality, making them suitable for various industrial and commercial applications. Our premium peanuts are specifically cultivated to meet the demanding requirements of the following industries:</Typography>
          <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 4, px: 3 }}>
            {[
              { title: "Peanut Butter Production", icon: <Image src={peanutButterIcon} alt="Peanut Butter" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "Perfect for creamy, rich peanut butter with consistent texture and flavor due to their uniform size and reliable roasting characteristics." },
              { title: "Snack Manufacturing", icon: <span role="img" aria-label="popcorn" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🍿</span>, desc: "Ideal for salted, roasted, and coated snacks, providing the perfect balance of crunch, taste and visual appeal for premium snack lines." },
              { title: "Oil Extraction", icon: <Image src={groundnutOilIcon} alt="Groundnut Oil" width={40} height={40} style={{ objectFit: 'contain' }} />, desc: "High oil content (45-50%) makes them excellent for cold-pressed and refined cooking oil, yielding a light-colored oil with a mild, pleasant flavor." },
              { title: "Confectionery Applications", icon: <span role="img" aria-label="chocolate" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🍫</span>, desc: "Perfect addition to peanut brittle, chocolate bars, and other confections, delivering consistent flavor, texture and visual appeal." },
              { title: "Animal Feed Industry", icon: <span role="img" aria-label="cow" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🐄</span>, desc: "Nutritious ingredient for high-protein animal feed, with peanut cake meal supporting healthy growth and development in livestock." },
              { title: "Retail Health Foods", icon: <span role="img" aria-label="seedling" style={{ fontSize: '2.2rem', lineHeight: 1 }}>🌱</span>, desc: "Ideal for premium health food packaging, offering nutritional benefits and long shelf life for branded consumer products." }
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 3.5, alignItems: 'flex-start' }}>
                <Box sx={{ minWidth: '42px', width: '42px', height: '42px', mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {typeof item.icon === 'string' ? (
                    <Typography variant="h5" component="span" sx={{ fontSize: '1.8rem', lineHeight: 1, color: theme.palette.customColors.darkGold }}>{item.icon}</Typography>
                  ) : (
                    item.icon
                  )}
                </Box>
                <Box sx={{ flex: 1, pt: 0.5 }}>
                  <Typography variant="h6" component="h3" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 0.5, color: theme.palette.customColors.darkGold }}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', fontSize: { xs: '0.9rem', md: '1rem' }, color: theme.palette.customColors.lightGold, lineHeight: 1.6 }}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Inter, sans-serif', fontSize: { xs: '1rem', md: '1.05rem' }, color: theme.palette.customColors.lightGold, textAlign: 'center', maxWidth: '850px', mx: 'auto', fontStyle: 'italic', p: 2, borderRadius: 2, background: 'rgba(255,255,255,0.07)' }}>Our bold peanuts' consistent quality ensures reliable performance across all these applications, making them a preferred choice for businesses requiring premium ingredients.</Typography>
        </Container>
      </Box>
      <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <ProductSpecifications />
      </Container>
      <Container sx={{ mb: 4, mt: 8 }}>
        <nav aria-label="breadcrumb">
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Inter, sans-serif', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
            <span style={{ color: theme.palette.primary.main }}>Bold Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

export default BoldPeanutPage; 