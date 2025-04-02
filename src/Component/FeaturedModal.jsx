import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Backdrop,
} from "@mui/material";

// FeaturedModal component for displaying event details
export default function FeaturedModal({ isOpen, onClose, event }) {
  if (!event) return null; // Prevents errors if event data is missing

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backdropFilter: "blur(6px)", // Background blur effect
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: "20px", // Rounded corners for modal
        },
      }}
    >
      {/* Modal Title */}
      <DialogTitle
        sx={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#EF3D4E",
          pb: 1,
        }}
      >
        {event.title}
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent sx={{ px: 3, py: 2 }}>
        {/* Event Poster */}
        <div
          style={{
            width: "100%",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
          }}
        >
          <img
            src={event.image}
            alt={event.title || "Event Poster"}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>

        {/* Event Description */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            📝 Description:{" "}
            <span style={{ fontWeight: "400" }}>{event.description}</span>
          </p>
        </div>
      </DialogContent>

      {/* Modal Actions */}
      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 4,
          pb: 3,
        }}
      >
        {/* Registration Button */}
        {event.registrationLink ? (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              padding: "12px 0",
              fontSize: "1rem",
              textAlign: "center",
              color: "white",
              background:
                "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              border: "2px solid transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#EF3D4E";
              e.target.style.border = "2px solid #EF3D4E";
            }}
            onMouseLeave={(e) => {
              e.target.style.background =
                "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))";
              e.target.style.color = "white";
              e.target.style.border = "none";
            }}
          >
            Register Now
          </a>
        ) : (
          <Button
            sx={{
              width: "100%",
              padding: "12px 0",
              fontSize: "1rem",
              textAlign: "center",
              color: "white",
              background:
                "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))",
              borderRadius: "50px",
              fontWeight: "600",
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "transparent",
                color: "#EF3D4E",
                border: "2px solid #EF3D4E",
              },
            }}
            disabled
          >
            On-Spot Registration
          </Button>
        )}

        {/* Close Button */}
        <Button
          onClick={onClose}
          sx={{
            width: "100%",
            padding: "10px 0",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "#EF3D4E",
            border: "2px solid #EF3D4E",
            backgroundColor: "transparent",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#EF3D4E",
              color: "white",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
