'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Import industrial solutions images
import cattleFieldImage from '@/assets/images/Home/IndutrySolutions/Cattle Field.jpg';
import cosmeticImage from '@/assets/images/Home/IndutrySolutions/cosmetic .jpg';
import peanutOilImage from '@/assets/images/Home/IndutrySolutions/Peanut Oil.jpg';
import snacksImage from '@/assets/images/Home/IndutrySolutions/Snacks.jpg';
import pharmaImage from '@/assets/images/Home/IndutrySolutions/pharma.jpg';

const solutions = [
  { 
    name: 'Cattle Feed Solutions', 
    path: '/solutions/cattle-feed',
    description: 'High-quality peanut-based cattle feed supplements for improved livestock nutrition.',
    src: cattleFieldImage,
    title: 'Cattle Feed Solutions',
    hoverInfo: 'Crushed peanut cake is a protein-rich, digestible feed for cattle. It boosts milk production and promotes animal health, making it a valuable by-product in sustainable livestock nutrition systems.'
  },
  { 
    name: 'Cosmetic Applications', 
    path: '/solutions/cosmetics',
    description: 'Natural peanut oil for cosmetic and skincare product manufacturing.',
    src: cosmeticImage,
    title: 'Cosmetic Applications',
    hoverInfo: 'Peanut oil is rich in vitamin E and antioxidants, making it ideal for skincare products. It moisturizes, soothes irritation, and helps prevent premature aging in natural cosmetic formulations.'
  },
  { 
    name: 'Peanut Oil Production', 
    path: '/solutions/oil-production',
    description: 'Pure, refined peanut oil for various industrial and culinary uses.',
    src: peanutOilImage,
    title: 'Peanut Oil Production',
    hoverInfo: 'Peanut oil, known for its high smoke point and mild flavor, is widely used in cooking. Its healthy fat profile also makes it a staple in edible oil manufacturing worldwide.'
  },
  { 
    name: 'Snack Manufacturing', 
    path: '/solutions/snack-manufacturing',
    description: 'Premium peanuts for snack and confectionery industry applications.',
    src: snacksImage,
    title: 'Snack Manufacturing',
    hoverInfo: 'Peanuts in snack manufacturing provide protein, healthy fats, and natural flavor. They are processed into roasted nuts, peanut butter, energy bars, and confectionery products for global markets.'
  },
  { 
    name: 'Pharmaceutical Industry', 
    path: '/solutions/pharmaceutical',
    description: 'Pure peanut extracts and compounds for pharmaceutical applications and drug development.',
    src: pharmaImage,
    title: 'Pharmaceutical Industry',
    hoverInfo: 'Peanut-derived oils serve as carriers in drug formulations. Their stability and non-reactive properties make them suitable for ointments, capsules, and topical applications in pharmaceutical manufacturing processes.'
  }
];

const IndustrialSolutions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive: 1 card on mobile, 2 on tablet, 3 on desktop
  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(solutions.length / cardsToShow);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 50);
  }, [totalSlides, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 50);
  }, [totalSlides, isTransitioning]);

  const getCurrentSlideItems = () => {
    const start = currentSlide * cardsToShow;
    return solutions.slice(start, start + cardsToShow);
  };

  // Auto-transition every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <Box sx={{ pt: 4, pb: 2, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography 
          variant={isMobile ? 'h4' : 'h3'}
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            mb: 4,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            position: 'relative',
            display: 'inline-block',
            left: '50%',
            transform: 'translateX(-50%)',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.customColors.accentGreen} 90%)`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: theme.palette.primary.main,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              background: theme.palette.customColors.lightGold,
            }
          }}
        >
          Industrial Solutions
        </Typography>
        <Box
          ref={carouselRef}
          sx={{ position: 'relative', maxWidth: { xs: '98%', sm: '90%', md: '80%' }, mx: 'auto', mt: 2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Navigation */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: -32,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.9)',
              color: theme.palette.primary.main,
              width: 36,
              height: 36,
              zIndex: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
              display: totalSlides > 1 ? 'flex' : 'none',
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              px: 2,
              perspective: '1000px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: 3,
                transform: isTransitioning
                  ? slideDirection === 'next'
                    ? 'rotateY(-60deg) scale(0.92)'
                    : 'rotateY(60deg) scale(0.92)'
                  : 'rotateY(0deg) scale(1)',
                opacity: isTransitioning ? 0.3 : 1,
                transition: 'transform 0.7s cubic-bezier(0.77,0,0.175,1), opacity 0.7s cubic-bezier(0.77,0,0.175,1)',
                transformStyle: 'preserve-3d',
              }}
              key={`slide-${currentSlide}`}
            >
              {getCurrentSlideItems().map((solution, idx) => {
                const globalIdx = currentSlide * cardsToShow + idx;
                return (
                  <Card
                    key={solution.title}
                    sx={{
                      minWidth: 220,
                      maxWidth: 320,
                      flex: 1,
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                      background: theme.palette.primary.main,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                      transition: 'transform 0.7s cubic-bezier(0.77,0,0.175,1), opacity 0.7s cubic-bezier(0.77,0,0.175,1)',
                      '&:hover': {
                        transform: 'translateY(-6px) scale(1.03)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
                      },
                    }}
                    onMouseEnter={() => setHoveredIdx(globalIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <Box sx={{ position: 'relative', height: 220, width: '100%' }}>
                      <Image
                        src={solution.src}
                        alt={solution.title}
                        fill
                        style={{ objectFit: 'cover', filter: hoveredIdx === globalIdx ? 'blur(3px)' : 'none', transition: 'filter 0.3s' }}
                      />
                      {hoveredIdx === globalIdx && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                          }}
                        >
                          <Box
                            sx={{
                              background: 'rgba(38, 77, 54, 0.85)',
                              color: '#fff',
                              borderRadius: 2,
                              px: 3,
                              py: 2,
                              maxWidth: '90%',
                              pointerEvents: 'auto',
                              boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#fff',
                                textAlign: 'center',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: { xs: '0.75rem', md: '0.85rem' },
                                lineHeight: 1.4,
                              }}
                            >
                              {solution.hoverInfo}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontFamily="Lato, sans-serif"
                        fontWeight={700}
                        color={theme.palette.customColors.darkGold}
                        sx={{ mb: 1, fontSize: { xs: '1rem', md: '1.1rem' }, textAlign: 'center' }}
                      >
                        {solution.title}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: -32,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255,255,255,0.9)',
              color: theme.palette.primary.main,
              width: 36,
              height: 36,
              zIndex: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,1)',
                transform: 'translateY(-50%) scale(1.1)',
              },
              transition: 'all 0.3s ease',
              display: totalSlides > 1 ? 'flex' : 'none',
            }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default IndustrialSolutions; 