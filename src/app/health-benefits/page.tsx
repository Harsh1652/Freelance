"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useMediaQuery,
  Alert,
  ThemeProvider as MUIThemeProvider,
  Tab,
  Tabs,
  Card,
  CardContent,
  Avatar,
  Fade,
  Zoom
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BlockIcon from "@mui/icons-material/Block";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BoltIcon from "@mui/icons-material/Bolt";
import theme from "@/assets/styles/theme";

import ALLERGIES from "@/assets/images/Health Benefits/ALLERGIES .png";
import peanuthealthbenefits from "@/assets/images/Health Benefits/peanut health benefits .png";
import Recommendation from "@/assets/images/Health Benefits/Recommendation.jpg";

type GradientCardProps = {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  height?: string | number;
  icon?: React.ReactNode;
};

const GradientCard = ({ title, subtitle, description, height = "auto", icon }: GradientCardProps) => {
  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <Card
        elevation={4}
        sx={{
          height: typeof height === "number" ? `${height}px` : height,
          background: theme.customGradients?.greenDark || "linear-gradient(135deg, #2A2C1F 0%, #2A2C1F 60%, #4A5D3C 100%)",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)"
          }
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            color: "common.white",
            p: { xs: 2, sm: 2.5 },
            "&:last-child": { pb: 2 }
          }}
        >
          {(title || icon) && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              {icon && (
                <Avatar
                  sx={{
                    bgcolor: "rgba(215, 198, 141, 0.2)",
                    color: theme.palette.customColors?.darkGold || "#D7C68D",
                    mr: 1.5,
                    width: 40,
                    height: 40
                  }}
                >
                  {icon}
                </Avatar>
              )}
              {title && (
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    color: theme.palette.customColors?.darkGold || "#D7C68D",
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "0.5px"
                  }}
                >
                  {title}
                </Typography>
              )}
            </Box>
          )}
          {subtitle && (
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.customColors?.darkGold || "#D7C68D",
                opacity: 0.9,
                fontFamily: "Lato, sans-serif",
                mb: 1.5,
                fontStyle: "italic"
              }}
            >
              {subtitle}
            </Typography>
          )}
          {description}
        </CardContent>
      </Card>
    </Zoom>
  );
};

type CompactListProps = {
  children: React.ReactNode;
};

const CompactList = ({ children }: CompactListProps) => (
  <List dense disablePadding sx={{ mt: 1 }}>
    {children}
  </List>
);

type CompactListItemProps = {
  icon: React.ReactNode;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
};

const CompactListItem = ({ icon, primary, secondary }: CompactListItemProps) => (
  <ListItem sx={{ py: 0.5, px: 0 }}>
    <ListItemIcon sx={{ minWidth: 32 }}>{icon || null}</ListItemIcon>
    <ListItemText primary={primary as React.ReactNode} secondary={secondary as React.ReactNode} />
  </ListItem>
);

