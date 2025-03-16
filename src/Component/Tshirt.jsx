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
import confetti from "canvas-confetti";
import {
  tshirtFrontImage,
  tshirtBackImage,
  backgroundImage,
} from "../utility/data";

const TShirtPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [tshirtFrontImage, tshirtBackImage];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleOrderClick = () => {
    // Trigger confetti
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      window.open("https://forms.gle/BYyT7hvovJp3rx1K8", "_blank");
    }, 1500); // 1000 ms = 1 second
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        />
        <Navbar />

        <Fade in={true} timeout={800}>
          <Slide direction="up" in={true} timeout={800}>
            <Grid
              container
              spacing={2}
              sx={{
                width: { xs: "90%", sm: "80%", md: "70%" },
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3px)",
                borderRadius: 4,
                boxShadow: 4,
                overflow: "hidden",
                zIndex: 1,
                marginTop: "50px",
              }}
            >
              {/* Left Side (T-shirt Image) */}
              <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  image={images[currentImage]}
                  alt="T-shirt"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                />
                {/* Left Arrow */}
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 15,
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.8)" },
                  }}
                >
                  <ArrowBackIos />
                </IconButton>
                {/* Right Arrow */}
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

              {/* Right Side (Centered Text & Button) */}
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
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.3rem", sm: "2.4rem" },
                    fontFamily: "'Concert One', sans-serif",
                    background:
                      "linear-gradient(90deg, #7d3cff, #ff7f50, #ff4500,rgb(132, 71, 255))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                  }}
                >
                  Theta 2k25
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "normal",
                    fontFamily: "'Poppins', sans-serif",
                    color: "#ddd",
                    letterSpacing: "0.3px",
                    mb: 3,
                    textAlign: "center",
                  }}
                >
                  Get your Theta 2K25's exclusive Tees for just ₹200!
                  stylish, comfortable, and available in multiple sizes — don’t
                  miss out!
                </Typography>

                <Button
                  variant="contained"
                  onClick={handleOrderClick}
                  sx={{
                    background: "linear-gradient(90deg, #ff5733, #ff33ff)",
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "bold",
                    padding: "14px 34px",
                    borderRadius: "30px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #ff33ff, #ff5733)",
                      transform: "scale(1.08)",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  Order Now — Limited Stock!
                </Button>
              </Grid>
            </Grid>
          </Slide>
        </Fade>
      </Box>
      <Footer />
    </>
  );
};

export default TShirtPage;
