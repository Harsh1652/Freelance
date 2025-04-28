import React, { useEffect } from "react";
import { Container, Box, Typography, Button, Grid, Card, CardContent, Paper, Fade, Zoom } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fssaiLogo from "../../assets/images/fssai.png"; 
import haccpLogo from "../../assets/images/HACCP.png"; 
import isoLogo from "../../assets/images/ISO.png"; 
import { Link } from 'react-router-dom';

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
    
    // Cleanup on unmount
    return () => {
      // Remove any added elements when component unmounts
      // (Implementation would need to track added elements)
    };
  }, [children]);
  
  return null;
};

const RunnerPeanutPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
      <Head>
        <title>Premium Export Quality Runner Peanuts | Balaji Exports</title>
        <meta name="description" content="High-quality Runner Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more. Global shipping available." />
        <meta name="keywords" content="runner peanuts, export quality peanuts, Indian groundnuts, peanut exporters, wholesale peanuts, organic groundnuts, bulk peanuts supplier, peanut exports India" />
        <link rel="canonical" href="https://balajiexports.com/products/runner-peanuts" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Premium Export Quality Runner Peanuts | Balaji Exports" />
        <meta property="og:description" content="High-quality Runner Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more. Global shipping available." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://balajiexports.com/products/runner-peanuts" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Export Quality Runner Peanuts | Balaji Exports" />
        <meta name="twitter:description" content="High-quality Runner Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Premium Export Quality Runner Peanuts",
              "description": "High-quality Runner Peanuts from India's fertile soils. FSSAI, HACCP & ISO certified. Perfect for peanut butter, snacks & more.",
              "brand": {
                "@type": "Brand",
                "name": "Balaji Exports"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://balajiexports.com/products/runner-peanuts",
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
            Premium Export Quality Runner Peanuts
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
            aria-label="Contact us about Runner Peanuts"
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
              Carefully Cultivated, Strictly Certified
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
              <span style={{ fontWeight: 700 }}> Runner Peanuts – Premium Export Quality Indian Groundnuts </span>
              At Balaji Exports, we take pride in offering top-grade Runner Peanuts, carefully cultivated in the rich soils of Rajasthan, Gujarat, and Tamil Nadu, India.
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
              With over 65 years of farming tradition and a proven track record as one of the biggest suppliers of peanuts in India, we are recognized globally for delivering premium Indian groundnuts for international markets.
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
              Our organic groundnuts are produced under strict non-GMO and pesticide-free conditions, certified by FSSAI, HACCP, and ISO standards, ensuring the highest food safety and quality for global buyers.
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
          Runner peanuts are famous for their uniform kernel size, elongated oval shape, and consistent roasting characteristics. 
          Their outstanding quality makes them ideal for peanut butter manufacturing, confectionery applications, and snack production. 
          As one of the leading peanut exporters from India, we supply bulk peanuts for sale to markets across the UAE, Europe, USA, Russia, Vietnam, and Africa, meeting the growing groundnut export demand worldwide.
        </Typography>
      </Container>

      {/* Product Specifications Section with enhanced styling */}
      <Container component="section" aria-label="Product Specifications" maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 }, width: '100%' }}>
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
            Product{' '}
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
            Specifications
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

          <Typography 
            variant="subtitle1" 
            fontFamily="Inter, sans-serif"
            sx={{ 
              textAlign: 'center', 
              mb: 5, 
              color: theme.palette.secondary.main,
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '0.95rem', md: '1.1rem' },
            }}
          >
            Our runner peanuts meet the highest quality standards for international markets:
          </Typography>
        </Box>

        {/* Specification cards with improved layout and animations */}
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 2, md: 3 },
          width: '100%'
        }}>
          {[
            {
              title: "Type", 
              description: "Natural / Raw / Roasted / Blanched / Split",
              
            },
            { 
              title: "Origin", 
              description: "Rajasthan, Gujarat, Andhra Pradesh, India",
              
            },
            { 
              title: "Varieties Available", 
              description: "40/50, 50/60, 60/70 counts (kernels per ounce)",
            },
            { 
              title: "Moisture", 
              description: "7% max",
              
            },
            { 
              title: "Admixture", 
              description: "0.5% max",
              
            },
            { 
              title: "Oil Content", 
              description: "45%–50%",
              
            },
            { 
              title: "Damaged Kernels", 
              description: "1% max",
              
            },
            { 
              title: "Aflatoxin", 
              description: "Below 10 ppb",
              
            },
            {
              title: "Packaging", 
              description: "25kg, 50kg, PP bags, jute bags, vacuum packs",
              
            },
            { 
              title: "Certifications", 
              description: "FSSAI Certified, HACCP Certified, ISO Certified",
              
            },
            { 
              title: "Shelf Life", 
              description: "12 months",
            },
          ].map((spec, index) => (
            <Box 
              key={index}
              sx={{
                width: { xs: '100%', sm: '47%', md: '31%' },
                mb: { xs: 2, md: 3 }
              }}
            > 
              <Paper 
                elevation={3}
                sx={{ 
                  p: { xs: 2.5, md: 3 }, 
                  borderRadius: 3,
                  height: '100%',
                  background: `linear-gradient(145deg, ${theme.palette.customColors.lightGold}, #fff8e1)`,
                  color: theme.palette.primary.main,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 12px 24px rgba(0,0,0,0.15)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Add background pattern */}
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '80px',
                    height: '80px',
                    opacity: 0.07,
                    transform: 'translate(20px, -20px) rotate(45deg)',
                    background: theme.palette.primary.main
                  }}
                />
                
                <Typography 
                  variant="h6" 
                  component="h3" 
                  fontFamily="Lato, sans-serif"
                  fontWeight="bold"
                  sx={{ 
                    color: theme.palette.primary.main, 
                    mb: 1.5,
                    width: '100%',
                    fontSize: { xs: '1.1rem', md: '1.2rem' }
                  }}
                >
                  {spec.title}
                </Typography>
                <Typography 
                  variant="body1"
                  fontFamily="Inter, sans-serif"
                  sx={{
                    color: theme.palette.secondary.main,
                    width: '100%',
                    fontSize: { xs: '0.9rem', md: '0.95rem' }
                  }}
                >
                  {spec.description}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Quality assurance text */}
        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: '800px', 
            px: { xs: 2, sm: 0 }, 
            mx: 'auto',
            mt: 6,
            p: 3,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 248, 225, 0.6)',
            border: `1px solid ${theme.palette.customColors.lightGold}`
          }}
        >
          <Typography 
            variant="subtitle1" 
            fontFamily="Inter, sans-serif"
            sx={{ 
              textAlign: 'center', 
              color: theme.palette.secondary.main,
              width: '100%',
              fontStyle: 'italic'
            }}
          >
            All our runner peanuts undergo rigorous quality testing to ensure they meet export standards and the highest level of food safety requirements.
          </Typography>
        </Box>
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
            variant="h3" // Changed for proper heading hierarchy
            component="h2"
            align="center" 
            sx={{ 
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
              mb: { xs: 4, md: 6 },
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

          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            {[
              { title: "Peanut Butter", icon: "🥜", desc: "Perfect for creamy, rich peanut butter production" },
              { title: "Snack Production", icon: "🍿", desc: "Ideal for roasted peanuts and flavored snacks" },
              { title: "Oil Extraction", icon: "🛢️", desc: "High oil content for premium cooking oil" },
              { title: "Animal Feed", icon: "🐄", desc: "Nutritious ingredient for high-protein feed" },
            ].map((item, index) => (
              <Grid item xs={6} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 2, md: 3 },
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      background: 'rgba(255,255,255,0.2)',
                    }
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      mb: 2
                    }}
                  >
                    {item.icon}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      color: theme.palette.customColors.darkGold
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 1,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: { xs: '0.8rem', md: '0.9rem' },
                      color: theme.palette.customColors.lightGold,
                      opacity: 1
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
              Why Choose Our Runner Peanuts?
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
              Food industries requiring consistent size and flavor for premium products and international applications choose our runner peanuts for reliable quality.
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality runner peanuts for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
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
            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link> {'>'}
            <span style={{ color: theme.palette.primary.main }}>Runner Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};

export default RunnerPeanutPage;