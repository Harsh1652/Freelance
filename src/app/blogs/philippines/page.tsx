"use client";

import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = 'India-Philippines Agricultural Trade | Peanut Exports';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover the growing agricultural trade between India and the Philippines with a special focus on peanut exports, trade statistics, and business opportunities.');
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function PhilippinesBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>India-Philippines Agricultural Trade | Peanut Exports</title>
        <meta name="description" content="Discover the growing agricultural trade between India and the Philippines with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="keywords" content="Philippines peanut market 2024, Indian peanut exports Philippines, groundnut import Philippines, peanut butter market Philippines, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/philippines" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="India-Philippines Agricultural Trade | Peanut Exports" />
        <meta property="og:description" content="Discover the growing agricultural trade between India and the Philippines with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta property="og:url" content="https://balajiexports.com/blogs/philippines" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/philippines-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="India-Philippines Agricultural Trade | Peanut Exports" />
        <meta name="twitter:description" content="Discover the growing agricultural trade between India and the Philippines with a special focus on peanut exports, trade statistics, and business opportunities." />
        <meta name="twitter:image" content="https://balajiexports.com/images/philippines-peanut-market-twitter.jpg" />
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
                PHILIPPINES
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
                Agriculture Trade Between India and the Philippines: A Growing Opportunity with a Focus on Peanut Exports
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
              India and the Philippines have witnessed significant growth in agriculture trade in recent years, driven by mutual interests in food security, raw material exchange, and economic cooperation. Among the various commodities traded, peanuts have emerged as a potential product of focus due to rising demand in the Philippines for both edible consumption and industrial processing.
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
                India-Philippines Agriculture Trade: An Overview
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
                The bilateral trade between India and the Philippines has expanded steadily, especially in the agro-sector. India, known for its diverse agro-climatic zones and agricultural expertise, exports a wide range of products such as:
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
                      Key Agricultural Exports from India to Philippines
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Rice</Box>
                      <Box component="li" sx={{ mb: 1 }}>Spices</Box>
                      <Box component="li" sx={{ mb: 1 }}>Pulses</Box>
                      <Box component="li" sx={{ mb: 1 }}>Fruits & vegetables</Box>
                      <Box component="li" sx={{ mb: 1 }}>Groundnuts (peanuts)</Box>
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
                      Key Agricultural Imports by India from Philippines
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Banana</Box>
                      <Box component="li" sx={{ mb: 1 }}>Coconut oil</Box>
                      <Box component="li" sx={{ mb: 1 }}>Mangoes</Box>
                      <Box component="li" sx={{ mb: 1 }}>Marine products</Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Growth Trends Section */}
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
                Growth Trends in Agricultural Trade
              </Typography>
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
                According to trade data:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  India's agricultural exports to the Philippines crossed USD 350 million in 2023.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  Agri-imports from the Philippines to India totaled around USD 150 million, showing an increasing trade surplus in India's favor.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  The trade is projected to grow at a CAGR of 8-10% over the next five years, fueled by regional trade cooperation and agricultural demand in ASEAN.
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
                The Rising Peanut Trade Between India and the Philippines
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
                  mb: 4,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Peanuts, also known as groundnuts, are an essential part of the Philippine diet and food processing industry. The rising consumption of peanut butter, peanut oil, roasted snacks, confectionery products, and livestock feed has created a gap between local supply and demand.
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
                India, being one of the largest producers and exporters of peanuts, is strategically positioned to fill this demand gap.
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
                Peanut Export from India to the Philippines: A Snapshot
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  In 2023, India exported approximately 15,000 metric tons of raw peanuts to the Philippines, valued at over USD 18 million.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  The volume has grown by 20% year-on-year, driven by competitive pricing and consistent quality.
                </Box>
                <Box component="li" sx={{ mb: 2, fontSize: '1.05rem' }}>
                  Indian exporters offer peanuts, which are suitable for various uses in the Philippine market.
                </Box>
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
                India grows several peanut varieties ideal for different industrial and edible applications. The main types exported to the Philippines include:
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
                      <Box component="li" sx={{ mb: 1 }}>Larger kernels with a reddish-brown skin</Box>
                      <Box component="li" sx={{ mb: 1 }}>Popular for oil extraction and direct edible use</Box>
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
                      <Box component="li" sx={{ mb: 1 }}>Rounder and smaller in size</Box>
                      <Box component="li" sx={{ mb: 1 }}>Used for confectionery, candies, and snacks</Box>
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ width: { xs: '100%' } }}>
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
                      3. Redskin Peanuts
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: theme.palette.customColors.lightGold }}>
                      <Box component="li" sx={{ mb: 1 }}>Known for high oil content and strong flavor</Box>
                      <Box component="li" sx={{ mb: 1 }}>Preferred for traditional Filipino snacks and roasted mixes</Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Demand Reasons Section */}
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
                Why Indian Peanuts Are in Demand in the Philippines
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  <strong>Competitive Pricing:</strong> India offers peanuts at affordable prices due to large-scale production.
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  <strong>Reliable Supply:</strong> Major peanut-producing states like Gujarat, Rajasthan, and Andhra Pradesh ensure year-round availability.
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  <strong>Quality Standards:</strong> Indian exporters follow APEDA and FSSAI guidelines, ensuring food safety and phytosanitary compliance.
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  <strong>Customized Packaging:</strong> Vacuum packaging, jute bags, and PP bags available in 25 kg / 50 kg sizes for bulk buyers.
                </Box>
              </Box>
            </Box>

            {/* Future Prospects Section */}
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
                Future Prospects: Strengthening the Agri Trade Ties
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
                With the Philippines aiming to diversify its food imports and India enhancing its agro-export capabilities, there's immense potential in:
              </Typography>
              <Box component="ul" sx={{ pl: 4, mb: 4, color: theme.palette.secondary.main }}>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  Signing bilateral trade agreements focused on agricultural goods
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  Participating in trade fairs and B2B matchmaking for peanut and agro product buyers
                </Box>
                <Box component="li" sx={{ mb: 1, fontSize: '1.05rem' }}>
                  Investing in warehousing and processing units in the Philippines for better supply chain efficiency
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
                Final Thoughts
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
                The agriculture trade between India and the Philippines is poised for remarkable growth, with peanuts leading the charge as a high-potential commodity. With India's expertise in peanut cultivation and the Philippines' growing demand in food processing and retail sectors, the synergy is clear.
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
                For Indian exporters, this is the right time to tap into the expanding Filipino peanut market by offering quality, variety, and competitive pricing. For Philippine buyers, sourcing from India ensures consistent supply and value.
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
              Interested in sourcing premium peanuts for the Philippines market?
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
        <BreadcrumbsBlog country="Philippines" />
      </Box>
    </>
  );
} 