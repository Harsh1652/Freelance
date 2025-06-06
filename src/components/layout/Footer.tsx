'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
  Collapse,
  List,
  ListItem,
  Button
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Image from 'next/image';
import Logo from '@/assets/images/Logo.png';

const MarketLink = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '12px 16px',
  backgroundColor: 'transparent',
  color: theme.palette.customColors.lightGold,
  fontSize: '1rem',
  fontFamily: 'Inter, sans-serif',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: theme.palette.customColors.accentGreen,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  }
}));

const Footer = () => {
  const theme = useTheme();
  const router = useRouter();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const peanutProducts = [
    { name: 'Bold Peanuts', path: '/products/bold-peanuts' },
    { name: 'Runner Peanuts', path: '/products/runner-peanuts' },
    { name: 'Red Skin Peanuts', path: '/products/red-skin-peanuts' },
    { name: 'Blanched Peanuts', path: '/products/blanched-peanuts' },
    { name: 'Spanish Peanuts', path: '/products/spanish-peanuts' },
    { name: 'TJ Peanuts', path: '/products/tj-peanuts' },
    { name: 'Long Java Peanuts', path: '/products/long-java-peanuts' },
    { name: 'G20 Peanuts', path: '/products/g20-peanuts' },
    { name: 'K6 Peanuts', path: '/products/k6-peanuts' },
    { name: 'Mathadi Peanuts', path: '/products/mathadi-peanuts' },
    { name: 'Girnar 4 - Girnar 5 Peanuts', path: '/products/girnar-peanuts' },
    { name: 'ICGV 03043 Peanuts', path: '/products/icgv03043-peanuts' },
    { name: 'ICGV 15099 Peanuts', path: '/products/icgv-15099-peanuts' },
    { name: 'Virginia Peanuts', path: '/products/virginia-peanuts' },
    { name: 'Peanut Oil', path: '/products/peanut-oil' },
  ];

  // Add internal links data
  const internalLinks = [
    { name: 'Vietnam Market', path: '/blogs/vietnam' }
  ];

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  return (
    <Box sx={{ 
      background: theme.customGradients.greenDark,
      color: theme.palette.customColors.lightGold,
      pt: { xs: 4, sm: 5, md: 6 },
      pb: { xs: 2, sm: 3 }
    }} className="notranslate">
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, sm: 4 }} justifyContent="space-between">
          {/* Logo Section */}
          <Grid item xs={12} sm={6} md={3} sx={{ 
            display: 'flex', 
            justifyContent: { xs: 'center', sm: 'flex-start' }, 
            mb: { xs: 2, sm: 0 } 
          }}>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}>
              {/* Logo - Increased size */}
              <Image
                src={Logo}
                alt="Balaji Export Logo"
                width={220}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '-24px'
                }}
              />
              
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: 'Inter',
                  fontWeight: 'normal',
                  color: theme.palette.customColors.lightGold,
                  textAlign: { xs: 'center', sm: 'flex-start' },
                  mt: -1,
                  mb: 1,
                  ml: { xs: 0, sm: 3 }
                }}
              >
                Excellence in Every Shell
              </Typography>
              
              {/* Social Media Icons */}
              <Stack 
                direction="row" 
                spacing={{ xs: 0.5, sm: 1 }} 
                sx={{ mt: 2 }}
                flexWrap="wrap"
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
              >
                {[
                  { icon: <InstagramIcon fontSize={isXsScreen ? "small" : "medium"} />, label: "Instagram" },
                  { icon: <FacebookIcon fontSize={isXsScreen ? "small" : "medium"} />, label: "Facebook" },
                  { icon: <TwitterIcon fontSize={isXsScreen ? "small" : "medium"} />, label: "Twitter" },
                  { icon: <YouTubeIcon fontSize={isXsScreen ? "small" : "medium"} />, label: "YouTube" },
                  { icon: <LinkedInIcon fontSize={isXsScreen ? "small" : "medium"} />, label: "LinkedIn" }
                ].map((item, index) => (
                  <IconButton 
                    key={index}
                    aria-label={item.label}
                    size={isXsScreen ? "small" : "medium"}
                    sx={{ 
                      color: theme.palette.customColors.lightGold,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      '&:hover': { bgcolor: theme.palette.customColors.accentGreen},
                      mb: 1
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4} lg={5}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: { xs: 'center', sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' },
              height: '100%',
              justifyContent: 'center'
            }}>
              <Typography 
                variant={isXsScreen ? "subtitle1" : "h6"} 
                component="div" 
                sx={{ 
                  mb: { xs: 1, sm: 2 }, 
                  color: 'theme.palette.customColors.darkGold',
                  fontFamily: 'Lato',
                  fontWeight: 'bold' 
                }}
              >
                BALAJI EXPORTS
              </Typography>

              <Stack spacing={{ xs: 1, sm: 2 }} sx={{ mb: 2, width: '100%' }}>
                {[
                  { 
                    icon: <LocationOnIcon sx={{ color: theme.palette.customColors.accentGreen}} fontSize={isXsScreen ? "small" : "medium"} />, 
                    text: "ROOM NO. 804, KRISHNAAMRUT KALWA KRICK ROAD, THANE, MUMBAI,400605", 
                    href: "https://www.google.com/maps/search/KRISHNAAMRUT+KALWA+KRICK+ROAD+THANE", 
                    sx: { fontFamily: 'Inter' }
                  },
                  { 
                    icon: <LocationOnIcon sx={{ color: theme.palette.customColors.accentGreen}} fontSize={isXsScreen ? "small" : "medium"} />, 
                    text: "VM Group Europe Ltd, Ingenuity Centre,\nUniversity Of Nottingham Innovation Park, Triumph Road, Nottingham, England", 
                    href: "#", 
                    sx: { fontFamily: 'Inter', whiteSpace: 'pre-line' }
                  },
                  { 
                    icon: <PhoneIcon sx={{ color: theme.palette.customColors.accentGreen }} fontSize={isXsScreen ? "small" : "medium"} />, 
                    text: "+91 9778888339", 
                    href: "tel:+919778888339", 
                    sx: { fontFamily: 'Inter' } 
                  },
                  { 
                    icon: <PhoneIcon sx={{ color: theme.palette.customColors.accentGreen }} fontSize={isXsScreen ? "small" : "medium"} />, 
                    text: "+44 7407747598 (London)", 
                    href: "tel:+447407747598", 
                    sx: { fontFamily: 'Inter' } 
                  },
                  { 
                    icon: <EmailIcon sx={{ color: theme.palette.customColors.accentGreen }} fontSize={isXsScreen ? "small" : "medium"} />, 
                    text: "amansharma3833@gmail.com", 
                    href: "mailto:amansharma3833@gmail.com", 
                    sx: { fontFamily: 'Inter' } 
                  },
                  { 
                    icon: <AccessTimeIcon sx={{ color: theme.palette.customColors.accentGreen }} fontSize={isXsScreen ? "small" : "medium"} />, 
                    text: "Office Timing: 24/7", 
                    href: null, 
                    sx: { fontFamily: 'Inter' } 
                  }
                ].map((item, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      maxWidth: '100%'
                    }}
                  >
                    <Box sx={{ mr: 1, mt: '2px', flexShrink: 0 }}>{item.icon}</Box>
                    {item.href ? (
                      <Typography 
                        component="a"
                        href={item.href}
                        variant={isXsScreen ? "caption" : "body2"}
                        sx={{ 
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          color: theme.palette.customColors.lightGold,
                          textDecoration: 'none',
                          transition: 'color 0.3s',
                          '&:hover': { color: theme.palette.customColors.accentGreen },
                          cursor: 'pointer',
                          whiteSpace: 'pre-line',
                          display: 'block'
                        }}
                      >
                        {item.text}
                      </Typography>
                    ) : (
                      <Typography 
                        variant={isXsScreen ? "caption" : "body2"}
                        sx={{ 
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          whiteSpace: 'pre-line',
                          display: 'block'
                        }}
                      >
                        {item.text}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Page Links */}
          <Grid item xs={6} sm={3} md={3} lg={2} sx={{ 
            display: { xs: 'flex', sm: 'flex' }, 
            justifyContent: { xs: 'center', sm: 'flex-start' },  
            order: { xs: 3, md: 3 },
            position: 'relative',
            zIndex: 10
          }}>
            <Box sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-start' },
              textAlign: { xs: 'center', sm: 'left' },
              width: '100%',
              position: 'relative',
              zIndex: 10
            }}>
              {/* Quick Links Heading */}
              <Typography 
                variant={isXsScreen ? "subtitle2" : "h6"} 
                component="div" 
                sx={{ 
                  mb: { xs: 1, sm: 2 }, 
                  color: theme.palette.customColors.accentGreen,
                  fontFamily: 'Lato',
                  fontWeight: 'bold' 
                }}
              >
                QUICK LINKS
              </Typography>
              
              <Stack spacing={{ xs: 0.5, sm: 1 }} sx={{ 
                width: '100%',
                position: 'relative',
                zIndex: 10,
                overflow: 'visible'
              }}>
                {/* Regular Links in same sequence as Navbar */}
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "Nut Journey", path: "/nut-journey" }
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    style={{ 
                      fontFamily: 'Inter', 
                      fontWeight: 'bold', 
                      color: theme.palette.customColors.lightGold,
                      transition: 'color 0.3s ease', 
                      cursor: 'pointer',
                      display: 'block',
                      padding: '8px 4px',
                      margin: '2px 0',
                      width: '100%',
                      textAlign: 'left',
                      fontSize: isXsScreen ? '0.875rem' : (isSmallScreen ? '1rem' : '1.25rem'),
                      position: 'relative',
                      zIndex: 10,
                      userSelect: 'none',
                      border: '1px solid transparent',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.palette.customColors.accentGreen;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.palette.customColors.lightGold;
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Products Dropdown */}
                <Box sx={{ width: '100%' }}>
                  <Box 
                    onClick={toggleProductDropdown}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', sm: 'space-between' },
                      cursor: 'pointer',
                      mb: 0.5
                    }}
                  >
                    <Typography 
                      variant={isXsScreen ? "body2" : (isSmallScreen ? "body1" : "h6")}
                      sx={{ 
                        fontFamily: 'Inter', 
                        fontWeight: 'bold', 
                        color: theme.palette.customColors.lightGold,
                        transition: 'color 0.3s', 
                        '&:hover': { color: theme.palette.customColors.accentGreen },
                      }}
                    >
                      Products
                    </Typography>
                    {productDropdownOpen ? 
                      <KeyboardArrowUpIcon sx={{ color: theme.palette.customColors.lightGold }} /> : 
                      <KeyboardArrowDownIcon sx={{ color: theme.palette.customColors.lightGold }} />
                    }
                  </Box>
                  
                  <Collapse in={productDropdownOpen}>
                    <List 
                      disablePadding 
                      sx={{ 
                        ml: { xs: 0, sm: 2 },
                        mt: 0.5,
                        mb: 1,
                        maxHeight: '200px',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                          width: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: 'rgba(255, 255, 255, 0.1)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: theme.palette.customColors.accentGreen,
                        }
                      }}
                    >
                      {peanutProducts.map((product, index) => (
                        <ListItem key={index} disablePadding sx={{ py: 0.3 }}>
                          <Link
                            href={product.path}
                            style={{ 
                              color: theme.palette.customColors.lightGold,
                              textDecoration: 'none',
                              transition: 'color 0.3s', 
                              fontFamily: 'Inter',
                              display: 'block',
                              width: '100%',
                              textAlign: 'left',
                              fontSize: isXsScreen ? '0.875rem' : '1rem',
                              '&:hover': { color: theme.palette.customColors.accentGreen }
                            }}
                          >
                            {product.name}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
                
                {/* Remaining Links in same sequence as Navbar */}
                {[
                  { name: "Services", path: "/services" },
                  { name: "Health Benefits", path: "/health-benefits" },
                  { name: "Careers", path: "/careers" },
                  { name: "Contact Us", path: "/contact" }
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    style={{ 
                      fontFamily: 'Inter', 
                      fontWeight: 'bold', 
                      color: theme.palette.customColors.lightGold,
                      transition: 'color 0.3s ease', 
                      cursor: 'pointer',
                      display: 'block',
                      padding: '8px 4px',
                      margin: '2px 0',
                      width: '100%',
                      textAlign: 'left',
                      fontSize: isXsScreen ? '0.875rem' : (isSmallScreen ? '1rem' : '1.25rem'),
                      position: 'relative',
                      zIndex: 10,
                      userSelect: 'none',
                      border: '1px solid transparent',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.palette.customColors.accentGreen;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.palette.customColors.lightGold;
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Internal Links and Blog Posts Combined Section */}
        <Box sx={{ 
          mt: { xs: 4, sm: 5 },
          pb: { xs: 2, sm: 3 },
          borderTop: '1px solid rgba(255,255,255,0.1)',
          pt: { xs: 3, sm: 4 }
        }}>
          <Box sx={{ textAlign: 'left', mb: 3, pl: { xs: 2, sm: 4 } }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: theme.palette.customColors.darkGold,
                fontFamily: 'Lato',
                fontWeight: 'bold'
              }}
            >
              Large Market Share in following Countries:
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="flex-start" sx={{ px: { xs: 2, sm: 4 } }}>
            {internalLinks.map((link, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Button
                  fullWidth
                  onClick={() => {
                    router.push(link.path);
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                  sx={{
                    backgroundColor: 'transparent',
                    color: theme.palette.customColors.lightGold,
                    fontSize: '1rem',
                    fontFamily: 'Inter',
                    padding: '12px 16px',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: theme.palette.customColors.accentGreen,
                      transform: 'translateY(-2px)',
                      boxShadow: theme => `0 4px 8px ${alpha(theme.palette.common.black, 0.2)}`
                    }
                  }}
                >
                  {link.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Copyright Section */}
        <Divider sx={{ 
          my: { xs: 2, sm: 3 }, 
          bgcolor: 'rgba(255,255,255,0.1)' 
        }} />
        <Box sx={{ textAlign: 'center', pt: { xs: 0.5, sm: 1 } }}>
          <Typography 
            variant={isXsScreen ? "caption" : "body2"} 
            color="#EADBA5"
            fontFamily="Inter" 
          >
            © {new Date().getFullYear()} Balaji Export
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 