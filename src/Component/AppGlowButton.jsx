import { Button,  } from "@mui/material";
import { Link } from "react-router-dom";



// Reusable glowing button for "App"
export default function AppGlowButton({ onClick }) {
  return (
    <>
      <Link to="/app" style={{ textDecoration: "none" }}>
    <Button
      onClick={onClick}
      sx={{
        fontSize: "1rem",
        fontWeight: "600",
        color: "#ff9100",
        textShadow: "0 0 10px #ff9100",
        transition: "text-shadow 0.3s ease-in-out, color 0.3s ease-in-out",
        "&:hover": {
          textShadow: "0 0 15px #ff3d00, 0 0 30px #ffc107",
          color: "#ff3d00",
        },
      }}
    >
      Download
    </Button>
    </Link>
    </>
  );
}

