import React, { useEffect } from "react";
import { Container, Box, Typography, Button, Grid, Paper, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import fssaiLogo from "../../assets/images/fssai.png"; 
import haccpLogo from "../../assets/images/HACCP.png"; 
import isoLogo from "../../assets/images/ISO.png"; 
import { Link } from 'react-router-dom';
import GradientCard from "../../components/card";

import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // instead of Award
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // instead of Package
import BarChartIcon from '@mui/icons-material/BarChart';
import WarningIcon from '@mui/icons-material/Warning'; // instead of AlertTriangle
import peanutButterIcon from "../../assets/images/PeanutButter.png";
import groundnutOilIcon from "../../assets/images/GroundNutOil.png";
import bakingIcon from "../../assets/images/baking.png";

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

const K6PeanutPage = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, pb: 8 }}>
    <Head>
        <title>Premium Export Quality K6 Peanuts | High Oil Indian Groundnuts | Balaji Exports</title>

        <meta 
            name="description" 
            content="K6 Peanuts with high oil content (up to 50%), medium-bold kernels, and excellent shelf life. Ideal for peanut oil extraction, butter, snacks, and export. Sourced from Gujarat and Andhra Pradesh." 
        />

        <meta 
            name="keywords" 
            content="K6 peanuts, high oil peanuts, Indian groundnuts, export peanuts India, peanut oil extraction, peanut butter peanuts, bulk peanut suppliers, peanut exporters, machine-cleaned peanuts, food-grade peanuts" 
        />

        <link rel="canonical" href="https://balajiexports.com/products/k6-peanuts" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Premium Export Quality K6 Peanuts | Balaji Exports" />

        <meta 
            property="og:description" 
            content="Top-grade K6 Peanuts with 48–50% oil content and medium-bold kernels. Ideal for oil extraction, peanut butter, snacks, and global export markets." 
        />

        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://balajiexports.com/products/k6-peanuts" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Export Quality K6 Peanuts | Balaji Exports" />
        <meta 
            name="twitter:description" 
            content="K6 Peanuts with high oil content and uniform medium-bold size. Used for peanut oil, butter, and snacks. Long shelf life, export-ready, and processed to global standards." 
        />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
            {`
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Premium Export Quality K6 Peanuts",
                "description": "K6 Peanuts with up to 50% oil content, medium-bold size, and excellent processing quality. Perfect for oil extraction, peanut butter, snacks, and export packaging.",
                "brand": {
                "@type": "Brand",
                "name": "Balaji Exports"
                },
                "offers": {
                "@type": "Offer",
                "url": "https://balajiexports.com/products/k6-peanuts",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
                }
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
              Premium K6 Groundnuts for Oil, Butter & Snack Manufacturing
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
              <span style={{ fontWeight: 700 }}> K6 Peanuts – High-Yield, Oil-Rich Indian Groundnuts, </span>
              K6 Peanuts are a premium variety of Indian groundnuts known for their exceptional oil content, uniform medium-bold kernels, and excellent shelf stability. 
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
             Developed for both domestic and export markets, K6 peanuts are highly preferred by manufacturers of peanut oil, butter, and snack foods due to their superior processing quality and yield.
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
                Grown extensively in Gujarat and Andhra Pradesh, this variety is popular among commercial buyers for its consistency in size, smooth texture, and high productivity per acre
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
            At Balaji Exports, we supply carefully graded, machine-cleaned K6 peanuts to meet the diverse needs of oil mills, food processors, and bulk exporters. 
            Every batch is tested for quality, freshness, and international safety standards.
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
            K6 peanuts are highly versatile with exceptional nutritional properties and consistent quality, 
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
                  title: "Peanut Butter Production", 
                  icon: <img src={peanutButterIcon} alt="Peanut Butter" style={{ width: 28, height: 28 }} />,
                  desc: "Perfect for creamy, rich peanut butter with consistent texture and flavor due to their uniform size and reliable roasting characteristics." 
                },
                { 
                  title: "Snack Manufacturing", 
                  icon: "🍿", 
                  desc: "Roasted and Salted snacks" 
                },
                { 
                  title: "Oil Extraction", 
                  icon: <img src={groundnutOilIcon} alt="Groundnut Oil" style={{ width: 28, height: 28 }} />,
                  desc: "high-yield oil processing" 
                },
                { 
                  title: "Bakery", 
                  icon: <img src={bakingIcon} alt="Baking Products" style={{ width: 28, height: 28 }} />,
                  desc: "Used in Bakery and confectionery ingredients." 
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
            Our K6 peanuts' consistent quality ensures reliable performance across all these applications, 
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
          title: "High oil content", 
          description: "Up to 50%, ideal for oil extraction"
        },
        { 
          title: "Medium-bold kernels", 
          description: "Uniform size ensures easy processing"
        },
        { 
          title: "Clean appearance", 
          description: "Light pink skin with low foreign matter"
        },
        { 
            title: "Great shelf life", 
            description: "Maintains freshness for 10–12 months under dry storage"
        },
        { 
            title: "Export-quality", 
            description: "Suitable for international food-grade applications"
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
              Why Choose Our K6 Peanuts?
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
              Food industries requiring consistent size and flavor for premium products and international applications choose our k6 peanuts for reliable quality.
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
              As leading wholesale peanuts suppliers in India, we offer competitive groundnut prices per ton for large-scale buyers looking to buy groundnuts in bulk. 
              We specialize in supplying to peanut importers worldwide, groundnut companies in Andhra Pradesh, and peanut exporters from India to UAE, Europe, and beyond.
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
              Our focus is always on delivering best quality groundnuts from India with strict attention to hygienic packaging and lab-tested groundnuts that are safe, healthy, and fresh. 
              Whether you need edible peanuts for food industries or bulk groundnuts for snack manufacturing, Balaji Exports is your most reliable partner in the peanut export business.
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
              Partner with Balaji Exports, the top peanut export company in India, and source the highest quality k6 peanuts for your global needs. 
              Trust our experience, quality, and commitment to deliver the best from India's fertile fields to your business.
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
            <span style={{ color: theme.palette.primary.main }}>K6 Peanuts</span>
          </Typography>
        </nav>
      </Container>
    </Box>
  );
};


const ProductSpecifications = () => {
    const theme = useTheme();
  
    // Updated specifications data organized by sections
    const specSections = {
      specifications: {
        title: "Product Specifications",
        icon: <BarChartIcon size={20} />,
        items: [
          { name: "Kernel Size", value: "38/42, 40/50 counts per ounce" },
          { name: "Moisture Content", value: "Max 6–7%" },
          { name: "Oil Content", value: "48–50%" },
          { name: "Admixture", value: "Max 1%" },
          { name: "Aflatoxin", value: "<20 ppb (Export Grade, as per EU norms)" },
          { name: "Shelf Life", value: "10–12 months in proper storage" },
          { name: "Packaging", value: "25kg/50kg PP or jute bags, customizable" }
        ]
      },
      qualities: {
        title: "Product Qualities",
        icon: <EmojiEventsIcon size={20} />,
        items: [
          { name: "Type", value: "Natural / Raw / Roasted / Blanched / Split" },
          { name: "Origin", value: "Rajasthan, Gujarat, Andhra Pradesh, India" },
          { name: "Varieties Available", value: "38/42, 40/50 counts (kernels per ounce)" }
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
            Our k6 peanuts meet the highest quality standards for international markets
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

export default K6PeanutPage;