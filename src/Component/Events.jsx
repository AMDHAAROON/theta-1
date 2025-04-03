import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, Typography, Button, Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import FeaturedModal from "./FeaturedModal"; // Import the new FeaturedModal component
import { event } from "../utility/data"; // Import the new FeaturedModal component

const events = [
  {
    id: 2,
    title: "கூத்துப்பட்டறை",
    date: "April 11, 2025",
    time: "2:00 PM - 3:00 PM",
    venue: "Auditorium",
    description: "",
    image: "/Assets/event/koothuparai.jpeg",
    registrationLink: "",
  },
  {
    id: 2,
    title: "பட்டிமன்றம்",
    date: "April 12, 2025",
    time: "2:00 PM - 5:00 PM",
    venue: "Auditorium",
    description: "",
    image: "/Assets/event/pattimandram.jpg",
    registrationLink: "",
  },
  {
    id: 2,
    title: "தெருக்கூத்து ",
    date: "April 13, 2025",
    time: "10:00 AM - 11:00 AM",
    venue: "Portico",
    description: "A lively debate event with participants from all walks of life.",
    image: "/Assets/event/therukoothu.jpeg",
    registrationLink: "",
  },
  
];

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const eventRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) observer.unobserve(eventRef.current);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
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
  position: "relative",
  background: "linear-gradient(to top, #6b0212,rgba(0, 2, 18, 0.56), #6b0212)",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  boxShadow: ["0 0 10px rgba(139, 0, 0, 0.4)", "0 0 20px rgba(139, 0, 0, 0.5)"],
  border: "1px solid rgba(255, 255, 255, 0.2)",
  textAlign: "center",
  transform: isVisible ? "translateY(0)" : "translateY(50px)",
  opacity: isVisible ? 1 : 0,
  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 0 25px rgba(180, 0, 0, 0.8)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "50%", // Adjust the size of the background image
    height: "100%",
    backgroundImage: `url(${event.logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: showMore ? 0 : 0.2, // Reduce the opacity of the image
    transform: "translate(-50%, -50%)",
    zIndex: 0,
  },
}}

>

        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#ff4444" }}>
          Fusion Fest
          </Typography>
          <Typography sx={{ color: "#ffffff", fontFamily: "'Concert One', sans-serif", fontSize: ["1.8rem", "2.4rem"] }}>
            Theta 2k25
          </Typography>
          

          {!showMore && (
            <Button
              variant="contained"
              onClick={() => setShowMore(true)}
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
                },
              }}
            >
              Discover Now
            </Button>
          )}

          {showMore && (
            <Box sx={{ mt: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IconButton onClick={handlePrev} sx={{ color: "#ffffff", right: "-2px", }}>
                <ArrowBackIos />
              </IconButton>

              <Box
                sx={{
                  width: "100%",
                  background: "linear-gradient(to top, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                  borderRadius: "12px",
                  p: 3,
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(255, 68, 68, 0.3)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 6px 20px rgba(255, 68, 68, 0.6)",
                  },
                }}
              >
                <Typography sx={{ color: "#ffaaaa", fontSize: ["1.5rem", "2rem"], fontWeight: "bold" }}>
                  {events[currentIndex].title}
                </Typography>
                <Typography sx={{ color: "#ffffff", mt: 1 }}>
                  {events[currentIndex].date}
                </Typography>
                <Typography sx={{ color: "#ffffff", mt: 1 }}>
                {events[currentIndex].time}
                </Typography>
                <Typography sx={{ color: "#ffdddd", mt: 1, fontWeight: "600" }}>
                  Venue: {events[currentIndex].venue}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleLearnMore(events[currentIndex])}
                  sx={{
                    mt: 2,
                    background: "linear-gradient(to right, #ff4444, #cc0000)",
                    color: "white",
                    px: 2,
                    py: 1,
                    fontSize: "14px",
                    borderRadius: "9999px",
                    transition: "transform 0.3s ease, background 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(to right, #cc0000, #ff4444)",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>

              <IconButton onClick={handleNext} sx={{ color: "#ffffff", right: "-4px" }}>
                <ArrowForwardIos />
              </IconButton>
            </Box>
          )}
            {/* Hide Button */}
            {showMore && (
            <Button
              onClick={() => setShowMore(false)}
              sx={{
                mt: 3,
                background: "linear-gradient(to right, #ff4444, #cc0000)",
                color: "white",
                px: 2,
                py: 1,
                fontSize: ["14px", "16px"],
                borderRadius: "10px",
                transition: "transform 0.3s ease, background 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(to right, #cc0000, #ff4444)",
                  transform: "scale(1.05)",
                },
              }}
            >
              Hide Events
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Featured Modal */}
      {isModalOpen && selectedEvent && <FeaturedModal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />}
    </Box>
  );
};

export default Events;
