import React, { useEffect } from "react";
import { Box, Grid, Typography, Button, Slide, Fade } from "@mui/material";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import confetti from "canvas-confetti"; // 💥 import confetti
import { AppAssets } from "../utility/data";

const AppLaunchPage = () => {
 // 🎉 Confetti blast on mount
  useEffect(() => {
    confetti({
      particleCount: 1000,
      spread: 300,
      origin: { y: 0.6 },
      gravity: 0.4,
      colors: ["#FFD700", "#FF6347", "#FFB347", "#FFFACD"], // like your image's palette
      ticks: 300, // makes confetti stay longer
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${AppAssets.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Warm sunlight overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(255,220,150,0.4), rgba(0,0,0,0.6))",
            zIndex: 0,
          }}
        />

        <Navbar />

        <Fade in={true} timeout={3000}>
          <Slide direction="up" in={true} timeout={1000}>
            <Grid
              container
              spacing={2}
              sx={{
                width: { xs: "90%", sm: "80%", md: "70%" },
                backgroundColor: "rgba(255, 245, 235, 0.1)",
                backdropFilter: "blur(5px)",
                borderRadius: 4,
                boxShadow: "0 0 30px rgba(255, 193, 7, 0.3)",
                p: 4,
                zIndex: 1,
                textAlign: "center",
              }}
            >
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: { xs: "2.2rem", sm: "2.7rem" },
                    fontWeight: 700,
                    fontFamily: "'Concert One', sans-serif",
                    background: "linear-gradient(90deg, #FFE259, #FFA751)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 2,
                    textShadow: "0 0 15px rgba(255, 183, 0, 0.6)",
                  }}
                >
                  <span> 🎉 </span>Theta App is Here!
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontFamily: "'Poppins', sans-serif",
                    mb: 3,
                    maxWidth: 600,
                    mx: "auto",
                    lineHeight: 1.6,
                    textShadow: "0 0 8px rgba(0,0,0,0.3)",
                    fontSize: {
                      xs: "0.95rem", // mobile
                      sm: "1.1rem", // tablets and up
                      md: "1.25rem", // desktops
                    },
                    textalign:"cenetr"
                  }}
                >
                  Catch every moment of Theta 2K25! Get live updates, event
                  alerts, schedules & more — in your pocket. Download the app
                  now.
                </Typography>

                <Button
               variant="contained"
             href="https://drive.google.com/file/d/1vkfAT54DQu3zXPePuZBYEcp4AMiGfzC0/view?usp=sharing"
             target="_blank"
             rel="noopener noreferrer"// Link to the app download page
                  download
                  sx={{
                    background: "linear-gradient(90deg, #FFB347, #FFCC33)",
                    color: "#fff",
                    px: 5,
                    py: 1.4,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    boxShadow: "0 0 15px rgba(255, 180, 0, 0.5)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(90deg, #FFD54F, #FFA000)",
                      boxShadow: "0 0 25px rgba(255, 204, 0, 0.7)",
                      transform: "scale(1.05)",
                    },
                    fontSize: {
                        xs: "0.95rem", // mobile
                        sm: "1.1rem", // tablets and up
                        md: "1.25rem", // desktops
                      },
                  }}
                >
                  📲 Download Now
                </Button>

                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "#ddd", fontStyle: "italic" }}
                >
                  * Soon it will be available in play store
                </Typography>
              </Grid>
            </Grid>
          </Slide>
        </Fade>
      </Box>

      <Footer />
    </>
  );
};

export default AppLaunchPage;
