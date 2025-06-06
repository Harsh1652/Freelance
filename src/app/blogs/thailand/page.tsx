"use client";

import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = 'India-Thailand Agricultural Trade | Peanut Exports';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover the growing agricultural trade between India and Thailand with a special focus on peanut exports, trade statistics, and business opportunities.');
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function ThailandBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>India-Thailand Agricultural Trade | Peanut Exports</title>
        <meta name="description" content="Discover the growing agricultural trade between India and Thailand with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="keywords" content="Thailand peanut market 2024, Indian peanut exports Thailand, groundnut import Thailand, peanut butter market Thailand, Bold peanuts, Java peanuts, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/thailand" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="India-Thailand Agricultural Trade | Peanut Exports" />
        <meta property="og:description" content="Discover the growing agricultural trade between India and Thailand with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta property="og:url" content="https://balajiexports.com/blogs/thailand" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/thailand-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="India-Thailand Agricultural Trade | Peanut Exports" />
        <meta name="twitter:description" content="Discover the growing agricultural trade between India and Thailand with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="twitter:image" content="https://balajiexports.com/images/thailand-peanut-market-twitter.jpg" />
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
                THAILAND
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
                Agriculture Trade Between India and Thailand: A Growing Partnership with a Focus on Peanut Exports
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
              The agriculture trade between India and Thailand has seen consistent growth in recent years, driven by mutual interests in boosting bilateral trade, food security, and agri-based economic development. Among various agricultural commodities, peanut exports from India to Thailand have emerged as a high-potential trade segment due to rising demand in Thailand's food and processing industries.
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
              In this blog, we explore the scope, statistics, and key highlights of the India-Thailand agricultural trade, with a special focus on peanut varieties, types, trade volume, and the growth of peanut exports.
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
                India-Thailand Agriculture Trade Overview
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
                India and Thailand share a long-standing trade relationship rooted in shared cultural ties and strategic economic cooperation. According to the Ministry of Commerce and Industry, Government of India, bilateral trade between the two countries was valued at over $17 billion in FY 2023, with agriculture playing a vital role.
              </Typography>

              {/* Trade Cards Section */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 2 }}>
                <Box sx={{ flex: '0 0 48%', width: { xs: '100%', md: '48%' } }}>
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
                      Key Agricultural Exports from India to Thailand
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Peanuts (Groundnuts)</Box>
                      <Box component="li" sx={{ mb: 1 }}>Maize</Box>
                      <Box component="li" sx={{ mb: 1 }}>Rice</Box>
                      <Box component="li" sx={{ mb: 1 }}>Fresh fruits (mangoes, bananas, grapes)</Box>
                      <Box component="li" sx={{ mb: 1 }}>Spices (turmeric, cumin, chili)</Box>
                      <Box component="li" sx={{ mb: 1 }}>Pulses and lentils</Box>
                    </Box>
                  </Paper>
                </Box>
                
                <Box sx={{ flex: '0 0 48%', width: { xs: '100%', md: '48%' } }}>
                  {/* Imports Card */}
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 3,
                      background: theme.customGradients.greenDark,
                      borderRadius: 2,
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
                      Key Agricultural Imports by India from Thailand
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Tapioca starch</Box>
                      <Box component="li" sx={{ mb: 1 }}>Processed fruits</Box>
                      <Box component="li" sx={{ mb: 1 }}>Palm oil</Box>
                      <Box component="li" sx={{ mb: 1 }}>Natural rubber</Box>
                      <Box component="li" sx={{ mb: 1 }}>Animal feed ingredients</Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Peanut Trade Section */}
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
                Peanut Trade Between India and Thailand
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
                Rising Demand for Indian Peanuts
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
                Thailand's growing food processing, snacking, and oil industries have led to increased demand for high-quality Indian peanuts. India is one of the largest producers and exporters of groundnuts globally and has become a preferred supplier for Thailand due to its competitive pricing and consistent quality.
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
                Quantity and Trade Growth
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
                In FY 2023-24, India exported approximately 75,000 metric tonnes of peanuts to Thailand, valued at over $85 million, marking a 15% increase from the previous fiscal year. The positive trade trend is expected to continue, driven by Thailand's need for raw peanuts for:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Peanut butter production</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Roasted snacks</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Edible peanut oil</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Peanut-based confectionery</Box>
              </Box>
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
                Types and Varieties of Indian Peanuts Exported to Thailand
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
                India exports various types of peanuts to Thailand, catering to different industrial and culinary uses. These include:
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
                      1. Bold Peanuts (Runner Type)
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Large kernels with reddish-brown skin</Box>
                      <Box component="li" sx={{ mb: 1 }}>Preferred for roasting and snack industries</Box>
                      <Box component="li" sx={{ mb: 1 }}>Oil content: ~48–50%</Box>
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
                      2. Java Peanuts (Spanish Type)
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Smaller size, pinkish kernels</Box>
                      <Box component="li" sx={{ mb: 1 }}>High oil content</Box>
                      <Box component="li" sx={{ mb: 1 }}>Used in confectionery and peanut butter</Box>
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
                      3. Red Skin Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Popular for peanut bars and salted snack applications</Box>
                      <Box component="li" sx={{ mb: 1 }}>High in protein and antioxidants</Box>
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
                      4. Blanched Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Skin removed for easy use in processing industries</Box>
                      <Box component="li" sx={{ mb: 1 }}>Clean, white kernels used in premium snack products</Box>
                    </Box>
                  </Paper>
                </Box>
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
                Opportunities and Future Growth Potential
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
                Why Thailand Prefers Indian Peanuts
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Competitive Prices</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Reliable Quality</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Wide Variety Options</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Availability in Bulk Quantities</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Export-Ready Processing Facilities in India</Box>
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
                With Thailand increasing investments in its food processing sector, the demand for Indian groundnuts is set to grow further. India, being the second-largest peanut producer globally, has the capacity to meet this rising demand through improved agricultural practices, storage, and logistics.
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
                Government Support
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
                Both governments have shown commitment to enhancing agri-trade. India's APEDA (Agricultural and Processed Food Products Export Development Authority) actively supports exporters in meeting Thailand's quality and phytosanitary standards.
              </Typography>
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
                The agricultural trade between India and Thailand presents a dynamic and expanding landscape, especially in the peanut export sector. With multiple varieties like Bold, Java, and Blanched peanuts, and increasing bilateral trade volumes, India is well-positioned to be Thailand's key agri-trade partner.
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
              Interested in sourcing premium peanuts for the Thai market?
            </Typography>
            <Button
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
            </Button>
          </Paper>
        </Container>
        <BreadcrumbsBlog country="Thailand" />
      </Box>
    </>
  );
}