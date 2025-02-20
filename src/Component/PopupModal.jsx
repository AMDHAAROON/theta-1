import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Backdrop } from "@mui/material";

export default function PopupModal({ isOpen, onClose, workshop }) {
  if (!workshop) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      BackdropComponent={Backdrop}
      BackdropProps={{
        style: {
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: "20px", // Added roundness to the popup
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#EF3D4E",
          pb: 1,
        }}
      >
        {workshop.title}
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
          <p style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "8px" }}>
            🎤 Chief Guest: <span style={{ fontWeight: "400" }}>{workshop.chiefGuest}</span>
          </p>
        </div>

        <div
          style={{
            width: "100%",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
          }}
        >
         {/*.. <img
           src={workshop.image}
            alt={workshop.title || "Event Poster"}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />..*/}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
            📝 Description: <span style={{ fontWeight: "400" }}>{workshop.description}</span>
          </p>
        </div>
      </DialogContent>

      <DialogActions
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: 4,
          pb: 3,
        }}
      >
        <a
          href={workshop.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "100%",
            padding: "12px 0",
            fontSize: "1rem",
            textAlign: "center",
            color: "white",
            background: "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "600",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#EF3D4E";
            e.target.style.border = "2px solid #EF3D4E";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))";
            e.target.style.color = "white";
            e.target.style.border = "none";
          }}
        >
          Register Now
        </a>

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
            '&:hover': {
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
