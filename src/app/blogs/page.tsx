'use client';

import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import Head from 'next/head';

const blogCards = [
  {
    title: 'Netherlands Market',
    subtitle: 'India-Netherlands Agriculture Trade',
    overline: 'EUROPEAN GATEWAY',
    description: 'Explore the growing agricultural partnership between India and the Netherlands, with a special focus on peanut exports and the Dutch gateway to European markets.',
    to: '/blogs/netherlands',
    readTime: '5 min read',
    feature: 'Netherlands Market',
  },
  {
    title: 'USA Market',
    subtitle: 'India–USA Agriculture Trade',
    overline: 'NORTH AMERICA',
    description: 'Explore the flourishing agricultural partnership between India and the USA, with a special focus on rising peanut exports and the growing demand for Indian varieties in the American market.',
    to: '/blogs/usa',
    readTime: '5 min read',
    feature: 'USA Market',
  },
  {
    title: 'South Africa Market',
    subtitle: 'India-South Africa Agricultural Trade',
    overline: 'AFRICAN TRADE',
    description: 'Explore the booming agricultural trade between India and South Africa, with a special focus on growing peanut exports and the varieties most popular in the Southern African market.',
    to: '/blogs/south-africa',
    readTime: '5 min read',
    feature: 'South Africa Market',
  },
  {
    title: 'UK Market',
    subtitle: 'India-UK Free Trade Agreement',
    overline: 'TRADE AGREEMENT',
    description: 'Explore how the 2025 Free Trade Agreement is transforming India-UK agricultural trade, with a special focus on growing peanut exports and new market opportunities.',
    to: '/blogs/uk',
    readTime: '5 min read',
    feature: 'UK Market',
  },
  {
    title: 'Germany Market',
    subtitle: 'India-Germany Agricultural Trade',
    overline: 'EUROPEAN INSIGHTS',
    description: 'Explore the growing agricultural partnership between India and Germany, with a focus on peanut exports, sustainable sourcing, and the opportunities in Europe\'s largest economy.',
    to: '/blogs/germany',
    readTime: '5 min read',
    feature: 'Germany Market',
  },
  {
    title: 'Vietnam Market',
    subtitle: 'Vietnam Market',
    overline: 'MARKET INSIGHTS',
    description: 'Explore the dynamic peanut market in Vietnam, including market trends, opportunities, and key insights for businesses looking to expand in the region.',
    to: '/blogs/vietnam',
    readTime: '5 min read',
    feature: 'Vietnam Market',
  },
  {
    title: 'Indonesia Trade',
    subtitle: 'India-Indonesia Agricultural Trade',
    overline: 'TRADE INSIGHTS',
    description: 'Discover the growing agricultural trade relationship between India and Indonesia, with a special focus on peanut exports, market trends and business opportunities.',
    to: '/blogs/indonesia',
    readTime: '6 min read',
    feature: 'Indonesia Trade',
  },
  {
    title: 'Thailand Partnership',
    subtitle: 'India-Thailand Agricultural Trade',
    overline: 'TRADE INSIGHTS',
    description: 'Explore the growing agricultural partnership between India and Thailand, with a focus on peanut varieties, trade statistics, and export opportunities in Thailand\'s food processing sector.',
    to: '/blogs/thailand',
    readTime: '5 min read',
    feature: 'Thailand Partnership',
  },
  {
    title: 'Philippines Market',
    subtitle: 'India-Philippines Agricultural Trade',
    overline: 'MARKET INSIGHTS',
    description: 'Explore the growing agricultural trade between India and the Philippines, with a special focus on peanut varieties, export opportunities, and market trends in this expanding Southeast Asian market.',
    to: '/blogs/philippines',
    readTime: '5 min read',
    feature: 'Philippines Market',
  },
  {
    title: 'Singapore Trade',
    subtitle: 'India-Singapore Agricultural Trade',
    overline: 'TRADE INSIGHTS',
    description: 'Explore the strategic agricultural trade relationship between India and Singapore, with a focus on peanut exports, varieties, and Singapore\'s role as a gateway to Southeast Asian markets.',
    to: '/blogs/singapore',
    readTime: '5 min read',
    feature: 'Singapore Trade',
  },
  {
    title: 'China Market',
    subtitle: 'India-China Agricultural Trade',
    overline: 'MARKET INSIGHTS',
    description: 'Explore the growing agricultural trade between India and China, with a special focus on peanut exports, varieties, and the significant opportunities in the world\'s largest market.',
    to: '/blogs/china',
    readTime: '5 min read',
    feature: 'China Market',
  },
  {
    title: 'Russia Market',
    subtitle: 'India-Russia Agricultural Trade',
    overline: 'TRADE INSIGHTS',
    description: 'Explore the growing agricultural trade between India and Russia, with a special focus on peanut exports and the significant opportunities in this strategic market.',
    to: '/blogs/russia',
    readTime: '5 min read',
    feature: 'Russia Market',
  },
  {
    title: 'Bangladesh Market',
    subtitle: 'India-Bangladesh Agricultural Trade',
    overline: 'TRADE INSIGHTS',
    description: 'Explore the growing agricultural trade between India and Bangladesh, with a special focus on peanut exports and the strong bilateral partnership between these neighboring countries.',
    to: '/blogs/bangladesh',
    readTime: '5 min read',
    feature: 'Bangladesh Market',
  },
];

