import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Breadcrumbs,
  Link,
  Divider,
  Chip,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ChevronDown as ExpandMoreIcon, ChevronRight as NavigateNextIcon, Leaf as LeafIcon } from 'lucide-react';

// Icons
import { Leaf, Factory, Package, Globe, Microscope, Handshake } from 'lucide-react';
import { Helmet } from 'react-helmet';


<Helmet>
  <title>Premium Peanut Export Services | Balaji Exports</title>
  <meta name="description" content="Explore our end-to-end peanut export services including organic farming, processing, packaging, and global delivery. Balaji Exports ensures top-quality peanuts worldwide." />
  <meta name="keywords" content="Peanut Export, Organic Peanuts, Peanut Processing, Peanut Packaging, Global Peanut Exporter, Balaji Exports, Aflatoxin Testing, Peanut Supplier India" />
  <meta name="author" content="Balaji Exports" />
  
  {/* Open Graph (OG) for social sharing */}
  <meta property="og:title" content="Premium Peanut Export Services | Balaji Exports" />
  <meta property="og:description" content="Discover Balaji Exports' complete peanut export solutions—from organic farming to international shipping." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.yourdomain.com/services" />
  <meta property="og:image" content="https://www.yourdomain.com/images/peanut-services-banner.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Premium Peanut Export Services | Balaji Exports" />
  <meta name="twitter:description" content="Explore end-to-end peanut export services with quality assurance from Balaji Exports." />
  <meta name="twitter:image" content="https://www.yourdomain.com/images/peanut-services-banner.jpg" />
</Helmet>


