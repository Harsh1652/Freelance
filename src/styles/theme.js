// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F2E8C9',
    },
    primary: {
      main: '#264D36',
    },
    secondary: {
      main: '#3A6B3D',
      contrastText: '#FFFFFF',
    },
    customColors: {
      lightGold: '#EADBA5',    // Regular text color
      darkGold: '#D7C68D',     // Headings and call-to-action text color
      accentGreen: '#6D8C3F',  // Light green accent color
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
    },
  },
  // Add custom gradients with generic naming
  customGradients: {
    greenDark: 'linear-gradient(135deg, #2A2C1F 0%, #2A2C1F 60%, #4A5D3C 100%)',
  }
});

export default theme;
