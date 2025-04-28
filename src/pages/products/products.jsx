import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const Products = () => {
  const navigate = useNavigate();
  
  // Function to handle navigation to runner peanuts page
  const goToRunnerPeanuts = () => {
    navigate('/products/runner-peanuts');
  };
  
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Products
      </Typography>
      
      {/* Button to runner peanuts page */}
      <Button 
        onClick={goToRunnerPeanuts}
        variant="contained" 
        sx={{ 
          mt: 2, 
          bgcolor: '#295c38',
          '&:hover': {
            bgcolor: '#1e4429',
          }
        }}
      >
        View Runner Peanuts
      </Button>
      
      {/* Products listing will go here */}
    </Box>
  );
};

export default Products;