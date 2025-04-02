import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

// Styled component for the animated card with rotating border animation
const AnimatedCard = styled(Box)(({ theme }) => ({
  height: "450px", // Card height
  width: "350px", // Card width
  background: "#222", // Dark background color
  position: "relative", // Relative positioning for pseudo-elements
  display: "flex", // Flexbox for alignment
  flexDirection: "column", // Column direction for content
  justifyContent: "center", // Center vertically
  alignItems: "center", // Center horizontally
  borderRadius: "10px", // Rounded corners
  cursor: "pointer", // Pointer cursor on hover
  overflow: "hidden", // Hide overflowing content

  // Rotating gradient border animation using ::before pseudo-element
  "&::before": {
    position: "absolute",
    content: '""',
    width: "50%",
    height: "180%",
    background: "#ff0800",
    transform: "rotate(45deg)",
    animation: "animate 4s linear infinite", // Infinite rotation animation
  },

  // Inner card background using ::after pseudo-element
  "&::after": {
    position: "absolute",
    content: '""',
    inset: "2px",
    background: "#000", // Black inner background
    borderRadius: "8px",
  },

  // Styling for images inside the card
  "& img": {
    width: "50%",
    height: "auto",
    zIndex: 1, // Ensure image is above pseudo-elements
  },

  // Button styling inside the card
  "& button": {
    zIndex: 1,
    marginTop: "10px",
  },

  // Stop animation on hover
  "&:hover::before": {
    animation: "none",
  },

  // Keyframes for the rotating gradient animation
  "@keyframes animate": {
    "0%": {
      transform: "rotate(0deg)",
      filter: "hue-rotate(0deg) saturate(100%)",
    },
    "100%": {
      transform: "rotate(360deg)",
      filter: "hue-rotate(-360deg) saturate(1000%)",
    },
  },
}));

// Gradient border animation for the circular avatar border
const gradientBorderAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Reusable card component for each cluster
const RotatingCard = ({ title, imgSrc, subtitle, description, path }) => {
  return (
    <AnimatedCard data-aos="fade-up">
      {" "}
      {/* Animated card with AOS fade-up effect */}
      {/* Cluster title positioned at the top-left */}
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
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
      {/* Circular avatar with animated gradient border */}
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
            scale: 2.8, // Enlarges the avatar inside the circle
          }}
        />
      </Box>
      {/* Cluster subtitle */}
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
      {/* Cluster description */}
      <Typography
        sx={{
          color: "#fff",
          fontSize: "16px",
          marginTop: "5px",
          textAlign: "center",
          padding: "0 15px",
          zIndex: 1,
          pb: 5,
        }}
      >
        {description}
      </Typography>
      {/* Learn More button linking to the workshops page */}
      <Button
        variant="contained"
        endIcon={<ArrowCircleRightIcon />} // Arrow icon at the end
        href={path}
        sx={{
          background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
          textTransform: "none",
          borderRadius: "50px",
          fontSize: "1rem",
          px: [4],
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

// Main Clusters component containing all cluster cards
const Clusters = () => {
  // Data for each cluster card
  const cardData = [
    {
      title: "",
      imgSrc: "Assets/Clusterlogo/Emulsion.png",
      subtitle: "EMULSION",
      description: "Emulsion captures creativity through competitions.",
      path: "/Emulsion",
    },
   
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/a1.png",
      subtitle: "ACCESS INDIA",
      description: "Empowering students for a innovative future.",
      path: "/Access",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/robo1.png",
      subtitle: "ROBOTICS",
      description: "Innovative solutions through robotics technology.",
      path: "/Robotics",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/info.png",
      subtitle: "INFORMATICA",
      description: "Where art meets technology in perfect harmony.",
      path: "/Informatica",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/elec1.png",
      subtitle: "ELECTRONICA",
      description: "The pulse of electronic creativity.",
      path: "/Electronica",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/podhigai.png",
      subtitle: "பொதிகைத் தமிழ் மன்றம்",
      description: "வேற்றுமை இன்றி ழகரம் பழகுவோம்.",
      path: "/Equilibria",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/math1.png",
      subtitle: "MATHEMATICA",
      description: "The beauty of mathematics in artistic form.",
      path: "/Mathematica",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/biogenesis1.png",
      subtitle: "BIOGENESIS",
      description: "Life and art intertwined in a unique way.",
      path: "/Biogenesis",
    },
    {
      title: "",
      imgSrc: "Assets/Clusterlogo/Optica.png",
      subtitle: "OPTICA",
      description: "A vision of creativity through optics.",
      path: "/Optica",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/spo1.png",
      subtitle: "SPORTIVA",
      description: "The intersection of sport and artistic expression.",
      path: "/Sportiva",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/stra.jpg",
      subtitle: "STRATEGIA",
      description: "Exploring new horizons in art.",
      path: "/Strategia",
    },
    {
      title: "",
      imgSrc: "Assets/newclusterlogo/vv.jpg",
      subtitle: "వినోద వాహిని",
      description: "కళా ప్రపంచం",
      path: "/Vv",
    },
  ];

  return (
    <Box display="flex" gap={10} flexWrap="wrap" justifyContent="center" py={5}>
      {/* Render a RotatingCard for each cluster in the cardData array */}
      {cardData.map((card, index) => (
        <RotatingCard
          key={index}
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

export default Clusters; // Export the Clusters component as default
