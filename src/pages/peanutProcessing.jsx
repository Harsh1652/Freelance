import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Tabs, 
  Tab, 
  Fade,
  Button,
  CircularProgress
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme'; // Import theme from external file

// SEO component
const SEO = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
    
    if (!document.querySelector('link[href*="Lato"]')) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Inter:wght@400;500;600&display=swap';
      document.head.appendChild(fontLink);
    }
  }, [title, description]);
  
  return null;
};

// The main peanut processing page component
const PeanutProcessingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // Reset animation when active step changes
  useEffect(() => {
    setAnimation(false);
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeStep]);
  
  // Handle window resize
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 600;
  
  // Peanut processing steps data
  const processingSteps = [
    {
      title: "1. Reception and Preliminary Inspection",
      subtitle: "First Quality Check",
      description: "Peanuts arrive at our facility in large bags or in bulk. We conduct a visual inspection for damage, mold, and foreign materials. Moisture content is checked (ideal is below 10%) to prevent spoilage during storage.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut reception and inspection",
      facts: [
        "Optimal moisture content: Below 10%",
        "Initial visual inspection removes approximately 3-5% of incoming peanuts",
        "Temperature controlled environment at 20-22°C"
      ]
    },
    {
      title: "2. Cleaning",
      subtitle: "Removing Impurities",
      description: "Peanuts pass through advanced cleaning machines that remove dirt, stones, leaves, and broken shells. Magnetic separators are used to remove metal particles mixed in during harvesting.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut cleaning process",
      facts: [
        "Multi-stage cleaning process",
        "Air classification removes 99% of dust and light particles",
        "Magnetic cleaning removes 100% of metal contaminants"
      ]
    },
    {
      title: "3. Shelling",
      subtitle: "Extracting the Kernels",
      description: "Unshelled peanuts are sent through shelling machines that crack the shells without harming the kernels. Post-shelling, we separate whole kernels, split kernels, and broken pieces. Air classifiers are used to separate lighter shells from the heavier kernels.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut shelling process",
      facts: [
        "Capacity: 2 tons per hour",
        "Average yield: 70-75% kernels by weight",
        "Shell byproducts used for animal feed and mulch"
      ]
    },
    {
      title: "4. Grading and Sorting",
      subtitle: "Classification by Quality",
      description: "Peanuts are graded based on size, color, and quality. Machine grading is followed by manual sorting to remove defective peanuts and discolored or damaged pieces. Grading ensures product consistency, essential for exporters.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut grading and sorting",
      facts: [
        "Electronic color sorters with 98% accuracy",
        "Four primary grades: Premium, Grade A, Standard, Industrial",
        "Size classification from 38/42 to 70/80 count per ounce"
      ]
    },
    {
      title: "5. Blanching",
      subtitle: "Optional Skin Removal",
      description: "Required by some customers for skinless peanuts. Process involves light heating to loosen the peanut skins, which are then removed using rollers or air blowers. Post-blanching, another round of sorting ensures quality.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut blanching process",
      facts: [
        "Heat treatment: 280°F for 20 minutes",
        "Skin removal efficiency: 95-98%",
        "Popular for confectionery applications"
      ]
    },
    {
      title: "6. Roasting",
      subtitle: "Enhancing Flavor",
      description: "For roasted peanut products, dry roasting ovens or oil roasters are used with precisely controlled temperature and timing. Roasting enhances flavor and aroma.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut roasting process",
      facts: [
        "Dry roasting: 320-330°F for 40-60 minutes",
        "Oil roasting: 300-310°F for 3-5 minutes",
        "Moisture reduction to 1.5% for extended shelf life"
      ]
    },
    {
      title: "7. Quality Control and Testing",
      subtitle: "Safety Assurance",
      description: "We conduct multiple quality checks including aflatoxin testing (for mold toxins), moisture testing, and visual and taste inspections. Especially strict controls are followed for export markets like Europe and Japan.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut quality control",
      facts: [
        "HACCP certified processes",
        "Aflatoxin tolerance: <4 ppb (EU standards)",
        "Sample testing: 1 sample per 2 metric tons"
      ]
    },
    {
      title: "8. Packaging",
      subtitle: "Preservation and Branding",
      description: "Packaging options include jute bags (for raw peanuts), vacuum-sealed bags (for blanched/roasted peanuts), and food-grade bulk containers (for wholesale buyers). Labels include batch numbers, grade, and origin details. Proper packaging preserves freshness and prevents contamination.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut packaging process",
      facts: [
        "Nitrogen flushing extends shelf life by 40%",
        "Packaging options: 25kg, 50kg, and bulk totes",
        "All packaging materials are food-grade certified"
      ]
    },
    {
      title: "9. Storage and Dispatch",
      subtitle: "Ready for Market",
      description: "Finished products are stored in cool, dry warehouses. FIFO (First-In, First-Out) system ensures older stock is dispatched first. Shipments are organized based on customer and export requirements.",
      imageUrl: "/api/placeholder/800/600",
      imageAlt: "Peanut storage and dispatch",
      facts: [
        "Climate controlled warehouse at 18-20°C",
        "Relative humidity maintained at 60-65%",
        "Average inventory turnover: 30 days"
      ]
    }
  ];

  // Process flow navigation
  const handleStepChange = (event, newValue) => {
    setActiveStep(newValue);
  };

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          backgroundColor: theme.palette.background.default
        }}
      >
        <CircularProgress sx={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <SEO 
        title="Interactive Peanut Processing | From Farm to Table" 
        description="Explore our comprehensive 9-step peanut processing system with interactive visuals that showcase our quality control from reception to dispatch."
      />
      
      <Box sx={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        pt: 6,
        pb: 8
      }}>
        <Container maxWidth="lg">
          {/* Header Section */}
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  mb: 2
                }}
              >
                Our Peanut Processing System
              </Typography>
              
              <Typography 
                variant="h2" 
                sx={{ 
                  color: theme.palette.secondary.main,
                  fontSize: isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 500,
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 4
                }}
              >
                A comprehensive 9-step process ensuring quality from reception to dispatch
              </Typography>
            </Box>
          </Fade>

          {/* Process Flow View */}
          <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
              <Tabs 
                value={activeStep} 
                onChange={handleStepChange} 
                variant={isMobile ? "scrollable" : "fullWidth"}
                scrollButtons="auto"
                sx={{ 
                  '& .MuiTab-root': { 
                    color: theme.palette.primary.main,
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                      fontWeight: 'bold'
                    }
                  }
                }}
              >
                {processingSteps.map((step, index) => (
                  <Tab 
                    key={index} 
                    label={`Step ${index + 1}`} 
                    sx={{ textTransform: 'none' }} 
                  />
                ))}
              </Tabs>
            </Box>
            
            <Fade in={animation} timeout={500}>
              <Box sx={{ p: 2 }}>
                {/* Full-width image section */}
                <Box 
                  sx={{ 
                    width: '98%',
                    height: '500px',
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: 'rgba(38, 77, 54, 0.05)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    mx: 'auto',
                    mb: 4
                  }}
                >
                  {processingSteps[activeStep].imageUrl ? (
                    <Box 
                      component="img" 
                      src={processingSteps[activeStep].imageUrl}
                      alt={processingSteps[activeStep].imageAlt || "Process step image"}
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  ) : (
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        opacity: 0.6
                      }}
                    >
                      {processingSteps[activeStep].title} Visualization
                    </Typography>
                  )}
                </Box>

                {/* Content section */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        mb: 1,
                        fontFamily: 'Lato, sans-serif'
                      }}
                    >
                      {processingSteps[activeStep].title}
                    </Typography>
                    
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        mb: 2,
                        fontWeight: 'bold'
                      }}
                    >
                      {processingSteps[activeStep].subtitle}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.palette.secondary.main,
                        mb: 3
                      }}
                    >
                      {processingSteps[activeStep].description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: theme.palette.secondary.main,
                          fontWeight: 'bold',
                          mb: 1
                        }}
                      >
                        Key Facts:
                      </Typography>
                      
                      {processingSteps[activeStep].facts.map((fact, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            mb: 1 
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              bgcolor: theme.palette.customColors.accentGreen,
                              mr: 1
                            }}
                          />
                          <Typography variant="body2" color={theme.palette.primary.main}>
                            {fact}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                      <Button 
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep(prev => prev - 1)}
                        sx={{ 
                          color: theme.palette.primary.main,
                          borderColor: theme.palette.primary.main,
                          '&:hover': {
                            borderColor: theme.palette.secondary.main,
                            backgroundColor: 'rgba(58, 107, 61, 0.04)'
                          }
                        }}
                      >
                        Previous Step
                      </Button>
                      
                      <Button 
                        variant="contained"
                        disabled={activeStep === processingSteps.length - 1}
                        onClick={() => setActiveStep(prev => prev + 1)}
                        sx={{ 
                          bgcolor: theme.palette.customColors.accentGreen,
                          '&:hover': {
                            bgcolor: theme.palette.secondary.main,
                          }
                        }}
                      >
                        Next Step
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              {processingSteps.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveStep(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: activeStep === index 
                      ? theme.palette.primary.main 
                      : theme.palette.customColors.lightGold,
                    mx: 0.5,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Box>
          </>
          
          {/* Process Summary */}
          <Fade in={true} timeout={1000}>
            <Box sx={{ mt: 8, textAlign: 'center', p: 3, bgcolor: 'rgba(38, 77, 54, 0.08)', borderRadius: 2 }}>
              <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2 }}>
                Quality Assurance Throughout the Process
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.primary.main, maxWidth: '800px', mx: 'auto' }}>
                Our comprehensive 9-step process ensures that every peanut that leaves our facility meets the highest standards of quality and safety. From initial inspection to final packaging, we maintain strict controls to deliver premium products to our customers around the world.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PeanutProcessingPage;