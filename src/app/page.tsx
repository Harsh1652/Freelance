'use client';

import React from 'react';
import { Box, Divider } from '@mui/material';
import Head from 'next/head';
import Banner from '@/components/Banner';
import ProductsListing from '@/components/ProductsListing';
import OurJourney from '@/components/OurJourney';
import IndustrialSolutions from '@/components/IndustrialSolutions';
import GradientCard from '@/components/GradientCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';

const HomeSEOHead = () => {
  const pageTitle = "Balaji Exports - Leading Indian Peanut Exporter | Premium Groundnuts Supplier";
  const pageDescription = "India's premier peanut exporter offering premium quality groundnuts, peanut oil, and peanut butter. FSSAI certified, ISO & HACCP compliant. Global shipping available.";
  const pageUrl = "https://balajiexports.com";
  const imageUrl = "https://balajiexports.com/images/logo.png";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="peanut exporter India, groundnut supplier, peanut oil manufacturer, peanut butter supplier, FSSAI certified peanuts, ISO certified groundnuts, HACCP peanuts, bulk peanut supplier, wholesale groundnuts, peanut export company, Indian groundnuts, premium peanuts, peanut manufacturers India, peanut processing company, peanut trading company, peanut export business, peanut importers worldwide, peanut suppliers directory, peanut exporters list, peanut manufacturers directory, peanut processing industry, peanut trading platform, peanut export market, peanut import market, peanut suppliers network, peanut exporters network, peanut manufacturers network, peanut processing network, peanut trading network, peanut export network" />
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
      <meta property="og:image:alt" content="Balaji Exports - Leading Indian Peanut Exporter" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BalajiExports" />
      <meta name="twitter:creator" content="@BalajiExports" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Balaji Exports - Leading Indian Peanut Exporter" />

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
            },
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
                "name": "What types of peanut products do you export?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We export a wide range of peanut products including bold groundnuts, Java groundnuts, red skin peanuts, split peanuts, shelled peanuts, blanched peanuts, peanut oil, and peanut butter."
                }
              },
              {
                "@type": "Question",
                "name": "What certifications do your products have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our products are FSSAI certified, ISO certified, and HACCP compliant, ensuring the highest quality and safety standards."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer worldwide shipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer worldwide shipping to all major markets. Our logistics network ensures safe and timely delivery of your orders."
                }
              }
            ]
          })
        }}
      />
    </Head>
  );
};

export default function Home() {
  return (
    <main>
      <HomeSEOHead />
      <Banner />
      <Box sx={{ backgroundColor: '#F2E8C9' }}>
        <ProductsListing />
        <Divider sx={{ 
          my: 2, 
          width: '80%',
          maxWidth: '1000px',
          mx: 'auto',
          borderColor: 'primary.main',
          opacity: 0.18
        }} />
        <IndustrialSolutions />
        <Divider sx={{ 
          my: 2, 
          width: '80%',
          maxWidth: '1000px',
          mx: 'auto',
          borderColor: 'primary.main',
          opacity: 0.18
        }} />
        <OurJourney />
        <Box sx={{ py: 2, backgroundColor: '#F2E8C9' }}>
          <Box sx={{
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Box sx={{ width: { xs: '100%', md: '70%', lg: '60%' } }}>
              <GradientCard
                title="Our Specialization"
                description={
                  'We specialize in a wide range of peanut products, including bold groundnuts, Java groundnuts, red skin peanuts, split peanuts, shelled peanuts, and blanched peanuts for export. Our extensive portfolio also features peanut oil and peanut butter.'
                }
                gradient="greenDark"
                height={260}
                cardSx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                  background: 'linear-gradient(135deg, #2A2C1F 0%, #2A2C1F 60%, #4A5D3C 100%)',
                }}
                contentSx={{
                  p: { xs: 2.5, sm: 3, md: 3, lg: 3.5 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                buttonText={undefined}
              />
            </Box>
          </Box>
        </Box>
        <Divider sx={{ 
          my: 2, 
          width: '80%',
          maxWidth: '1000px',
          mx: 'auto',
          borderColor: 'primary.main',
          opacity: 0.18
        }} />
        <WhyChooseUs />
      </Box>
    </main>
  );
} 