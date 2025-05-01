import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Fade, Zoom, Avatar, Collapse } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fssaiLogo from "../../assets/images/fssai.png"; 
import haccpLogo from "../../assets/images/HACCP.png"; 
import isoLogo from "../../assets/images/ISO.png"; 
import { Link } from 'react-router-dom';
import GradientCard from "../../components/card";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // instead of Award
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // instead of Package
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning'; // instead of AlertTriangle
import peanutButterIcon from "../../assets/images/PeanutButter.png";
import groundnutOilIcon from "../../assets/images/GroundNutOil.png";

const Head = ({ children }) => {
  useEffect(() => {
    // Extract and apply meta tags from children
    React.Children.forEach(children, child => {
      if (!child) return;
      
      if (child.type === 'title') {
        document.title = child.props.children;
      }
      
      if (child.type === 'meta' || child.type === 'link') {
        const el = document.createElement(child.type);
        Object.entries(child.props).forEach(([key, value]) => {
          el.setAttribute(key, value);
        });
        document.head.appendChild(el);
      }
      
      if (child.type === 'script' && child.props.type === 'application/ld+json') {
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.textContent = child.props.children;
        document.head.appendChild(el);
      }
    });
    
   
  }, [children]);
  
  return null;
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
        {/* Open Graph Tags */}
        <meta property="og:title" content="Premium Export Quality Bold Peanuts | Balaji Exports" />
        <meta property="og:description" content="High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more. Global shipping available." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://balajiexports.com/products/bold-peanuts" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Export Quality Bold Peanuts | Balaji Exports" />
        <meta name="twitter:description" content="High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Premium Export Quality Bold Peanuts",
              "description": "High-quality Bold Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more.",
              "brand": {
                "@type": "Brand",
                "name": "Balaji Exports"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://balajiexports.com/products/bold-peanuts",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Head>
      
      {/* Hero Section with Background Image and Gradient Overlay */}
      <Box
        component="section"
        aria-label="Hero Section"
        sx={{
          backgroundColor: theme.palette.primary.light,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: 350, sm: 450, md: 600 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Fade in timeout={1000}>
          <Typography
            variant="h1" // Changed to h1 for main page heading
            component="h1"
            fontFamily="Lato, sans-serif"
            fontWeight={800}
            color="white"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              textAlign: "center",
              mb: 3,
              px: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Premium Export Quality Bold Peanuts
          </Typography>
        </Fade>
        <Fade in timeout={1500}>
          <Typography
            variant="h5"
            component="h2" // Added component for semantic HTML
            fontFamily="Inter, sans-serif"
            color="white"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              textAlign: "center",
              mb: 5,
              px: 3,
              maxWidth: "800px",
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }}
          >
            Delivering exceptional quality from India's fertile soils to global markets
          </Typography>
        </Fade>
        <Zoom in timeout={2000}>
          <Button 
            component={Link}
            to="/contact"
            variant="contained" 
            aria-label="Contact us about Bold Peanuts"
            sx={{ 
              bgcolor: theme.palette.primary.main,
              fontFamily: 'Inter, sans-serif',
              px: { xs: 4, md: 6 }, 
              py: { xs: 1.2, md: 1.8 }, 
              fontSize: { xs: 16, md: 18 },
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              borderRadius: '30px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: theme.palette.secondary.main,
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
              }
            }}
          >
            Enquire Now
          </Button>
        </Zoom>
      </Box>

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
              }}
            >
              <Typography 
                variant="body2" 
                color="text.secondary"
                fontFamily="Inter, sans-serif"
              >
                Image will be placed here
              </Typography>
            </Box>
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
              Your Global Source for Bold Peanuts – India’s Finest Groundnuts
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
              <span style={{ fontWeight: 700 }}> Bold Peanuts – Premium Quality Indian Groundnuts for Export </span>
               At Balaji Exports, we are proud to offer the finest quality Bold Peanuts, sourced directly from the rich agricultural regions of Rajasthan, Gujarat, and Tamil Nadu, India. 
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
                With over 65 years of farming excellence and two decades in the groundnut export business, we have mastered the art of delivering Indian groundnuts for international markets.
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
                 Our organic groundnuts India are grown under natural conditions, ensuring non-GMO, pesticide-free groundnuts that meet the highest FSSAI, HACCP, and ISO certified standards.
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
                <img 
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
                    e.target.onerror = null;
                    e.target.style.display = 'none';
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
          Bold groundnuts are known worldwide for their large oval kernels, reddish-brown skin, high oil content, and strong nutty flavor,
          making them the preferred choice for peanut butter manufacturers, snack food producers, oil extraction industries, and health food companies.
          As trusted peanut exporters from India, we guarantee top-quality peanuts that meet the needs of buyers in the UAE, Europe, Africa, Russia, and the USA.

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
            Bold peanuts are highly versatile with exceptional nutritional properties and consistent quality, 
            making them suitable for various industrial and commercial applications. Our premium peanuts 
            are specifically cultivated to meet the demanding requirements of the following industries:
          </Typography>

          {/* Application bullet points with fixed alignment */}
            <Box sx={{
            maxWidth: '800px',
            mx: 'auto',
            mt: 4,
            px: 3
            }}>
            {[
                {
                title: "Peanut Butter Production",
                icon: <img src={peanutButterIcon} alt="Peanut Butter" style={{ width: 28, height: 28 }} />,
                desc: "Perfect for creamy, rich peanut butter with consistent texture and flavor due to their uniform size and reliable roasting characteristics."
                },
                {
                title: "Snack Manufacturing",
                icon: "🍿",
                desc: "Ideal for salted, roasted, and coated snacks, providing the perfect balance of crunch, taste and visual appeal for premium snack lines."
                },
                {
                title: "Oil Extraction",
                icon: <img src={groundnutOilIcon} alt="Groundnut Oil" style={{ width: 28, height: 28 }} />,
                desc: "High oil content (45-50%) makes them excellent for cold-pressed and refined cooking oil, yielding a light-colored oil with a mild, pleasant flavor."
                },
                {
                title: "Confectionery Applications",
                icon: "🍫",
                desc: "Perfect addition to peanut brittle, chocolate bars, and other confections, delivering consistent flavor, texture and visual appeal."
                },
                {
                title: "Animal Feed Industry",
                icon: "🐄",
                desc: "Nutritious ingredient for high-protein animal feed, with peanut cake meal supporting healthy growth and development in livestock."
                },
                {
                title: "Retail Health Foods",
                icon: "🌱",
                desc: "Ideal for premium health food packaging, offering nutritional benefits and long shelf life for branded consumer products."
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
                {/* Fixed-width container for all icons */}
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
                
                {/* Text content with consistent spacing */}
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
            Our bold peanuts' consistent quality ensures reliable performance across all these applications, 
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

  {/* Single Card containing all features */}
  <Box sx={{ 
    width: '48%', // Take 48% of page width
    marginLeft: 0, // Align to the left
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
        title: "Larger Seed Size", 
        description: "Featuring bigger kernels compared to other varieties, providing better visual appeal and allowing for premium pricing in wholesale and retail markets."
      },
      { 
        title: "Preferred for Oil and Export", 
        description: "The top choice for oil extraction due to higher oil content and for international markets due to premium appearance and quality characteristics."
      },
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
              Why Choose Our Bold Peanuts?
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
                Whether you are looking to buy groundnuts in bulk, require peanut exporters from India to Europe, or source bulk peanuts for sale for the Middle East market, Balaji Exports is your most reliable partner. 
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
                Our wholesale peanuts suppliers India offer competitive groundnut price per ton with flexible shipping options.
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
                Our premium peanuts exporters ensure that every shipment meets strict quality checks, hygienic processing, and safe packaging, delivering only the best to your destination
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality bold peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
            </Typography>
            
            {/* CTA Button */}
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Button 
                variant="contained"
                component={Link}
                to="/contact"
                size="large"
                aria-label="Request a quotation for Runner Peanuts"
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
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> {'>'}
            <span style={{ color: theme.palette.primary.main }}>Bold Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};


const ProductSpecifications = () => {
  const theme = useTheme();
  const [expandedSection, setExpandedSection] = useState('qualities');

  // Specifications data organized by sections
  const specSections = {
    qualities: {
      title: "Product Qualities",
      icon: <EmojiEventsIcon size={20} />,
      items: [
        { name: "Type", value: "Natural / Raw / Blanched / Roasted / Split"},
        { name: "Origin", value: "Rajasthan, Gujarat, Andhra Pradesh, India" },
        { name: "Varieties Available", value: "38/42, 40/50, 50/60, 60/70 counts (kernels per ounce)" },
        { name: "Oil Content", value: "48%–52%" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon size={20} />,
      items: [
        { name: "Packaging", value: "25kg, 50kg PP bags, jute bags, or vacuum packing"},
        { name: "Shelf Life", value: "12 months" },
        { name: "Storage", value: "Cool, dry place away from direct sunlight" }
      ]
    },
    quality: {
      title: "Quality Parameters",
      icon: <BarChartIcon size={20} />,
      items: [
        { name: "Moisture", value: "7% max" },
        { name: "Admixture", value: "0.5% max" },
        { name: "Damaged Kernels", value: "1% max" },
        { name: "Aflatoxin", value: "Below 10 ppb" }
      ]
    },
    certifications: {
      title: "Certifications",
      icon: <CheckIcon size={20} />,
      items: [
        { name: "Food Safety", value: "FSSAI Certified" },
        { name: "Quality Management", value: "ISO Certified" },
        { name: "Hazard Control", value: "HACCP Certified" },
        { name: "Exportation", value: "Export Quality Approved" }
      ]
    }
  };

  // Function to toggle expanded section
  const toggleSection = (sectionKey) => {
    setExpandedSection(expandedSection === sectionKey ? null : sectionKey);
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
          Our bold peanuts meet the highest quality standards for international markets
        </Typography>
      </Box>

      {/* Rest of the component remains unchanged */}
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
              // Change background to light gold from theme
              bgcolor: theme.palette.customColors.lightGold, 
              width: '100%'
            }}
          >
            <Button
              onClick={() => toggleSection(key)}
              sx={{
                width: '100%', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center', 
                p: 2,
                textAlign: 'left',
                textTransform: 'none',
                // Updated text color for better contrast on light gold background
                color: theme.palette.secondary.main
              }}
              aria-expanded={expandedSection === key}
              aria-controls={`section-${key}-content`}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar 
                  sx={{ 
                    height: 40, 
                    width: 40, 
                    // Updated avatar background for contrast against light gold
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
              {expandedSection === key ? 
                <ExpandLessIcon color="primary" /> : 
                <ExpandMoreIcon color="primary" />
              }
            </Button>
            
            <Collapse in={expandedSection === key}>
              <Box 
                id={`section-${key}-content`}
                sx={{ 
                  p: 3, 
                  borderTop: 1, 
                  // Add primary color as background for expanded sections
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
                      // Change heading color to darkGold
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
                      // Change description color to lightGold
                      color: theme.palette.secondary.main,
                    }}>
                      {item.value}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Paper>
        ))}
      </Box>

      <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
        
      </Box>
    </Box>
  );
};


export default BoldPeanutPage;