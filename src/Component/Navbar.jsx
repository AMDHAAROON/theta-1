import * as React from "react";
import { useState, useEffect } from "react";
import DevBtn from "./DevBtn";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Drawer,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Stack,
  useScrollTrigger,
  Slide,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Navbar(props) {
  const { color } = props;
  const [isDown, setIsDown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const handleScroll = () => {
      setIsDown(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    ScrollToTop();
    setMobileOpen(false);
  };

  const navItems = [
    { link: "/", name: "Home" },
    !isMdUp && { link: "/Cluster", name: "Cluster" },
    { link: "/Workshops", name: "Workshops" },
    { link: "/ContactUs", name: "Contact Us" },
  ].filter(Boolean);

  const drawer = (
    <Stack direction="column">
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end", pr: 2 }}>
        <CloseIcon
          sx={{ color: "#fff" }}
          onClick={() => setMobileOpen(false)}
        />
      </Toolbar>
      <List sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {navItems.map((item, index) => (
          <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
            <ListItem button onClick={handleNavClick}>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem", color: "#fff" }}>
                    {item.name}
                  </Typography>
                }
              />
            </ListItem>
          </Link>
        ))}
        <DevBtn />
      </List>
    </Stack>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
          <Toolbar
            sx={{
              backgroundColor: "transparent",
              py: [0, 0, 2, 1, 1],
              px: [0, 1, 1, 6, "10%"],
              color: isDown ? "#000" : color,
              bgcolor: isDown ? "rgba(255, 255, 255, 0.42)" : null,
              backdropFilter: isDown ? "blur(50px)" : null,
              borderRadius: isDown ? ["0 0 .7rem .7rem", "0 0 1.5rem 1.5rem"] : null,
              boxShadow: isDown ? 3 : null,
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" width="100%" sx={{ display: ["flex", "flex", "none"], justifyContent: "space-between" }}>
              <Link to="/">
                <ImageListItem>
                  <Box component="img" src="/Assets/logo1.png" sx={{ width: "10%", ml: 2 }} alt="logo" />
                </ImageListItem>
              </Link>
              <IconButton onClick={handleDrawerToggle} color="inherit">
                <MenuIcon />
              </IconButton>
            </Stack>
            <Link to="/">
              <ImageListItem sx={{ display: ["none", "none", "none", "flex"] }}>
                <Box component="img" src="/Assets/logo1.png" sx={{ width: "12%", mt: 1 }} alt="logo" />
              </ImageListItem>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex", gap: "1rem" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  href={item.link}
                  sx={{ fontSize: [17], fontWeight: "600", color: isDown ? "#000" : color }}
                  onClick={ScrollToTop}
                >
                  {item.name}
                </Button>
              ))}
              <DevBtn />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box component="nav" sx={{ display: { xs: "block", md: "none" } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%", background: "#181818" } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
