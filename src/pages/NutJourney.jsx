import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Fade,
  Button,
  CircularProgress,
  Chip,
  IconButton
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import F_Step1 from '../assets/images/Farming/F_Step1.jpg';
import F_Step2 from '../assets/images/Farming/F_Step2.jpg';
import F_Step3 from '../assets/images/Farming/F_Step3.jpg';
import F_Step4 from '../assets/images/Farming/F_Step4.png';
import F_Step5 from '../assets/images/Farming/F_Step5.jpg';
import F_Step6 from '../assets/images/Farming/F_Step6.jpg';
import F_Step7 from '../assets/images/Farming/F_Step7.jpg';
import F_Step8 from '../assets/images/Farming/F_Step8.png';
import F_Step9 from '../assets/images/Farming/F_Step9.jpg';


import M_Step1 from '../assets/images/Manufacturing/M_Step1.jpg'; 
import M_Step2 from '../assets/images/Manufacturing/M_Step2.png'; 
import M_Step3 from '../assets/images/Manufacturing/M_Step3.jpg';
import M_Step4 from '../assets/images/Manufacturing/M_Step4.jpeg';
import M_Step5 from '../assets/images/Manufacturing/M_Step5.jpeg';
import M_Step6 from '../assets/images/Manufacturing/M_Step6.jpeg';
import M_Step7 from '../assets/images/Manufacturing/M_Step7.jpeg';
import M_Step8 from '../assets/images/Manufacturing/M_Step8.jpg';
import M_Step9 from '../assets/images/Manufacturing/M_Step9.jpeg';

// SEO component with useEffect cleanup
const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update document title
    const originalTitle = document.title;
    document.title = title;
    
    // Handle meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    let createdMetaDescription = false;
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
      createdMetaDescription = true;
    }
    
    const originalContent = metaDescription.content;
    metaDescription.content = description;
    
    // Cleanup function
    return () => {
      document.title = originalTitle;
      
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.content = originalContent;
      }
    };
  }, [title, description]);
  
  return null;
};

// Data arrays defined outside component with useMemo
const FARMING_STEPS = [
  {
    title: "1. Land Preparation",
    subtitle: "Setting the Foundation",
    description: "Peanuts need warm weather and begin growing when temperatures consistently stay above 25°C (77°F). We carefully till the land 2-3 times to loosen the soil and remove weeds, preparing well-drained, sandy loam soil for optimal growth.",
    imageUrl: F_Step1,
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
    imageUrl: F_Step2,
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
    imageUrl: F_Step3,
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
    imageUrl: F_Step4,
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
    imageUrl: F_Step5,
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
    imageUrl: F_Step6,
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
    imageUrl: F_Step7,
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
    imageUrl: F_Step8,
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
    imageUrl: F_Step9,
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
    imageUrl: M_Step2,
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
    imageUrl: M_Step3,
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
    imageUrl: M_Step4,
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
    imageUrl: M_Step5,
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
    imageUrl: M_Step6,
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
    imageUrl: M_Step7,
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
    imageUrl: M_Step8,
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
    imageUrl: M_Step9,
    imageAlt: "Peanut storage and dispatch",
    facts: [
      "Climate controlled warehouse at 18-20°C",
      "Relative humidity maintained at 60-65%",
      "Average inventory turnover: 30 days"
    ]
  }
];

