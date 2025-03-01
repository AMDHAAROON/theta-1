import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import React from "react";
import Navbar from ".././Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from ".././Component/Footer";

const Developers = () => {
  const developers = [
    {
      name: "Hari haran",
      role: "Frontend Developer",
      description:
        "A seasoned front-end expert with extensive experience in building high-quality web solutions.",
      image: "/Assets/Developers/hari.png",
      github: "https://github.com/Hari-Hara-2005",
      linkedin: "https://www.linkedin.com/in/hari-haran-877630311",
      instagram: "https://www.instagram.com/_harihara._",
    },
    {
      name: "Manoj kumar",
      role: "Frontend Developer",
      description:
        "Skilled in modern frameworks, bringing creativity and precision to web development.",
      image: "/Assets/Developers/manoj.png",
      github: "https://github.com/themanojking",
      linkedin: "https://www.linkedin.com/in/manojkumar2005",
      instagram: "https://www.instagram.com/the_manoj_king_",
    },
    {
      name: "Manirathnam",
      role: "Frontend Developer",
      description:
        "A passionate coder focused on creating interactive and user-friendly interfaces.",
      image: "/Assets/Developers/mani.png",
      github: "https://github.com/candymani-08",
      linkedin: "https://www.linkedin.com/in/manirathnam08",
      instagram: "https://www.instagram.com/mani__08_",
    },
    {
      name: "Jayasurya",
      role: "Frontend Developer",
      description:
        "Dedicated to writing clean, efficient code for smooth and responsive applications.",
      image: "/Assets/Developers/surya.png",
      github: "",
      linkedin: "https://www.linkedin.com/in/jaya-surya-88bb10348",
      instagram: "https://www.instagram.com/jaya_surya_2335",
    },
    {
      name: "Harish",
      role: "Frontend Developer",
      description:
        "Enthusiastic about UI/UX, ensuring visually appealing and intuitive designs.",
      image: "/Assets/Developers/harish.png",
      github: "https://github.com/hari-harish-2007",
      linkedin: "",
      instagram: "https://www.instagram.com/harishhhhh_7",
    },
    {
      name: "Mohamed Haaroon",
      role: "Frontend Developer",
      description:
        "A developer who skilled responsive design, eager to optimize web performance.",
      image: "/Assets/Developers/haaroon.jpeg",
      github: "https://github.com/AMDHAAROON",
      linkedin: "https://www.linkedin.com/in/mohamed-haaroon",
      instagram: "https://www.instagram.com/mhd_haaroon",
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(Assets/Logo.png)",
          backgroundSize: "20%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0B1121",
          color: "white",
          padding: { xs: "30px 1rem", md: "50px 10rem" },
          height: { xs: "50vh", md: "55vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0B1121",
            opacity: 0.85,
            zIndex: -1,
          },
        }}
      >
        <Navbar color="#fff" />
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: ["20px", "22px", "36px"],
              my: 1,
              textAlign: "center",
            }}
          >
            Our Developers
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              pb: 5,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
              >
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "36px" }}
            />
            <Typography
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
            >
              Developers
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 5, bgcolor: "#000212", textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            padding: 4,
          }}
        >
          {developers.map((dev, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "90%", md: "30%" },
                bgcolor: "#E6F3FB",
                p: 3,
                border: "3px solid #EF3D4E",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 103px -25px rgba(125,125,125,1)",
                },
              }}
            >
              <Box
                component="img"
                src={dev.image}
                alt={dev.name}
                sx={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  mb: 2,
                }}
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#333",
                  mb: 1,
                }}
              >
                {dev.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#333",
                  fontWeight: 600,
                  mb: 2.5,
                }}
              >
                {dev.role}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  color: "#9C79A1",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {dev.description}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <IconButton
                  href={dev.github}
                  target="_blank"
                  sx={{ color: "#333" }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  href={dev.linkedin}
                  target="_blank"
                  sx={{ color: "#0077B5" }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href={dev.instagram}
                  target="_blank"
                  sx={{ color: "#E1306C" }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Developers;
