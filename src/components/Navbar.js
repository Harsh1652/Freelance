import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Menu,
  MenuItem,
  Collapse,
  ListItemButton,
  Grid,
  Stack
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

// Import the logo image
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // State for products dropdown
  const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Product items
  const productItems = [
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
    { name: 'ICGV 15099 Peanuts', path: '/products/icgv15099-peanuts' },
    { name: 'Virginia Peanuts', path: '/products/virginia-peanuts' },
    { name: 'Peanut Butter', path: '/products/peanut-butter' },
    { name: 'Peanut Oil', path: '/products/peanut-oil' },
  ];

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Nut Journey', path: '/nut-journey' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Services', path: '/services' },
    { name: 'Health Benefits', path: '/health-benefits' },
    { name: 'Blogs', path: '/blogs' },   
    { name: 'Contact Us', path: '/contact' }
  ];

  // Split navigation items for desktop layout
  const leftNavItems = navItems.slice(0, 4); // Home, About Us, Nut Journey, Products
  const rightNavItems = navItems.slice(4, 7); // Services, Health Benefits, Blogs

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProductsMenuOpen = (event) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuAnchor(null);
  };

  const toggleMobileProductsMenu = () => {
    setMobileProductsOpen(!mobileProductsOpen);
  };

  // Mobile drawer content
  const drawer = (
    <Box 
      onClick={(e) => e.target.tagName !== 'DIV' && handleDrawerToggle()} 
      sx={{ 
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        height: '100%',
        width: 280
      }}
    >
      {/* Logo in drawer */}
      <Box sx={{ my: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box 
          component="img"
          src={Logo}
          alt="Balaji Export Logo"
          sx={{ 
            height: 80, 
            width: 'auto',
            maxWidth: '90%',
            mb: -0.5
          }}
        />
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Inter',
            fontWeight: 600,
            color: theme.palette.primary.main
          }}
        >
          Balaji Exports
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'Inter',
            fontWeight: 'normal',
            color: theme.palette.primary.main,
            mt: -0.5
          }}
        >
          Excellence in Every Shell
        </Typography>
      </Box>
      
      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          item.hasDropdown ? (
            <React.Fragment key={item.name}>
              <ListItemButton 
                onClick={toggleMobileProductsMenu} 
                sx={{ 
                  textAlign: 'center',
                  borderRadius: 1,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(109, 140, 63, 0.1)'
                  }
                }}
              >
                <ListItemText 
                  primary={item.name}
                  sx={{
                    '& .MuiTypography-root': {
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: theme.palette.primary.main,
                      fontSize: '1rem'
                    }
                  }}
                />
                {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ mb: 1 }}>
                  {productItems.map((product) => (
                    <ListItem 
                      key={product.name}
                      disablePadding
                      component={RouterLink}
                      to={product.path}
                      sx={{ 
                        pl: 4,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: 'rgba(109, 140, 63, 0.05)'
                        }
                      }}
                    >
                      <ListItemText 
                        primary={product.name} 
                        sx={{
                          textAlign: 'left',
                          '& .MuiTypography-root': {
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            color: theme.palette.secondary.main,
                            fontSize: '0.9rem'
                          }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem 
              key={item.name} 
              disablePadding 
              component={RouterLink} 
              to={item.path}
              sx={{
                borderRadius: 1,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'rgba(109, 140, 63, 0.1)'
                }
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: theme.palette.primary.main,
                    fontSize: '1rem',
                    py: 1
                  }
                }}
              />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  // Common button styles
  const navButtonStyle = {
    color: theme.palette.customColors?.lightGold || '#F5E6A3',
    fontFamily: 'Inter',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: 1,
    padding: { xs: '8px 10px', md: '10px 14px', lg: '10px 18px' },
    fontSize: { xs: '1rem', md: '1.1rem', lg: '1.2rem' },
    minWidth: 'auto',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.customColors?.accentGreen || '#6D8C3F',
      backgroundColor: 'rgba(109, 140, 63, 0.15)',
      transform: 'translateY(-1px)'
    }
  };

  const contactButtonStyle = {
    fontFamily: 'Inter',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '25px',
    padding: { xs: '8px 14px', md: '10px 18px', lg: '12px 22px' },
    fontSize: { xs: '1rem', md: '1.1rem', lg: '1.15rem' },
    color: theme.palette.customColors?.lightGold || '#F5E6A3',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.customColors?.accentGreen || '#6D8C3F'}`,
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: theme.palette.customColors?.accentGreen || '#6D8C3F',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(109, 140, 63, 0.3)',
    }
  };

  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        background: theme.customGradients?.greenDark || 'linear-gradient(135deg, #2E5902 0%, #4A7C59 100%)',
        color: theme.palette.customColors?.lightGold || '#F5E6A3',
        borderBottom: `1px solid rgba(245, 230, 163, 0.1)`
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: 64, sm: 72, md: 80 },
            px: { xs: 1, sm: 2 }
          }}
        >
          {isMobile ? (
            <>
              {/* Mobile Layout */}
              <IconButton
                aria-label="open navigation menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  mr: 2, 
                  color: theme.palette.customColors?.lightGold || '#F5E6A3',
                  '&:hover': {
                    backgroundColor: 'rgba(245, 230, 163, 0.1)'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              
              {/* Centered Logo */}
              <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Box 
                  component={RouterLink}
                  to="/"
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <Box 
                    component="img"
                    src={Logo}
                    alt="Balaji Export Logo"
                    sx={{ 
                      height: { xs: 50, sm: 60 },
                      width: 'auto',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      },
                      mb: 0
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: 'Inter',
                      fontWeight: 'normal',
                      color: theme.palette.customColors?.lightGold || '#F5E6A3',
                      mt: -1,
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      textAlign: 'center'
                    }}
                  >
                    Excellence in Every Shell
                  </Typography>
                </Box>
              </Box>
              
              {/* Spacer to balance the hamburger menu */}
              <Box sx={{ width: 48 }} />
            </>
          ) : (
            <>
              {/* Desktop Layout */}
              <Box sx={{ 
                display: 'flex', 
                width: '100%', 
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                {/* Left Navigation */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flex: 1,
                  gap: { md: 0.5, lg: 1 }
                }}>
                  {leftNavItems.slice(0, 3).map((item) => (
                    <Button 
                      key={item.name} 
                      component={RouterLink} 
                      to={item.path}
                      sx={navButtonStyle}
                    >
                      {item.name}
                    </Button>
                  ))}
                  
                  {/* Products Dropdown */}
                  <Button 
                    aria-controls="products-menu"
                    aria-haspopup="true"
                    onClick={handleProductsMenuOpen}
                    endIcon={productsMenuAnchor ? <ExpandLess /> : <ExpandMore />}
                    sx={navButtonStyle}
                  >
                    Products
                  </Button>
                  
                  <Menu
                    id="products-menu"
                    anchorEl={productsMenuAnchor}
                    keepMounted
                    open={Boolean(productsMenuAnchor)}
                    onClose={handleProductsMenuClose}
                    sx={{
                      '& .MuiPaper-root': {
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 2,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        mt: 1,
                        maxHeight: 400,
                        overflowY: 'auto'
                      }
                    }}
                  >
                    {productItems.map((product) => (
                      <MenuItem 
                        key={product.name} 
                        component={RouterLink} 
                        to={product.path}
                        onClick={handleProductsMenuClose}
                        sx={{
                          fontFamily: 'Inter',
                          color: theme.palette.secondary.main,
                          fontSize: '0.9rem',
                          py: 1.5,
                          px: 3,
                          minWidth: '200px',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(109, 140, 63, 0.1)',
                            color: theme.palette.primary.main,
                            transform: 'translateX(4px)'
                          }
                        }}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                {/* Center Logo */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: '0 0 auto'
                }}>
                  <Box 
                    component={RouterLink}
                    to="/"
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <Box 
                      component="img"
                      src={Logo}
                      alt="Balaji Export Logo"
                      sx={{ 
                        height: { md: 60, lg: 70, xl: 80 },
                        width: 'auto',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        },
                        mb: 0
                      }}
                    />
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        fontFamily: 'Inter',
                        fontWeight: 'normal',
                        color: theme.palette.customColors?.lightGold || '#F5E6A3',
                        mt: -1,
                        fontSize: { md: '0.75rem', lg: '0.8rem' },
                        textAlign: 'center'
                      }}
                    >
                      Excellence in Every Shell
                    </Typography>
                  </Box>
                </Box>

                {/* Right Navigation */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flex: 1,
                  gap: { md: 0.5, lg: 1 }
                }}>
                  {rightNavItems.map((item) => (
                    <Button
                      key={item.name}
                      component={RouterLink}
                      to={item.path}
                      sx={navButtonStyle}
                    >
                      {item.name}
                    </Button>
                  ))}
                  
                  {/* Contact Us Button */}
                  <Button
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      ...contactButtonStyle,
                      ml: { md: 1, lg: 2 }
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;