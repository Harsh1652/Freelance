"use client";

import React from 'react';
import { Box, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

// Dynamically import the GoogleTranslateWidget with no SSR
const GoogleTranslateWidget = dynamic(
  () => import('@/components/GoogleTranslateWidget'),
  { ssr: false }
);

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const pathname = usePathname();
  
  // Only show translation widget on individual blog pages
  const isBlogPage = pathname !== '/blogs';

  return (
    <Box sx={{ position: 'relative' }}>
      {isBlogPage && (
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1000,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            p: 2,
            borderRadius: 2,
            boxShadow: theme.shadows[3],
          }}
        >
          <GoogleTranslateWidget />
        </Box>
      )}
      <Box className="blog-content">
        {children}
      </Box>
    </Box>
  );
} 