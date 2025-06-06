"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Divider,
  Button,
  Grid
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

import ourCommitment from "@/assets/images/AboutUs/ourCommitment.jpeg";
import ourJourney from "@/assets/images/AboutUs/ourJurney.jpeg";
import ourSpeacility from "@/assets/images/AboutUs/ourSpeacility.jpg";
import ourProducts from "@/assets/images/AboutUs/ourProducts.jpg";

type SectionWithImageProps = {
  title: string;
  titleHighlight: string;
  description: ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  isReversed?: boolean;
};

type FeatureGridProps = {
  title: string;
  titleHighlight: string;
  items: { title: string; description: string }[];
  introText?: string | ReactNode;
  closingText?: string | ReactNode;
};

const SectionWithImage = ({ title, titleHighlight, description, imageSrc, imageAlt, isReversed = false }: SectionWithImageProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const mobileLayout = (
    <>
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography
          variant="h2"
          component="h2"
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          color={theme.palette.primary.main}
          sx={{ mb: 0, fontSize: { xs: "2rem", sm: "2.5rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          component="span"
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          sx={{ color: theme.palette.secondary.main, fontSize: { xs: "2rem", sm: "2.5rem" } }}
        >
          {titleHighlight}
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: 300, position: "relative", mb: 2 }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={300}
          style={{ objectFit: "cover", borderRadius: 12, boxShadow: "0 4px 16px rgba(0,0,0,0.15)", width: "100%", height: "100%" }}
        />
      </Box>
      <Card
        elevation={4}
        sx={{
          borderRadius: 2,
          background: theme.customGradients.greenDark,
          overflow: "hidden",
          width: "100%",
          mb: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.3)"
          }
        }}
      >
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography
            variant="body1"
            fontFamily="Inter, sans-serif"
            sx={{
              color: theme.palette.customColors.lightGold,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.6
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );

  const desktopLayout = (
    <Grid
      container
      direction={isReversed ? "row-reverse" : "row"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "450px",
        my: 4
      }}
      spacing={2}
    >
      {/* Card section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "550px", height: "100%" }}>
          <Box sx={{ textAlign: isReversed ? "left" : "right", mb: 3, flex: "0 0 auto" }}>
            <Typography
              variant="h2"
              component="h2"
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              color={theme.palette.primary.main}
              sx={{ mb: 0 }}
            >
              {title}
            </Typography>
            <Typography
              variant="h2"
              component="span"
              fontFamily="Lato, sans-serif"
              fontWeight={800}
              sx={{ color: theme.palette.secondary.main }}
            >
              {titleHighlight}
            </Typography>
          </Box>
          <Card
            elevation={4}
            sx={{
              borderRadius: 2,
              background: theme.customGradients.greenDark,
              overflow: "hidden",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              minHeight: 0,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 8px 16px rgba(0,0,0,0.3)"
              }
            }}
          >
            <CardContent
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              {typeof description === "string" ? (
                <Typography
                  variant="body1"
                  fontFamily="Inter, sans-serif"
                  sx={{ color: theme.palette.customColors.lightGold, fontSize: "1.1rem", lineHeight: 1.6 }}
                >
                  {description}
                </Typography>
              ) : (
                description
              )}
            </CardContent>
          </Card>
        </Box>
      </Grid>
      {/* Image section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "550px", height: "100%", minHeight: "450px" }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={550}
            height={450}
            style={{ objectFit: "cover", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.18)", width: "100%", height: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Box
      sx={{
        my: 4,
        width: "100%",
        py: 2,
        position: "relative",
        "& .MuiGrid-container": {
          minHeight: "450px",
          "& .MuiGrid-item": {
            height: "100%"
          }
        }
      }}
    >
      {isMedium ? mobileLayout : desktopLayout}
      <Divider sx={{ mt: 3, opacity: 0.3, borderColor: theme.palette.primary.main, display: { xs: "block", md: "none" } }} />
    </Box>
  );
};

const FeatureGrid = ({ title, titleHighlight, items, introText = "", closingText = "" }: FeatureGridProps) => {
  const theme = useTheme();
  return (
    <Box sx={{ my: 12, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6, width: "100%" }}>
        <Typography
          variant="h2"
          component="h2"
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          color={theme.palette.primary.main}
          sx={{ mb: 0, fontSize: { xs: "2rem", sm: "2.5rem", md: "h2.fontSize" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="h2"
          component="span"
          fontFamily="Lato, sans-serif"
          fontWeight={800}
          sx={{ color: theme.palette.secondary.main, fontSize: { xs: "2rem", sm: "2.5rem", md: "h2.fontSize" } }}
        >
          {titleHighlight}
        </Typography>
      </Box>
      {introText && (
        <Typography
          variant="subtitle1"
          fontFamily="Inter, sans-serif"
          sx={{ textAlign: "left", mb: 4, color: theme.palette.secondary.main, maxWidth: "800px", mx: "auto", px: { xs: 2, sm: 0 } }}
        >
          {introText}
        </Typography>
      )}
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%", gap: 3 }}>
        {items.map((feature, index) => (
          <Box key={index} sx={{ width: { xs: "100%", md: "calc(50% - 12px)" }, mb: 3 }}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                background: theme.customGradients.greenDark,
                color: theme.palette.customColors.lightGold,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 8px 16px rgba(0,0,0,0.3)"
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                fontFamily="Lato, sans-serif"
                fontWeight="bold"
                sx={{ color: theme.palette.customColors.darkGold, mb: 2, width: "100%", fontSize: { xs: "1.1rem", md: "1.25rem" } }}
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" fontFamily="Inter, sans-serif" sx={{ color: theme.palette.customColors.lightGold, width: "100%" }}>
                {feature.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
      {closingText && (
        <Box sx={{ width: "100%", maxWidth: "800px", px: { xs: 2, sm: 0 } }}>
          <Typography
            variant="subtitle1"
            fontFamily="Inter, sans-serif"
            sx={{ textAlign: "center", mt: 5, color: theme.palette.secondary.main, width: "100%" }}
          >
            {closingText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const applicationItems = [
  { title: "Food Industry", description: "As ingredients in snacks, sweets, and bakery products." },
  { title: "Confectionery", description: "For making chocolates, peanut candies, and bars." },
  { title: "Peanut Butter Manufacturers", description: "High-quality kernels ideal for smooth and crunchy spreads." },
  { title: "Oil Extraction", description: "High-oil content groundnuts used for cold-pressed and refined oils." },
  { title: "Animal Feed", description: "Peanut meal by-products for nutritious animal feed." },
  { title: "Retail Packaging", description: "Branded snack packs for direct consumer sales." },
  { title: "Health Food Industry", description: "Supplying organic groundnuts India for natural food brands." }
];

const whyChooseUsItems = [
  { title: "65+ Years of Farming Expertise", description: "Generations of knowledge in groundnut cultivation." },
  { title: "Biggest Supplier of Peanuts in India", description: "Trusted by major buyers globally." },
  { title: "Modern Processing Unit", description: "4 metric tons/hour capacity with advanced technology." },
  { title: "Wide Product Range", description: "Raw peanuts, roasted, blanched, split, peanut oil, peanut butter." },
  { title: "Organic, Non-GMO Products", description: "Focus on organic groundnut exporters and pesticide-free groundnuts." },
  { title: "Global Reach", description: "Peanut exporters to USA, peanut exporters to Europe, groundnut suppliers for Africa, and more." },
  { title: "Certified Quality", description: "FSSAI, HACCP, ISO certifications ensure top food safety standards." },
  { title: "Flexible Packaging Solutions", description: "Customizable packaging for retail and bulk buyers." },
  { title: "Affordable and Competitive Rates", description: "Affordable groundnut exporters offering best-in-class pricing." }
];

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: theme.palette.background.default, width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
      <Container maxWidth={false} disableGutters={isMobile} sx={{ px: { xs: 2, sm: 3, md: "auto" }, maxWidth: { lg: "lg" } }}>
        {/* Welcome Section */}
        <Box sx={{ mb: 6, width: "100%" }}>
          <Typography
            variant="h3"
            component="h1"
            fontFamily="Lato, sans-serif"
            fontWeight="bold"
            color={theme.palette.primary.main}
            sx={{ mb: 3, fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" } }}
          >
            Welcome to Balaji Exports
          </Typography>
          <Typography
            variant="body1"
            fontFamily="Inter, sans-serif"
            sx={{ color: theme.palette.secondary.main, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6, width: "100%" }}
          >
            Welcome to Balaji Exports, your trusted partner for the finest quality Indian groundnuts and peanuts. Based in the heart of Rajasthan, India, we are proud to be among the biggest groundnut suppliers in India with a legacy of excellence that spans over 65 years. Our deep roots in peanut farming and modern approach to groundnut export business make us one of the most reliable peanut exporters from India to global markets like the UAE, Europe, Russia, Vietnam, and Africa.
          </Typography>
        </Box>
        {/* Main Content Sections with Images */}
        <SectionWithImage
          title="Our"
          titleHighlight=" Journey"
          description="At Balaji Exports, our journey began decades ago on fertile lands, where generations of farmers dedicated themselves to cultivating the finest organic groundnuts India offers. Today, we combine this rich heritage with cutting-edge technology. We proudly operate a state-of-the-art groundnut processing unit with a capacity of 4 metric tons per hour, ensuring consistent quality, hygienic packaging, and timely deliveries for our global clients."
          imageSrc={ourJourney}
          imageAlt="Our Journey"
          isReversed={false}
        />
        <SectionWithImage
          title="Our"
          titleHighlight=" Specialization"
          description="We specialize in a wide range of peanut products, including bold groundnuts, Java groundnuts, red skin peanuts, split peanuts, shelled peanuts, and blanched peanuts for export. Our extensive groundnut export company portfolio also features peanut oil and peanut butter, making us a comprehensive supplier for all peanut-related products."
          imageSrc={ourSpeacility}
          imageAlt="Our Specialization"
          isReversed={true}
        />
        <SectionWithImage
          title="Commitment To"
          titleHighlight=" Quality"
          description="Our commitment to quality is backed by FSSAI certification, HACCP standards, and ISO compliance, making us a preferred choice for buyers looking for lab-tested, pesticide-free groundnuts, and non-GMO peanuts India. We focus on providing food-grade groundnuts export that meet the strictest international standards."
          imageSrc={ourCommitment}
          imageAlt="Our Commitment to Quality"
          isReversed={false}
        />
        <SectionWithImage
          title="Our"
          titleHighlight=" Products"
          description={
            <>
              <Typography
                variant="body1"
                fontFamily="Inter, sans-serif"
                sx={{ color: theme.palette.customColors.lightGold, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6, mb: 2 }}
              >
                As leading groundnut suppliers in India, we process and export a complete range of peanuts, including:
              </Typography>
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
                sx={{ color: theme.palette.customColors.lightGold, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6 }}
              >
                Our peanuts are available in various sizes and grades such as 38/42, 40/50, 50/60, 60/70, and are packed in hygienic packaging options including PP bags, jute bags, and vacuum packaging to ensure maximum freshness during shipments to worldwide destinations. We offer competitive groundnut prices per ton, making us the ideal choice for bulk groundnut suppliers and wholesale peanuts suppliers in India.
              </Typography>
            </>
          }
          imageSrc={ourProducts}
          imageAlt="Our Products"
          isReversed={true}
        />
        {/* Applications and Features Sections */}
        <FeatureGrid
          title="Applications of"
          titleHighlight=" Groundnuts"
          items={applicationItems}
          introText="Our Indian peanuts for export are highly versatile and used in multiple industries across the globe:"
          closingText="With growing demand for healthy snacks, our premium peanuts exporters focus on providing non-GMO peanuts India for health-conscious consumers worldwide."
        />
        <FeatureGrid
          title="Why"
          titleHighlight=" Choose Us?"
          items={whyChooseUsItems}
          closingText="With growing demand for healthy snacks, our premium peanuts exporters focus on providing non-GMO peanuts India for health-conscious consumers worldwide."
        />
        {/* Expanding Horizons */}
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h5"
            component="h2"
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
            sx={{ color: theme.palette.secondary.main, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.6 }}
          >
            At Balaji Exports, we are committed to growing the peanut export business by offering Indian peanuts for international buyers. Our knowledge of groundnut export documentation, customs processes, and shipping logistics ensures that your orders arrive fresh and on time. Whether you are a wholesaler looking for bulk peanuts for sale, a brand owner sourcing best groundnut suppliers in India, or an importer searching for trusted groundnut suppliers in India, Balaji Exports is your one-stop destination.
            <br />
            <br />
            We invite you to explore our wide range of products and experience the taste, quality, and trust that only Balaji Exports can deliver. Let's build lasting relationships through our premium-quality groundnuts and peanuts, grown with care and exported with pride.
          </Typography>
          <Divider sx={{ mt: 4, borderColor: theme.palette.primary.main, opacity: 0.7 }} />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              component={Link}
              href="/contact"
              sx={{
                fontFamily: "Inter",
                textTransform: "none",
                borderRadius: "50px",
                padding: { xs: "8px 20px", md: "10px 24px" },
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                color: theme.palette.primary.main,
                backgroundColor: "transparent",
                border: `2px solid ${theme.palette.customColors.accentGreen}`,
                fontWeight: 500,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.customColors.accentGreen,
                  color: "white",
                  boxShadow: "0 4px 8px rgba(109, 140, 63, 0.3)"
                }
              }}
            >
              Get In Touch...
            </Button>
          </Box>
          <Typography
            variant="body2"
            fontFamily="Inter, sans-serif"
            sx={{ textAlign: "center", mt: 4, color: theme.palette.secondary.main, fontSize: { xs: "0.9rem", md: "1rem" }, maxWidth: "800px", mx: "auto", fontStyle: "italic" }}
          >
            For inquiries, bulk orders, or more information, feel free to contact Balaji Exports — your reliable peanut export company website in India.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 