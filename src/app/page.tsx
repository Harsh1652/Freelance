'use client';

import React from 'react';
import { Box, Divider } from '@mui/material';
import Banner from '@/components/Banner';
import ProductsListing from '@/components/ProductsListing';
import OurJourney from '@/components/OurJourney';
import IndustrialSolutions from '@/components/IndustrialSolutions';
import GradientCard from '@/components/GradientCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
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