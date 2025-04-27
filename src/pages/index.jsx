import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Typography variant="h3" component="h1">
          Home Page
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
