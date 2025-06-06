"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  CircularProgress
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";

const ContactUs = () => {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyZOLB-pJZfwq-XMOFNOHd2nvaKm8-pvvJf8hHxfsIcUsUU_qJBun_zY74KUpEIBE0BpQ/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: "",
    productTypes: [] as string[]
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
    product: false,
    productTypes: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    success: false,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value
    });
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData({
      ...formData,
      productTypes: checked
        ? [...formData.productTypes, value]
        : formData.productTypes.filter((type) => type !== value)
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !/^[0-9]{10}$/.test(formData.phone.replace(/[-()\s]/g, "")),
      message: formData.message.trim() === "",
      product: formData.product.trim() === "",
      productTypes: formData.productTypes.length === 0
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "no-cors"
    });
    return { success: true };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await submitToGoogleSheets(formData);
        setSubmitStatus({
          open: true,
          success: true,
          message:
            "Thank you for your message! We have received your inquiry and will get back to you soon."
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          product: "",
          productTypes: []
        });
      } catch (error) {
        setSubmitStatus({
          open: true,
          success: false,
          message: "There was an error submitting your form. Please try again."
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmitStatus({
        open: true,
        success: false,
        message: "Please correct the errors in the form."
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus({
      ...submitStatus,
      open: false
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: "background.default" }}>
      <Grid container spacing={4}>
        {/* Left side - Logo and contact intro */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Company Logo */}
          <Box
            sx={{
              width: "80%",
              maxWidth: 320,
              height: "auto",
              mb: 0.5,
              filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))"
            }}
          >
            <Image
              src={Logo}
              alt="Balaji Exports Logo"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Box>
          {/* Company Slogan */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "secondary.main",
              textAlign: "center",
              mt: -5,
              mb: 2,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.1rem" }
            }}
          >
            Excellence in every shell
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "primary.main", textAlign: "center", mt: 2, fontFamily: "Inter" }}
          >
            Get in touch with us
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ color: "text.secondary", textAlign: "center", mt: 1, fontFamily: "Inter" }}
          >
            We're here to answer any questions you might have
          </Typography>
        </Grid>
        {/* Right side - Contact form */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              bgcolor: "white",
              border: "1px solid",
              borderColor: "primary.light"
            }}
          >
            <Box textAlign="left" mb={4}>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main", fontFamily: "Lato" }}
              >
                Contact Us
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontFamily: "Inter" }}>
                Please fill out the form below and we'll get back to you shortly.
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
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
                helperText={errors.phone ? "Please enter a valid 10-digit phone number" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
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
                helperText={errors.email ? "Please enter a valid email address" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
              />
              <FormControl fullWidth disabled={isSubmitting}>
                <InputLabel id="product-label">Product *</InputLabel>
                <Select
                  labelId="product-label"
                  id="product"
                  name="product"
                  value={formData.product}
                  label="Product *"
                  onChange={handleChange}
                  error={errors.product}
                >
                  <MenuItem value="">
                    <em>Select a Product</em>
                  </MenuItem>
                  <MenuItem value="bold-peanuts">Bold Peanuts</MenuItem>
                  <MenuItem value="runner-peanuts">Runner Peanuts</MenuItem>
                  <MenuItem value="red-skin-peanuts">Red Skin Peanuts</MenuItem>
                  <MenuItem value="blanched-peanuts">Blanched Peanuts</MenuItem>
                  <MenuItem value="spanish-peanuts">Spanish Peanuts</MenuItem>
                  <MenuItem value="tj-peanuts">TJ Peanuts</MenuItem>
                  <MenuItem value="long-java-peanuts">Long Java Peanuts</MenuItem>
                  <MenuItem value="g20-peanuts">G20 Peanuts</MenuItem>
                  <MenuItem value="k6-peanuts">K6 Peanuts</MenuItem>
                  <MenuItem value="mathadi-peanuts">Mathadi Peanuts</MenuItem>
                  <MenuItem value="girnar-peanuts">Girnar 4 - Girnar 5 Peanuts</MenuItem>
                  <MenuItem value="icgv03043-peanuts">ICGV 03043 Peanuts</MenuItem>
                  <MenuItem value="icgv15099-peanuts">ICGV 15099 Peanuts</MenuItem>
                  <MenuItem value="virginia-peanuts">Virginia Peanuts</MenuItem>
                  <MenuItem value="peanut-butter">Peanut Butter</MenuItem>
                  <MenuItem value="peanut-oil">Peanut Oil</MenuItem>
                </Select>
                {errors.product && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                    Please select a product
                  </Typography>
                )}
              </FormControl>
              <FormControl component="fieldset" disabled={isSubmitting}>
                <FormLabel component="legend" sx={{ mb: 1, color: "text.primary", fontWeight: "medium" }}>
                  Product Types of Interest *
                </FormLabel>
                <FormGroup
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gap: 1
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.productTypes.includes("raw-peanuts-with-shell")}
                        onChange={(e) => handleCheckboxChange("raw-peanuts-with-shell", e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Raw Peanuts (with shell)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.productTypes.includes("peanut-kernels")}
                        onChange={(e) => handleCheckboxChange("peanut-kernels", e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Peanut Kernels"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.productTypes.includes("blanched-peanuts")}
                        onChange={(e) => handleCheckboxChange("blanched-peanuts", e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Blanched Peanuts"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.productTypes.includes("roasted-blanched-peanuts")}
                        onChange={(e) => handleCheckboxChange("roasted-blanched-peanuts", e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Roasted and Blanched Peanuts"
                  />
                </FormGroup>
                {errors.productTypes && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                    Please select at least one product type
                  </Typography>
                )}
              </FormControl>
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
                helperText={errors.message ? "Please enter your message" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* Feedback Snackbar */}
      <Snackbar
        open={submitStatus.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.success ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs; 