"use client";

import React from 'react';
import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemText, ListItemIcon, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = "Vietnam's Thriving Peanut Market | Balaji Exports - Indian Groundnut Exporters";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Vietnam is rapidly emerging as a dynamic destination in the global peanut value chain. With changing domestic cultivation trends, rising health consciousness, and a robust food processing industry, Vietnam offers a lucrative market for premium quality peanuts.");
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function VietnamBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Vietnam's Thriving Peanut Market | Balaji Exports - Indian Groundnut Exporters</title>
        <meta name="description" content="Vietnam is rapidly emerging as a dynamic destination in the global peanut value chain. With changing domestic cultivation trends, rising health consciousness, and a robust food processing industry, Vietnam offers a lucrative market for premium quality peanuts." />
        <meta name="keywords" content="Vietnam peanut market 2024, Indian peanut exports Vietnam, groundnut import Vietnam, peanut butter market Vietnam, Bold 40/50 peanuts, TJ 50/60 variety, Vietnam food processing industry, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/vietnam" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vietnam's Thriving Peanut Market" />
        <meta property="og:description" content="Vietnam is rapidly emerging as a dynamic destination in the global peanut value chain. With changing domestic cultivation trends, rising health consciousness, and a robust food processing industry, Vietnam offers a lucrative market for premium quality peanuts." />
        <meta property="og:url" content="https://balajiexports.com/blogs/vietnam" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/vietnam-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="Vietnam's Thriving Peanut Market" />
        <meta name="twitter:description" content="Vietnam is rapidly emerging as a dynamic destination in the global peanut value chain." />
        <meta name="twitter:image" content="https://balajiexports.com/images/vietnam-peanut-market-twitter.jpg" />
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
                Vietnam's Booming Peanut Market
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
                A Prime Opportunity for Indian Exporters
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
              Vietnam is rapidly emerging as a dynamic destination in the global peanut value chain. With changing domestic cultivation trends, rising health consciousness, and a robust food processing industry, Vietnam offers a lucrative market for premium quality peanuts. For Indian exporters, this presents a strategic window to strengthen supply partnerships and expand market share.
            </Typography>

            {/* Market Statistics Section */}
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
                Declining Domestic Production, Rising Import Needs
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
                While peanut consumption in Vietnam is projected to reach 600,000 metric tons by 2026, domestic production is expected to decline slightly to 441,050 metric tons. This widening supply-demand gap underscores Vietnam's increasing reliance on peanut imports.
              </Typography>

              <Paper 
                elevation={0}
                sx={{ 
                  p: 3,
                  background: theme.customGradients.greenDark,
                  borderRadius: 2,
                  mb: 3
                }}
              >
                <Typography 
                  variant="h6"
                  sx={{
                    color: theme.palette.customColors.lightGold,
                    fontFamily: 'Lato, sans-serif',
                    mb: 2
                  }}
                >
                  Vietnam's Peanut Production vs Consumption (2021-2026)
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon sx={{ color: theme.palette.customColors.lightGold }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Production → Gradual decline (~ -0.1% per year)"
                      sx={{ color: theme.palette.customColors.lightGold }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon sx={{ color: theme.palette.customColors.lightGold }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Consumption → Steady growth (~ +0.6% per year)"
                      sx={{ color: theme.palette.customColors.lightGold }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Box>

            {/* India's Role Section */}
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
                India: Vietnam's Leading Peanut Supplier
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
                India has established itself as Vietnam's largest peanut supplier, accounting for 46% of total imports in 2022–2023. India exported 0.16 million metric tons to Vietnam during this period, with popular varieties like Bold 40/50 and TJ 50/60 gaining strong traction.
              </Typography>
            </Box>

            {/* Market Growth Section */}
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
                Vietnam's Peanut Butter Market on the Rise
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
                Vietnam's peanut butter market reached USD 20.2 million in 2024 and is projected to grow to USD 30.5 million by 2033 (CAGR 3.5%). Rising demand for healthy, plant-based snacks is driving this growth.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    fontFamily: 'Lato, sans-serif',
                    mb: 2
                  }}
                >
                  Key Trends:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ 
                        color: theme.palette.customColors.accentGreen,
                        fontSize: '0.8rem'
                      }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Health-conscious snacking culture"
                      sx={{
                        '& .MuiTypography-root': {
                          color: theme.palette.secondary.main,
                          fontFamily: 'Inter, sans-serif'
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ 
                        color: theme.palette.customColors.accentGreen,
                        fontSize: '0.8rem'
                      }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Vegetarian and protein-rich diets"
                      sx={{
                        '& .MuiTypography-root': {
                          color: theme.palette.secondary.main,
                          fontFamily: 'Inter, sans-serif'
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ 
                        color: theme.palette.customColors.accentGreen,
                        fontSize: '0.8rem'
                      }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Versatile use in sandwiches, dips, and smoothies"
                      sx={{
                        '& .MuiTypography-root': {
                          color: theme.palette.secondary.main,
                          fontFamily: 'Inter, sans-serif'
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>

            {/* Strategic Opportunities Section */}
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
                Strategic Opportunities for Indian Exporters
              </Typography>
              <List>
                <ListItem 
                  sx={{ 
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mb: 2
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ mr: 1, color: theme.palette.customColors.accentGreen }} />
                    Year-Round Supply Advantage
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{
                      color: theme.palette.secondary.main,
                      pl: 4,
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    India's year-round availability attracts Vietnamese buyers seeking stability.
                  </Typography>
                </ListItem>
                
                <ListItem 
                  sx={{ 
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mb: 2
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ mr: 1, color: theme.palette.customColors.accentGreen }} />
                    Competitive Pricing
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{
                      color: theme.palette.secondary.main,
                      pl: 4,
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    Indian peanuts are more cost-effective compared to local varieties, boosting export potential.
                  </Typography>
                </ListItem>

                <ListItem 
                  sx={{ 
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mb: 2
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <CheckCircleOutlineIcon sx={{ mr: 1, color: theme.palette.customColors.accentGreen }} />
                    Product Versatility
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{
                      color: theme.palette.secondary.main,
                      pl: 4,
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    From raw peanuts to processed peanut butter and oil, Indian exporters can cater to diverse B2B and retail needs.
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Market Segments Section */}
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
                Vietnam's Peanut Market Segments
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      mb: 2
                    }}
                  >
                    Distribution Channels:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <StorefrontIcon sx={{ color: theme.palette.customColors.accentGreen }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Supermarkets and Hypermarkets"
                        sx={{
                          '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                            fontFamily: 'Inter, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <StorefrontIcon sx={{ color: theme.palette.customColors.accentGreen }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Convenience Stores"
                        sx={{
                          '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                            fontFamily: 'Inter, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <StorefrontIcon sx={{ color: theme.palette.customColors.accentGreen }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Online Retail"
                        sx={{
                          '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                            fontFamily: 'Inter, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="h6"
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: 'Lato, sans-serif',
                      mb: 2
                    }}
                  >
                    Regional Demand:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon sx={{ 
                          color: theme.palette.customColors.accentGreen,
                          fontSize: '0.8rem'
                        }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Northern Vietnam"
                        sx={{
                          '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                            fontFamily: 'Inter, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon sx={{ 
                          color: theme.palette.customColors.accentGreen,
                          fontSize: '0.8rem'
                        }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Central Vietnam"
                        sx={{
                          '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                            fontFamily: 'Inter, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CircleIcon sx={{ 
                          color: theme.palette.customColors.accentGreen,
                          fontSize: '0.8rem'
                        }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Southern Vietnam"
                        sx={{
                          '& .MuiTypography-root': {
                            color: theme.palette.secondary.main,
                            fontFamily: 'Inter, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
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
                Conclusion: A Market Primed for Growth
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
                Vietnam's peanut market stands at a pivotal point. With declining local production and expanding demand across retail, food service, and processing sectors, the door is open for Indian exporters. By leveraging quality, cost advantages, and reliability, India can cement its leadership in Vietnam's evolving peanut industry.
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
              Want to source premium Indian peanuts for Vietnam?
            </Typography>
            <Button
              component="a"
              href="/#products"
              endIcon={<ArrowForwardIcon />}
              sx={{
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
              Explore Our Product Catalog
            </Button>
          </Paper>
        </Container>
        <BreadcrumbsBlog country="Vietnam" />
      </Box>
    </>
  );
} 