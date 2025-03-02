import React from "react";
import { Avatar, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import TitleWithDescription from "./TitleWithDescription ";
import { brands } from "../utility/data";

/**
 * Keyframe animation that creates a pulsing effect around sponsor logos.
 */
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

/**
 * Keyframe animation that animates the gradient border around sponsor logos.
 */
const gradientBorderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

/**
 * Brands component displays a horizontally scrolling list of sponsor logos with animations.
 *
 * Features:
 * - Logos have animated gradient borders and a pulsing effect.
 * - Continuous horizontal scroll showcasing sponsor logos.
 * - Duplicates the logo list to create a seamless infinite scroll.
 *
 * @component
 */
const Brands = () => {
  /**
   * Keyframe animation that scrolls the logos horizontally from right to left.
   */
  const scrollX = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  `;

  /**
   * Duplicates the brand list to ensure continuous scrolling without gaps.
   * @constant {Array} duplicateClients - Array containing two sets of the brands data.
   */
  const duplicateClients = [...brands, ...brands];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        userSelect: "none",
        bgcolor: "#000212",
      }}
    >
      {/* Title section displaying the sponsors heading */}
      <Box sx={{ textAlign: "center", py: 5 }}>
        <TitleWithDescription title="Our Reputed Sponsors" />
      </Box>

      {/* Scrolling sponsor logos section */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "space-around",
            whiteSpace: "nowrap",
            gap: ["2rem", "2rem", "5rem"],
            animation: `${scrollX} 50s linear infinite`,
            py: 2,
          }}
        >
          {/* Mapping through duplicated clients to display logos */}
          {duplicateClients.map((review, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                pb: 10,
              }}
            >
              <Box
                sx={{
                  width: [100, 140],
                  height: [100, 140],
                  borderRadius: "50%",
                  padding: "5px",
                  background:
                    "linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)",
                  backgroundSize: "300% 300%",
                  animation: `${gradientBorderAnimation} 10s ease infinite, ${pulseAnimation} 3s infinite`,
                }}
              >
                <Avatar
                  src={review.img}
                  alt={`Review ${review.id}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Brands;
