"use client";

import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = 'India-Russia Agricultural Trade | Peanut Exports';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover the growing agricultural trade between India and Russia with a special focus on peanut exports, trade statistics, and business opportunities.');
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function RussiaBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>India-Russia Agricultural Trade | Peanut Exports</title>
        <meta name="description" content="Discover the growing agricultural trade between India and Russia with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="keywords" content="Russia peanut market 2024, Indian peanut exports Russia, groundnut import Russia, peanut butter market Russia, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/russia" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="India-Russia Agricultural Trade | Peanut Exports" />
        <meta property="og:description" content="Discover the growing agricultural trade between India and Russia with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta property="og:url" content="https://balajiexports.com/blogs/russia" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/russia-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="India-Russia Agricultural Trade | Peanut Exports" />
        <meta name="twitter:description" content="Discover the growing agricultural trade between India and Russia with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="twitter:image" content="https://balajiexports.com/images/russia-peanut-market-twitter.jpg" />
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
                RUSSIA
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
                India-Russia Agriculture Trade: A Growing Opportunity with a Focus on Peanuts
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
              The agriculture trade between India and Russia has seen consistent growth over the past few years, driven by both countries' strategic efforts to strengthen bilateral relations. While energy and defense have traditionally dominated India-Russia trade, agriculture and food products are emerging as high-potential sectors. Among these, peanuts have become a significant commodity, with India being one of the world's largest producers and exporters.
            </Typography>
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
              This blog explores the trends, trade volumes, and prospects of agricultural trade—particularly the peanut trade between India and Russia—while highlighting varieties of peanuts, market demand, and the potential for future expansion.
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
                India-Russia Agriculture Trade: An Overview
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
                India and Russia have shared a strong diplomatic and economic relationship for decades. In recent years, agriculture has become a central pillar of this partnership. According to the Ministry of Commerce and Industry of India, bilateral trade between India and Russia touched $65 billion in 2023, with agriculture forming a steadily growing segment.
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
                      Key Indian agricultural exports to Russia:
                    </Typography>
                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: 2
                    }}>
                      <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold, m: 0 }}>
                        <Box component="li" sx={{ mb: 1 }}>Peanuts</Box>
                        <Box component="li" sx={{ mb: 1 }}>Tea and Coffee</Box>
                        <Box component="li" sx={{ mb: 1 }}>Spices</Box>
                      </Box>
                      <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold, m: 0 }}>
                        <Box component="li" sx={{ mb: 1 }}>Rice</Box>
                        <Box component="li" sx={{ mb: 1 }}>Fruits and Vegetables</Box>
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
                Meanwhile, India imports sunflower oil, fertilizers, and wheat from Russia, creating a complementary trade balance.
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
                Peanut Trade Between India and Russia: Rising Demand
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
                India is the second-largest producer of peanuts globally, and Russia is emerging as a promising market due to increasing demand for plant-based proteins, edible oil, and snack-grade peanuts.
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
                  Growth in Peanut Exports
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{
                    color: theme.palette.customColors.lightGold,
                    mb: 2
                  }}
                >
                  As per APEDA (Agricultural and Processed Food Products Export Development Authority), India exported over 650,000 metric tons of peanuts globally in 2023. Russia's share in Indian peanut exports has steadily risen, reaching over 35,000 metric tons in 2023—up by nearly 28% from the previous year.
                </Typography>
              </Paper>
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
                  Why Russia is Buying More Indian Peanuts:
                </Typography>
                <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                  <Box component="li" sx={{ mb: 1 }}>Competitive pricing</Box>
                  <Box component="li" sx={{ mb: 1 }}>High oil content and quality</Box>
                  <Box component="li" sx={{ mb: 1 }}>Strong shelf life for processed peanuts</Box>
                  <Box component="li" sx={{ mb: 1 }}>Russia's growing peanut butter and confectionery industry</Box>
                  <Box component="li" sx={{ mb: 1 }}>Reduced imports from other nations due to geopolitical issues</Box>
                </Box>
              </Paper>
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
                Types and Varieties of Peanuts Exported from India
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
                India offers a wide range of peanut varieties catering to different needs—be it for edible consumption, oil extraction, or snack processing.
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
                  Popular Peanut Varieties:
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.customColors.lightGold,
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Bold (Runner) Peanuts
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: theme.palette.customColors.lightGold }}>
                    <Box component="li" sx={{ mb: 0.5 }}>Large kernels</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>High oil content</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>Ideal for peanut butter and roasting</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>Size: 40/50, 50/60, 60/70 counts per ounce</Box>
                  </Box>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.customColors.lightGold,
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Java Peanuts
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: theme.palette.customColors.lightGold }}>
                    <Box component="li" sx={{ mb: 0.5 }}>Smaller kernels</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>Sweeter taste</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>Popular in confectionery and snacks</Box>
                  </Box>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.customColors.lightGold,
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    TJ (Java Type) Peanuts
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: theme.palette.customColors.lightGold }}>
                    <Box component="li" sx={{ mb: 0.5 }}>Hybrid variant of Java</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>Spherical shape</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>High protein value</Box>
                  </Box>
                </Box>
                <Box>
                  <Typography 
                    variant="subtitle1"
                    sx={{
                      color: theme.palette.customColors.lightGold,
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Red Skin Peanuts (Spanish Type)
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, color: theme.palette.customColors.lightGold }}>
                    <Box component="li" sx={{ mb: 0.5 }}>High oil content</Box>
                    <Box component="li" sx={{ mb: 0.5 }}>Used in oil crushing and roasting</Box>
                  </Box>
                </Box>
              </Paper>
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
                These varieties are mostly sourced from Gujarat, Andhra Pradesh, Tamil Nadu, and Rajasthan, with Gujarat alone contributing over 40% of India's peanut production.
              </Typography>
            </Box>

            {/* Export Standards Section */}
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
                Export Standards and Certifications
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
                To ensure smooth trade, Indian peanut exporters comply with international standards, including:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>AFI (American Food Industries) Grade Standards</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>EU Pesticide Residue Limits</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>BRC, HACCP, and ISO certifications</Box>
              </Box>
            </Box>

            {/* Future Outlook */}
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
                Future Outlook: Strengthening India-Russia Peanut Trade
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
                India and Russia are actively working on trade corridor improvements like INSTC (International North-South Transport Corridor) which will reduce shipping time and costs. This makes Indian agricultural products—especially bulk commodities like peanuts—more attractive in the Russian market.
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
                Moreover, there's rising demand for organic and value-added peanut products such as:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Peanut Butter</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Roasted & Salted Peanuts</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Blanched Peanuts</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Peanut Oil</Box>
              </Box>
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
              Interested in sourcing premium peanuts for the Russian market?
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
        <BreadcrumbsBlog country="Russia" />
      </Box>
    </>
  );
} 