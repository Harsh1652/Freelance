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
            Premium Export Quality Peanut Butter
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
            Peanut Butter are highly versatile with exceptional nutritional properties and consistent quality, 
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
            Our peanut butter' consistent quality ensures reliable performance across all these applications, 
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
                width: '48%',
                marginLeft: 0,
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
              Food industries requiring consistent size and flavor for premium products and international applications choose our peanut butter for reliable quality.
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality peanut butter for your global needs. Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
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
            <span style={{ color: theme.palette.primary.main }}>Peanut Butter</span>
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
    productDetails: {
      title: "Product Details",
      icon: <EmojiEventsIcon size={20} />,
      items: [
        { name: "Type", value: "Creamy / Crunchy" },
        { name: "Ingredients", value: "Roasted peanuts (≥90%), salt, sugar (optional), and natural stabilizers" }
      ]
    },
    packaging: {
      title: "Packaging & Storage",
      icon: <LocalShippingIcon size={20} />,
      items: [
        { name: "Packaging Options", value: "PET jars, sachets, bulk drums (as per buyer requirement), or customizable" },
        { name: "Shelf Life", value: "12 to 18 months from manufacturing date" },
        { name: "Storage Condition", value: "Store in a cool, dry place away from direct sunlight" }
      ]
    },
    certifications: {
      title: "Certifications",
      icon: <CheckIcon size={20} />,
      items: [
        { name: "FSSAI", value: "Certified" },
        { name: "HACCP", value: "Certified" },
        { name: "ISO 22000", value: "Certified" },
        { name: "USDA Organic", value: "Available on request" }
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
          Our Peanut Butter meet the highest quality standards for international markets
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


export default PeanutButterPage;