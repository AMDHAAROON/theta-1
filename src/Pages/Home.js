import React from "react";
import Carousel from "../Component/Carousel ";
import Brands from "../Component/Brands";
import { Box, Divider } from "@mui/material";
import TitleWithDescription from "../Component/TitleWithDescription ";
import Faq from "../Component/Faq";
import Navbar from "../Component/Navbar";
import Clusters from "../Component/Clusters";
import Review from "../Component/Review";
import Footer from "../Component/Footer";
import Allclusters from "../Component/Allclusters";
import Theta from "../Component/Theta";
import Events from "../Component/Events"

const Home = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000212" }}>
        <Carousel />
        <Navbar color="#fff" />
      </Box>
      <Box><Events/></Box>
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