// Process Viewer Component with image preloading and improved transitions
const ProcessViewer = ({ steps, title, description, badge }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;

  const currentStep = useMemo(() => steps[activeStep], [steps, activeStep]);

  // Reset autoPlay when steps change
  useEffect(() => {
    setAutoPlay(true);
  }, [steps]);

  // Auto-play functionality with improved transitions
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        const nextStep = activeStep === steps.length - 1 ? 0 : activeStep + 1;
        
        // Preload next image before transition
        const nextImage = steps[nextStep]?.imageUrl;
        if (nextImage && !nextImage.includes('placeholder')) {
          const img = new Image();
          img.src = nextImage;
          
          img.onload = () => {
            setAnimation(false);
            setImageLoaded(false);
            
            // Wait for fade out
            setTimeout(() => {
              setActiveStep(nextStep);
              // Wait a bit for the new image to be ready
              setTimeout(() => {
                setImageLoaded(true);
                setAnimation(true);
              }, 50);
            }, 200);
          };
        } else {
          // If no image to preload, just do the transition
          setAnimation(false);
          setImageLoaded(false);
          
          setTimeout(() => {
            setActiveStep(nextStep);
            setTimeout(() => {
              setImageLoaded(true);
              setAnimation(true);
            }, 50);
          }, 200);
        }
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, activeStep, steps]);

  // Preload images function
  const preloadImage = useCallback((src) => {
    return new Promise((resolve, reject) => {
      if (preloadedImages.has(src)) {
        resolve();
        return;
      }           
      const img = new Image();
      img.onload = () => {
        setPreloadedImages(prev => new Set([...prev, src]));
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  }, [preloadedImages]);

  // Preload adjacent images
  useEffect(() => {
    const imagesToPreload = [];        // Current image
    if (currentStep.imageUrl && !currentStep.imageUrl.includes('placeholder')) {
      imagesToPreload.push(currentStep.imageUrl);
    }        // Next image
    if (activeStep < steps.length - 1) {
      const nextImage = steps[activeStep + 1].imageUrl;
      if (nextImage && !nextImage.includes('placeholder')) {
        imagesToPreload.push(nextImage);
      }
    }        // Previous image
    if (activeStep > 0) {
      const prevImage = steps[activeStep - 1].imageUrl;
      if (prevImage && !prevImage.includes('placeholder')) {
        imagesToPreload.push(prevImage);
      }
    }    // Preload all identified images
    Promise.all(imagesToPreload.map(src => preloadImage(src)))
      .then(() => {
        setImageLoaded(true);
      })
      .catch(console.error);
  }, [activeStep, steps, currentStep.imageUrl, preloadImage]);

  // Improved step change function with better transition handling
  const changeStep = useCallback((newStep) => {
    if (newStep === activeStep) return;

    // Preload the next image before transition
    const nextImage = steps[newStep]?.imageUrl;
    if (nextImage && !nextImage.includes('placeholder')) {
      const img = new Image();
      img.src = nextImage;
      
      img.onload = () => {
        setAnimation(false);
        setImageLoaded(false);
        setAutoPlay(false);

        // Wait for fade out
        setTimeout(() => {
          setActiveStep(newStep);
          // Wait a bit for the new image to be ready
          setTimeout(() => {
            setImageLoaded(true);
            setAnimation(true);
            // Resume autoplay after 10 seconds
            const resumeTimeout = setTimeout(() => {
              setAutoPlay(true);
            }, 10000);
            return () => clearTimeout(resumeTimeout);
          }, 50);
        }, 200);
      };
    } else {
      // If no image to preload, just do the transition
      setAnimation(false);
      setImageLoaded(false);
      setAutoPlay(false);
      
      setTimeout(() => {
        setActiveStep(newStep);
        setTimeout(() => {
          setImageLoaded(true);
          setAnimation(true);
          // Resume autoplay after 10 seconds
          const resumeTimeout = setTimeout(() => {
            setAutoPlay(true);
          }, 10000);
          return () => clearTimeout(resumeTimeout);
        }, 50);
      }, 200);
    }
  }, [activeStep, steps]);

  const goToPreviousStep = useCallback(() => {
    if (activeStep > 0) {
      changeStep(activeStep - 1);
    }
  }, [activeStep, changeStep]);

  const goToNextStep = useCallback(() => {
    if (activeStep < steps.length - 1) {
      changeStep(activeStep + 1);
    }
  }, [activeStep, steps.length, changeStep]);

  const goToStep = useCallback((stepIndex) => {
    changeStep(stepIndex);
  }, [changeStep]);

  // Image loading handler
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoaded(true); // Still show content even if image fails
  }, []);

  const imageContainerStyle = useMemo(() => ({
    width: '100%',
    height: { xs: '300px', sm: '400px', md: '450px' },
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    backgroundColor: 'rgba(38, 77, 54, 0.03)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    p: 0
  }), []);

  const imageStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    opacity: imageLoaded ? 1 : 0,
    transform: imageLoaded ? 'scale(1)' : 'scale(1.02)',
    '&:hover': {
      transform: 'scale(1.02)'
    }
  }), [imageLoaded]);

  const prevButtonStyle = useMemo(() => ({
    position: 'absolute',
    left: { xs: -16, sm: -24 },
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    bgcolor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
    boxShadow: 2,
    color: activeStep === 0 ? 'gray' : theme.palette.primary.main
  }), [activeStep]);

  const nextButtonStyle = useMemo(() => ({
    position: 'absolute',
    right: { xs: -16, sm: -24 },
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    bgcolor: 'rgba(255, 255, 255, 0.8)',
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
    boxShadow: 2,
    color: activeStep === steps.length - 1 ? 'gray' : theme.palette.primary.main
  }), [activeStep, steps.length]);

  return (
    <Box sx={{ mb: 10 }}>
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Fade in={true} timeout={500}>
          <div>
            <Typography            
              variant="h3"            
              sx={{              
                color: theme.palette.primary.main,             
                fontSize: isMobile ? '1.5rem' : '2rem',             
                mb: 1
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.secondary.main,
                fontSize: isMobile ? '1rem' : '1.25rem',
                mb: 2
              }}
            >
              {description}
            </Typography>
            {badge && (
              <Chip
                label={badge}
                sx={{
                  bgcolor: theme.palette.customColors.accentGreen,
                  color: 'white',
                  fontWeight: 'bold'
                }}
              />
            )}
          </div>
        </Fade>
      </Box>

      {/* Step counter display */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography          
          variant="h6"          
          sx={{            
            color: theme.palette.primary.main,           
            fontWeight: 'bold'
          }}
        >
          Step {activeStep + 1} of {steps.length}
        </Typography>
      </Box>

      {/* Main content with side-by-side layout */}
      <Box sx={{ position: 'relative' }}>
        {/* Navigation buttons */}
        <IconButton         
          onClick={goToPreviousStep}         
          disabled={activeStep === 0}         
          sx={prevButtonStyle}         
          aria-label="Previous step"
        >
          <ChevronLeft size={24} />
        </IconButton>

        <IconButton         
          onClick={goToNextStep}         
          disabled={activeStep === steps.length - 1}         
          sx={nextButtonStyle}         
          aria-label="Next step"
        >
          <ChevronRight size={24} />
        </IconButton>

        {/* Content with improved fade transition */}
        <Fade in={animation && imageLoaded} timeout={300}>
          <Box>
            {/* Side-by-side container */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: '4%' },
              alignItems: { xs: 'stretch', md: 'flex-start' }
            }}>
              {/* Image Section - Left side */}
              <Box sx={{ 
                width: { xs: '100%', md: '48%' },
                position: 'relative'
              }}>
                <Box sx={{
                  ...imageContainerStyle,
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: imageLoaded ? 1 : 0
                }}>
                  {!imageLoaded && (
                    <CircularProgress
                      sx={{
                        color: theme.palette.primary.main,
                        position: 'absolute',
                        zIndex: 1
                      }}
                    />
                  )}
                  {currentStep.imageUrl && !currentStep.imageUrl.includes('placeholder') ? (
                    <Box
                      component="img"
                      src={currentStep.imageUrl}
                      alt={currentStep.imageAlt || "Process step image"}
                      sx={imageStyle}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                  ) : (
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        opacity: 0.6
                      }}
                      onLoad={() => setImageLoaded(true)}
                    >
                      {currentStep.title} Visualization
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Content Section - Right side */}
              <Box sx={{ 
                width: { xs: '100%', md: '48%' },
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.palette.primary.main,
                    mb: 1,
                    fontFamily: 'Lato, sans-serif',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                  }}
                >
                  {currentStep.title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.primary.main,
                    mb: 2,
                    fontWeight: 'bold'
                  }}
                >
                  {currentStep.subtitle}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.secondary.main,
                    mb: 3,
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  {currentStep.description}
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

                  {currentStep.facts.map((fact, i) => (
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
                          mr: 1,
                          flexShrink: 0
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        color={theme.palette.primary.main}
                        sx={{ fontSize: { xs: '0.85rem', sm: '0.9rem' } }}
                      >
                        {fact}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
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
        {steps.map((_, index) => (         
          <Box           
            key={index}           
            onClick={() => goToStep(index)}           
            sx={{             
              width: 12,             
              height: 12,             
              borderRadius: '50%',             
              bgcolor: activeStep === index                 ? theme.palette.primary.main                 : theme.palette.customColors.lightGold,             
              mx: 0.5,             
              cursor: 'pointer',             
              transition: 'all 0.3s ease',             
              '&:hover': {               
                transform: 'scale(1.2)',               
                bgcolor: activeStep === index                   ? theme.palette.primary.main                   : theme.palette.customColors.accentGreen              }            }}           
            role="button"           
            aria-label={`Go to step ${index + 1}`}           
            tabIndex={0}         
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
              backgroundColor: 'rgba(58, 107, 61, 0.04)'            }          }}        >          Previous        </Button>               
        <Button          
          variant="contained"         
          disabled={activeStep === steps.length - 1}         
          onClick={goToNextStep}         
          sx={{            
            bgcolor: theme.palette.customColors.accentGreen,           
            minWidth: 120,           
            '&:hover': {             
              bgcolor: theme.palette.secondary.main,            }          }}        >          Next        </Button>     
      </Box>   
    </Box> 
  );};

// Custom window width hook for better reusability
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowWidth;
}