const ServicesPage = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  // State for accordion expanded status
  const [expanded, setExpanded] = useState(false);
  
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  // Responsive icon size based on screen size
  const getIconSize = () => {
    if (isXsScreen) return 24;
    if (isSmScreen) return 28;
    if (isMdScreen) return 32;
    return 40;
  };
  
  // Service categories with icons mapping
  const serviceCategories = [
    {
      id: 'organic',
      title: 'Organic Peanut Cultivation',
      icon: <Leaf size={getIconSize()} color={theme.palette.customColors.accentGreen} />,
      description: 'We grow our peanuts on certified organic farms using traditional methods, without any harmful pesticides or synthetic fertilizers.',
      details: [
        '100% chemical-free',
        'Cultivated using natural compost and bio-fertilizers',
        'Rich in flavor and nutrition'
      ]
    },
    {
      id: 'processing',
      title: 'Peanut Processing and Grading',
      icon: <Factory size={getIconSize()} color={theme.palette.customColors.accentGreen} />,
      description: 'Our state-of-the-art processing unit ensures hygienic and efficient processing.',
      details: [
        'Cleaning, shelling, and sorting',
        'Grading based on size and quality',
        'Blanching and roasting (as per customer requirement)',
        'Aflatoxin testing and quality control at every stage'
      ]
    },
    {
      id: 'packaging',
      title: 'Customized Packaging Solutions',
      icon: <Package size={getIconSize()} color={theme.palette.customColors.accentGreen} />,
      description: 'We offer flexible packaging options to meet diverse customer needs.',
      details: [
        'Jute bags, PP woven bags, or vacuum-sealed packs',
        'Sizes ranging from 5kg to 50kg',
        'Private labeling and branding for wholesale clients'
      ]
    },
    {
      id: 'export',
      title: 'Global Export Services',
      icon: <Globe size={getIconSize()} color={theme.palette.customColors.accentGreen} />,
      description: 'We export peanuts to markets across Europe, the Middle East, Southeast Asia, and North America.',
      details: [
        'Documentation support (Phytosanitary, FSSAI, APEDA, etc.)',
        'Hassle-free logistics and port handling',
        'Consistent supply and timely delivery'
      ]
    },
    {
      id: 'quality',
      title: 'Strict Quality Assurance',
      icon: <Microscope size={getIconSize()} color={theme.palette.customColors.accentGreen} />,
      description: 'We follow international food safety protocols.',
      details: [
        'Aflatoxin and moisture testing',
        'Manual and machine sorting for defect-free output',
        'Compliance with EU, USFDA, and Codex standards'
      ]
    },
    {
      id: 'client',
      title: 'Client-Centric Approach',
      icon: <Handshake size={getIconSize()} color={theme.palette.customColors.accentGreen} />,
      description: 'Whether you\'re a wholesaler, retailer, or importer, we provide personalized service.',
      details: [
        'Transparent pricing and contracts',
        'Dedicated account managers',
        'Custom product specifications upon request'
      ]
    }
  ];

  // Why choose us highlights
  const highlights = [
    '65+ years of experience in peanut cultivation',
    'Fully integrated supply chain from farm to export',
    'Commitment to sustainability and organic farming',
    'Trusted by clients worldwide for quality and reliability'
  ];

  return (
    <Box sx={{ 
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      py: { xs: 3, sm: 4, md: 6, lg: 8 }
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 3, sm: 4, md: 5, lg: 6 },
            position: 'relative',
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 1, sm: 2 },
            background: theme.customGradients.greenDark,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
          }}
        >
          <Typography 
            variant={isXsScreen ? "h5" : isSmScreen ? "h4" : "h2"} 
            component="h1" 
            fontFamily="Lato, sans-serif"
            fontWeight="700"
            color={theme.palette.customColors.darkGold}
            sx={{ mb: { xs: 1, sm: 1.5, md: 2 } }}
          >
            Our Premium Services
          </Typography>
          
          <Typography 
            variant="body1" 
            fontFamily="Inter, sans-serif"
            color={theme.palette.customColors.lightGold}
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              fontSize: { 
                xs: '0.875rem', 
                sm: '0.95rem', 
                md: '1rem', 
                lg: '1.1rem' 
              } 
            }}
          >
            At Balaji Exports, we offer end-to-end solutions from organic peanut cultivation to 
            global export. Discover our comprehensive range of services designed to deliver 
            premium quality peanuts to clients worldwide.
          </Typography>
        </Box>
        
        {/* Service Cards Section */}
        <Box sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 2, md: 3 },
              justifyContent: 'space-between'
            }}
          >
            {serviceCategories.map((service) => (
              <Box 
                key={service.id}
                sx={{ 
                  width: { 
                    xs: '100%', 
                    sm: 'calc(50% - 16px)',  // Account for gap on sm screens
                    md: 'calc(50% - 24px)',  // Account for gap on md screens
                    lg: '48%'                // Exactly 48% on desktop as requested
                  },
                  mb: { xs: 1, sm: 0 },
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: {
                      xs: 'none',
                      sm: 'translateY(-5px)',
                      md: 'translateY(-8px)'
                    }
                  }
                }}
              >
                <Accordion 
                  expanded={expanded === service.id} 
                  onChange={handleAccordionChange(service.id)}
                  sx={{
                    width: '100%',
                    background: theme.customGradients.greenDark,
                    borderRadius: '8px !important',
                    mb: { xs: 1.5, sm: 2 },
                    overflow: 'hidden',
                    '&:before': {
                      display: 'none',
                    },
                    boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="#D7C68D" size={isXsScreen ? 18 : 24} />}
                    sx={{ 
                      p: { xs: 1.5, sm: 2 },
                      '& .MuiAccordionSummary-content': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 1, sm: 1.5, md: 2 }
                      }
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: { xs: 1, sm: 1.5, md: 2 },
                      flexWrap: isXsScreen ? 'wrap' : 'nowrap'
                    }}>
                      {service.icon}
                      <Typography 
                        variant={isXsScreen ? "subtitle1" : "h6"} 
                        fontFamily="Lato, sans-serif"
                        fontWeight="700"
                        color={theme.palette.customColors.darkGold}
                        sx={{ 
                          fontSize: { 
                            xs: '0.95rem', 
                            sm: '1rem', 
                            md: '1.125rem',
                            lg: '1.25rem'
                          } 
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: { xs: 2, sm: 2.5, md: 3 }, pt: 0 }}>
                    <Typography 
                      variant="body2" 
                      fontFamily="Inter, sans-serif"
                      color={theme.palette.customColors.lightGold}
                      sx={{ 
                        mb: 2,
                        fontSize: { 
                          xs: '0.8125rem', 
                          sm: '0.875rem', 
                          md: '0.9375rem' 
                        } 
                      }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Box component="ul" sx={{ pl: { xs: 1.5, sm: 2 }, m: 0 }}>
                      {service.details.map((detail, idx) => (
                        <Typography 
                          component="li" 
                          key={idx} 
                          variant="body2"
                          fontFamily="Inter, sans-serif"
                          color={theme.palette.customColors.lightGold}
                          sx={{ 
                            mb: 1,
                            fontSize: { 
                              xs: '0.8125rem', 
                              sm: '0.875rem', 
                              md: '0.9375rem' 
                            } 
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* Why Choose Us Section */}
        <Box 
          sx={{ 
            mb: { xs: 4, sm: 5, md: 6 }, 
            p: { xs: 2, sm: 3, md: 4, lg: 5 },
            borderRadius: { xs: 1, sm: 2 },
            background: theme.customGradients.greenDark,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: { xs: 2, sm: 3 },
            flexDirection: { xs: 'column', sm: 'row' }
          }}>
            <LeafIcon 
              size={isXsScreen ? 24 : isSmScreen ? 28 : 32} 
              color={theme.palette.customColors.accentGreen} 
            />
            <Typography 
              variant={isXsScreen ? "h5" : "h4"} 
              component="h2" 
              fontFamily="Lato, sans-serif"
              fontWeight="700"
              color={theme.palette.customColors.darkGold}
              sx={{ 
                ml: { xs: 0, sm: 2 },
                mt: { xs: 1, sm: 0 },
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Why Choose Balaji Exports?
            </Typography>
          </Box>
          
          <Divider sx={{ mb: { xs: 2, sm: 3, md: 4 }, borderColor: 'rgba(215, 198, 141, 0.2)' }} />
          
          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 2, sm: 2, md: 3 },
              justifyContent: 'space-between'
            }}
          >
            {highlights.map((highlight, index) => (
              <Box 
                key={index}
                sx={{ 
                  width: { 
                    xs: '100%', 
                    sm: 'calc(50% - 16px)',  // Account for gap on sm screens
                    md: 'calc(50% - 24px)',  // Account for gap on md screens
                    lg: '48%'                // Exactly 48% on desktop as requested
                  },
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 1,
                  bgcolor: 'rgba(109, 140, 63, 0.1)',
                  transition: 'transform 0.3s',
                  height: '100%',
                  '&:hover': {
                    transform: { 
                      xs: 'none', 
                      sm: 'translateX(5px)' 
                    },
                    bgcolor: 'rgba(109, 140, 63, 0.2)',
                  }
                }}
              >
                <Chip 
                  icon={<LeafIcon size={isXsScreen ? 14 : 16} />} 
                  label={`Benefit ${index + 1}`}
                  sx={{ 
                    mr: { xs: 0, md: 2 },
                    mb: { xs: 1, md: 0 },
                    bgcolor: theme.palette.customColors.accentGreen,
                    color: '#FFFFFF',
                    fontSize: { xs: '0.75rem', sm: '0.8125rem' },
                    '& .MuiChip-icon': {
                      color: '#FFFFFF'
                    }
                  }}
                  size={isXsScreen ? "small" : "medium"}
                />
                <Typography 
                  variant="body1"
                  fontFamily="Inter, sans-serif"
                  color={theme.palette.customColors.lightGold}
                  sx={{ 
                    fontSize: { 
                      xs: '0.875rem', 
                      sm: '0.9375rem', 
                      md: '1rem' 
                    } 
                  }}
                >
                  {highlight}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNextIcon size={isXsScreen ? 14 : 16} />}
          aria-label="breadcrumb"
          sx={{ 
            mt: { xs: 3, sm: 4 }, 
            color: theme.palette.primary.main,
            '& .MuiBreadcrumbs-ol': {
              justifyContent: { xs: 'center', sm: 'flex-start' },
            },
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}
        >
          <Link 
            underline="hover" 
            color={theme.palette.primary.main} 
            href="#"
            sx={{ 
              fontSize: 'inherit'
            }}
          >
            Home
          </Link>
          <Typography 
            color={theme.palette.primary.main}
            fontFamily="Lato, sans-serif"
            sx={{ 
              fontSize: 'inherit'
            }}
          >
            Services
          </Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default ServicesPage;