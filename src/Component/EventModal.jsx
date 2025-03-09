import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Backdrop,
  } from "@mui/material";
  
  // EventModal component to display event details in a modal
  export default function EventModal({ isOpen, onClose, event }) {
    if (!event) return null; // Return null if event data is missing
  
    return (
      <Dialog
        open={isOpen} // Controls modal visibility
        onClose={onClose} // Close modal when clicking outside or pressing escape
        maxWidth="sm" // Sets maximum width of the modal
        fullWidth // Ensures modal takes full available width
        BackdropComponent={Backdrop} // Uses MUI Backdrop component for background effect
        BackdropProps={{
          style: {
            backdropFilter: "blur(6px)", // Applies blur effect to background
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent dark overlay
          },
        }}
        PaperProps={{
          sx: {
            borderRadius: "20px", // Adds rounded corners to the modal
          },
        }}
      >
        {/* Modal Title Section */}
        <DialogTitle
          sx={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#EF3D4E", // Uses brand color (Tomato Red)
            pb: 1,
          }}
        >
          {event.title} {/* Displays the event title */}
        </DialogTitle>
  
        {/* Modal Content Section */}
        <DialogContent sx={{ px: 3, py: 2 }}>
          {/* Event Image Section */}
          <div
            style={{
              width: "100%",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", // Adds a soft shadow effect
              marginBottom: "16px",
            }}
          >
            <img
              src={event.image} // Displays the event poster
              alt={event.title || "Event Poster"} // Alternative text for accessibility
              style={{ width: "100%", height: "auto", objectFit: "cover" }} // Ensures proper scaling
            />
          </div>
  
          {/* Event Description */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              📝 Description: <span style={{ fontWeight: "400" }}>{event.description}</span>
            </p>
          </div>
        </DialogContent>
  
        {/* Modal Actions Section */}
        <DialogActions
          sx={{
            display: "flex",
            flexDirection: "column", // Aligns buttons vertically
            gap: 2, // Adds spacing between buttons
            px: 4,
            pb: 3,
          }}
        >
          {/* Register Button - Redirects user to event registration link */}
          {event.registrationLink && (
            <a
              href={event.registrationLink} // Opens registration link in a new tab
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                padding: "12px 0",
                fontSize: "1rem",
                textAlign: "center",
                color: "white",
                background:
                  "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))", // Gradient styling
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease", // Smooth hover transition
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "transparent"; // Makes button transparent on hover
                e.target.style.color = "#EF3D4E"; // Changes text color to red
                e.target.style.border = "2px solid #EF3D4E"; // Adds border
              }}
              onMouseLeave={(e) => {
                e.target.style.background =
                  "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))"; // Restores gradient background
                e.target.style.color = "white";
                e.target.style.border = "none";
              }}
            >
              Register Now
            </a>
          )}
  
          {/* Close Button - Closes the modal */}
          <Button
            onClick={onClose} // Calls the onClose function to close the modal
            sx={{
              width: "100%",
              padding: "10px 0",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#EF3D4E",
              border: "2px solid #EF3D4E", // Adds a red border
              backgroundColor: "transparent", // Transparent background
              transition: "all 0.3s ease", // Smooth hover effect
              "&:hover": {
                backgroundColor: "#EF3D4E", // Changes background to red on hover
                color: "white", // Changes text color to white
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  