import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Backdrop,
} from "@mui/material";

// PopupModal component to display workshop details in a modal
export default function PopupModal({ isOpen, onClose, workshop }) {
  if (!workshop) return null; // Return null if workshop data is missing

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
        {workshop.title} {/* Displays the workshop title */}
      </DialogTitle>

      {/* Modal Content Section */}
      <DialogContent sx={{ px: 3, py: 2 }}>
        {/* Chief Guest Details */}
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            🎤 Chief Guest:{" "}
            <span style={{ fontWeight: "400" }}>{workshop.chiefGuest}</span>
          </p>
        </div>

        {/* Workshop Image Section */}
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
            src={workshop.image} // Displays the workshop poster
            alt={workshop.title || "Event Poster"} // Alternative text for accessibility
            style={{ width: "100%", height: "auto", objectFit: "cover" }} // Ensures proper scaling
          />
        </div>

        {/* Workshop Description */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            📝 Description:{" "}
            <span style={{ fontWeight: "400" }}>{workshop.description}</span>
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
        {/* Register Button - Redirects user to workshop registration link */}
        <Button
          sx={{
            width: "100%",
            padding: "12px 0",
            fontSize: "1rem",
            textAlign: "center",
            color: "white",
            background:
              "linear-gradient(91.83deg, rgb(114, 107, 107), rgb(60, 60, 60), rgb(0, 0, 0))",
            borderRadius: "50px",
            fontWeight: "600",
            border: "2px solid transparent",
            transition: "all 0.3s ease",
            cursor: "not-allowed",
          }}
        >
          Closed
        </Button>

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
          Hide
        </Button>
      </DialogActions>
    </Dialog>
  );
}
