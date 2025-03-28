import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Grid,
  Slide,
  Fade,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import confetti from "canvas-confetti"; // Import confetti for animation
import { Tshirt } from "../utility/data"; // Import images and background from utility

const TShirtPage = () => {
  // State to track the current displayed T-shirt image
  const [currentImage, setCurrentImage] = useState(0);

  // Array containing front and back T-shirt images
  const images = [Tshirt.Front, Tshirt.Back];

  // Function to switch to the next image
  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Function to switch to the previous image
  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Function to handle the "Order Now" button click
  const handleOrderClick = () => {
    // Trigger confetti effect
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Open order form link in a new tab after a delay of 1.5 seconds
    // setTimeout(() => {
    //   window.open("https://forms.gle/BYyT7hvovJp3rx1K8", "_blank");
    // }, 1500);
  };

  return (
    <>
      {/* Background Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${Tshirt.background})`, // Set background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Overlay to dim background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black overlay
            zIndex: 0,
          }}
        />

        {/* Navbar Component */}
        <Navbar />

        {/* Fade and Slide Animation for T-shirt Section */}
        <Fade in={true} timeout={800}>
          <Slide direction="up" in={true} timeout={800}>
            <Grid
              container
              spacing={2}
              sx={{
                width: { xs: "90%", sm: "80%", md: "70%" },
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background
                backdropFilter: "blur(3px)", // Blur effect
                borderRadius: 4,
                boxShadow: 4,
                overflow: "hidden",
                zIndex: 1,
                marginTop: "50px",
              }}
            >
              {/* Left Side - T-shirt Image Section */}
              <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                {/* Display T-shirt Image */}
                <CardMedia
                  component="img"
                  image={images[currentImage]}
                  alt="T-shirt"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.08)" }, // Hover effect to enlarge image
                  }}
                />
                {/* Left Arrow Button */}
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 15,
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark background for button
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                  }}
                >
                  <ArrowBackIos />
                </IconButton>

                {/* Right Arrow Button */}
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Grid>

              {/* Right Side - T-shirt Information Section */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.8rem", sm: "2.4rem" },
                    fontFamily: "'Concert One', sans-serif",
                    background:
                      "linear-gradient(90deg, #7d3cff, #ff7f50, #ff4500,rgb(132, 71, 255))", // Gradient text color
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Theta 2k25
                </Typography>

                {/* Description */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "normal",
                    fontFamily: "'Poppins', sans-serif",
                    color: "#ddd", // Light gray color
                    letterSpacing: "0.3px",
                    mb: 3,
                    textAlign: "center",
                  }}
                >
                  Get your Theta 2K25's exclusive Tees for just ₹200! Stylish,
                  comfortable, and available in multiple sizes
                </Typography>

                {/* Order Button */}
                <Button
                  variant="contained"
                  disabled={true}
                  onClick={handleOrderClick}
                  sx={{
                    background: "linear-gradient(90deg, #ff5733, #ff33ff)", // Gradient button color
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "bold",
                    padding: "14px 34px",
                    borderRadius: "30px", // Rounded button corners
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    transition: "transform 0.3s ease",
                    opacity: 1,
                    "&:hover": {
                      background: "linear-gradient(90deg, #ff33ff, #ff5733)",
                      transform: "scale(1.08)", // Button scale on hover
                      boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
                    },
                    "&.Mui-disabled": {
                      color: "#CCCBCB !important", // Bright text even when disabled
                      opacity: 1, // Ensure full visibility
                      background: "linear-gradient(90deg, #ff5733, #ff33ff)", // Keep background
                    },
                  }}
                >
                  Registrations closed
                </Button>
              </Grid>
            </Grid>
          </Slide>
        </Fade>
      </Box>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default TShirtPage;
