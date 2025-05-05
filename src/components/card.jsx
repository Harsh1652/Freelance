// src/components/card.jsx
import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  useTheme
} from '@mui/material';

const GradientCard = ({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  imageAlt = 'Card image',
  buttonText = 'Learn More',
  onButtonClick,
  gradient = 'greenDark', // Default gradient from theme
  height = 400,
  cardSx = {},
  contentSx = {}
}) => {
  const theme = useTheme();
  
  // Get the gradient from theme or use the provided one
  const backgroundGradient = theme.customGradients[gradient] || gradient;

  return (
    <Card 
      elevation={3}
      sx={{ 
        height: height, 
        display: 'flex', 
        flexDirection: 'column',
        background: backgroundGradient,
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
        },
        ...cardSx
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          image={imageUrl}
          alt={imageAlt}
          sx={{ 
            height: 0,
            paddingTop: '56.25%', // 16:9 aspect ratio
            objectFit: 'cover',
          }}
        />
      )}
      
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          color: theme.palette.customColors.lightGold,
          ...contentSx
        }}
      >
        {title && (
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            fontFamily="Lato, sans-serif"
            fontWeight="bold"
            color={theme.palette.customColors.darkGold}
            sx={{ mb: 1 }}
          >
            {title}
          </Typography>
        )}
        
        {subtitle && (
          <Typography 
            variant="subtitle1" 
            fontFamily="Lato, sans-serif"
            color={theme.palette.customColors.lightGold}
            sx={{ mb: 2 }}
          >
            {subtitle}
          </Typography>
        )}
        
        {description && (
          <Typography 
            variant="body2" 
            color={theme.palette.customColors.lightGold}
            sx={{ mb: 3 }}
          >
            {description}
          </Typography>
        )}
        
        {buttonText && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 'auto' }}>
            <Button 
              variant="contained"
              onClick={onButtonClick}
              sx={{ 
                bgcolor: theme.palette.customColors.accentGreen,
                color: '#FFFFFF',
                '&:hover': {
                  bgcolor: theme.palette.secondary.main,
                },
                borderRadius: 1,
                textTransform: 'none',
                px: 3,
              }}
            >
              {buttonText}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default GradientCard;