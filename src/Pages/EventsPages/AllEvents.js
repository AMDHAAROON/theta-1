import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "../../Component/Footer";
import EventNavbar from "../../Component/EventNavbar";
import EventModal from "../../Component/EventModal"; // Import the modal

const contestData = [
  {
    id: 1,
    title: "Word and Excel",
    date: "Date: 26th-Feb-2025",
    time: "Time: 09:00 a.m. - 04:00 p.m.",
    venue: "Venue: Auditorium",
    registrationLink: "https://forms.gle/twvNDLwRdMZtRY5D6",
    image: "/Assets/Posters/deep.jpeg",
    description:
      "Unlock your potential through our interactive workshop to boost productivity with expert tips, smart techniques, and time-saving hacks.",
  },
  {
    id: 2,
    title: "CELEBRATING SOON",
    date: "CELEBRATING SOON",
    time: "TBA",
    venue: "Robotics",
    registrationLink: "",
    image: "/Assets/Posters/event_placeholder.jpg",
    description: "A thrilling robotics event is on the way!",
  },
  {
    id: 3,
    title: "CELEBRATING SOON",
    date: "CELEBRATING SOON",
    time: "TBA",
    venue: "Informatica",
    registrationLink: "",
    image: "/Assets/Posters/event_placeholder.jpg",
    description: "Gear up for an exciting informatics competition!",
  },
];

const AllEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      {/* Navbar and Page Title */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(Assets/Logo.png)",
          backgroundSize: "20%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          padding: { xs: "30px 1rem", md: "50px 10rem" },
          height: { xs: "50vh", md: "55vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0B1121",
            opacity: 0.85,
            zIndex: -1,
          },
        }}
      >
        <Navbar color="#fff" />
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: ["20px", "22px", "36px"],
              my: 1,
              textAlign: "center",
            }}
          >
            All Events
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              pb: 5,
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#9A9EA1",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon
              sx={{
                color: "#9A9EA1",
                fontWeight: "bold",
                fontSize: "36px",
              }}
            />
            <Typography
              sx={{
                color: "#9A9EA1",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              All Events
            </Typography>
          </Box>
          <EventNavbar />
        </Box>
      </Box>

      {/* Event Cards */}
      <Box sx={{ py: 5, bgcolor: "#000212" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            padding: 4,
          }}
        >
          {contestData.map((event) => (
            <Box
              key={event.id}
              sx={{
                width: { xs: "100%", sm: "90%", md: "30%" },
                bgcolor: "#E6F3FB",
                p: 3,
                border: "3px solid #EF3D4E",
                borderRadius: "10px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.5s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 0px 103px -25px rgba(125,125,125,1)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#333",
                  mb: 1,
                }}
              >
                {event.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#333",
                  mb: 1,
                }}
              >
                {event.date}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#333",
                  mb: 1,
                }}
              >
                {event.time}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#333",
                  mb: 2,
                }}
              >
                {event.venue}
              </Typography>

              <Button
                variant="contained"
                onClick={() => handleOpenModal(event)}
                disabled={!event.registrationLink}
                sx={{
                background: "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))",
                width: "80%",
                borderRadius: "50px",
                textTransform: "none",
                fontSize: "1rem",
                color: "#fff",
                border: "2px solid transparent",
                cursor: "pointer",
                    "&:hover": {
                                    background: "transparent",
                                    border: "2px solid #EF3D4E",
                                    color: "#EF3D4E",
                                },
                }}
            >
                Learn more
            </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />
      )}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AllEvents;