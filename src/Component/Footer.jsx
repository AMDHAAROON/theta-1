import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Event", path: "/AllEvents" },
  { title: "Contact Us", path: "/ContactUs" },
];

const UsefulLinks = [
  { title: "Sastra University", href: "https://src.sastra.edu/" },
  { title: "Rules & Regulation", path: "/about" },
];

const socialLinks = [
  { Icon: FacebookIcon, url: "https://facebook.com" },
  { Icon: TwitterIcon, url: "https://twitter.com" },
  { Icon: InstagramIcon, url: "https://www.instagram.com/theta_src_official" },
  { Icon: YouTubeIcon, url: "https://www.youtube.com/@TeamEmulsion" },
];

const ScrollToTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 600 && window.innerWidth < 960,
  );
  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
    setIsTablet(window.innerWidth >= 600 && window.innerWidth < 960);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box sx={{ bgcolor: "#000212", color: "white", px: { xs: 2 } }}>
      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              National Level Techno-Management Fest, Theta
            </Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <HomeIcon />
              <Typography sx={{ ml: 2 }}>
                SASTRA Deemed to be University, SRC, Kumbakonam - 612001.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <PhoneIcon />
              <Typography sx={{ ml: 2 }}>0435-2426823</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <EmailIcon />
              <Typography sx={{ ml: 2 }}>theta@src.sastra.ac.in</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {navLinks.map((item, index) => (
              <Typography key={index} sx={{ mb: 1 }}>
                <Link
                  to={item.path}
                  onClick={ScrollToTop}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Useful links
            </Typography>
            {UsefulLinks.map((item, index) => (
              <Typography key={index} sx={{ mb: 1 }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={ScrollToTop}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                )}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Subscribe for latest updates
            </Typography>
            <Box mt={2} display="flex" justifyContent="flex-start">
              {socialLinks.map(({ Icon, url }, index) => (
                <IconButton
                  key={index}
                  color="inherit"
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mr: 1,
                    "&:hover": {
                      color: "#FFB700",
                      transition: "color 0.3s ease",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="body2">
            Copyright © 2025 Theta | Designed and Developed by WebTEK
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
