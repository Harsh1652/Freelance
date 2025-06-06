"use client";

import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = 'India-China Agricultural Trade | Peanut Exports';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover the growing agricultural trade between India and China with a special focus on peanut exports, trade statistics, and business opportunities.');
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function ChinaBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>India-China Agricultural Trade | Peanut Exports</title>
        <meta name="description" content="Discover the growing agricultural trade between India and China with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="keywords" content="China peanut market 2024, Indian peanut exports China, groundnut import China, peanut butter market China, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/china" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="India-China Agricultural Trade | Peanut Exports" />
        <meta property="og:description" content="Discover the growing agricultural trade between India and China with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta property="og:url" content="https://balajiexports.com/blogs/china" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/china-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="India-China Agricultural Trade | Peanut Exports" />
        <meta name="twitter:description" content="Discover the growing agricultural trade between India and China with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="twitter:image" content="https://balajiexports.com/images/china-peanut-market-twitter.jpg" />
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
                CHINA
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
                Agriculture Trade Between India and China: A Rising Opportunity for Peanut Exports
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
              In recent years, the agriculture trade between India and China has witnessed notable growth, driven by mutual economic interests and changing food consumption patterns. India, known for its rich agricultural base, has been exporting a wide range of agri-products to China, including peanuts, soybeans, spices, rice, and cotton. Among these, the peanut trade between India and China has seen remarkable development, both in terms of volume and value.
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
                India-China Agriculture Trade: An Overview
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
                India and China are two of the world's largest agricultural producers and consumers. While China has been a dominant importer of food and agri-commodities, India has emerged as a key exporter, offering competitive pricing, high-quality products, and a growing focus on international trade standards.
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
                In FY 2023–24, the agriculture trade between India and China crossed $8 billion, with India exporting commodities like oilseeds, fresh fruits, vegetables, spices, and nuts. Among these, groundnuts (peanuts) have emerged as a high-potential category, driven by demand in the snack, oil, and confectionery industries in China.
              </Typography>
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
                The Rise of Peanut Trade Between India and China
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
                Peanuts, also known as groundnuts, have become one of the major agricultural exports from India to China. India is the second-largest producer of peanuts globally and offers a wide variety suited for different purposes like edible consumption, oil extraction, and industrial use.
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
                  Key Peanut Export Statistics:
                </Typography>
                <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                  <Box component="li" sx={{ mb: 1 }}>In 2023, India exported over 200,000 metric tons of peanuts to China.</Box>
                  <Box component="li" sx={{ mb: 1 }}>This marked a 30% increase compared to the previous year.</Box>
                  <Box component="li" sx={{ mb: 1 }}>The total export value of peanuts to China crossed $150 million, reflecting growing demand.</Box>
                  <Box component="li" sx={{ mb: 1 }}>China's preference for high oil content and uniform kernel size has made Indian peanuts an ideal choice, especially from regions like Gujarat, Rajasthan, and Andhra Pradesh.</Box>
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
                India cultivates a wide range of peanut varieties suited for export markets:
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
                      1. Bold Peanuts (Virginia Type)
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Large kernels</Box>
                      <Box component="li" sx={{ mb: 1 }}>Preferred for edible consumption</Box>
                      <Box component="li" sx={{ mb: 1 }}>High oil content (48–50%)</Box>
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
                      <Box component="li" sx={{ mb: 1 }}>Small to medium size</Box>
                      <Box component="li" sx={{ mb: 1 }}>High in protein and oil</Box>
                      <Box component="li" sx={{ mb: 1 }}>Popular for snack and confectionery use</Box>
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
                      3. TJ Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Known for uniform size and light pink skin</Box>
                      <Box component="li" sx={{ mb: 1 }}>High shelf life</Box>
                      <Box component="li" sx={{ mb: 1 }}>Ideal for roasting and snacking</Box>
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
                      4. Redskin Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Deep red kernels</Box>
                      <Box component="li" sx={{ mb: 1 }}>High antioxidant content</Box>
                      <Box component="li" sx={{ mb: 1 }}>Used in traditional Chinese medicine and snack mixes</Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Growth Drivers Section */}
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
                Growth Drivers of Peanut Trade Between India and China
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
                Several factors are contributing to the upward trend in India-China peanut exports:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  <strong>Growing Health Awareness:</strong> Chinese consumers are increasingly switching to plant-based proteins, making peanuts a preferred option.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  <strong>Competitive Pricing:</strong> Indian peanuts offer better value due to lower cultivation and processing costs.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  <strong>Trade Agreements & Tariff Benefits:</strong> India enjoys a favorable position in peanut exports due to low import duties imposed by China on agricultural products.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  <strong>Improved Logistics:</strong> Development of containerized shipping and direct trade routes between Indian ports and Chinese provinces like Guangdong and Shandong.
                </Box>
              </Box>
            </Box>

            {/* Challenges Section */}
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
                Challenges and Opportunities
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
                Despite the growth, challenges remain such as:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Strict Quality Standards by Chinese customs authorities</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Aflatoxin Limits in edible peanuts</Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>Currency fluctuation affecting trade margins</Box>
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
                However, Indian exporters are improving quality control, investing in BRC and HACCP-certified processing units, and leveraging technology to meet export specifications.
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
                The agricultural trade between India and China, especially in the peanut segment, is poised for sustained growth in the coming years. With strong bilateral relations, rising demand, and improving infrastructure, India has a significant opportunity to expand its groundnut exports to China.
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
                Exporters, traders, and investors in both countries should closely monitor this evolving trade partnership, explore direct procurement models, and focus on value-added peanut products like roasted kernels, peanut oil, and flavored snacks for higher margins.
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
              Interested in sourcing premium peanuts for the Chinese market?
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
        <BreadcrumbsBlog country="China" />
      </Box>
    </>
  );
} 