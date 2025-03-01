import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/**
 * Custom Accordion component using Material UI's Accordion.
 *
 * Props:
 * - head (ReactNode): Content to be displayed in the accordion header.
 * - body (ReactNode): Content to be shown when the accordion is expanded.
 * - display (string): CSS display property to control the accordion's layout.
 * - lastChild (boolean): Determines whether to remove the bottom border for the last accordion.
 */
function CusAccordion({ head, body, display, lastChild }) {
  return (
    <Box
      sx={{
        width: "100%",
        // Style overrides for the Accordion component
        "& .MuiPaper-root.MuiAccordion-root": {
          borderTop: "none", // Removes the top border
          borderRadius: 0, // Removes border radius for a flat look
          bgcolor: "transparent", // Transparent background
          borderBottom: ".5px solid #f5f5f52a", // Subtle bottom border
          color: "#fff", // White text color
        },
        "& .MuiPaper-root.MuiAccordion-root.Mui-expanded": {
          boxShadow: "none", // Removes default shadow on expansion
          borderTop: "none",
          borderBottom: lastChild ? "none" : "", // Removes bottom border if lastChild is true
          borderRadius: 0,
          color: "#fff",
        },
        "& .MuiPaper-root.MuiAccordion-root:before": {
          height: 0, // Removes default pseudo-element spacing
        },
        "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
          color: "#fff", // Ensures expanded header text remains white
        },
        "& .MuiCollapse-root": {
          color: "#fff", // Content text color
        },
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
          background: "transparent", // No background on icon wrapper
          color: "#F5F5F57A", // Light grey color for expanded icon
        },
        "& .MuiAccordionSummary-expandIconWrapper": {
          background: "transparent",
          color: "#F5F5F57A", // Default icon color
        },
        display: display, // Dynamic display property (e.g., "flex")
        flexDirection: "column",
        gap: 1, // Gap between accordion items
      }}
    >
      {/* Single accordion item */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="inherit" />} // Expand icon with inherited color
          aria-controls={`panel1a-content`} // Accessibility control for content panel
          id={`panel1a-header`} // Unique ID for header
        >
          {head} {/* Accordion header content */}
        </AccordionSummary>
        <AccordionDetails>
          {body} {/* Accordion expanded content */}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CusAccordion; // Exporting the custom accordion component for reuse
