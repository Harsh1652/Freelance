"use client";

import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = 'India-Singapore Agricultural Trade | Peanut Exports';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover the growing agricultural trade between India and Singapore with a special focus on peanut exports, trade statistics, and business opportunities.');
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function SingaporeBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>India-Singapore Agricultural Trade | Peanut Exports</title>
        <meta name="description" content="Discover the growing agricultural trade between India and Singapore with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="keywords" content="Singapore peanut market 2024, Indian peanut exports Singapore, groundnut import Singapore, peanut butter market Singapore, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/singapore" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="India-Singapore Agricultural Trade | Peanut Exports" />
        <meta property="og:description" content="Discover the growing agricultural trade between India and Singapore with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta property="og:url" content="https://balajiexports.com/blogs/singapore" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/singapore-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="India-Singapore Agricultural Trade | Peanut Exports" />
        <meta name="twitter:description" content="Discover the growing agricultural trade between India and Singapore with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="twitter:image" content="https://balajiexports.com/images/singapore-peanut-market-twitter.jpg" />
      </Head>
      <Box sx={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        pt: { xs: 4, md: 6 },
        pb: 8
      }}>
        <SEO />
        <Container maxWidth="md">
          {/* Blog Content */}
          <div className="blog-content">
            {/* Blog Header */}
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h2" 
                component="h1"
                sx={{
                  background: theme.customGradients.greenDark,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                SINGAPORE
              </Typography>
              <Typography 
                variant="h4"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  mb: 4
                }}
              >
                Agriculture Trade Between India and Singapore: A Growing Partnership in Peanut Exports
              </Typography>
            </Box>

            {/* Introduction */}
            <Typography 
              variant="body1"
              sx={{
                color: theme.palette.secondary.main,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 5,
                fontFamily: 'Inter, sans-serif'
              }}
            >
              India and Singapore share a strong and evolving trade relationship, particularly in the agriculture sector. With India being one of the largest producers and exporters of agricultural commodities, and Singapore acting as a strategic trade hub in Southeast Asia, both nations are actively increasing collaboration in agri-trade. Among the most promising segments in this bilateral relationship is the peanut trade, which has seen consistent growth in recent years.
            </Typography>

            {/* Trade Overview Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Overview of Agriculture Trade Between India and Singapore
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Agricultural trade between India and Singapore is growing steadily, driven by mutual interests in food security, quality produce, and diversified supply chains. India exports a wide range of agricultural products to Singapore, including:
              </Typography>

              {/* Trade Cards Section */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 2 }}>
                <Box sx={{ flex: '0 0 100%', width: '100%' }}>
                  {/* Exports Card */}
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 3,
                      background: theme.customGradients.greenDark,
                      borderRadius: 2,
                      height: '100%',
                      mb: { xs: 3, md: 0 }
                    }}
                  >
                    <Typography 
                      variant="h6"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        fontFamily: 'Lato, sans-serif',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      Key Agricultural Exports from India to Singapore
                    </Typography>
                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 2
                    }}>
                      <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold, m: 0 }}>
                        <Box component="li" sx={{ mb: 1 }}>Spices</Box>
                        <Box component="li" sx={{ mb: 1 }}>Fruits and vegetables</Box>
                        <Box component="li" sx={{ mb: 1 }}>Rice</Box>
                      </Box>
                      <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold, m: 0 }}>
                        <Box component="li" sx={{ mb: 1 }}>Pulses</Box>
                        <Box component="li" sx={{ mb: 1 }}>Edible oils</Box>
                        <Box component="li" sx={{ mb: 1 }}>Groundnuts (peanuts)</Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
              
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mt: 4,
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                In 2023, India's agricultural exports to Singapore crossed USD 600 million, with groundnuts being among the top items due to their nutritional value, long shelf life, and diverse applications in food processing, snacks, and oil extraction.
              </Typography>
            </Box>

            {/* Peanut Demand Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                The Rising Demand for Indian Peanuts in Singapore
              </Typography>
                
              <Typography 
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Why Peanuts?
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Peanuts, also known as groundnuts, are a significant export commodity for India. Rich in protein, healthy fats, and fiber, peanuts are used in:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Peanut butter</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Peanut oil</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Snack products</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Health bars</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Confectionery</Box>
              </Box>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Singapore's food industry and re-export market make it a prime destination for high-quality Indian peanuts.
              </Typography>
            </Box>

            {/* Peanut Varieties Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Varieties and Types of Peanuts Exported from India
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                India exports several varieties of peanuts that are in demand globally, especially in Southeast Asian markets like Singapore:
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 3,
                      background: theme.customGradients.greenDark,
                      borderRadius: 2,
                      mb: 2,
                      height: '100%'
                    }}
                  >
                    <Typography 
                      variant="h6"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        fontFamily: 'Lato, sans-serif',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      1. Bold Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Size: Large kernels</Box>
                      <Box component="li" sx={{ mb: 1 }}>Color: Light reddish-brown</Box>
                      <Box component="li" sx={{ mb: 1 }}>Oil content: 45-49%</Box>
                      <Box component="li" sx={{ mb: 1 }}>Use: Snack foods, roasting</Box>
                    </Box>
                  </Paper>
                </Box>

                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 3,
                      background: theme.customGradients.greenDark,
                      borderRadius: 2,
                      mb: 2,
                      height: '100%'
                    }}
                  >
                    <Typography 
                      variant="h6"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        fontFamily: 'Lato, sans-serif',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      2. Java Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Size: Small to medium kernels</Box>
                      <Box component="li" sx={{ mb: 1 }}>Color: Pinkish</Box>
                      <Box component="li" sx={{ mb: 1 }}>Oil content: 40-45%</Box>
                      <Box component="li" sx={{ mb: 1 }}>Use: Confectionery, peanut butter</Box>
                    </Box>
                  </Paper>
                </Box>
                
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 3,
                      background: theme.customGradients.greenDark,
                      borderRadius: 2,
                      mb: { xs: 2, md: 0 },
                      height: '100%'
                    }}
                  >
                    <Typography 
                      variant="h6"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        fontFamily: 'Lato, sans-serif',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      3. TJ Peanuts (Java Type)
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Size: Tiny Java kernels</Box>
                      <Box component="li" sx={{ mb: 1 }}>Popular in: Southeast Asian snack industry</Box>
                      <Box component="li" sx={{ mb: 1 }}>Use: Roasted & salted snacks</Box>
                    </Box>
                  </Paper>
                </Box>
                
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 3,
                      background: theme.customGradients.greenDark,
                      borderRadius: 2,
                      mb: { xs: 2, md: 0 },
                      height: '100%'
                    }}
                  >
                    <Typography 
                      variant="h6"
                      sx={{
                        color: theme.palette.customColors.lightGold,
                        fontFamily: 'Lato, sans-serif',
                        mb: 2,
                        fontWeight: 600
                      }}
                    >
                      4. Red Skin Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Known for their antioxidant-rich skin</Box>
                      <Box component="li" sx={{ mb: 1 }}>Used in health food products and natural peanut butter</Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Trade Data Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Peanut Export from India to Singapore: Trade Data and Growth
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                The peanut trade between India and Singapore has shown consistent growth, with India being one of the top peanut suppliers to Singapore.
              </Typography>
              
              <Paper
                elevation={0}
                sx={{ 
                  p: 3,
                  background: theme.customGradients.greenDark,
                  borderRadius: 2,
                  mb: 4
                }}
              >
                <Typography 
                  variant="h6"
                  sx={{
                    color: theme.palette.customColors.lightGold,
                    fontFamily: 'Lato, sans-serif',
                    mb: 2,
                    fontWeight: 600
                  }}
                >
                  Key Peanut Export Facts (2023–24)
                </Typography>
                <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                  <Box component="li" sx={{ mb: 1 }}>Total groundnut exports from India: Over 750,000 MT</Box>
                  <Box component="li" sx={{ mb: 1 }}>Peanut exports to Singapore: Approx. 12,000 MT in 2023</Box>
                  <Box component="li" sx={{ mb: 1 }}>Growth rate: Over 15% YoY growth in peanut shipments to Singapore</Box>
                  <Box component="li" sx={{ mb: 1 }}>Major ports of export: Mundra, Pipavav, Chennai</Box>
                  <Box component="li" sx={{ mb: 1 }}>Primary destinations: Food manufacturing companies, snack processors, re-exporters</Box>
                </Box>
              </Paper>
              
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 2,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                This growth is fueled by:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Increasing demand for healthy snacking</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Singapore's strong re-export ecosystem to countries like Malaysia, Indonesia, and Hong Kong</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>India's competitive pricing and consistent quality</Box>
              </Box>
            </Box>

            {/* Opportunities Section */}
            <Box sx={{ mb: 5 }}>
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Opportunities for Indian Peanut Exporters
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                With rising demand for plant-based protein and natural snacks in Singapore, Indian exporters have a strong opportunity to increase market share. Key strategies include:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  Offering value-added peanut products like roasted peanuts, blanched peanuts, and peanut flour
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  Custom packaging solutions for retail and bulk buyers
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  Ensuring quality certifications such as FSSAI, APEDA, HACCP, and SGS inspection for credibility
                </Box>
              </Box>
            </Box>

            {/* Conclusion */}
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                Conclusion
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                The agriculture trade between India and Singapore is a testament to growing economic cooperation. Peanuts, in particular, are a rising star in this relationship. With high-quality varieties like Bold and Java, India is well-positioned to meet Singapore's demand for nutritious, versatile, and affordable groundnuts.
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                For peanut exporters in India, Singapore represents not just a destination, but a gateway to Southeast Asia. With the right trade partnerships, certifications, and logistics, this corridor can drive long-term agricultural success.
              </Typography>
            </Box>
          </div>

          {/* Call to Action */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 4,
              background: theme.customGradients.greenDark,
              borderRadius: 2,
              textAlign: 'center',
              mt: 6
            }}
          >
            <Typography 
              variant="h5"
              sx={{
                color: theme.palette.customColors.lightGold,
                fontFamily: 'Lato, sans-serif',
                mb: 3
              }}
            >
              Interested in sourcing premium peanuts for the Singapore market?
            </Typography>
            <Box
              component="a"
              href="/#products"
              sx={{
                display: 'inline-block',
                backgroundColor: theme.palette.background.default,
                color: theme.palette.primary.main,
                padding: '12px 30px',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                textDecoration: 'none',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.customColors.lightGold,
                  transform: 'translateY(-2px)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Explore Our Product Range
            </Box>
          </Paper>
        </Container>
        <BreadcrumbsBlog country="Singapore" />
      </Box>
    </>
  );
} 