const BlogsSEOHead = () => {
  const pageTitle = "Peanut Market Insights & Industry News | Balaji Exports Blog";
  const pageDescription = "Stay updated with the latest peanut market trends, industry news, and insights from Balaji Exports. Expert analysis of global peanut markets, trade policies, and market opportunities.";
  const pageUrl = "https://balajiexports.com/blogs";
  const imageUrl = "https://balajiexports.com/images/logo.png";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="peanut market news, groundnut industry updates, peanut trade insights, global peanut markets, peanut export trends, peanut market analysis, peanut industry news, groundnut market reports, peanut trade policies, peanut market opportunities, peanut export business, peanut market research, peanut industry trends, groundnut market analysis, peanut trade news, peanut market updates, peanut industry insights, groundnut trade news, peanut market reports, peanut industry analysis" />
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
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Balaji Exports" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Balaji Exports - Peanut Market Insights" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BalajiExports" />
      <meta name="twitter:creator" content="@BalajiExports" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Balaji Exports - Peanut Market Insights" />

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
      <meta name="category" content="Agriculture, Food Processing, Export, International Trade" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="Importers, Food Manufacturers, Snack Companies, Wholesalers, Distributors" />

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

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Balaji Exports",
            "url": pageUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://balajiexports.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
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
                "name": "Blogs",
                "item": pageUrl
              }
            ]
          })
        }}
      />

      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Balaji Exports Blog",
            "description": "Latest insights and news about the peanut industry, market trends, and trade opportunities.",
            "url": pageUrl,
            "publisher": {
              "@type": "Organization",
              "name": "Balaji Exports",
              "logo": {
                "@type": "ImageObject",
                "url": imageUrl
              }
            }
          })
        }}
      />
    </Head>
  );
};

export default function Blog() {
  return (
    <main>
      <BlogsSEOHead />
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          py: { xs: 4, md: 6 }
        }}
      >
        <Container maxWidth="xl">
          {/* Page Heading */}
          <Box 
            sx={{ 
              textAlign: 'center',
              mb: { xs: 4, md: 6 }
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'primary.main',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                mb: 2,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: 100, sm: 150 },
                  height: 4,
                  backgroundColor: 'customColors.accentGreen',
                  borderRadius: 2
                }
              }}
            >
              Peanut Blogs
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: 'secondary.main',
                fontFamily: 'Inter, sans-serif',
                maxWidth: '800px',
                mx: 'auto',
                mt: 4,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
              }}
            >
              Discover the latest insights, trends, and stories from the world of peanuts
            </Typography>
          </Box>
          {/* Blog Cards Section */}
          <Box sx={{ mt: 6, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {blogCards.map((card, idx) => (
              <Link
                key={card.to}
                href={card.to}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    maxWidth: '100%',
                    backgroundColor: 'white',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      backgroundColor: 'customColors.accentGreen',
                      transition: 'all 0.3s ease'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: { xs: '30%', md: '15%' },
                      height: '100%',
                      background: 'linear-gradient(to right, transparent, background.default)',
                      pointerEvents: 'none',
                      opacity: 0.9,
                      zIndex: 1
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 30px rgba(109, 140, 63, 0.15)',
                      '&::before': {
                        width: '8px'
                      },
                      '& .feature-image': {
                        transform: 'scale(1.05)'
                      },
                      '& .read-more-btn': {
                        backgroundColor: 'customColors.accentGreen',
                        color: 'white',
                        paddingRight: '32px'
                      },
                      '&::after': {
                        opacity: 0.7
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '40%' },
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: 'primary.main',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, primary.main 0%, transparent 60%)',
                        opacity: 0.9,
                        zIndex: 1
                      }
                    }}
                  >
                    <Box
                      className="feature-image"
                      sx={{
                        height: { xs: 220, md: 320 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 2,
                        transition: 'transform 0.5s ease',
                        p: 4,
                        background: 'radial-gradient(circle at 30% 70%, rgba(109, 140, 63, 0.1) 0%, transparent 70%)'
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'customColors.lightGold',
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 700,
                          textAlign: 'center',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -10,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 60,
                            height: 3,
                            backgroundColor: 'customColors.lightGold',
                            opacity: 0.7,
                            borderRadius: 1
                          }
                        }}
                      >
                        {card.feature}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent 
                    sx={{ 
                      flex: 1,
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: 'white',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 40,
                        left: 0,
                        width: '30%',
                        height: '1px',
                        backgroundColor: 'customColors.accentGreen',
                        opacity: 0.3
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '20%',
                        height: '100%',
                        background: 'linear-gradient(to right, transparent, background.default)',
                        pointerEvents: 'none',
                        opacity: 0.5,
                        zIndex: 1
                      }
                    }}
                  >
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: 'customColors.accentGreen',
                          fontWeight: 600,
                          letterSpacing: '2px',
                          mb: 1,
                          display: 'block'
                        }}
                      >
                        {card.overline}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'primary.main',
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 700,
                          mb: 2,
                          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                        }}
                      >
                        {card.subtitle}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'secondary.main',
                          mb: 3,
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          lineHeight: 1.8,
                          position: 'relative',
                          pl: 3,
                          borderLeft: '2px solid customColors.accentGreen',
                          opacity: 0.9
                        }}
                      >
                        {card.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: 3
                      }}
                    >
                      <Button
                        className="read-more-btn"
                        endIcon={<ArrowForward />}
                        sx={{
                          backgroundColor: 'transparent',
                          color: 'customColors.accentGreen',
                          border: '2px solid customColors.accentGreen',
                          borderRadius: '30px',
                          padding: '8px 24px',
                          fontWeight: 600,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'customColors.accentGreen',
                            color: 'white',
                            transform: 'translateX(4px)'
                          }
                        }}
                      >
                        Read More
                      </Button>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'secondary.main',
                          opacity: 0.7,
                          fontStyle: 'italic'
                        }}
                      >
                        {card.readTime}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
    </main>
  );
} 