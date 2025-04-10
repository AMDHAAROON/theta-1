import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, Fade } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const AppBannerCard = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const sectionRef = useRef(null);

  const navigate = useNavigate(); // For navigating to other pages

  const handleButtonClick = () => {
    // Navigate to another page (e.g., the "Download" page)
    navigate("/app");

    // Scroll to top immediately after navigating
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the section enters the viewport, set fadeIn to true
        if (entries[0].isIntersecting) {
          setFadeIn(true);
        } else {
          setFadeIn(false); // Optionally, reset fade on leave
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        px: { xs: 2, md: 6 },
        py: 5,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to top, rgb(0, 0, 0), rgb(161, 98, 7), rgb(0, 0, 0))",
      }}
    >
      {/* Apply Fade Component for smooth fade-in */}
      <Fade in={fadeIn} timeout={1500}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            borderRadius: "24px",
            background: "linear-gradient(to bottom right, white, #fde047, #78350f)",
            p: { xs: 3, md: 5 },
            textAlign: "center",
            overflow: "hidden",
            opacity: fadeIn ? 1 : 0, // Control opacity
            transform: fadeIn ? "translateY(0)" : "translateY(50px)", // Slide effect
            transition: "opacity 1.5s ease-out, transform 1.5s ease-out", // Smooth transition for both
          }}
        >
          {/* Glowing Border */}
          <Box
            sx={{
              position: "absolute",
              top: "-3px",
              left: "-3px",
              right: "-3px",
              bottom: "-3px",
              borderRadius: "28px",
              background: "radial-gradient(at right top, rgb(180, 83, 9), rgb(253, 186, 116), rgb(159, 18, 57))",
              filter: "blur(14px)",
              zIndex: 0,
              animation: "glowBorder 5s ease infinite",
              backgroundSize: "200% 200%",
            }}
          />

          {/* Main Content */}
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Concert One', cursive",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                mb: 2,
                color: "#fff",
              }}
            >
              Be Part of the Vibe!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                mb: 3,
                color: "#f5f5dc",
              }}
            >
              Download our app to get updates, schedules, and more — all in one place.
            </Typography>
<Link to="/app" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: "999px",
                background: "linear-gradient(to bottom right, white, #fde047, #78350f)",
                color: "#000",
                boxShadow: "0 0 16px rgba(255, 200, 0, 0.5)",
                "&:hover": {
                  background: "linear-gradient(to right, #ffcc33, #ffb700)",
                  boxShadow: "0 0 20px rgba(255, 200, 0, 0.8)",
                },
              }}
              onClick={handleButtonClick}
            >
              Download App
            </Button>
            </Link>
          </Box>
        </Box>
      </Fade>

      {/* Glow Animation */}
      <style>
        {`
          @keyframes glowBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
};

export default AppBannerCard;
