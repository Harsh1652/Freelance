import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Paper,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Divider,
  Button
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: theme.palette.background.default,
        width: '100%', // Ensure full width
        maxWidth: '100%', // Prevent overflow
        overflowX: 'hidden' // Prevent horizontal scrolling
      }}
    >
    <Container 
      maxWidth={false} // Allow container to take full width
      disableGutters={isMobile} // Remove padding on mobile
      sx={{
        px: { xs: 2, sm: 3, md: 'auto' }, // Custom padding for xs and sm screens
        maxWidth: { lg: 'lg' } // Only constrain width on large screens
      }}
    >
        {/* Welcome Section */}
        <Box sx={{ mb: 6, width: '100%' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            fontFamily="Lato, sans-serif"
            fontWeight="bold"
            color={theme.palette.primary.main}
            sx={{ 
              mb: 3,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' } // Responsive font size
            }}
          >
            Welcome to Balaji Exports
          </Typography>
          
          <Typography 
            variant="body1" 
            fontFamily="Inter, sans-serif"
            sx={{ 
              color: theme.palette.secondary.main,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              width: '100%'
            }}
          >
            Welcome to Balaji Exports, your trusted partner for the finest quality Indian groundnuts and peanuts. Based in the heart of Rajasthan, India, we are proud to be among the biggest groundnut suppliers in India with a legacy of excellence that spans over 65 years. Our deep roots in peanut farming and modern approach to groundnut export business make us one of the most reliable peanut exporters from India to global markets like the UAE, Europe, Russia, Vietnam, and Africa.
          </Typography>
        </Box>
        

        {/*--------------------------- First Heading------------------------------------- */}
        {/* Our Journey Section */}
        <Box sx={{ my: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          {/* For mobile: Heading first */}
          <Box 
            sx={{ 
              width: '100%',
              display: { xs: 'flex', md: 'none' }, 
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ 
                  mb: 0,
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Our
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ 
                  color: theme.palette.secondary.main || '#4169e1',
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Journey
              </Typography>
            </Box>
          </Box>
          
          {/* Journey Text Content - Left 49% */}
          <Card 
            elevation={4}
            sx={{ 
              borderRadius: 2,
              borderTopRightRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              borderBottomRightRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              background: theme.customGradients.greenDark,
              overflow: 'hidden',
              width: { xs: '100%', md: '49%' },
              mr: { xs: 0, md: '2%' },
              mb: { xs: 3, md: 0 },
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography 
                variant="body1" 
                fontFamily="Inter, sans-serif"
                sx={{ 
                  color: theme.palette.customColors.lightGold,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}
              >
                At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology. We proudly operate a state-of-the-art groundnut processing unit with a capacity of 4 metric tons per hour, ensuring consistent quality, hygienic packaging, and timely deliveries for our global clients.
              </Typography>
            </CardContent>
          </Card>
          
          {/* Journey Heading - Right 49% - Desktop only */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '49%' },
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              justifyContent: 'flex-start',
              pl: { md: 5 }
            }}
          >
            <Box>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ mb: 0 }}
              >
                Our
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ color: theme.palette.secondary.main || '#4169e1' }}
              >
                Journey
              </Typography>
            </Box>
          </Box>
        </Box>


        {/*--------------------------- Second Heading------------------------------------- */}
        {/* Our Specialization Section - INVERSE LAYOUT */}
        <Box sx={{ my: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          {/* For mobile: Heading first */}
          <Box 
            sx={{ 
              width: '100%',
              display: { xs: 'flex', md: 'none' }, 
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ 
                  mb: 0,
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Our
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ 
                  color: theme.palette.secondary.main || '#4169e1',
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Specialization
              </Typography>
            </Box>
          </Box>
          
          {/* Specialization Heading - Left 49% - Desktop only */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '49%' },
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              justifyContent: 'flex-end',
              pr: { md: 5 }
            }}
          >
            <Box sx={{ textAlign: { md: 'right' } }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ mb: 0 }}
              >
                Our
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ color: theme.palette.secondary.main || '#4169e1' }}
              >
                Specialization
              </Typography>
            </Box>
          </Box>
          
          {/* Specialization Text Content - Right 49% */}
          <Card 
            elevation={4}
            sx={{ 
              borderRadius: 2,
              borderTopLeftRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              borderBottomLeftRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              background: theme.customGradients.greenDark,
              overflow: 'hidden',
              width: { xs: '100%', md: '49%' },
              ml: { xs: 0, md: '2%' },
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography 
                variant="body1" 
                fontFamily="Inter, sans-serif"
                sx={{ 
                  color: theme.palette.customColors.lightGold,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}
              >
                We specialize in a wide range of peanut products, including bold groundnuts, Java groundnuts, red skin peanuts, split peanuts, shelled peanuts, and blanched peanuts for export. Our extensive groundnut export company portfolio also features peanut oil and peanut butter, making us a comprehensive supplier for all peanut-related products.
              </Typography>
            </CardContent>
          </Card>
        </Box>


        {/*--------------------------- Third Heading------------------------------------- */}
        {/* Commitment to Quality */}
        <Box sx={{ my: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          {/* For mobile: Heading first */}
          <Box 
            sx={{ 
              width: '100%',
              display: { xs: 'flex', md: 'none' }, 
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ 
                  mb: 0,
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Commitment To
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ 
                  color: theme.palette.secondary.main || '#4169e1',
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile  
                }}
              >
                Quality
              </Typography>
            </Box>
          </Box>
          
          {/* Journey Text Content - Left 49% */}
          <Card 
            elevation={4}
            sx={{ 
              borderRadius: 2,
              borderTopRightRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              borderBottomRightRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              background: theme.customGradients.greenDark,
              overflow: 'hidden',
              width: { xs: '100%', md: '49%' },
              mr: { xs: 0, md: '2%' },
              mb: { xs: 3, md: 0 },
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: theme.palette.customColors.lightGold,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}
              >
                Our commitment to quality is backed by FSSAI certification, HACCP standards, and ISO compliance, making us a preferred choice for buyers looking for lab-tested, pesticide-free groundnuts, and non-GMO peanuts India. We focus on providing food-grade groundnuts export that meet the strictest international standards
              </Typography>
            </CardContent>
          </Card>
          
          {/* Journey Heading - Right 49% - Desktop only */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '49%' },
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              justifyContent: 'flex-start',
              pl: { md: 5 }
            }}
          >
            <Box>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ mb: 0 }}
              >
                Commitment To
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ color: theme.palette.secondary.main || '#4169e1' }}
              >
                Quality
              </Typography>
            </Box>
          </Box>
        </Box>


        {/*--------------------------- Fourth Heading------------------------------------- */}
        {/* Our Products - Side by Side Layout */}
        <Box sx={{ my: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          {/* For mobile: Heading first */}
          <Box 
            sx={{ 
              width: '100%',
              display: { xs: 'flex', md: 'none' }, 
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ 
                  mb: 0,
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Our
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ 
                  color: theme.palette.secondary.main || '#4169e1',
                  fontSize: { xs: '2rem', sm: '2.5rem' } // Smaller on mobile
                }}
              >
                Products
              </Typography>
            </Box>
          </Box>
          
          {/* Products Heading - Left 49% - Desktop only */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '49%' },
              display: { xs: 'none', md: 'flex' }, 
              alignItems: 'center',
              justifyContent: 'flex-end',
              pr: { md: 5 }
            }}
          >
            <Box sx={{ textAlign: { md: 'right' } }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                color={theme.palette.primary.main}
                sx={{ mb: 0 }}
              >
                Our
              </Typography>
              <Typography 
                variant="h2" 
                component="span" 
                fontFamily="Lato, sans-serif"
                fontWeight={800}
                sx={{ color: theme.palette.secondary.main || '#4169e1' }}
              >
                Products
              </Typography>
            </Box>
          </Box>

          {/* Products Text Content - Right 49% */}
          <Card 
            elevation={4}
            sx={{ 
              borderRadius: 2,
              borderTopLeftRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              borderBottomLeftRadius: { xs: 15, md: 30 }, // Smaller radius on mobile
              background: theme.customGradients.greenDark,
              overflow: 'hidden',
              width: { xs: '100%', md: '49%' },
              ml: { xs: 0, md: '2%' },
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
              },
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography 
                variant="body1" 
                fontFamily="Inter, sans-serif"
                sx={{ 
                  color: theme.palette.customColors.lightGold,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                As leading groundnut suppliers in India, we process and export a complete range of peanuts, including:
              </Typography>
              
              {/* Bullet points list */}
              <Box component="ul" sx={{ pl: 4, color: theme.palette.customColors.lightGold, mb: 3 }}>
                <li>Raw peanuts for export</li>
                <li>Organic groundnuts (certified organic crops)</li>
                <li>Blanched peanuts</li>
                <li>Split peanuts suppliers</li>
                <li>Roasted peanuts wholesale</li>
                <li>Shelled peanuts exporters</li>
                <li>Peanut kernels export</li>
                <li>Red skin peanuts</li>
                <li>Peanut oil</li>
                <li>Peanut butter</li>
              </Box>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: theme.palette.customColors.lightGold,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}
              >
                Our peanuts are available in various sizes and grades such as 38/42, 40/50, 50/60, and 60/70, and are packed in hygienic packaging options including PP bags, jute bags, and vacuum packaging to ensure maximum freshness during shipments to worldwide destinations. We offer competitive groundnut prices per ton, making us the ideal choice for bulk groundnut suppliers and wholesale peanuts suppliers in India.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Rest of the content with responsive fixes */}
        {/*--------------------------- Fifth Heading------------------------------------- */}
        {/* Application of Groundnuts */}       
        <Box sx={{ 
            my: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%'
            }}>
          <Box sx={{ textAlign: 'center', mb: 6, width: '100%' }}>
            <Typography 
              variant="h2" 
              component="h2" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.primary.main}
              sx={{ 
                mb: 0,
                fontSize: { xs: '2rem', sm: '2.5rem', md: 'h2.fontSize' } // Responsive font size
              }}
            >
              Applications of
            </Typography>
            <Typography 
              variant="h2" 
              component="span" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              sx={{ 
                color: theme.palette.secondary.main,
                fontSize: { xs: '2rem', sm: '2.5rem', md: 'h2.fontSize' } // Responsive font size
              }}
            >
              Groundnuts
            </Typography>
          </Box>

          {/* Added descriptive text under heading */}
          <Typography 
            variant="subtitle1" 
            fontFamily="Inter, sans-serif"
            sx={{ 
              textAlign: 'left', 
              mb: 4, 
              color: theme.palette.secondary.main,
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, sm: 0 } // Add padding on small screens
            }}
          >
            Our Indian peanuts for export are highly versatile and used in multiple industries across the globe:
          </Typography>

          {/* MODIFIED: Using Box instead of Grid to control exact width */}
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            {[
              {
                title: "Food Industry", 
                description: "As ingredients in snacks, sweets, and bakery products." 
              },
              { 
                title: "Confectionery", 
                description: "For making chocolates, peanut candies, and bars." 
              },
              {
                title: "Peanut Butter Manufacturers", 
                description: "High-quality kernels ideal for smooth and crunchy spreads." 
              },
              { 
                title: "Oil Extraction", 
                description: "High-oil content groundnuts used for cold-pressed and refined oils." 
              },
              { 
                title: "Animal Feed", 
                description: "Peanut meal by-products for nutritious animal feed." 
              },
              { 
                title: "Retail Packaging", 
                description: "Branded snack packs for direct consumer sales." 
              },
              { 
                title: "Health Food Industry", 
                description: "Supplying organic groundnuts India for natural food brands." 
              }
            ].map((feature, index) => (
              <Box 
                key={index}
                sx={{
                  width: { xs: '100%', md: '48%' }, // Exactly 48% width on desktop
                  mb: 3 // Add margin bottom for spacing
                }}
              > 
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 3, 
                    borderRadius: 3,
                    height: '100%',
                    background: theme.customGradients.greenDark,
                    color: theme.palette.customColors.lightGold,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    fontFamily="Lato, sans-serif"
                    fontWeight="bold"
                    sx={{ 
                      color: theme.palette.customColors.darkGold, 
                      mb: 2,
                      width: '100%',
                      fontSize: { xs: '1.1rem', md: '1.25rem' } // Responsive font size
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    fontFamily="Inter, sans-serif"
                    sx={{
                      color: theme.palette.customColors.lightGold,
                      width: '100%'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Add closing text at the end of the Applications section */}
          <Box sx={{ width: '100%', maxWidth: '800px', px: { xs: 2, sm: 0 } }}>
            <Typography 
              variant="subtitle1" 
              fontFamily="Inter, sans-serif"
              sx={{ 
                textAlign: 'center', 
                mt: 5, 
                color: theme.palette.secondary.main,
                width: '100%'
              }}
            >
              With growing demand for healthy snacks, our premium peanuts exporters focus on providing non-GMO peanuts India for health-conscious consumers worldwide.
            </Typography>
          </Box>
        </Box>

        {/*--------------------------- Sixth Heading------------------------------------- */}
        {/* Why choose Us? */}   
        <Box sx={{ 
            my: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%'
            }}>
          <Box sx={{ textAlign: 'center', mb: 6, width: '100%' }}>
            <Typography 
              variant="h2" 
              component="h2" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.primary.main}
              sx={{ 
                mb: 0,
                fontSize: { xs: '2rem', sm: '2.5rem', md: 'h2.fontSize' } // Responsive font size
              }}
            >
              Why
            </Typography>
            <Typography 
              variant="h2" 
              component="span" 
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              sx={{ 
                color: theme.palette.secondary.main,
                fontSize: { xs: '2rem', sm: '2.5rem', md: 'h2.fontSize' } // Responsive font size
              }}
            >
              Choose Us?
            </Typography>
          </Box>

          {/* MODIFIED: Using Box instead of Grid to control exact width */}
          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            {[
              {
                title: "65+ Years of Farming Expertise", 
                description: "Generations of knowledge in groundnut cultivation." 
              },
              { 
                title: "Biggest Supplier of Peanuts in India", 
                description: "Trusted by major buyers globally." 
              },
              {
                title: "Modern Processing Unit", 
                description: "4 metric tons/hour capacity with advanced technology." 
              },
              { 
                title: "Wide Product Range", 
                description: "Raw peanuts, roasted, blanched, split, peanut oil, peanut butter." 
              },
              { 
                title: "Organic, Non-GMO Products", 
                description: "Focus on organic groundnut exporters and pesticide-free groundnuts." 
              },
              { 
                title: "Global Reach", 
                description: "Peanut exporters to USA, peanut exporters to Europe, groundnut suppliers for Africa, and more." 
              },
              { 
                title: "Certified Quality", 
                description: "FSSAI, HACCP, ISO certifications ensure top food safety standards." 
              },
              { 
                title: "Flexible Packaging Solutions", 
                description: "Customizable packaging for retail and bulk buyers." 
              },
              { 
                title: "Affordable and Competitive Rates", 
                description: "Affordable groundnut exporters offering best-in-class pricing." 
              }
            ].map((feature, index) => (
              <Box 
                key={index}
                sx={{
                  width: { xs: '100%', md: '48%' }, // Exactly 48% width on desktop
                  mb: 3 // Add margin bottom for spacing
                }}
              > 
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 3, 
                    borderRadius: 3,
                    height: '100%',
                    background: theme.customGradients.greenDark,
                    color: theme.palette.customColors.lightGold,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0px 8px 16px rgba(0,0,0,0.3)'
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    fontFamily="Lato, sans-serif"
                    fontWeight="bold"
                    sx={{ 
                      color: theme.palette.customColors.darkGold, 
                      mb: 2,
                      width: '100%',
                      fontSize: { xs: '1.1rem', md: '1.25rem' } // Responsive font size
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    fontFamily="Inter, sans-serif"
                    sx={{
                      color: theme.palette.customColors.lightGold,
                      width: '100%'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Add closing text at the end of the Applications section */}
          <Box sx={{ width: '100%', maxWidth: '800px', px: { xs: 2, sm: 0 } }}>
            <Typography 
              variant="subtitle1" 
              fontFamily="Inter, sans-serif"
              sx={{ 
                textAlign: 'center', 
                mt: 5, 
                color: theme.palette.secondary.main,
                width: '100%'
              }}
            >
              With growing demand for healthy snacks, our premium peanuts exporters focus on providing non-GMO peanuts India for health-conscious consumers worldwide.
            </Typography>
          </Box>
        </Box>

        {/*--------------------------- Seventh Heading------------------------------------- */}
        {/* Expanding Horizons */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h5" 
            component="h1" 
            fontFamily="Lato, sans-serif"
            fontWeight="bold"
            color={theme.palette.primary.main}
            sx={{ mb: 3 }}
          >
            Expanding Horizons
          </Typography>
          
          <Typography 
            variant="body1" 
            fontFamily="Inter, sans-serif"
            sx={{ 
              color: theme.palette.secondary.main,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            At Balaji Exports, we are committed to growing the peanut export business by offering Indian peanuts for international buyers. Our knowledge of groundnut export documentation, customs processes, and shipping logistics ensures that your orders arrive fresh and on time. Whether you are a wholesaler looking for bulk peanuts for sale, a brand owner sourcing best groundnut suppliers in India, or an importer searching for trusted groundnut suppliers in India, Balaji Exports is your one-stop destination.
            <br /><br />
            We invite you to explore our wide range of products and experience the taste, quality, and trust that only Balaji Exports can deliver. Let's build lasting relationships through our premium-quality groundnuts and peanuts, grown with care and exported with pride.
          </Typography>

          <Divider 
            sx={{ 
              mt: 4, 
              borderColor: theme.palette.primary.main,
              opacity: 0.7
            }} 
          />

          {/* Add Get In Touch button after divider */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contact"
              sx={{
                fontFamily: 'Inter',
                textTransform: 'none',
                borderRadius: '50px',
                padding: { xs: '8px 20px', md: '10px 24px' },
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                color: theme.palette.primary.main,
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
              Get In Touch...
            </Button>
          </Box>
          
          {/* Additional contact information text */}
          <Typography 
          variant="body2" 
          fontFamily="Inter, sans-serif"
          sx={{ 
            textAlign: 'center', 
            mt: 3, 
            color: theme.palette.secondary.main,
            fontSize: { xs: '0.9rem', md: '1rem' },
            maxWidth: '800px',
            mx: 'auto',
            fontStyle: 'italic'
          }}
        >
          For inquiries, bulk orders, or more information, feel free to contact Balaji Exports — your reliable peanut export company website in India.
        </Typography>

        </Box>

        
       

    </Container>
    </Box>
  );
};

export default AboutUs;
