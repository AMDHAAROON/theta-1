// Importing necessary modules and components from React and Material UI
import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material"; // MUI components for layout and styling
import { styled } from "@mui/system"; // Utility for creating custom styled components
import { keyframes } from "@emotion/react"; // Library to define keyframe animations
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"; // Icon used in the button

/**
 * Styled component: AnimatedCard
 * - Displays a card with a rotating gradient animation effect.
 * - Uses ::before pseudo-element for animated gradient and ::after for the dark inner background.
 * - On hover: Stops the rotation animation.
 */
const AnimatedCard = styled(Box)(() => ({
  height: "450px", // Card height
  width: "350px", // Card width
  background: "#222", // Dark background for contrast
  position: "relative", // To position pseudo-elements absolutely inside
  display: "flex", // Flexbox for center alignment
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px", // Rounded corners
  cursor: "pointer",
  overflow: "hidden", // Prevents content overflow

  // Rotating gradient border effect
  "&::before": {
    position: "absolute",
    content: '""',
    width: "50%",
    height: "180%",
    background: "#ff0800", // Red gradient color
    transform: "rotate(45deg)", // Angled background
    animation: "animate 4s linear infinite", // Continuous rotation
  },

  // Inner dark background layer
  "&::after": {
    position: "absolute",
    content: '""',
    inset: "2px", // Slight padding to reveal border
    background: "#000",
    borderRadius: "8px",
  },

  // Image styling inside the card
  "& img": {
    width: "50%",
    height: "auto",
    zIndex: 1, // Keeps image above pseudo-elements
  },

  // Button inside the card
  "& button": {
    zIndex: 1,
    marginTop: "10px",
  },

  // Hover effect: stops animation
  "&:hover::before": {
    animation: "none",
  },

  // Keyframe animation for rotating gradient
  "@keyframes animate": {
    "0%": { transform: "rotate(0deg)", filter: "hue-rotate(0deg) saturate(100%)" },
    "100%": { transform: "rotate(360deg)", filter: "hue-rotate(-360deg) saturate(1000%)" },
  },
}));

/**
 * Keyframe animation for the gradient border around the avatar.
 * Creates a smooth gradient color transition.
 */
const gradientBorderAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

/**
 * RotatingCard Component
 * @param {string} title - Title text positioned at the top-left of the card.
 * @param {string} imgSrc - Source URL for the avatar image.
 * @param {string} subtitle - Subtitle displayed below the avatar.
 * @param {string} description - Description text displayed below the subtitle.
 * @param {string} path - Navigation link for the 'Learn More' button.
 * 
 * Displays an animated card with an avatar, text content, and a call-to-action button.
 */
const RotatingCard = ({ title, imgSrc, subtitle, description, path }) => {
  return (
    <AnimatedCard data-aos="fade-up"> {/* AOS library attribute for fade-up animation on scroll */}
      {/* Card title */}
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "25px",
          left: "25px",
          color: "#fff",
          fontWeight: 100,
          fontSize: "1.2rem",
          letterSpacing: 1,
          margin: 0,
          zIndex: 1, // Ensures text is above background layers
        }}
      >
        {title}
      </Typography>

      {/* Circular avatar container with animated gradient border */}
      <Box
        sx={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "#fff",
          backgroundSize: "300% 300%",
          animation: `${gradientBorderAnimation} 10s ease infinite`,
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Avatar
          src={imgSrc}
          alt={`Review ${title}`}
          sx={{
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            scale: 2.8, // Enlarges avatar within the circle
          }}
        />
      </Box>

      {/* Subtitle below the avatar */}
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          marginTop: "10px",
          fontWeight: 500,
          letterSpacing: 0.9,
          fontSize: "1.25rem",
          zIndex: 1,
        }}
      >
        {subtitle}
      </Typography>

      {/* Description text */}
      <Typography
        sx={{
          color: "#fff",
          fontSize: "16px",
          marginTop: "5px",
          textAlign: "center",
          padding: "0 15px",
          zIndex: 1,
          pb: 5, // Padding bottom for spacing before button
        }}
      >
        {description}
      </Typography>

      {/* 'Learn More' button with gradient background and hover effect */}
      <Button
        variant="contained"
        endIcon={<ArrowCircleRightIcon />} // Right arrow icon for visual cue
        href={path} // Navigation path on click
        sx={{
          background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
          textTransform: "none",
          borderRadius: "50px",
          fontSize: "1rem",
          px: [4], // Horizontal padding
          color: "#fff",
          zIndex: 1,
          border: "2px solid transparent",
          "&:hover": {
            background: "transparent",
            border: "2px solid #EF3D4E",
          },
        }}
      >
        Learn More
      </Button>
    </AnimatedCard>
  );
};

/**
 * Allclusters Component
 * - Maps through an array of card data and renders RotatingCard components.
 * - Displays a flexible, responsive layout for multiple cards.
 */
const Allclusters = () => {
  // Array containing card information
  const cardData = [
    {
      title: "", // Placeholder for future title
      imgSrc: "Assets/Clusterlogo/cluster.png", // Avatar image source
      subtitle: "Fusion,Fun,Fiesta", // Card subtitle text
      description: "Click to uncover something amazing!", // Description below the subtitle
      path: "/Cluster", // Navigation path for the button
    },
  ];

  return (
    <Box display="flex" gap={10} flexWrap="wrap" justifyContent="center" py={5}>
      {/* Iterates through cardData array to render RotatingCard components */}
      {cardData.map((card, index) => (
        <RotatingCard
          key={index} // Unique key for React list rendering
          title={card.title}
          imgSrc={card.imgSrc}
          subtitle={card.subtitle}
          description={card.description}
          path={card.path}
          data-aos="fade-up" // Animation on scroll
        />
      ))}
    </Box>
  );
};

export default Allclusters; // Exports the Allclusters component for use in other parts of the app
