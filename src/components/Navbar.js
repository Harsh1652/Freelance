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
  Grid
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

// Import the logo image
// Since the image is in the assets/images folder based on your file structure
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // State for products dropdown
  const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Product items based on your product pages
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

  // Updated navItems to include path information and the new headings
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Peanut Processing', path: '/peanut-processing' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Blogs', path: '/blogs' },   
    { name: 'Health Benfits', path: '/health-benefits' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Left side navigation items
  const leftNavItems = navItems.slice(0, 4);
  // Right side navigation items
  const rightNavItems = navItems.slice(4, 7);

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

  const drawer = (
    <Box 
      onClick={(e) => e.target.tagName !== 'DIV' && handleDrawerToggle()} 
      sx={{ 
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        height: '100%' 
      }}
    >
      <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box 
          component="img"
          src={Logo}
          alt="Balaji Export Logo"
          sx={{ 
            height: 100, 
            width: 'auto',
            maxWidth: '90%',
            mb: 1
          }}
        />
      </Box>
      <List>
        {navItems.map((item) => (
          item.hasDropdown ? (
            <React.Fragment key={item.name}>
              <ListItemButton onClick={toggleMobileProductsMenu} sx={{ textAlign: 'center' }}>
                <ListItemText 
                  primary={item.name}
                  sx={{
                    '& .MuiTypography-root': {
                      fontFamily: 'Inter',
                      fontWeight: '500',
                      color: theme.palette.primary.main,
                    }
                  }}
                />
                {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {productItems.map((product) => (
                    <ListItem 
                      key={product.name}
                      disablePadding
                      component={RouterLink}
                      to={product.path}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText 
                        primary={product.name} 
                        sx={{
                          textAlign: 'center',
                          '& .MuiTypography-root': {
                            fontFamily: 'Inter',
                            fontWeight: '500',
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
            >
              <ListItemText
                primary={item.name}
                sx={{
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    color: theme.palette.primary.main,
                  }
                }}
              />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  // Common button style for both sets
  const commonButtonStyle = {
    color: theme.palette.customColors.lightGold,
    fontFamily: 'Inter',
    mx: { sm: 0.5, md: 1 },
    borderRadius: 1,
    padding: '6px 12px',
    fontSize: { sm: '0.875rem', md: '1rem' },
    '&:hover': {
      color: theme.palette.customColors.accentGreen, 
      backgroundColor: 'rgba(109, 140, 63, 0.2)'
    }
  };

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        background: theme.customGradients?.greenDark,
        color: theme.palette.customColors?.lightGold,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ 
          px: { xs: 1, sm: 2 }, 
          py: { xs: 0.5, sm: 1 } 
        }}>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: theme.palette.customColors.lightGold }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {/* Logo in mobile view - INCREASED SIZE */}
                <Box 
                  component="img"
                  src={Logo}
                  alt="Balaji Export Logo"
                  sx={{ 
                    height: { xs: 60, sm: 70 },
                    width: 'auto'
                  }}
                />
              </Box>
              <Box sx={{ width: 48 }} />
            </>
          ) : (
            <Grid container alignItems="center">
              {/* Left side navigation */}
              <Grid item xs={4}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}>
                  {/* Home, About Us, and Peanut Processing */}
                  {leftNavItems.slice(0, 3).map((item) => (
                    <Button 
                      key={item.name} 
                      component={RouterLink} 
                      to={item.path}
                      sx={commonButtonStyle}
                    >
                      {item.name}
                    </Button>
                  ))}
                  
                  {/* Products with dropdown */}
                  <Button 
                    aria-controls="products-menu"
                    aria-haspopup="true"
                    onClick={handleProductsMenuOpen}
                    sx={{
                      ...commonButtonStyle,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    Products
                    {productsMenuAnchor ? <ExpandLess sx={{ ml: 0.5, fontSize: '1rem' }} /> : <ExpandMore sx={{ ml: 0.5, fontSize: '1rem' }} />}
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
                        borderRadius: 1,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        mt: 1
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
                          fontSize: '0.95rem',
                          py: 1,
                          px: 2,
                          minWidth: '180px',
                          '&:hover': {
                            backgroundColor: 'rgba(109, 140, 63, 0.1)',
                            color: theme.palette.primary.main
                          }
                        }}
                      >
                        {product.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>

              {/* Center logo */}
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box 
                  component={RouterLink}
                  to="/"
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <Box 
                    component="img"
                    src={Logo}
                    alt="Balaji Export Logo"
                    sx={{ 
                      height: { sm: 70, md: 80 },
                      width: 'auto'
                    }}
                  />
                </Box>
              </Grid>

              {/* Right side navigation */}
              <Grid item xs={4}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}>
                  {/* Blogs, Health Benefits, and Services */}
                  {rightNavItems.map((item) => (
                    <Button
                      key={item.name}
                      component={RouterLink}
                      to={item.path}
                      sx={commonButtonStyle}
                    >
                      {item.name}
                    </Button>
                  ))}
                  
                  {/* Contact Us - Circular Button */}
                  <Button
                    component={RouterLink}
                    to="/contact"
                    sx={{
                      mx: { sm: 0.5, md: 1 },
                      fontFamily: 'Inter',
                      textTransform: 'none',
                      borderRadius: '50px',
                      padding: { sm: '6px 14px', md: '8px 16px' },
                      minWidth: { sm: '70px', md: '88px' },
                      height: { sm: '36px', md: '40px' },
                      fontSize: { sm: '0.875rem', md: '1rem' },
                      color: theme.palette.customColors.lightGold,
                      backgroundColor: 'transparent',
                      border: `2px solid ${theme.palette.customColors.accentGreen}`,
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: theme.palette.customColors.accentGreen,
                        color: 'white',
                        boxShadow: '0 4px 8px rgba(109, 140, 63, 0.3)',
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
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