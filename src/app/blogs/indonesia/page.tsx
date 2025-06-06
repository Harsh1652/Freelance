"use client";

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  ListItemIcon
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Head from 'next/head';
import BreadcrumbsBlog from '@/components/BreadcrumbsBlog';

// SEO component for meta tags
const SEO = () => {
  React.useEffect(() => {
    document.title = 'Agricultural Trade Between India and Indonesia | Balaji Exports - Indian Groundnut Exporters';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Discover the growing agricultural trade relationship between India and Indonesia, with a special focus on peanut exports. Learn about market trends, opportunities, and key insights for businesses in both nations.');
    // Add more meta tags if needed
  }, []);
  return null;
};

export default function IndonesiaBlog() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Agricultural Trade Between India and Indonesia | Balaji Exports - Indian Groundnut Exporters</title>
        <meta name="description" content="Discover the growing agricultural trade relationship between India and Indonesia, with a special focus on peanut exports. Learn about market trends, opportunities, and key insights for businesses in both nations." />
        <meta name="keywords" content="Indonesia peanut market 2024, Indian peanut exports Indonesia, groundnut import Indonesia, peanut butter market Indonesia, Indian groundnut suppliers" />
        <link rel="canonical" href="https://balajiexports.com/blogs/indonesia" />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Agricultural Trade Between India and Indonesia | Balaji Exports - Indian Groundnut Exporters" />
        <meta property="og:description" content="Discover the growing agricultural trade relationship between India and Indonesia, with a special focus on peanut exports. Learn about market trends, opportunities, and key insights for businesses in both nations." />
        <meta property="og:url" content="https://balajiexports.com/blogs/indonesia" />
        <meta property="og:site_name" content="Balaji Exports" />
        <meta property="og:image" content="https://balajiexports.com/images/indonesia-peanut-market-analysis.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalajiExports" />
        <meta name="twitter:title" content="Agricultural Trade Between India and Indonesia | Balaji Exports - Indian Groundnut Exporters" />
        <meta name="twitter:description" content="Discover the growing agricultural trade relationship between India and Indonesia, with a special focus on peanut exports. Learn about market trends, opportunities, and key insights for businesses in both nations." />
        <meta name="twitter:image" content="https://balajiexports.com/images/indonesia-peanut-market-twitter.jpg" />
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
                INDONESIA
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
                Agriculture Trade Between India and Indonesia: A Growing Opportunity with a Focus on Peanut Trade
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
              Agricultural trade plays a vital role in the economic and diplomatic relations between India and Indonesia, two of Asia's most populous and agriculturally rich nations. Over the years, both countries have developed robust trading relationships across a variety of sectors, with agriculture emerging as a significant area of collaboration and mutual interest.
            </Typography>

            {/* Overview Section */}
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
                Overview of India-Indonesia Agricultural Trade
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
                India and Indonesia enjoy strong bilateral trade ties, with agricultural products being an essential part of this exchange. Indonesia is a major importer of Indian agricultural commodities like rice, wheat, sugar, spices, cotton, and peanuts, while India imports palm oil, coffee, cocoa, and tropical fruits from Indonesia.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mt: 2 }}>
                <Box sx={{ flex: '0 0 48%', width: { xs: '100%', md: '48%' } }}>
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
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <CompareArrowsIcon sx={{ mr: 1, transform: 'rotate(90deg)', color: theme.palette.customColors.lightGold }} />
                      Key Agricultural Exports from India to Indonesia:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Rice (especially basmati and non-basmati)"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Sugar"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Groundnuts (peanuts)"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Spices (chili, turmeric, cumin)"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Cotton"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
                <Box sx={{ flex: '0 0 48%', width: { xs: '100%', md: '48%' } }}>
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
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <CompareArrowsIcon sx={{ mr: 1, transform: 'rotate(270deg)', color: theme.palette.customColors.lightGold }} />
                      Key Agricultural Imports from Indonesia to India:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Crude palm oil and derivatives"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Cocoa and cocoa-based products"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Coffee"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Processed food ingredients (oleoresins, etc.)"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Peanut Trade Spotlight */}
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
                Spotlight: Peanut Trade Between India and Indonesia
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
                Importance of Peanut Trade
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
                Peanuts (groundnuts) are a high-demand crop in both nations, used extensively in edible oil production, confectionery, snack food, cosmetics, and animal feed. India is the second-largest producer of peanuts in the world, while Indonesia is a growing importer due to its rising domestic consumption and limited local production.
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
                Indian Peanut Exports to Indonesia
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
                India exports a considerable quantity of peanuts to Indonesia annually. According to APEDA and trade sources:
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
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon sx={{ color: theme.palette.customColors.lightGold }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="In FY 2023–24, India exported over 85,000 metric tonnes of peanuts to Indonesia."
                      sx={{ 
                        '& .MuiTypography-root': {
                          color: theme.palette.customColors.lightGold,
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon sx={{ color: theme.palette.customColors.lightGold }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="The trade value of peanut exports to Indonesia reached USD 75 million, growing at an annual rate of over 10% in the past 3 years."
                      sx={{ 
                        '& .MuiTypography-root': {
                          color: theme.palette.customColors.lightGold,
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon sx={{ color: theme.palette.customColors.lightGold }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Major exporting states from India include Gujarat, Andhra Pradesh, Tamil Nadu, and Rajasthan."
                      sx={{ 
                        '& .MuiTypography-root': {
                          color: theme.palette.customColors.lightGold,
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
              <Typography 
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Why Indonesian Buyers Prefer Indian Peanuts
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 2, 
                    border: `1px solid ${theme.palette.customColors.accentGreen}`, 
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        textAlign: 'center'
                      }}
                    >
                      Competitive pricing
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 2, 
                    border: `1px solid ${theme.palette.customColors.accentGreen}`, 
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        textAlign: 'center'
                      }}
                    >
                      High oil content
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 2, 
                    border: `1px solid ${theme.palette.customColors.accentGreen}`, 
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        textAlign: 'center'
                      }}
                    >
                      Low aflatoxin levels due to improved post-harvest processing
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 2, 
                    border: `1px solid ${theme.palette.customColors.accentGreen}`, 
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        textAlign: 'center'
                      }}
                    >
                      Availability of different peanut varieties
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    p: 2, 
                    border: `1px solid ${theme.palette.customColors.accentGreen}`, 
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="body1"
                      sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        textAlign: 'center'
                      }}
                    >
                      Year-round supply capability
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
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
                Varieties and Types of Indian Peanuts
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
                India grows several varieties of peanuts, each suited for different applications:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
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
                      1. Bold Peanuts (Runner Type)
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Size: Large kernels"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Usage: Oil extraction, snacks, roasting"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Key Growing Regions: Gujarat, Rajasthan"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
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
                      2. Java Peanuts (Spanish Type)
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Size: Smaller kernels"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Usage: Confectionery, peanut butter, and snacks"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Key Growing Regions: Andhra Pradesh, Tamil Nadu"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
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
                      3. Red Skin Peanuts
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Usage: Peanut butter, roasted snacks"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Rich flavor, popular in niche markets"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
                <Box sx={{ width: { xs: '100%', md: '48%' } }}>
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
                      4. TJ (Treated Java) Peanuts
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Processed for uniformity, size sorting"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CircleIcon sx={{ 
                            color: theme.palette.customColors.lightGold,
                            fontSize: '0.8rem'
                          }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Often preferred for direct human consumption"
                          sx={{
                            '& .MuiTypography-root': {
                              color: theme.palette.customColors.lightGold,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </Box>
            </Box>

            {/* Future Prospects Section */}
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
                Growth in Trade and Future Prospects
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
                The agricultural trade, especially peanut exports, between India and Indonesia has shown impressive growth due to:
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
                    Bilateral trade agreements under ASEAN-India FTA
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
                    Growing demand for Indian agri-products in Indonesia's processed food and edible oil sectors
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
                    Improved logistics and reduced shipping costs
                  </Typography>
                </ListItem>
              </List>
              <Typography 
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  mb: 2,
                  mt: 3
                }}
              >
                Future Opportunities:
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
                Indonesia's peanut processing and snack industries are booming, offering continued opportunities for Indian exporters.
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
                India can explore the export of value-added peanut products like peanut butter, roasted peanuts, and defatted peanut flour.
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
                Joint ventures in agro-processing and supply chain partnerships can further deepen ties.
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
              Looking to source premium Indian peanuts for Indonesia?
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
              View Our Product Range <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.2rem', verticalAlign: 'middle' }} />
            </Box>
          </Paper>
        </Container>
        <BreadcrumbsBlog country="Indonesia" />
      </Box>
    </>
  );
} 