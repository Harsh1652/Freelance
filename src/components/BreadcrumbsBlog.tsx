import React from 'react';
import { Breadcrumbs, Link, Typography, useTheme, Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NextLink from 'next/link';

interface BreadcrumbsBlogProps {
  country: string;
}

const BreadcrumbsBlog: React.FC<BreadcrumbsBlogProps> = ({ country }) => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: theme.palette.customColors.accentGreen }} />}
        aria-label="breadcrumb"
        sx={{ mt: 8, mb: 2, fontFamily: 'Inter, sans-serif', px: { xs: 2, sm: 3, md: 4 } }}
      >
        <Link
          component={NextLink}
          href="/"
          underline="hover"
          sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
        >
          Home
        </Link>
        <Link
          component={NextLink}
          href="/blogs"
          underline="hover"
          sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
        >
          Blogs
        </Link>
        <Typography color={theme.palette.customColors.accentGreen} fontWeight={700}>
          {country}
        </Typography>
      </Breadcrumbs>
    </Container>
  );
};

export default BreadcrumbsBlog; 