import { Box, Button, Typography,Fade } from "@mui/material";
import React, { useState,useEffect } from "react";
import Navbar from "../../Component/Navbar";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "../../Component/Footer";
import EventNavbar from "../../Component/EventNavbar";
import EventModal from "../../Component/EventModal";

const day2Events = [
  {
    id: 1,
    title: "Wit Wizard War",
    date: "Date: 12th-Apr-2025",
    time: "Time: 02:00 p.m. - 5:00 p.m.",
    venue: "Venue: T&P Hall",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeCs0PuI3B0aFweRqu9c2I9F6gi2jfzeG67ap2rF8O-IFfZ2Q/viewform?usp=send_form",
    cluster: "BIOGENSIS",
    image: "/Assets/event/Witwizardwar.jpg",
    description: "",
  },
  {
    id: 2,
    title: "Rhythm Quest",
    date: "Date: 12th-Apr-2025",
    time: "Time: 09:30 a.m. - 4:00 p.m.",
    venue: "Venue: 202",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeacru5T2jWx-XFUqIcftUBsHRdIewgfYsBEO0wOdvsabEjjA/viewform",
    cluster: "MATHEMATICA",
    image: "/Assets/event/RhythmQuest.jpg",
    description: "",
  },
  {
    id: 3,
    title: "Number Ninjas",
    date: "Date: 12th-Apr-2025",
    time: "Time: 09:30 a.m. - 4:00 p.m.",
    venue: "Venue: 211",
    registrationLink: "https://forms.gle/mnHgKEJREeZyyaWz8",
    cluster: "MATHEMATICA",
    image: "/Assets/event/NumberNinjas.jpg",
    description: "",
  },

  {
    id: 4,
    title: "RRR [Reverse, React, Recognize]",
    date: "Date: 12th-Apr-2025",
    time: "Time: 10:00 a.m. - 2:00 p.m.",
    venue: "Venue: 303",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDTyneBpa6o7-j7CSVEWB9R46Unzy8tfr_Jh9keJJUJTBEqQ/viewform",
    cluster: "STRATEGIA",
    image: "/Assets/event/RRR.jpg",
    description: "",
  },
  {
    id: 5,
    title: "Brain Snap Challenge",
    date: "Date: 12th-Apr-2025",
    time: "Time: 12:00 p.m. - 04:00 p.m.",
    venue: "Venue: 310",
    registrationLink: "https://forms.gle/wyFme1qmSstETKqU9",
    cluster: "STRATEGIA",
    image: "/Assets/event/BrainSnap.jpg",
    description: "",
  },
  {
    id: 6,
    title: "F Cube",
    date: "Date: 12th-Apr-2025",
    time: "Time: 9:30 a.m. - 12:30 p.m.",
    venue: "Venue: Drawing Hall",
    registrationLink: "https://forms.gle/KG2KiDxzx8bDMuEp7",
    cluster: "ACCESS",
    image: "/Assets/event/FCube.jpeg",
    description: "",
  },
  {
    id: 7,
    title: "Code Master",
    date: "Date: 12th-Apr-2025",
    time: "Time: 10:00 a.m. - 1:00 p.m.",
    venue: "Venue: Lab 1",
    registrationLink: "https://forms.gle/bSS2Jt8RxjAcihT28",
    cluster: "INFORMATICA",
    image: "/Assets/event/codemasters.jpeg",
    description: "",
  },
  {
    id: 1,
    title: "Tech Talent",
    date: "Date: 12th-Apr-2025",
    time: "Time: 02:00 p.m. - 04:00 p.m.",
    venue: "Venue: Lab 1",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdYzRluM4jzmjaymSmj7Kd7PuRc6JveCFacpXT8XRt9-3cKug/viewform?usp=send_form",
    cluster: "INFORMATICA",
    image: "/Assets/event/Techtalent.jpeg",
    description: "",
  },
  {
    id: 31,
    title: "Apt Apt",
    date: "Date: 12th-Apr-2025",
    time: "Time: 10:00 a.m. - 12:00 p.m.",
    venue: "Venue: 510",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdik2kiEqgIIa5fRJReOk_TEWNWbdJxWIAPfiErcajCjbCq3g/viewform",
    cluster: "Optica",
    image: "/Assets/event/AptApt.jpeg",
    description: "",
  },

  {
    id: 25,
    title: "Powerlift",
    date: "Date: 12th-Apr-2025",
    time: "Time: 10:30 a.m.",
    venue: "Venue: Near Stall",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/PowerLifting.jpeg",
    description: "",
  },
  {
    id: 26,
    title: "Football",
    date: "Date: 12th-Apr-2025",
    time: "Time: 10:30 a.m.",
    venue: "Venue: Football Court",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/Football.jpeg",
    description: "",
  },
  {
    id: 27,
    title: "Tug of War",
    date: "Date: 12th-Apr-2025",
    time: "Time: 11:30 a.m.",
    venue: "Venue: Kabadi Court",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/Thugofwar.jpeg",
    description: "",
  },
  {
    id: 40,
    title: "Clash of Minds",
    date: "Date: 12th-Apr-2025",
    time: "Time:  09:00 a.m. -  02:00 p.m",
    venue: "Venue: 402",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeHqI9WBs9lw4vJqjA5nAU__sYljliKLAnObyAULX3nzA8fZA/viewform",
    cluster: "ELECTRONICA",
    image: "/Assets/event/ClashofMinds.jpg",
    description: "",
  },
  {
    id: 17,
    title: "Balloon blasters",
    date: "Date: 12th-Apr-2025",
    time: "Time: 02:00 p.m. -  3:00 p.m.",
    venue: "Venue: Basketball court  ",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfiIS3O4eubWjJhg-rzgp0rK4PF9SD5yfWHv_IuTAAsMsJXrg/viewform",
    cluster: "ROBOTICS",
    image: "/Assets/event/BallonBlaster.jpg",
    description: "",
  },
];

const Day2 = () => {
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
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    setShowThanks(true);
  }, []); // Triggers the fade-in when the component loads

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(Assets/logo2.png)",
          backgroundSize: { xs: "50%", sm: "30%" },
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
            Day 2 Events
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
                sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
              >
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon sx={{ color: "#9A9EA1", fontSize: "36px" }} />
            <Typography
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
            >
              Day 2 Events
            </Typography>
          </Box>
          <EventNavbar />
        </Box>
      </Box>
        <Box
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#000212",
              }}
            >
              {/* Thanks Message with Fade Effect */}
              <Fade in={showThanks} timeout={2000}>
                <Typography
                  variant="h4"
                  sx={{
                    marginBottom: "20px",
                    fontWeight: "bold",
                    color: "#ffff",
                    fontFamily: "'Dancing Script', cursive",
                  }}
                >
               🌟None of this would be possible without your support ✨
                </Typography> 
              </Fade>
            </Box>
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
          {day2Events.map((event) => (
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
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#E02870",
                  mb: 2,
                }}
              >
                {event.cluster}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleOpenModal(event)}
                disabled={!event.image}
                sx={{
                  background:
                    "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))",
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
      {selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      )}
      <Footer />
    </>
  );
};

export default Day2;
