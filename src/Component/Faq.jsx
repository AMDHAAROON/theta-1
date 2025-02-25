import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";

/**
 * Faq Component
 * -------------
 * A responsive FAQ section with expandable accordions for frequently asked questions.
 * 
 * Features:
 * - Displays a list of questions and answers.
 * - Allows users to expand/collapse individual questions.
 * - Includes a toggle button to show or hide additional FAQs.
 * - Smooth expand/collapse transitions with MUI Accordion.
 * - Custom icons (AddCircleIcon and CancelIcon) indicate expand/collapse state.
 * - Responsive typography for various screen sizes.
 * - Styled with background gradients, shadows, and consistent spacing.
 * 
 * Props: None
 * 
 * Usage:
 * <Faq />
 */
export default function Faq() {
  // Array containing FAQ data with question and answer pairs
  const faqs = [
    {
      que: "Who can attend the cultural program?",
      ans: "Attendance is restricted to our college students only. Guests from other colleges are not permitted.",
    },
    {
      que: "Are there any dress code requirements?",
      ans: "Yes, traditional clothing such as dhoties and sarees is not allowed. Please dress in smart casuals.",
    },
    {
      que: "What do I need to enter the event?",
      ans: "Entry is only allowed with a valid student ID card. Please ensure you have it with you.",
    },
    {
      que: "Can I bring a guest?",
      ans: "No, this event is exclusive to our college students. No external guests are allowed.",
    },
    {
      que: "What time does the event start?",
      ans: "The event starts at 5 PM. Please arrive on time for entry.",
    },
    {
      que: "Is there a registration fee?",
      ans: "No, there is no registration fee to attend the cultural program.",
    },
    {
      que: "What if I forget my ID card?",
      ans: "Unfortunately, entry will not be permitted without a valid student ID. Please make sure to bring it.",
    },
    {
      que: "How can I contact the event organizers?",
      ans: "You can reach the event organizers through our student council representatives.",
    },
  ];

  // State to manage currently displayed FAQs (for expanding/collapsing extra questions)
  const [currentFaq, setCurrentFaq] = React.useState(faqs); // Displays all FAQs by default

  // State to track if the 'Show More/Show Less' feature is active
  const [expand, setExpand] = React.useState(false);

  // State to track which accordion is currently expanded
  const [expanded, setExpanded] = React.useState(false);

  /**
   * handleExpand Function
   * ---------------------
   * Toggles between showing all FAQs and showing only the first seven.
   */
  const handleExpand = () => {
    if (expand) {
      setCurrentFaq(faqs.slice(0, 7)); // Show first 7 FAQs when collapsed
      setExpand(false);
    } else {
      setCurrentFaq(faqs); // Show all FAQs when expanded
      setExpand(true);
    }
  };

  /**
   * handleChange Function
   * ---------------------
   * Handles the expansion and collapse of individual accordion items.
   * 
   * @param {number} panel - Index of the accordion being toggled.
   * @returns {function} - Event handler for accordion state changes.
   */
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false); // Expand clicked accordion or collapse if clicked again
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1, // Adds vertical spacing between accordions
          "& .MuiPaper-root.MuiAccordion-root": {
            boxShadow: "0px 12px 21px rgb(0 0 0 / 5%)",
            borderTop: "none",
            borderRadius: ".4rem",
            p: 1,
            bgcolor: "#111C3A",
            color: "#fff",
            mb: 2, // Adds spacing between each accordion
          },
          "& .MuiPaper-root.MuiAccordion-root.Mui-expanded": {
            background: "linear-gradient(60deg, #ED1E79, #662D8C)",
            color: "#fff",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            background: "transparent",
            color: "#fff",
          },
        }}
        data-aos="zoom-in-up" // Animation effect on scroll
        data-aos-duration="2000" // Animation duration (2000ms)
      >
        {/* Maps through the currentFaq array and renders an accordion for each question */}
        {currentFaq.map((item, index) => (
          <Accordion
            key={index} // Provides a unique key for each accordion
            expanded={expanded === index} // Controls the expanded state of the accordion
            onChange={handleChange(index)} // Handles accordion state changes
          >
            <AccordionSummary
              expandIcon={expanded === index ? <CancelIcon /> : <AddCircleIcon />} // Shows different icon based on expand state
              aria-controls={`panel-content-${index}`} // Accessibility attribute linking to content
              id={`panel-header-${index}`} // Accessibility attribute linking to header
            >
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1rem", xl: "1.2rem" }, fontWeight: 400 }}
              >
                {item.que} {/* Displays the question */}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "1rem", xl: "1.2rem" }, fontWeight: 400 }}
              >
                {item.ans} {/* Displays the answer */}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
