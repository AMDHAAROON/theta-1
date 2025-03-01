import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Grow,
  Button,
} from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PhoneIcon from "@mui/icons-material/Phone";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    h6: {
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#D3D6DB",
    },
  },
});

const ContactUs = () => {
  const contactInfo = [
    {
      icon: (
        <SupervisorAccountIcon
          style={{ fontSize: "40px", color: "#009688 " }}
        />
      ),
      title: "Co-Convenors",
      content: (
        <>
          <br />
          <strong>Capt. Senthilnathan T</strong> <br /> Phone No : +91 94432
          75916 <br />
          <br />
          <strong>Dr. Mathi R</strong> <br /> Phone No : +91 93844 53922 <br />
          <br />
          <strong>Dr. Sundhara Raman M</strong> <br /> Phone No : +91 99407
          50345 <br />
          <br />
          <strong>Mr. Swaminathan R</strong> <br /> Phone No : +91 89402 50154{" "}
          <br />
          <br />
        </>
      ),
    },
    {
      icon: <HowToRegIcon style={{ fontSize: "40px", color: "#1E88E5 " }} />,
      title: "Convenor",
      content: (
        <>
          <br />
          <strong>Dr. Srinivasan A</strong> <br /> Phone No : +91 70107 45391{" "}
          <br />
          <br />
        </>
      ),
    },
    {
      icon: <PhoneIcon style={{ fontSize: "40px", color: "#D32F2F" }} />,
      title: "Contact Us",
      content: (
        <>
          <br />
          <strong>President : Surya C</strong> <br /> Phone No : +91 93606 17308{" "}
          <br />
          <br />
          <strong>Vice-President : Venkatesh N</strong> <br /> Phone No : +91
          94437 76472 <br />
          <br />
          <strong>Vice-President : Karen Angel</strong> <br /> Phone No : +91
          74183 15768
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ),
    },
  ];

  useEffect(() => {
    document.title = "Contact Us - Theta Program";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          flexDirection: "column",
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
        <Typography
          sx={{
            fontSize: ["30px", "35px"],
            fontWeight: 600,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
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
            Contact Us
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ backgroundColor: "#000212", py: 6, px: { xs: 4, sm: 6, md: 12 } }}
      >
        <Box
          sx={{
            pb: 5,
            textAlign: "center",
            backgroundColor: "#000212",
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            sx={{
              fontSize: ["20px", "30px"],
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.4,
              mb: 4,
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Join Us for an Unforgettable Cultural Experience
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow in timeout={800 + index * 200}>
                <Card
                  sx={{
                    minHeight: "280px",
                    textAlign: "center",
                    backgroundColor: "#1A1F36",
                    backdropFilter: "blur(15px)",
                    boxShadow: "0 10px 30px rgba(255, 105, 135, 0.3)",
                    borderRadius: "20px",
                    p: 1,
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0 20px 40px rgba(255, 105, 135, 0.5)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "15px",
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: info.icon.props.style.color,
                        fontWeight: "bold",
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography variant="body2">{info.content}</Typography>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mb: 3, mt: 3, px: [2, 3, 6] }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 1000, color: "#fff", mb: 1 }}
          >
            Find Us Here
          </Typography>
        </Box>

        {/* Responsive Google Map */}
        <Box
          sx={{
            display: "block",
            justifyContent: "center",
            px: [2, 3, 10],
            pb: 5,
          }}
        >
          <iframe
            title="Sastra-SRC Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9961649966363!2d79.3833342742127!3d10.963661489196678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55337f1ce17aa5%3A0xb5ee193422b5ca2e!2sSastra%20University%20Srinivasa%20Ramanujan%20Center%2C%20Kumbakonam!5e0!3m2!1sen!2sin!4v1740157561205!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <Typography
            sx={{
              color: "#A0A5AA",
              fontSize: "16px",
              textAlign: "center",
              mt: "8px",
            }}
          >
            Locate our place easily using the map above. We look forward to
            seeing you!
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 1000,
              color: "#fff",
              mb: 2,
              animation: "slideDown 1s ease-out",
              display: "block",
            }}
          >
            Visit Our Gallery
          </Typography>

          <Link
            to="/gallery"
            /*onClick={scrollToTop}*/ style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E91E63",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                px: 4,
                borderRadius: "8px",
                textTransform: "none",
                border: "2px solid transparent",
                animation: "pulse 1.5s infinite",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#E91E63",
                  border: "2px solid #E91E63",
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              View Gallery
            </Button>
              
          </Link>
          <style>
            {`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }

      @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}
              
          </style>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default ContactUs;