const HealthBenefitsSEOHead = () => {
  const pageTitle = "Health Benefits of Peanuts | Nutritional Value & Health Advantages";
  const pageDescription = "Discover the comprehensive health benefits of peanuts, including heart health, weight management, and blood sugar control. Learn about nutritional value, allergies, and consumption recommendations.";
  const pageUrl = "https://balajiexports.com/health-benefits";
  const imageUrl = "https://balajiexports.com/images/logo.png";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="peanut health benefits, groundnut nutrition, peanut nutritional value, peanut health advantages, peanut heart health, peanut weight management, peanut blood sugar control, peanut allergies, peanut consumption, peanut dietary benefits, peanut protein content, peanut healthy fats, peanut fiber content, peanut vitamins minerals, peanut antioxidants, peanut health risks, peanut allergy symptoms, peanut consumption guidelines, peanut storage recommendations, peanut organic benefits" />
      <meta name="author" content="Balaji Exports" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Alternate Language Tags */}
      <link rel="alternate" hrefLang="en" href={pageUrl} />
      <link rel="alternate" hrefLang="en-US" href={pageUrl} />
      <link rel="alternate" hrefLang="en-GB" href={pageUrl} />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Balaji Exports" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Health Benefits of Peanuts - Balaji Exports" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BalajiExports" />
      <meta name="twitter:creator" content="@BalajiExports" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Health Benefits of Peanuts - Balaji Exports" />

      {/* Additional Meta Tags */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="ICBM" content="19.0760, 72.8777" />

      {/* Business/Contact Information */}
      <meta name="contact" content="info@balajiexports.com" />
      <meta name="reply-to" content="info@balajiexports.com" />
      <meta name="owner" content="Balaji Exports" />
      <meta name="url" content={pageUrl} />
      <meta name="identifier-URL" content={pageUrl} />
      <meta name="directory" content="submission" />
      <meta name="category" content="Health, Nutrition, Food, Agriculture" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Health-conscious consumers, Nutritionists, Dietitians, Food Manufacturers" />

      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />

      {/* Security & Privacy */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Balaji Exports",
            "url": pageUrl,
            "logo": imageUrl,
            "description": "Leading exporter of premium quality peanuts and groundnuts from India. Specializing in various peanut varieties for global markets.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "Maharashtra",
              "addressLocality": "Mumbai"
            }
          })
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": pageTitle,
            "description": pageDescription,
            "image": imageUrl,
            "author": {
              "@type": "Organization",
              "name": "Balaji Exports"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Balaji Exports",
              "logo": {
                "@type": "ImageObject",
                "url": imageUrl
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-03-19",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": pageUrl
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://balajiexports.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Health Benefits",
                "item": pageUrl
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the main health benefits of peanuts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Peanuts offer numerous health benefits including heart health support, blood sugar control, weight management, and rich nutrient content. They are high in protein, healthy fats, fiber, and essential vitamins and minerals."
                }
              },
              {
                "@type": "Question",
                "name": "Are peanuts good for heart health?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, peanuts contain monounsaturated and polyunsaturated fats that support heart health. They also contain resveratrol and other antioxidants that help reduce inflammation and improve cardiovascular function."
                }
              },
              {
                "@type": "Question",
                "name": "What are the symptoms of peanut allergies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Peanut allergy symptoms can include skin reactions (hives, redness, swelling), gastrointestinal issues (stomach cramps, nausea), respiratory problems (shortness of breath, wheezing), and in severe cases, anaphylaxis."
                }
              },
              {
                "@type": "Question",
                "name": "How much peanuts should I eat daily?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For healthy adults, a daily serving of 1-2 ounces (28-56g) of peanuts is recommended as part of a balanced diet. Choose raw or dry-roasted peanuts over salted or honey-roasted varieties."
                }
              }
            ]
          })
        }}
      />
    </Head>
  );
};

