import React from "react";
import { Box } from "@mui/material";
import TitleWithDescription from "../Component/TitleWithDescription ";
import Navbar from "../Component/Navbar";
import Clusters from "../Component/Clusters";

const Cluster = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000212", py: 10 }}>
        <Navbar color="#fff" />
        <TitleWithDescription title="Visit our Clusters" />
        <Clusters />// Used the Clusters component here
      </Box>
    </>
  );
};
export default Cluster;
