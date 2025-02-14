import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import { slides } from "../utility/data";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const AUTO_PLAY_INTERVAL = 3500;
const TRANSITION_DURATION = 3000;

const progressAnimation = keyframes`
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  `;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const theme = useTheme();  // Accessing MUI theme for breakpoints

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#eee",
        fontFamily: "Poppins, sans-serif",
        fontSize: "12px",
        margin: 0,
        position: "relative",
        height: "100vh", // Default height for larger screens
        [theme.breakpoints.down("sm")]: {
          height: "90vh", // Adjust height for small screens
        },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            height: "100%", // Ensure full height is utilized
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                height: "100%", // Ensure each slide takes up full height
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%", // Force the image to take up full height
                  objectFit: "cover",
                  objectPosition: index === 0 ? "top" : "center", // Align the first image to the top
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "90%", md: "80%" },
                  paddingRight: { xs: 0, md: "30%" },
                  boxSizing: "border-box",
                  color: "#fff",
                  textShadow: "0 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.0em",
                    letterSpacing: 1.8,
                    fontFamily:  "Lora, serif",  // Custom font for titles
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "1.3em",
                    color: "#f7ebe8",
                     fontFamily:  "Lora, serif", 
                  }}
                >
                  {slide.topic}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginTop: "20px", lineHeight: "1.5em" }}
                >
                  {slide.des}
                </Typography>

                {/* See More Button */}
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowCircleRightIcon />}
                    href={slide.path}
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
                    See More
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Thumbnails with Titles & Descriptions */}
        <Box
          sx={{
            position: "absolute",
            bottom: ["10px", "30px"],
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 100,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: { xs: "70px", sm: "100px" },
                height: { xs: "100px", sm: "150px" },
                flexShrink: 0,
                position: "relative",
                cursor: "pointer",
                borderRadius: "20px",
                overflow: "hidden",
                border:
                  index === currentIndex
                    ? "5px solid #6249CE"
                    : "5px solid transparent",
                transition: "transform 0.3s",
                scrollSnapAlign: "start",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={`Thumbnail ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  {slide.thumbnailtitle}
                </Typography>
                <Typography sx={{ fontSize: "10px", fontWeight: 300 }}>
                  {slide.thumbnaildesc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Progress Bar */}
        <Box
          sx={{
            position: "absolute",
            zIndex: 1000,
            width: "100%",
            height: "3px",
            backgroundColor: "#333",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f1683a",
              animation: `${progressAnimation} ${AUTO_PLAY_INTERVAL}ms linear infinite`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
