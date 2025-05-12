import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card, 
  CardActionArea, 
  CardContent,
  Chip,
  useMediaQuery,
  Fade,
  useTheme,
  Paper,
  Divider,
  Button
} from '@mui/material';
import { Leaf as LeafIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

// About Us section component to add before products
const AboutUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{ mb: 10 }}>
      {/* Welcome Section */}
      <Box sx={{ mb: 6, width: '100%' }}>
        <Typography 
          variant="h3" 
          component="h2" 
          fontFamily="Lato, sans-serif"
          fontWeight="bold"
          color={theme.palette.primary.main}
          sx={{ 
            mb: 3,
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
          }}
        >
          Welcome to Balaji Exports
        </Typography>
        
        <Typography 
          variant="body1" 
          fontFamily="Inter, sans-serif"
          sx={{ 
            color: theme.palette.secondary.main,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            maxWidth: '900px',
            mx: 'auto',
            textAlign: 'center'
          }}
        >
          Welcome to Balaji Exports, your trusted partner for the finest quality Indian groundnuts and peanuts. Based in the heart of Rajasthan, India, we are proud to be among the biggest groundnut suppliers in India with a legacy of excellence that spans over 65 years.
        </Typography>
      </Box>
      
      {/* Our Journey & Specialization */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3,
        mb: 6
      }}>
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 2,
            background: theme.customGradients.greenDark,
            overflow: 'hidden',
            width: { xs: '100%', md: '49%' },
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography 
              variant="h5" 
              component="h3" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.customColors.darkGold}
              sx={{ mb: 2 }}
            >
              Our Journey
            </Typography>
            <Typography 
              variant="body1" 
              fontFamily="Inter, sans-serif"
              sx={{ 
                color: theme.palette.customColors.lightGold,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6
              }}
            >
              At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology and operate a state-of-the-art groundnut processing unit.
            </Typography>
          </CardContent>
        </Card>
        
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 2,
            background: theme.customGradients.greenDark,
            overflow: 'hidden',
            width: { xs: '100%', md: '49%' },
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography 
              variant="h5" 
              component="h3" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.customColors.darkGold}
              sx={{ mb: 2 }}
            >
              Our Specialization
            </Typography>
            <Typography 
              variant="body1" 
              fontFamily="Inter, sans-serif"
              sx={{ 
                color: theme.palette.customColors.lightGold,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6
              }}
            >
              We specialize in a wide range of peanut products, including bold groundnuts, Java groundnuts, red skin peanuts, split peanuts, shelled peanuts, and blanched peanuts for export. Our extensive portfolio also features peanut oil and peanut butter.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      
      {/* Why Choose Us Section */}
      <Box sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          component="h3" 
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          color={theme.palette.primary.main}
          sx={{ 
            mb: 4,
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }
          }}
        >
          Why Choose <span style={{ color: theme.palette.secondary.main }}>Balaji Exports?</span>
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mx: 'auto',
          maxWidth: '1100px'
        }}>
          {[
            {
              title: "65+ Years of Farming Expertise", 
              description: "Generations of knowledge in groundnut cultivation." 
            },
            {
              title: "Modern Processing Unit", 
              description: "4 metric tons/hour capacity with advanced technology." 
            },
            { 
              title: "Organic, Non-GMO Products", 
              description: "Focus on organic and pesticide-free groundnuts." 
            },
            { 
              title: "Certified Quality", 
              description: "FSSAI, HACCP, ISO certifications ensure top food safety standards." 
            }
          ].map((feature, index) => (
            <Paper 
              key={index}
              elevation={3}
              sx={{ 
                p: 3, 
                borderRadius: 3,
                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' },
                background: theme.customGradients.greenDark,
                color: theme.palette.customColors.lightGold,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '100%',
                minHeight: '180px'
              }}
            >
              <Typography 
                variant="h6" 
                component="h4" 
                fontFamily="Lato, sans-serif"
                fontWeight="bold"
                sx={{ 
                  color: theme.palette.customColors.darkGold, 
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body2"
                fontFamily="Inter, sans-serif"
                sx={{ color: theme.palette.customColors.lightGold }}
              >
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button
            component={RouterLink}
            to="/about"
            sx={{
              fontFamily: 'Inter',
              textTransform: 'none',
              borderRadius: '50px',
              padding: { xs: '8px 20px', md: '10px 24px' },
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              color: theme.palette.primary.main,
              backgroundColor: 'transparent',
              border: `2px solid ${theme.palette.customColors.accentGreen}`,
              fontWeight: 500,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.customColors.accentGreen,
                color: 'white',
                boxShadow: '0 4px 8px rgba(109, 140, 63, 0.3)',
              },
            }}
          >
            Learn More About Us
          </Button>
        </Box>
      </Box>
      
      <Divider sx={{ 
        mb: 8, 
        mt: 2,
        width: '80%',
        maxWidth: '1000px',
        mx: 'auto',
        borderColor: `${theme.palette.primary.main}30`
      }} />
    </Box>
  );
};

const ProductsListing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);

  // Products data with descriptions
  const products = [
    { 
      name: 'Bold Peanuts', 
      path: '/products/bold-peanuts',
      description: 'Large, premium-quality peanuts with an exceptional flavor profile, perfect for snacking.',
      isOrganic: true,
      imagePlaceholder: 'bold-peanuts'
    },
    { 
      name: 'Runner Peanuts', 
      path: '/products/runner-peanuts',
      description: 'Medium-sized uniform peanuts, ideal for peanut butter and confectionery products.',
      isOrganic: true,
      imagePlaceholder: 'runner-peanuts'
    },
    { 
      name: 'Red Skin Peanuts', 
      path: '/products/red-skin-peanuts',
      description: 'Distinctive peanuts with red skin intact, rich in antioxidants and full of flavor.',
      isOrganic: true,
      imagePlaceholder: 'red-skin-peanuts'
    },
    { 
      name: 'Blanched Peanuts', 
      path: '/products/blanched-peanuts',
      description: 'Skinless peanuts with clean taste, perfect for various culinary applications.',
      isOrganic: false,
      imagePlaceholder: 'blanched-peanuts'
    },
    { 
      name: 'Spanish Peanuts', 
      path: '/products/spanish-peanuts',
      description: 'Smaller peanuts with higher oil content, ideal for candies and snack products.',
      isOrganic: true,
      imagePlaceholder: 'spanish-peanuts'
    },
    { 
      name: 'TJ Peanuts', 
      path: '/products/tj-peanuts',
      description: 'Specially cultivated variety known for consistent quality and superior taste.',
      isOrganic: true,
      imagePlaceholder: 'tj-peanuts'
    },
    { 
      name: 'Long Java Peanuts', 
      path: '/products/long-java-peanuts',
      description: 'Elongated peanuts with distinctive shape and rich nutty flavor profile.',
      isOrganic: true,
      imagePlaceholder: 'long-java-peanuts'
    },
    { 
      name: 'G20 Peanuts', 
      path: '/products/g20-peanuts',
      description: 'High-yield variety with excellent nutritional value and consistent size.',
      isOrganic: true,
      imagePlaceholder: 'g20-peanuts'
    },
    { 
      name: 'K6 Peanuts', 
      path: '/products/k6-peanuts',
      description: 'Popular variety known for drought resistance and exceptional quality.',
      isOrganic: true,
      imagePlaceholder: 'k6-peanuts'
    },
    { 
      name: 'Mathadi Peanuts', 
      path: '/products/mathadi-peanuts',
      description: 'Traditional variety with distinctive taste and cultural significance.',
      isOrganic: true,
      imagePlaceholder: 'mathadi-peanuts'
    },
    { 
      name: 'Girnar 4 - Girnar 5 Peanuts', 
      path: '/products/girnar-peanuts',
      description: 'Improved varieties with enhanced disease resistance and higher yields.',
      isOrganic: true,
      imagePlaceholder: 'girnar-peanuts'
    },
    { 
      name: 'ICGV 03043 Peanuts', 
      path: '/products/icgv03043-peanuts',
      description: 'Research-backed variety with improved nutritional profile and yield potential.',
      isOrganic: true,
      imagePlaceholder: 'icgv03043-peanuts'
    },
    { 
      name: 'ICGV 15099 Peanuts', 
      path: '/products/icgv15099-peanuts',
      description: 'Modern peanut variety with enhanced resistance to environmental stressors.',
      isOrganic: true,
      imagePlaceholder: 'icgv15099-peanuts'
    },
    { 
      name: 'Virginia Peanuts', 
      path: '/products/virginia-peanuts',
      description: 'Large-kerneled peanuts, perfect for in-shell roasting and gourmet applications.',
      isOrganic: true,
      imagePlaceholder: 'virginia-peanuts'
    },
    { 
      name: 'Peanut Butter', 
      path: '/products/peanut-butter',
      description: 'Creamy, all-natural peanut butter made from freshly ground organic peanuts.',
      isOrganic: true,
      imagePlaceholder: 'peanut-butter'
    },
    { 
      name: 'Peanut Oil', 
      path: '/products/peanut-oil',
      description: 'Pure, cold-pressed peanut oil with rich flavor, ideal for cooking and frying.',
      isOrganic: true,
      imagePlaceholder: 'peanut-oil'
    }
  ];

  // Function to handle product click
  const handleProductClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ 
      backgroundColor: theme.palette.background.default,
      py: { xs: 4, md: 8 },
      position: 'relative',
      overflow: 'hidden',
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
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* About Us Section - Added before products */}
        <AboutUsSection />
        
        {/* Products Section Header */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 5, md: 8 },
            position: 'relative'
          }}
        >
          <Typography 
            variant={isMobile ? "h4" : "h3"} 
            component="h1" 
            fontFamily="Lato, sans-serif"
            fontWeight="700"
            sx={{ 
              mb: 2,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              position: 'relative',
              display: 'inline-block',
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
            fontFamily="Inter, sans-serif"
            color={theme.palette.primary.main}
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mt: 5,
              mb: 5, 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              padding: { xs: '0 16px', md: 0 }
            }}
          >
            Discover our extensive range of high-quality peanut varieties and peanut-derived products.
            Sourced from our own organic farms and processed with care to deliver exceptional quality.
          </Typography>
        </Box>
        
        {/* Products Grid - using Box with flexbox and justify-content: center */}
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-12px', // Negative margin to offset the padding of child items
          justifyContent: 'center', // This centers the cards
        }}>
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%',            // Full width on mobile
                  sm: 'calc(50% - 24px)', // 2 cards per row on tablet (accounting for margins)
                  md: 'calc(33.33% - 24px)'  // Exactly 3 cards per row on desktop
                },
                padding: '12px',
                boxSizing: 'border-box',
                transition: 'transform 0.3s ease',
                maxWidth: '400px', // Set a max width for each card
              }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: hoveredItem === index 
                    ? '0 10px 25px rgba(0,0,0,0.18)' 
                    : '0 4px 12px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredItem === index ? 'translateY(-12px)' : 'translateY(0)',
                  bgcolor: theme.palette.primary.main,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <CardActionArea 
                  onClick={() => handleProductClick(product.path)}
                  sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                >
                  {/* Image placeholder with pattern */}
                  <Box 
                    sx={{ 
                      height: 200, 
                      position: 'relative',
                      overflow: 'hidden',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    }}
                  >
                    <Box sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0.1,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}/>
                    
                    <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      width: '100%',
                    }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: theme.palette.customColors.lightGold,
                          fontWeight: 700,
                          fontFamily: 'Lato, sans-serif',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        }}
                      >
                        {product.imagePlaceholder.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </Typography>
                    </Box>
                    
                    {product.isOrganic && (
                      <Chip
                        icon={<LeafIcon size={16} />}
                        label="Organic"
                        size="small"
                        sx={{ 
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          bgcolor: theme.palette.customColors.accentGreen,
                          color: '#FFFFFF',
                          fontWeight: 600,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                          '& .MuiChip-icon': {
                            color: '#FFFFFF'
                          }
                        }}
                      />
                    )}
                  </Box>
                  
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    pb: '16px !important', // Override default padding
                  }}>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      component="h3"
                      fontFamily="Lato, sans-serif"
                      fontWeight="700"
                      color={theme.palette.customColors.darkGold}
                      sx={{
                        position: 'relative',
                        pb: 1.5,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '40px',
                          height: '2px',
                          backgroundColor: theme.palette.customColors.accentGreen,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '60px',
                        }
                      }}
                    >
                      {product.name}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color={theme.palette.customColors.lightGold}
                      fontFamily="Inter, sans-serif"
                      sx={{ 
                        mb: 2, 
                        flexGrow: 1,
                        lineHeight: 1.6,
                        fontSize: '0.875rem',
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
                          <ChevronRightIcon size={16} />
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