const HealthBenefitsPage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const pageBackground = {
    backgroundImage:
      "radial-gradient(circle at 20px 20px, rgba(234, 219, 165, 0.15) 0%, rgba(234, 219, 165, 0) 25%)",
    backgroundSize: "40px 40px",
    backgroundColor: theme.palette.background.default
  };

  return (
    <MUIThemeProvider theme={theme}>
      <HealthBenefitsSEOHead />
      <Box sx={{ ...pageBackground, minHeight: "100vh", pb: 8 }}>
        <Container maxWidth="lg">
          <Fade in={true}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 3, md: 4 },
                mb: 4,
                mt: { xs: 1, sm: 2 },
                borderRadius: 2,
                bgcolor: theme.palette.customColors?.lightGold || "#fef3c7",
                backgroundImage:
                  "linear-gradient(135deg, rgba(234, 219, 165, 0.9) 0%, rgba(215, 198, 141, 0.8) 100%)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "150px",
                  height: "150px",
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                  zIndex: 0
                }
              }}
            >
              {/* Decorative element */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "8px",
                  background: "linear-gradient(90deg, #4A5D3C, #697A52, #4A5D3C)"
                }}
              />
              <Box sx={{ textAlign: "center", mb: 4, position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3.2rem" },
                    color: theme.palette.primary.main,
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                    letterSpacing: "0.5px"
                  }}
                >
                  Health Benefits of Peanuts
                </Typography>
                <Divider
                  sx={{
                    my: 2,
                    borderColor: theme.palette.primary.main,
                    opacity: 0.5,
                    width: "70%",
                    mx: "auto",
                    borderWidth: "2px"
                  }}
                />
                <Typography
                  variant="subtitle1"
                  color={theme.palette.secondary.main}
                  paragraph
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    maxWidth: "800px",
                    mx: "auto",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    fontWeight: 500
                  }}
                >
                  Explore the nutritional value, health advantages, and important considerations regarding peanut consumption
                </Typography>
              </Box>
              <Box sx={{ mb: 3, position: "relative", zIndex: 1 }}>
                <Typography
                  variant="body1"
                  paragraph
                  color={theme.palette.primary.main}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    lineHeight: 1.6,
                    textAlign: "center",
                    maxWidth: "900px",
                    mx: "auto",
                    mb: 4
                  }}
                >
                  Peanuts (Arachis hypogaea) are technically legumes, but nutritionally and culinarily, they are classified with nuts.
                  They are a nutrient-dense food that provides several health benefits.
                </Typography>
              </Box>
              {/* Tabs Navigation */}
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  mb: 4,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
                }}
              >
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  textColor="primary"
                  indicatorColor="primary"
                  variant={isMobile ? "scrollable" : "fullWidth"}
                  scrollButtons={isMobile ? "auto" : false}
                  sx={{
                    "& .MuiTab-root": {
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      py: 1.5,
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)"
                      }
                    },
                    "& .Mui-selected": {
                      backgroundColor: "rgba(74, 93, 60, 0.1)"
                    },
                    "& .MuiTabs-indicator": {
                      height: 3
                    }
                  }}
                >
                  <Tab label="Health Benefits" sx={{ fontFamily: "Lato, sans-serif" }} />
                  <Tab label="Allergies & Cautions" sx={{ fontFamily: "Lato, sans-serif" }} />
                  <Tab label="Recommendations" sx={{ fontFamily: "Lato, sans-serif" }} />
                </Tabs>
              </Box>
              {/* Tab Content */}
              {/* Tab 1: Health Benefits */}
              {tabValue === 0 && (
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <GradientCard
                        title="Rich in Nutrients"
                        icon={<RestaurantIcon />}
                        description={
                          <CompactList>
                            <CompactListItem
                              icon={<RestaurantIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.darkGold || "#D7C68D", fontWeight: "bold", fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>Protein</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Excellent plant-based protein source (about 25–30g per 100g)</Typography>}
                            />
                            <CompactListItem
                              icon={<RestaurantIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.darkGold || "#D7C68D", fontWeight: "bold", fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>Healthy Fats</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Mainly monounsaturated and polyunsaturated fats, which support heart health</Typography>}
                            />
                            <CompactListItem
                              icon={<RestaurantIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.darkGold || "#D7C68D", fontWeight: "bold", fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>Fiber</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Good for digestion and satiety</Typography>}
                            />
                            <CompactListItem
                              icon={<RestaurantIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.darkGold || "#D7C68D", fontWeight: "bold", fontFamily: "Lato, sans-serif", fontSize: "0.95rem" }}>Vitamins & Minerals</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Rich in niacin (B3), folate (B9), vitamin E, magnesium, phosphorus, potassium, and zinc</Typography>}
                            />
                          </CompactList>
                        }
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Box sx={{ width: "100%", maxWidth: "500px", p: 2 }}>
                        <Image
                          src={peanuthealthbenefits}
                          alt="Peanut Health Benefits"
                          width={500}
                          height={400}
                          style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "contain", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                          <GradientCard
                            title="Blood Sugar Control"
                            icon={<LocalHospitalIcon />}
                            description={
                              <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                                Despite being energy-dense, peanuts have a low glycemic index, which means they do not cause
                                rapid spikes in blood glucose. The fiber, protein, and healthy fat content help improve insulin sensitivity.
                              </Typography>
                            }
                            height="100%"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <GradientCard
                            title="Weight Management"
                            icon={<FitnessCenterIcon />}
                            description={
                              <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                                Peanuts increase satiety and reduce hunger, which can help with weight control when eaten in moderation.
                                Studies suggest that regular peanut consumption is not associated with weight gain and may even aid in
                                weight loss when part of a healthy diet.
                              </Typography>
                            }
                            height="100%"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <GradientCard
                            title="Antioxidant Properties"
                            icon={<BoltIcon />}
                            description={
                              <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                                Peanuts are rich in antioxidants like p-coumaric acid and resveratrol, which help neutralize
                                free radicals and reduce the risk of chronic diseases, including cancer.
                              </Typography>
                            }
                            height="100%"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {/* Tab 2: Allergies & Cautions */}
              {tabValue === 1 && (
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      mb: 4,
                      textAlign: "center",
                      width: "100%",
                      height: { xs: 300, sm: 400, md: 500 },
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <Image
                      src={ALLERGIES}
                      alt="Peanut Allergies Information"
                      fill
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", position: "absolute", top: 0, left: 0 }}
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      color: theme.palette.primary.main,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" }
                    }}
                  >
                    <WarningIcon sx={{ mr: 1, color: "#f57c00", fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" } }} />
                    Peanut Allergies
                  </Typography>
                  <Divider sx={{ mb: 3, borderColor: theme.palette.primary.main, opacity: 0.5 }} />
                  <Alert
                    severity="warning"
                    sx={{
                      mb: 3,
                      bgcolor: "rgba(255, 152, 0, 0.1)",
                      color: "#e65100",
                      border: "1px solid #e65100",
                      borderRadius: "8px",
                      p: 2,
                      "& .MuiAlert-icon": {
                        color: "#e65100",
                        fontSize: "1.5rem"
                      },
                      "& .MuiAlert-message": {
                        fontSize: "1rem",
                        fontFamily: "Inter, sans-serif"
                      }
                    }}
                  >
                    Peanut allergies can be life-threatening. If you suspect you have a peanut allergy,
                    consult with a healthcare professional immediately.
                  </Alert>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <GradientCard
                        title="Severity"
                        icon={<WarningIcon sx={{ color: "#ff9800" }} />}
                        description={
                          <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            Peanut allergy is one of the most common and severe food allergies, particularly in Western countries.
                            It can cause anaphylaxis, a life-threatening reaction requiring immediate medical intervention.
                          </Typography>
                        }
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <GradientCard
                        title="Symptoms"
                        icon={<LocalHospitalIcon sx={{ color: "#f44336" }} />}
                        description={
                          <CompactList>
                            <CompactListItem icon={null} primary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Skin: hives, redness, swelling</Typography>} />
                            <CompactListItem icon={null} primary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Gastrointestinal: stomach cramps, nausea, vomiting</Typography>} />
                            <CompactListItem icon={null} primary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Respiratory: shortness of breath, wheezing</Typography>} />
                            <CompactListItem icon={null} primary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Cardiovascular: low blood pressure, rapid pulse</Typography>} />
                            <CompactListItem icon={null} primary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Severe cases: anaphylactic shock</Typography>} />
                          </CompactList>
                        }
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <GradientCard
                        title="Causes"
                        description={
                          <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            Peanut allergies occur when the immune system mistakenly identifies peanut proteins as harmful.
                            The exact cause of why some people develop this allergy is not fully understood but is likely a
                            combination of genetic and environmental factors.
                          </Typography>
                        }
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <GradientCard
                        title="Cross-Reactivity"
                        description={
                          <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            Those with peanut allergies may also react to tree nuts, though the proteins are different.
                            Cross-contamination during food processing is also a major concern.
                          </Typography>
                        }
                        height="100%"
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
              {/* Tab 3: Recommendations */}
              {tabValue === 2 && (
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      mb: 4,
                      textAlign: "center",
                      maxWidth: { xs: "100%", sm: "80%", md: "60%" },
                      mx: "auto"
                    }}
                  >
                    <Image
                      src={Recommendation}
                      alt="Peanut Consumption Recommendations"
                      width={600}
                      height={400}
                      style={{ width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                    />
                  </Box>
                  <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                      textAlign: { xs: "center", sm: "left" }
                    }}
                  >
                    Who Should and Should Not Consume Peanuts
                  </Typography>
                  <Divider sx={{ mb: 3, borderColor: theme.palette.primary.main, opacity: 0.5 }} />
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <GradientCard
                        title="Recommended Consumers"
                        subtitle="Who should eat peanuts (with no allergies)"
                        icon={<CheckCircleOutlineIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                        description={
                          <CompactList>
                            <CompactListItem
                              icon={<CheckCircleOutlineIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Individuals looking to manage weight or diabetes</Typography>}
                            />
                            <CompactListItem
                              icon={<CheckCircleOutlineIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Vegetarians/vegans needing plant protein</Typography>}
                            />
                            <CompactListItem
                              icon={<CheckCircleOutlineIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>People aiming to reduce cardiovascular risk</Typography>}
                            />
                            <CompactListItem
                              icon={<CheckCircleOutlineIcon sx={{ color: theme.palette.customColors?.accentGreen || "#34d399" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Children (early introduction may reduce allergy risk, under medical advice)</Typography>}
                            />
                          </CompactList>
                        }
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <GradientCard
                        title="Should Avoid or Limit"
                        subtitle="Who should be cautious with peanuts"
                        icon={<BlockIcon sx={{ color: "#f44336" }} />}
                        description={
                          <CompactList>
                            <CompactListItem
                              icon={<BlockIcon sx={{ color: "#f44336" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Individuals with confirmed peanut allergies</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", opacity: 0.8, fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Must completely avoid peanuts and peanut-containing products</Typography>}
                            />
                            <CompactListItem
                              icon={<BlockIcon sx={{ color: "#f44336" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>People with digestive disorders (e.g., IBS)</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", opacity: 0.8, fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>High fat and fiber may trigger symptoms</Typography>}
                            />
                            <CompactListItem
                              icon={<BlockIcon sx={{ color: "#f44336" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Those at risk of aflatoxin exposure</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", opacity: 0.8, fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Poorly stored peanuts can develop harmful molds</Typography>}
                            />
                            <CompactListItem
                              icon={<BlockIcon sx={{ color: "#f44336" }} />}
                              primary={<Typography variant="body1" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}>Young infants (under 6 months)</Typography>}
                              secondary={<Typography variant="body2" sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", opacity: 0.8, fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}>Should not be given whole peanuts due to choking risk</Typography>}
                            />
                          </CompactList>
                        }
                        height="100%"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <GradientCard
                        title="Consumption Guidelines"
                        icon={<RestaurantIcon sx={{ color: theme.palette.customColors?.darkGold || "#D7C68D" }} />}
                        description={
                          <Typography sx={{ color: theme.palette.customColors?.lightGold || "#EADBA5", fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>
                            For healthy adults, a daily serving of 1-2 ounces (28-56g) of peanuts can be beneficial as part of a balanced diet.
                            Choose raw or dry-roasted peanuts over salted or honey-roasted varieties to minimize sodium and sugar intake.
                            Store peanuts in cool, dry conditions to prevent mold growth, and consider organic options to reduce pesticide exposure.
                          </Typography>
                        }
                        height="100%"
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
              {/* Conclusion Section */}
              <Box
                sx={{
                  mt: 6,
                  pt: 4,
                  borderTop: `1px solid ${theme.palette.primary.main}`,
                  borderTopOpacity: 0.2,
                  position: "relative",
                  zIndex: 1
                }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    color: theme.palette.primary.main,
                    fontFamily: "Lato, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                    textAlign: "center"
                  }}
                >
                  Conclusion
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: theme.palette.primary.main,
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    lineHeight: 1.6,
                    textAlign: "center",
                    maxWidth: "900px",
                    mx: "auto",
                    mb: 2
                  }}
                >
                  Peanuts are a highly nutritious and affordable food with multiple health benefits, especially for heart health, blood sugar control, and weight management. However, for individuals with peanut allergies, peanuts can be life-threatening and must be avoided completely. Proper storage and preparation are also crucial to minimize potential toxin exposure.
                </Typography>
              </Box>
            </Paper>
          </Fade>
        </Container>
      </Box>
      {/* Breadcrumb */}
      <Box
        py={1}
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: 1,
          pl: { xs: 3, sm: 4 },
          maxWidth: "lg",
          mx: "auto"
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Inter, sans-serif",
            color: theme.palette.primary.main
          }}
        >
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <Typography component="span" variant="body2" sx={{ color: theme.palette.secondary.main }}>
            Health Benefits
          </Typography>
        </Typography>
      </Box>
    </MUIThemeProvider>
  );
};

export default HealthBenefitsPage;