// The main peanut journey page component
const PeanutJourneyPage = () => {
  // State declarations
  const [loading, setLoading] = useState(true);
  
  // Use the custom hook for window width
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 600;
  
  // Loading simulation with shorter timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Reduced from 800ms
    return () => clearTimeout(timer);
  }, []);

  // Memoize the Process Viewer components
  const farmingViewer = useMemo(() => (
    <ProcessViewer 
      steps={FARMING_STEPS} 
      title="Peanut Farming Process" 
      description="Sustainable cultivation from soil to harvest"
    />
  ), []);

  const processingViewer = useMemo(() => (
    <ProcessViewer 
      steps={PROCESSING_STEPS} 
      title="Peanut Processing System" 
      description="Quality transformation from raw kernels to market-ready products"
    />
  ), []);

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
    <Box 
      component="main"
      sx={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        pt: 6,
        pb: 8,
        '& .MuiTypography-root': {
          fontFamily: 'Lato, sans-serif',
        },
        '& .journey-content': {
          '& .MuiTypography-body1, & .MuiTypography-body2': {
            fontFamily: 'Inter, sans-serif',
          }
        }
      }}
    >
      <SEO 
        title="Peanut Journey | From Farming to Premium Processing" 
        description="Discover our complete peanut journey from farming practices to state-of-the-art processing. Experience our commitment to quality from farm to table."
      />
      
      <Container maxWidth="lg" className="journey-content">
        {/* Header Section */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: theme.palette.primary.main,
                fontSize: isMobile ? '2rem' : '2.5rem',
                mb: 2,
                fontFamily: 'inherit'
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
                mb: 4,
                fontFamily: 'inherit'
              }}
            >
              From farming to premium processing - ensuring quality at every step
            </Typography>
          </Box>
        </Fade>

        {/* Farming Process Section */}
        <Box id="farming-section">
          {farmingViewer}
          
          {/* Process Summary */}
          <Fade in={true} timeout={1000}>
            <Box sx={{ mt: 4, mb: 8, textAlign: 'center', p: 3, bgcolor: 'rgba(38, 77, 54, 0.08)', borderRadius: 2 }}>
              <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2 }}>
                Balaji Exports - Organic and Trusted
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.primary.main, maxWidth: '800px', mx: 'auto' }}>
                Balaji Exports has built a reputation over the years for growing peanuts organically, without the use of harmful chemicals. We use natural soil enrichers, eco-friendly pest control methods, and sustainable farming techniques. This not only protects consumer health but also nurtures the soil for future generations. Our groundnuts are chemical-free, rich in flavor and nutrition, and grown sustainably with respect for the environment.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Divider */}
        <Box 
          sx={{ 
            height: 2, 
            bgcolor: theme.palette.primary.main, 
            opacity: 0.3, 
            width: '70%', 
            mx: 'auto',
            my: 8 
          }} 
        />

        {/* Processing Section */}
        <Box id="processing-section">
          {processingViewer}
          
          {/* Process Summary */}
          <Fade in={true} timeout={1000}>
            <Box sx={{ mt: 4, textAlign: 'center', p: 3, bgcolor: 'rgba(38, 77, 54, 0.08)', borderRadius: 2 }}>
              <Typography variant="h5" sx={{ color: theme.palette.primary.main, mb: 2 }}>
                Quality Assurance Throughout the Process
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.primary.main, maxWidth: '800px', mx: 'auto' }}>
                Our comprehensive 9-step process ensures that every peanut that leaves our facility meets the highest standards of quality and safety. From initial inspection to final packaging, we maintain strict controls to deliver premium products to our customers around the world.
              </Typography>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
};

export default PeanutJourneyPage;