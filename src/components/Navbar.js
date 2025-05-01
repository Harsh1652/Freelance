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
  ListItemButton
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
    { name: 'Peanut Oil', path: '/products/peanut-oil' },
  ];

  // Updated navItems to include path information
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },   
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Explore', path: '/explore' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

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
            <>
              <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                justifyContent: 'flex-start',
                flexWrap: 'wrap'
              }}>
                {/* First two items */}
                {navItems.slice(0, 2).map((item) => (
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

              {/* Logo in center - INCREASED SIZE */}
              <Box 
                component={RouterLink}
                to="/"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: { sm: 1, md: 2 },
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

              <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                {navItems.slice(3, 5).map((item) => (
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
            </>
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