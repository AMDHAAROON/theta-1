import React, { useEffect, useState } from "react";
import Carousel from "../Component/Carousel ";
import Brands from "../Component/Brands";
import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import TitleWithDescription from "../Component/TitleWithDescription ";
import Faq from "../Component/Faq";
import Navbar from "../Component/Navbar";
import Clusters from "../Component/Clusters";
import Review from "../Component/Review";
import Footer from "../Component/Footer";
import Allclusters from "../Component/Allclusters";
import Theta from "../Component/Theta";
import Events from "../Component/Events";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("thetaAppPopupShown");
  
    if (!hasShownPopup) {
      setOpenPopup(true);
      sessionStorage.setItem("thetaAppPopupShown", "true");
    }
  }, []);
  

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <>
      {/* Popup shown only on hard refresh */}
      <Dialog
  open={openPopup}
  onClose={handleClose}
  BackdropProps={{
    sx: {
      backgroundColor: "rgba(0, 0, 0, 0.3)", // darkened transparent overlay
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    },
  }}
  PaperProps={{
    sx: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: 4,
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
      color: "#fff",
      p: 3,
    },
  }}
>
  <DialogTitle
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.5rem",
      position: "relative",
      color: "#fff",
    }}
  >
    🎉 Introducing the Theta App!
    <IconButton
      onClick={handleClose}
      sx={{
        position: "absolute",
        right: 8,
        top: 8,
        color: "#fff",
      }}
    >
      <CloseIcon />
    </IconButton>
  </DialogTitle>

  <DialogContent sx={{ textAlign: "center", mt: 1 }}>
    <Typography
      sx={{
        mb: 3,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        color: "#fff",
        fontSize: {
          xs: "0.95rem", // mobile
          sm: "1.1rem",  // tablets and up
          md: "1.25rem", // desktops
        },
      }}
    >
      Stay connected with every moment of Theta 2K25! Get updates, event alerts, and schedules — all in one app.
    </Typography>
    <Link to="/app" style={{ textDecoration: "none" }}>
    <Button
        variant="contained"
        href="https://drive.google.com/file/d/1-gJCfHrvRQR1VRpGWEfiBLLMKPSYV2bF/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      sx={{
        background: "linear-gradient(135deg, #ff5e62, #ff9966)",
        color: "#fff",
        px: 5,
        py: 1,
        borderRadius: "25px",
        fontWeight: "bold",
        textTransform: "none",
        boxShadow: "0 4px 12px rgba(255, 94, 98, 0.5)",
        "&:hover": {
          background: "linear-gradient(135deg, #ff9966, #ff5e62)",
        },
        
      }}
    >
      📲 Download Now
    </Button>
    </Link>
  </DialogContent>
</Dialog>


      <Box sx={{ bgcolor: "#000212" }}>
        <Carousel />
        <Navbar color="#fff" />
      </Box>
      <Box>
        <Events />
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <TitleWithDescription title="Visit our Clusters" />
        <Clusters />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none", mt: "20px" } }}>
        <TitleWithDescription title="Visit our Clusters" />
        <Allclusters />
      </Box>
      <Box>
        <Review />
      </Box>
      <Box>
        <Brands />
      </Box>
      <Box sx={{ bgcolor: "#000212", px: [3, 10] }}>
        <TitleWithDescription title="Frequently Asked Questions" />
        <Faq />
      </Box>
      <Box>
        <Theta />
      </Box>
      <Box sx={{ bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            py: 5,
          }}
        >
          <Divider
            variant="middle"
            component="li"
            sx={{
              borderColor: "#282828",
              width: "92%",
              position: "relative",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scaleY(1.1)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "30%",
                height: "2px",
                backgroundColor: "#FFD700",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                transition: "width 0.3s ease",
              },
              "&:hover::before, &:hover::after": {
                width: "40%",
              },
            }}
          />
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#000212" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
