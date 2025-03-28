import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { aboutTheta } from "../utility/data"; // Import data from utility file

const Theta = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"], // Column layout for mobile, row for larger screens
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#000212", // Dark background color
        py: 10,
        px: [3, 10], // Responsive padding
      }}
    >
      {/* Left Section - Text Content */}
      <Box sx={{ flex: 1, textAlign: ["center", "left"] }}>
        {/* Title with Underline Effect */}
        <Typography
          variant="h3"
          color="white"
          fontWeight="bold"
          gutterBottom
          sx={{
            letterSpacing: "1px",
            textTransform: "uppercase", // Uppercase title
            position: "relative",
            display: "inline-block",
            mb: 4,
          }}
        >
          {aboutTheta.title}
          {/* Underline effect for title */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: -5,
              width: "100%",
              height: "4px",
              backgroundColor: "#FFD700", // Gold underline
            }}
          />
        </Typography>
        
        {/* Image below title (Visible only in mobile view) */}
        <Box
          sx={{ display: ["flex", "none"], justifyContent: "center", my: 3 }}
        >
          <img
            src={aboutTheta.image}
            alt="Theta Event"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px", // Rounded corners
              boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.5)", // Glow effect
            }}
          />
        </Box>
        
        {/* Event Description */}
        <Typography
          variant="body1"
          color="white"
          paragraph
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            fontWeight: "350",
            mb: "5",
          }}
        >
          {aboutTheta.description}
        </Typography>
        
        {/* Button for Brochure Download */}
        <Button
          variant="contained"
          href={aboutTheta.brochureLink}
          target="_blank"
          sx={{
            mt: 3,
            backgroundColor: "#FFD700", // Gold button color
            color: "#000",
            fontWeight: "bold",
            fontSize: "1.1rem",
            padding: "12px 24px",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden",
            animation: "pulse 1.5s infinite", // Pulsing animation effect
            "&:hover": {
              backgroundColor: "#FFC107", // Slightly darker gold on hover
            },
            "@keyframes pulse": {
              "0%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.1)" },
              "100%": { transform: "scale(1)" },
            },
          }}
        >
          {aboutTheta.buttonText}
        </Button>
      </Box>
      
      {/* Right Section - Event Image (Visible only in desktop view) */}
      <Box
        sx={{
          flex: 1,
          display: ["none", "flex"], // Hide on mobile, show on larger screens
          justifyContent: "center",
          mt: [3, 0],
        }}
      >
        <img
          src={aboutTheta.image}
          alt="Theta Event"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.5)", // Glow effect
          }}
        />
      </Box>
    </Box>
  );
};

export default Theta;
