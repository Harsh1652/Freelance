"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const FreeSampleButton = () => {
  const theme = useTheme();
  const router = useRouter();
  const [showBubble, setShowBubble] = useState(false);

  // Show chat bubble periodically
  useEffect(() => {
    const showInterval = setInterval(() => {
      setShowBubble(true);
      setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    }, 20000);

    // Show initially after 5 seconds
    const initialTimeout = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 5000);
    }, 5000);

    return () => {
      clearInterval(showInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleClick = () => {
    router.push("/contact");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Chat bubble that appears periodically */}
      <Box
        className="notranslate"
        sx={{
          position: "fixed",
          bottom: { xs: 110, md: 130 },
          left: { xs: 75, md: 110 },
          backgroundColor: "white",
          color: "#333",
          padding: { xs: 0.75, md: 2 },
          borderRadius: { xs: 1.5, md: 2 },
          maxWidth: { xs: "110px", md: "200px" },
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 999,
          opacity: showBubble ? 1 : 0,
          transform: showBubble ? "translateX(0)" : "translateX(-20px)",
          transition: "all 0.5s ease",
          pointerEvents: "none",
          display: showBubble ? "block" : "none",
          '&:before': {
            content: '""',
            position: 'absolute',
            bottom: { xs: '12px', md: '15px' },
            left: { xs: '-6px', md: '-10px' },
            width: { xs: '12px', md: '20px' },
            height: { xs: '12px', md: '20px' },
            backgroundColor: 'white',
            transform: 'rotate(45deg)',
            zIndex: -1,
          }
        }}
      >
        <Typography
          variant="body2"
          fontWeight="medium"
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "0.65rem", md: "0.875rem" }
          }}
        >
          FREE samples! Click here.
        </Typography>
      </Box>

      {/* Free Sample Button */}
      <Box
        onClick={handleClick}
        className="notranslate"
        sx={{
          position: "fixed",
          bottom: { xs: 30, md: 40 },
          left: { xs: 20, md: 30 },
          width: { xs: 60, md: 70 },
          height: { xs: 60, md: 70 },
          backgroundColor: theme.palette.primary.main,
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          animation: `pulse 2s infinite, glow 4s infinite`,
          "@keyframes pulse": {
            "0%": {
              boxShadow: "0 0 0 0 rgba(46, 125, 50, 0.7)"
            },
            "70%": {
              boxShadow: "0 0 0 15px rgba(46, 125, 50, 0)"
            },
            "100%": {
              boxShadow: "0 0 0 0 rgba(46, 125, 50, 0)"
            }
          },
          "@keyframes glow": {
            "0%": {
              filter: "brightness(100%)",
              transform: "scale(1)"
            },
            "50%": {
              filter: "brightness(120%)",
              transform: "scale(1.08)"
            },
            "100%": {
              filter: "brightness(100%)",
              transform: "scale(1)"
            }
          },
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(0,0,0,0.4)',
            backgroundColor: theme.palette.secondary.main,
          },
          '&:active': {
            transform: 'scale(0.95)',
          }
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "28px" },
            lineHeight: 1,
            mb: 0.5
          }}
        >
          📦
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "8px", md: "9px" },
            fontWeight: "bold",
            color: theme.palette.customColors.darkGold,
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: "0.5px"
          }}
        >
          FREE
          <br />
          SAMPLE
        </Typography>
      </Box>
    </>
  );
};

export default FreeSampleButton; 