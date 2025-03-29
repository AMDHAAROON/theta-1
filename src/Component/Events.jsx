import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const eventRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) observer.unobserve(eventRef.current);
    };
  }, []);

  return (
    <>
       
    <Box
    
      ref={eventRef}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: [4, 8],
        background: "linear-gradient(to bottom, #000212, #6b0212, #000000)",
        overflow: "hidden",
      }}
      
    >
    
      
      <Card
        sx={{
          width: ["90%", "768px"],
          p: [2, 3],
          background: "linear-gradient(to top, #6b0212, #000212, #6b0212)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          boxShadow: ["0 0 10px rgba(139, 0, 0, 0.4)", "0 0 20px rgba(139, 0, 0, 0.5)"],
          border: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 0 25px rgba(180, 0, 0, 0.8)",
          },
        }}
      >
       
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#ff4444" }}>
            Featured Event
          </Typography>
          <Typography  sx={{  color: "#ffffff" , fontFamily: "'Concert One', sans-serif",fontSize: ["1.8rem", "2.4rem"] }}>
            Theta 2k25
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, mt: 1, color: "#ffc2c2" }}>
            April 10, 2025 | April 11, 2025
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: "linear-gradient(to right, #ff4444, #cc0000)",
              color: "white",
              px: 2,
              py: 1,
              fontSize: ["14px", "16px"],
              borderRadius: "9999px",
              transition: "transform 0.3s ease, background 0.3s ease",
              "&:hover": {
                background: "linear-gradient(to right, #cc0000, #ff4444)",
                transform: "scale(1.05)",
                boxShadow: ["0 0 5px rgba(255, 68, 68, 0.6)", "0 0 15px rgba(255, 68, 68, 0.8)"],
              },
            }}
          >
            View All Events
          </Button>
        </CardContent>
      </Card>
    </Box>
    </>
  );
};

export default Events;
