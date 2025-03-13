// Gallery.js
// Responsive Gallery Section with Scroll-Reactivated Header Animation, Sliding YouTube Videos, Animated Images with Hover Zoom, Background Logo, and Footer using Material UI

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Link as MuiLink,
  IconButton,
  Button,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import InstagramIcon from "@mui/icons-material/Instagram";

// YouTube video IDs for the upper and lower rows
const upperRowVideos = [
  "5DKs_QfvCKQ",
  "i1gpjjsxxkw",
  "bB05-U0gsM0",
  "FujG6NWk8jQ",
  "cot7Wcb8Jng",
  "-huxjB31mzc",
];

const lowerRowVideos = [
  "tlW7Djb-po8",
  "7VUHus_zgP4",
  "IW8ZhFcVD70",
  "FG_gW0emQhY",
  "3j3n32TscVA",
  "KVs8elKplrs",
];

const thetaVideos = [
  "G9G1qxu32Ss",
  "qo6K_E48iNk",
  "bzBS3RLWlTE",
  "oNklbpbEWKk",
  "qVrlXjyl2Os",
];

// Placeholder images for the gallery (ensure images are placed in public/assets/ directory)
const imageLinks = [
  "/assets/image1.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg",
  "/assets/image4.jpg",
  "/assets/image5.jpg",
  "/assets/image6.jpg",
];

// Component for Sliding Rows of YouTube Thumbnails
const SlidingRow = ({ videos, direction }) => (
  <Box
    sx={{
      maxWidth: 1200,
      mx: "auto",
      mb: 4,
      px: { xs: 2, sm: 3, md: 4 },
      overflow: "hidden",
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* Slide container with looping animation */}
    <Box
      sx={{
        display: "flex",
        gap: 3,
        width: "max-content",
        animation: `${direction}-scroll 30s linear infinite`,
      }}
    >
      {/* Map over the video IDs to create YouTube thumbnail cards */}
      {[...videos, ...videos].map((videoId, index) => (
        <MuiLink
          key={index}
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            flex: "0 0 auto",
            width: { xs: 180, sm: 220, md: 260 },
            position: "relative",
          }}
        >
          <Card
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: 2,
              position: "relative",
            }}
          >
            {/* YouTube Thumbnail Image */}
            <CardMedia
              component="img"
              image={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`YouTube Video ${index + 1}`}
              sx={{ width: "100%", height: 160 }}
            />
            {/* YouTube Icon Overlay */}
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "red",
                bgcolor: "rgba(255, 255, 255, 0)",
                borderRadius: "50%",
                p: 0.5,
                opacity: 0.9,
              }}
            >
              <YouTubeIcon fontSize="medium" />
            </IconButton>
          </Card>
        </MuiLink>
      ))}
    </Box>
  </Box>
);

// Component for Animated Image Cards in the Gallery
const AnimatedImageCard = ({ src, alt }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <Card
      ref={ref}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 3,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        "&:hover": {
          transform: isVisible ? "scale(1.05)" : "translateY(50px)",
          transition: "transform 0.5s ease",
        },
      }}
    >
      <CardMedia component="img" height="240" image={src} alt={alt} />
    </Card>
  );
};

// Component for Animated Header with Scroll-Reactivated Effects
const AnimatedHeader = ({ title, subtitle }) => {
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => headerRef.current && observer.unobserve(headerRef.current);
  }, []);

  return (
    <Box
      ref={headerRef}
      sx={{ textAlign: "center", position: "relative", zIndex: 2, mb: 5 }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontFamily: '"Oswald", sans-serif',
          fontWeight: 700,
          letterSpacing: "2px",
          mb: 2,
          fontSize: "1.8rem",
          opacity: isHeaderVisible ? 1 : 0,
          transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: "#d1d1d1",
            fontFamily: '"Lora", serif',
            fontStyle: "italic",
            fontSize: { xs: "0.95rem", sm: "1.1rem" },
            maxWidth: 700,
            mx: "auto",
            opacity: isHeaderVisible ? 1 : 0,
            transform: isHeaderVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

const Gallery = () => (
  <>
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000212",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background logo with reduced opacity */}
      <Box
        component="img"
        src="/Assets/logo.png"
        alt="Background Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.05,
          width: { xs: "180px", sm: "280px", md: "360px" },
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <Navbar />
        
      {/* Section with Theta videos */}
      <Box sx={{ py: "3" }}>
        <AnimatedHeader title="Check out our Theta videos!" />
                {/* Sliding YouTube Thumbnails */}
                <SlidingRow videos={thetaVideos} direction="left" />
      </Box>

      //Social media icons
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontWeight: 600, mb: 2 }}
        >
          Stay Updated with Our Latest Videos & Events!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 4 }}>
          {/* YouTube Channel Icon */}
          <IconButton
            component={MuiLink}
            href="https://www.youtube.com/@thetasrc"
            target="_blank"
            sx={{ color: "red" }}
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>
          {/* Instagram Page Icon */}
          <IconButton
            component={MuiLink}
            href="https://www.instagram.com/theta_src?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            sx={{ color: "#E4405F" }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>


      {/* Main Gallery Header */}
      <AnimatedHeader
        title="GALLERY"
        subtitle="Experience Team Emulsions' creativity through captivating short films."
      />

      {/* Sliding rows of videos */}
      <SlidingRow videos={upperRowVideos} direction="left" />
      <SlidingRow videos={lowerRowVideos} direction="right" />

      {/* Call-to-action button */}
      <Box sx={{ textAlign: "center", mt: 8, mb: 8 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, letterSpacing: "1px", color: "#fff" }}
        >
          Experience the magic of Team Emulsion’s short films!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://www.youtube.com/@TeamEmulsion"
          sx={{
            backgroundColor: "red",
            borderRadius: 2,
            px: 4,
            py: 1.5,
            animation: "pulse 1.5s infinite",
          }}
        >
          Subscribe
        </Button>
      </Box>


            // theta Videos


    </Box>

    {/* Footer Component */}
    <Footer />

    {/* CSS Animations */}
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Oswald:wght@700&display=swap');

        /* Keyframe animation for left-scrolling effect */
        @keyframes left-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Keyframe animation for right-scrolling effect */
        @keyframes right-scroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Keyframe animation for pulsing button effect */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}
    </style>
  </>
);

export default Gallery;
