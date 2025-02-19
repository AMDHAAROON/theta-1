import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const AnimatedCard = styled(Box)(({ theme }) => ({
  height: "450px",
  width: "350px",
  background: "#222",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  cursor: "pointer",
  overflow: "hidden",
  "&::before": {
    position: "absolute",
    content: '""',
    width: "50%",
    height: "180%",
    background: "#ff0800",
    transform: "rotate(45deg)",
    animation: "animate 4s linear infinite",
  },
  "&::after": {
    position: "absolute",
    content: '""',
    inset: "2px",
    background: "#000",
    borderRadius: "8px",
  },
  "& img": {
    width: "50%",
    height: "auto",
    zIndex: 1,
  },
  "& button": {
    zIndex: 1,
    marginTop: "10px",
  },
  "&:hover::before": {
    animation: "none",
  },
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

const RotatingCard = ({ title, imgSrc, subtitle, description, path }) => {
  return (
    <AnimatedCard  data-aos="fade-up">
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
          zIndex: 1,
        }}
      >
        {title}
      </Typography>
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
            scale: 2.8,
          }}
        />
      </Box>

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

      <Button
        variant="contained"
        endIcon={<ArrowCircleRightIcon />}
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

const Clusters = () => {
  const cardData = [
    {
      title: "",
      imgSrc: "Assets/Access.png",
      subtitle: "ACCESS INDIA",
      description: "Empowering students for a innovative future.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Robotics.png",
      subtitle: "ROBOTICA",
      description: "Innovative solutions through robotics technology.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Informatica.png",
      subtitle: "INFORMATICA",
      description: "Where art meets technology in perfect harmony.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Electronica.png",
      subtitle: "ELECTRONICA",
      description: "The pulse of electronic creativity.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/tamil.png",
      subtitle: "EQUILIBRIA",
      description: "Finding balance through artistic expression.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Math.jpg",
      subtitle: "MATHEMATICA",
      description: "The beauty of mathematics in artistic form.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Biogenesis.jpg",
      subtitle: "BIOGENESIS",
      description: "Life and art intertwined in a unique way.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Optica.png",
      subtitle: "OPTICA",
      description: "A vision of creativity through optics.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Sportiva.png",
      subtitle: "SPORTIVA",
      description: "The intersection of sport and artistic expression.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/st.png",
      subtitle: "STRATEGIA",
      description: "Exploring new horizons in art.",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/Emulsion.png",
      subtitle: "Emulsion",
      description: "Capturing wonders,one frame at a time",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/pixel.png",
      subtitle: "Pixelq",
      description: "Crafting Visual Masterpieces with Precision",
      path: "/Workshops",
    },
    {
      title: "",
      imgSrc: "Assets/vv.png",
      subtitle: "VINODHA VAAHINI",
      description: "Uniting Hearts with Joyful Moments",
      path: "/Workshops",
    },

  ];

  return (
    <Box display="flex" gap={10} flexWrap="wrap" justifyContent="center" py={5}>
      {cardData.map((card, index) => (
        <RotatingCard
          key={index}
          title={card.title}
          imgSrc={card.imgSrc}
          subtitle={card.subtitle}
          description={card.description}
          path={card.path}
           data-aos="fade-up"
        />
      ))}
    </Box>
  );
};

export default Clusters;
