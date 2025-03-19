import { Box, List, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
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
  // Get the current route location
  const location = useLocation();

  // State to store the active path
  const [activePath, setActivePath] = useState("");

  /**
   * useEffect Hook
   * -------------------
   * - Updates the active path when the route location changes.
   * - If the path is "/", sets the active path to "/allEvents".
   * - Ensures the correct tab is highlighted after a redirect or refresh.
   */
  useEffect(() => {
    setActivePath(location.pathname === "/" ? "/allEvents" : location.pathname);
  }, [location.pathname]);

  // Navigation items with corresponding routes and display names
  const items = [
    { link: "/allEvents", name: "All Events" },
    { link: "/day-one", name: "Day 1" },
    { link: "/day-two", name: "Day 2" },
    { link: "/day-three", name: "Day 3" },
  ];

  /**
   * handleScrollToTop Function
   * -------------------
   * - Scrolls the window to the top of the page.
   * - Uses smooth scrolling for better UX.
   */
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          overflowX: "auto", // Allow horizontal scrolling if items exceed screen width
          flexWrap: "nowrap", // Prevent items from wrapping to the next line
        }}
      >
        {items.map((item, index) => {
          // Check if the current route matches the item link
          const isActive = activePath === item.link;

          return (
            <Link
              key={index}
              to={item.link}
              onClick={() => {
                setActivePath(item.link); // ✅ Sync state on click
                handleScrollToTop(); // ✅ Scroll to top after click
              }}
              style={{
                textDecoration: "none", // Remove default link underline
                color: isActive ? "#FFB700" : "#fff", // Highlight active tab with color change
                fontWeight: isActive ? "600" : "400", // Bold text for active tab
              }}
            >
              <ListItem
                sx={{
                  width: "auto", // Adjust width to content size
                  py: 1, // Vertical padding
                  px: { xs: "1rem", sm: "2rem" }, // Horizontal padding
                  borderBottom: isActive ? "2px solid #FFB700" : "none", // Highlight active tab with bottom border
                  transition: "background-color 0.2s ease", // Smooth transition for hover effect
                  "&:hover": {
                    backgroundColor: "#333", // Dark background on hover
                  },
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    fontSize: { xs: "0.85rem", sm: "1rem" }, // Responsive font size
                    fontWeight: isActive ? "600" : "400", // Bold for active tab
                    textTransform: "capitalize", // Capitalize first letter of each word
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
