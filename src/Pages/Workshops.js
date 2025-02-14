import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from ".././Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from ".././Component/Footer";

const Workshops = () => {
  const workshopData = [
  
    {
      title: "AI-Powered Tech Development",
      date: "Date : 22nd-Feb-2022",
      time: "Time : 09:00 a.m. - 5:00 p.m.",
      venue: "Venue : Auditorium",
      description: "Informatica",
      registrationLink: "https://forms.gle/d3eLwrQAurhRhYJz9 ",
    },
   /* {
      title: "Comming soon",
      time: "",
      venue: "",
      description: "Celebrating Soon",
      registrationLink: "",
    },
    {
      title: "Comming soon",
      time: "",
      venue: "",
      description: "Celebrating Soon",
      registrationLink: "",
    },
    {
      title: "Comming soon",
      time: "",
      venue: "",
      description: "Celebrating Soon",
      registrationLink: "",
    },*/
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
            Workshops
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
              Workshops
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 5, bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            padding: 4,
          }}
        >
          {workshopData.map((workshop, index) => (
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
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.date}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#333",
                  fontWeight: 600,
                  mb: 2.5,
                }}
              >
                {workshop.time}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#333",
                  fontWeight: 800,
                  mb: 2.5,
                }}
              >
                {workshop.venue}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  color: "#9C79A1",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {workshop.description}
              </Typography>
              <Button
                variant="contained"
                 href={workshop.registrationLink || "#"}
                 disabled={!workshop.registrationLink} // Disable only if no link
                   sx={{
                    background: `linear-gradient(91.83deg, rgb(255, 81, 47) 0%, rgb(221, 36, 118) 100%)`,
                    width: "80%",
                    textTransform: "none",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    px: [4],
                    color: "#fff",
                    border: "2px solid transparent",
                    cursor: workshop.registrationLink ? "pointer" : "not-allowed", // Disable click
                    "&:hover": workshop.registrationLink
                       ? {
                        background: "transparent",
                        border: "2px solid #EF3D4E",
                        color: "#EF3D4E",
                          }
                     : {}, // No hover effect when disabled
                    }}
>
  Register Now
</Button>


            </Box>
          ))}
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Workshops;
