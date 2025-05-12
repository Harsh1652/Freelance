import React, { useState, useEffect, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Tabs, 
  Tab, 
  Fade,
  Button,
  CircularProgress,
  Chip,
  IconButton
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme'; // Import theme from external file
import { ChevronLeft, ChevronRight } from 'lucide-react';
import M_Step1 from '../assets/images/M_Step1.jpg'; 

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

// Move data outside component or use useMemo to avoid issues with initialization
// These data arrays are created once and won't change
const FARMING_STEPS = [
  {
    title: "1. Land Preparation",
    subtitle: "Setting the Foundation",
    description: "Peanuts need warm weather and begin growing when temperatures consistently stay above 25°C (77°F). We carefully till the land 2-3 times to loosen the soil and remove weeds, preparing well-drained, sandy loam soil for optimal growth.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Land preparation for peanut farming",
    facts: [
      "Temperature requirement: Above 25°C (77°F)",
      "Soil preference: Well-drained sandy loam",
      "Tilling frequency: 2-3 times for optimal preparation"
    ],
    organic: true
  },
  {
    title: "2. Organic Soil Enrichment",
    subtitle: "Natural Fertilization",
    description: "Instead of chemical fertilizers, we use compost, vermicompost, and well-rotted cow dung to enrich the soil naturally. This organic approach maintains soil health and produces nutrient-rich peanuts without synthetic chemicals.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Organic soil enrichment process",
    facts: [
      "100% chemical-free fertilization",
      "Natural composting process",
      "Maintains long-term soil health"
    ],
    organic: true
  },
  {
    title: "3. Seed Selection",
    subtitle: "Quality Genetics",
    description: "We choose high-quality, untreated seeds from healthy previous harvests. Balaji Exports ensures seeds are free from chemical treatment, using native or non-GMO varieties suited to the local climate.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Peanut seed selection",
    facts: [
      "Native or non-GMO varieties",
      "Chemical-free seed selection",
      "Disease-resistant varieties"
    ],
    organic: true
  },
  {
    title: "4. Sowing",
    subtitle: "Planting with Precision",
    description: "Seeds are planted in rows with proper spacing to allow optimal growth. We plant seeds 4-6 cm deep and about 15-20 cm apart. Bio-fertilizers like Rhizobium cultures are used to enhance natural nitrogen fixation.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Peanut sowing process",
    facts: [
      "Planting depth: 4-6 cm",
      "Spacing: 15-20 cm apart",
      "Rhizobium inoculation for nitrogen fixation"
    ],
    organic: true
  },
  {
    title: "5. Irrigation",
    subtitle: "Water Management",
    description: "Groundnuts need moderate water management. We irrigate based on rainfall patterns and soil moisture levels, carefully avoiding overwatering which can lead to fungal diseases.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Peanut irrigation system",
    facts: [
      "Moisture-based irrigation schedule",
      "Prevents fungal diseases",
      "Water conservation practices"
    ],
    organic: true
  },
  {
    title: "6. Organic Pest Management",
    subtitle: "Natural Protection",
    description: "We follow strict organic practices with no synthetic pesticides. Our natural pest control includes neem oil spray, cow urine solutions, and trap crops to distract pests while maintaining ecological balance.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Organic pest management",
    facts: [
      "Neem oil-based treatments",
      "Trap crops for pest diversion",
      "Zero synthetic pesticides"
    ],
    organic: true
  },
  {
    title: "7. Flowering and Pegging",
    subtitle: "Unique Growth Process",
    description: "Peanuts have a unique growth pattern - they flower above ground, but the pegs (stems from flowers) grow down into the soil where pods form. We ensure soil remains loose and soft for proper peg penetration.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Peanut flowering and pegging",
    facts: [
      "Above-ground flowering",
      "Underground pod formation",
      "Critical soil loosening stage"
    ],
    organic: true
  },
  {
    title: "8. Harvesting",
    subtitle: "Perfect Timing",
    description: "Harvesting occurs 90-120 days after sowing, depending on the variety. We check maturity by inspecting pods from sample plants. The entire plant is lifted and sun-dried in the field for several days.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Peanut harvesting",
    facts: [
      "Harvest period: 90-120 days post-sowing",
      "Maturity testing on sample plants",
      "Field sun-drying process"
    ],
    organic: true
  },
  {
    title: "9. Post-Harvest Processing",
    subtitle: "Preparation for Market",
    description: "Once dry, pods are separated from plants, cleaned, and sun-dried again. Storage is in jute sacks in dry, well-ventilated spaces. All processes follow organic certification standards and maintain food-grade hygiene for export quality.",
    imageUrl: "/api/placeholder/800/600",
    imageAlt: "Post-harvest processing",
    facts: [
      "Organic certification compliance",
      "Food-grade hygiene standards",
      "Proper ventilation storage"
    ],
    organic: true
  }
];

const PROCESSING_STEPS = [
  {
    title: "1. Reception and Preliminary Inspection",
    subtitle: "First Quality Check",
    description: "Peanuts arrive at our facility in large bags or in bulk. We conduct a visual inspection for damage, mold, and foreign materials. Moisture content is checked (ideal is below 10%) to prevent spoilage during storage.",
    imageUrl: M_Step1, 
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

// The main peanut journey page component
const PeanutJourneyPage = () => {
  // State declarations
  const [activeSection, setActiveSection] = useState(0); 
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Window size handling
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const isMobile = windowWidth < 600;
  
  // Get current steps based on section - use the constants defined outside
  const currentSteps = activeSection === 0 ? FARMING_STEPS : PROCESSING_STEPS;
  const currentTitle = activeSection === 0 ? "Organic Peanut Farming Process" : "Peanut Processing System";
  const currentDescription = activeSection === 0 ? "Sustainable cultivation from soil to harvest" : "Quality transformation from raw kernels to market-ready products";
  
  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveStep((prevStep) => {
          const steps = activeSection === 0 ? FARMING_STEPS : PROCESSING_STEPS;
          return prevStep === steps.length - 1 ? 0 : prevStep + 1;
        });
      }, 6500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeSection, autoPlay]);
  
  // Animation reset
  useEffect(() => {
    setAnimation(false);
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeSection, activeStep]);
  
  // Window resize handler
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Navigation functions
  const handleSectionChange = (event, newValue) => {
    setActiveSection(newValue);
    setActiveStep(0);
    setAutoPlay(true);
  };

  const goToPreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      setAutoPlay(false);
    }
  };

  const goToNextStep = () => {
    if (activeStep < currentSteps.length - 1) {
      setActiveStep(activeStep + 1);
      setAutoPlay(false);
    }
  };

  const goToStep = (stepIndex) => {
    setActiveStep(stepIndex);
    setAutoPlay(false);
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
        title="Peanut Journey | From Organic Farming to Premium Processing" 
        description="Discover our complete peanut journey from organic farming practices to state-of-the-art processing. Experience our commitment to quality from farm to table."
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
                The Complete Peanut Journey
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
                From organic farming to premium processing - ensuring quality at every step
              </Typography>
            </Box>
          </Fade>

          {/* Section Selection Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              value={activeSection} 
              onChange={handleSectionChange}
              centered
              sx={{ 
                '& .MuiTab-root': { 
                  color: theme.palette.primary.main,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                  }
                }
              }}
            >
              <Tab 
                label="🌱 Organic Farming" 
                sx={{ textTransform: 'none' }} 
              />
              <Tab 
                label="🏭 Processing & Manufacturing" 
                sx={{ textTransform: 'none' }} 
              />
            </Tabs>
          </Box>

          {/* Current Section Header */}
          <Fade in={true} timeout={500}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  color: theme.palette.primary.main,
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  mb: 1
                }}
              >
                {currentTitle}
              </Typography>
              
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: theme.palette.secondary.main,
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  mb: 2
                }}
              >
                {currentDescription}
              </Typography>
              
              {activeSection === 0 && (
                <Chip 
                  label="100% Organic & Chemical-Free" 
                  sx={{ 
                    bgcolor: theme.palette.customColors.accentGreen,
                    color: 'white',
                    fontWeight: 'bold'
                  }} 
                />
              )}
            </Box>
          </Fade>

          {/* Step counter display */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 'bold'
              }}
            >
              Step {activeStep + 1} of {currentSteps.length}
            </Typography>
          </Box>

          {/* Carousel View - Replace tabs with carousel */}
          <Box sx={{ position: 'relative' }}>
            {/* Carousel navigation buttons */}
            <IconButton
              onClick={goToPreviousStep}
              disabled={activeStep === 0}
              sx={{
                position: 'absolute',
                left: { xs: -16, sm: -24 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                boxShadow: 2,
                color: activeStep === 0 ? 'gray' : theme.palette.primary.main
              }}
            >
              <ChevronLeft size={24} />
            </IconButton>
            
            <IconButton
              onClick={goToNextStep}
              disabled={activeStep === currentSteps.length - 1}
              sx={{
                position: 'absolute',
                right: { xs: -16, sm: -24 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                boxShadow: 2,
                color: activeStep === currentSteps.length - 1 ? 'gray' : theme.palette.primary.main
              }}
            >
              <ChevronRight size={24} />
            </IconButton>
            
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
                  {currentSteps[activeStep].imageUrl ? (
                    <Box 
                      component="img" 
                      src={currentSteps[activeStep].imageUrl}
                      alt={currentSteps[activeStep].imageAlt || "Process step image"}
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
                      {currentSteps[activeStep].title} Visualization
                    </Typography>
                  )}
                  
                  {/* Organic Badge */}
                  {currentSteps[activeStep].organic && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: theme.palette.customColors.accentGreen,
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 'bold'
                      }}
                    >
                      🌿 Organic
                    </Box>
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
                      {currentSteps[activeStep].title}
                    </Typography>
                    
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        mb: 2,
                        fontWeight: 'bold'
                      }}
                    >
                      {currentSteps[activeStep].subtitle}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: theme.palette.secondary.main,
                        mb: 3
                      }}
                    >
                      {currentSteps[activeStep].description}
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
                      
                      {currentSteps[activeStep].facts.map((fact, i) => (
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
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Box>
          
          {/* Carousel navigation dots */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            mt: 4,
            flexWrap: 'wrap',
            gap: 1
          }}>
            {currentSteps.map((_, index) => (
              <Box
                key={index}
                onClick={() => goToStep(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: activeStep === index 
                    ? theme.palette.primary.main 
                    : theme.palette.customColors.lightGold,
                  mx: 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    bgcolor: activeStep === index 
                      ? theme.palette.primary.main 
                      : theme.palette.customColors.accentGreen
                  }
                }}
              />
            ))}
          </Box>
          
          {/* Carousel navigation buttons - bottom */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2, 
            mt: 4 
          }}>
            <Button 
              variant="outlined"
              disabled={activeStep === 0}
              onClick={goToPreviousStep}
              sx={{ 
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                minWidth: 120,
                '&:hover': {
                  borderColor: theme.palette.secondary.main,
                  backgroundColor: 'rgba(58, 107, 61, 0.04)'
                }
              }}
            >
              Previous
            </Button>
            
            <Button 
              variant="contained"
              disabled={activeStep === currentSteps.length - 1}
              onClick={goToNextStep}
              sx={{ 
                bgcolor: theme.palette.customColors.accentGreen,
                minWidth: 120,
                '&:hover': {
                  bgcolor: theme.palette.secondary.main,
                }
              }}
            >
              Next
            </Button>
          </Box>
          
          {/* Process Summary */}
          <Fade in={true} timeout={1000}>
            <Box sx={{ mt: 8, textAlign: 'center', p: 3, bgcolor: 'rgba(38, 77, 54, 0.08)', borderRadius: 2 }}>
              <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2 }}>
                {activeSection === 0 ? 'Balaji Exports - Organic and Trusted' : 'Quality Assurance Throughout the Process'}
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.primary.main, maxWidth: '800px', mx: 'auto' }}>
                {activeSection === 0 
                  ? "Balaji Exports has built a reputation over the years for growing peanuts organically, without the use of harmful chemicals. We use natural soil enrichers, eco-friendly pest control methods, and sustainable farming techniques. This not only protects consumer health but also nurtures the soil for future generations. Our groundnuts are chemical-free, rich in flavor and nutrition, and grown sustainably with respect for the environment."
                  : "Our comprehensive 9-step process ensures that every peanut that leaves our facility meets the highest standards of quality and safety. From initial inspection to final packaging, we maintain strict controls to deliver premium products to our customers around the world."
                }
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default PeanutJourneyPage;