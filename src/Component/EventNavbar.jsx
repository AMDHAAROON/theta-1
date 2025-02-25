import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * EventNavbar Component
 * ---------------------
 * A horizontal navigation bar that allows users to navigate between event pages.
 *
 * Features:
 * - Displays links for "All Events", "Day 1", "Day 2", and "Day 3".
 * - Highlights the active link with a bottom border and text color change.
 * - Scrolls to the top of the page when a link is clicked.
 * - Responsive design with horizontal scrolling for smaller screens.
 */
const EventNavbar = () => {
  const location = useLocation(); // Get the current route location

  // Navigation items with corresponding routes and display names
  const items = [
    { link: "/AllEvents", name: "All Events" },
    { link: "/Day1", name: "Day 1" },
    { link: "/Day2", name: "Day 2" },
    { link: "/Day3", name: "Day 3" },
  ];

  /**
   * ScrollToTop Function
   * -------------------
   * Scrolls the window to the top of the page.
   */
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: { xs: "auto", sm: "hidden" }, // Allow horizontal scroll on smaller screens
        whiteSpace: "nowrap",
        width: "100%",
        height: { xs: "auto", sm: "auto" },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          overflowX: "auto",
          flexWrap: "nowrap",
        }}
      >
        {items.map((item, index) => {
          const isActive = location.pathname === item.link; // Check if the current route matches the item link

          return (
            <Link
              key={index}
              to={item.link}
              onClick={ScrollToTop}
              style={{ textDecoration: "none", color: "#fff" }} // Remove default link styles and set text color
            >
              <ListItem
                sx={{
                  width: "auto",
                  py: 0,
                  px: { xs: "1rem", sm: "2.3rem" },
                  borderBottom: isActive ? "2px solid #FFB700" : "none", // Highlight active tab
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: isActive ? "#FFB700" : "inherit", // Change text color for active tab
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                  }}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );
};

export default EventNavbar; // Exporting the navigation component for use in event pages
