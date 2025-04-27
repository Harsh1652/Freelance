import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Grid
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Logo from '../assets/images/Logo.png';


const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Form validation state
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  // Submission feedback state
  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !/^[0-9]{10}$/.test(formData.phone.replace(/[-()\s]/g, '')),
      message: formData.message.trim() === ''
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to your backend here
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitStatus({
        open: true,
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      // Show error message
      setSubmitStatus({
        open: true,
        success: false,
        message: 'Please correct the errors in the form.'
      });
    }
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSubmitStatus({
      ...submitStatus,
      open: false
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Grid container spacing={4}>
        {/* Left side - Logo and contact intro */}
        <Grid item xs={12} md={5} sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Added Company Logo */}
          <Box 
            component="img"
            src={Logo} 
            alt="Balaji Exports Logo"
            sx={{
              width: '80%',
              maxWidth: 320,
              height: 'auto',
              mb: 0,
              filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))'
            }}
          />
          
          <Typography variant="h6" component="div" sx={{ color: 'primary.main', textAlign: 'center', mt: 2 , fontFamily: 'Inter' }}>
            Get in touch with us
          </Typography>
          <Typography variant="body1" component="div" sx={{ color: 'text.secondary', textAlign: 'center', mt: 1, fontFamily: 'Inter' }}>
            We're here to answer any questions you might have
          </Typography>
        </Grid>
        
        {/* Right side - Contact form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ 
            p: { xs: 3, md: 4 }, 
            borderRadius: 2,
            bgcolor: 'white',
            border: '1px solid',
            borderColor: 'primary.light'
          }}>
            <Box textAlign="left" mb={4}>
              <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', fontFamily: 'Lato' }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontFamily: 'Inter'}}>
                Please fill out the form below and we'll get back to you shortly.
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? 'Name is required' : ''}
                variant="outlined"
                color="primary"
              />
              
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? 'Please enter a valid email address' : ''}
                variant="outlined"
                color="primary"
              />
              
              <TextField
                required
                fullWidth
                id="phone"
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                helperText={errors.phone ? 'Please enter a valid 10-digit phone number' : ''}
                variant="outlined"
                color="primary"
              />
              
              <TextField
                required
                fullWidth
                id="message"
                name="message"
                label="Your Message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message ? 'Please enter your message' : ''}
                variant="outlined"
                color="primary"
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Feedback Snackbar */}
      <Snackbar
        open={submitStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.success ? 'success' : 'error'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs;