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
    title: "Model verse",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. - 1:00 p.m.",
    venue: "Venue: Drawing Hall",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd2S-lhB0YaUzfkwfPrD29EeW-sXTCWw6TAWWUX4vYpaJPBDw/viewform",
    cluster: "BIOGENSIS",
    image: "/Assets/event/Modelverse.jpg",
    description: "",
  },
  {
    id: 2,
    title: "Beyond the Limits",
    date: "Date: 11th-Apr-2025",
    time: "Time: 02:00 p.m. - 5:00 p.m.",
    venue: "Venue: Drawing Hall",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScIWAHge-U_f5TDMrY2Um0bqyEj1lMnNzljYKXZk-FVp8r3Iw/viewform",
    cluster: "BIOGENSIS",
    image: "/Assets/event/Beyondthelimits.jpg",
    description: "",
  },
  {
    id: 3,
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
    id: 4,
    title: "Mystic Mind",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. - 5:00 p.m.",
    venue: "Venue: 202",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdW8ntTtHC3Qq69mkzWMx8eRnnM1RA_SAmr1Q4mLU7hmevT6g/viewform",
    cluster: "MATHEMATICA",
    image: "/Assets/event/MysticMind.jpg",
    description: "",
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    title: "Tri Game Showdown",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. - 03:00 p.m.",
    venue: "Venue: 303",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSds3ZepfbmnDk8XjqigjNRIQtj5f-k2Rqj2Lzf9kCSKrna-rg/viewform",
    cluster: "STRATEGIA",
    image: "/Assets/event/TriGame.jpg",
    description: "",
  },
  {
    id: 10,
    title: "KGF (Knock Guess & Fix) ",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. - 02:00 p.m. ",
    venue: "Venue: 309 & 310",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe8aUhRUUak7h08dloX95nIGckxwjsMQ7xdkHY4yP5Lm1revg/viewform?usp=header",
    cluster: "ACCESS",
    image: "/Assets/event/KGF.jpeg",
    description: "",
  },
  {
    id: 11,
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
    id: 12,
    title: "Teckathon",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. - 02:00 p.m. ",
    venue: "Venue: Lab 1",
    registrationLink: "https://forms.gle/ngayHF3fSDsrRrsaA",
    cluster: "INFORMATICA",
    image: "/Assets/event/tekathon.jpg",
    description: "",
  },
  {
    id: 13,
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
    id: 14,
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
    id: 15,
    title: "Illuminati",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. - 01:00 p.m. ",
    venue: "Venue: 509",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScr_UN3H01vTUFKxA6FaWqbbPa1cG4VAEwnMc-sQmvI4uWidw/viewform",
    cluster: "Optica",
    image: "/Assets/event/illuminati.jpg",
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
    id: 32,
    title: "Double Trouble",
    date: "Date: 13th-Apr-2025",
    time: "Time: 10:00 a.m. - 12:00 p.m.  ",
    venue: "Venue: 512 ",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJYJz8XEC-BsccHIRTrGEjt0B7qIesjV4WDfBvlaPXaKzPEw/viewform?usp=header",
    cluster: "Optica",
    image: "/Assets/event/DoubleTrouble.jpg",
    description: "",
  },
  {
    id: 16,
    title: "Pattukondi Chooddam [Treasure Hunt]",
    date: "Date: 11th-Apr-2025",
    time: "Time: 2:00 p.m. -  3:30 p.m.",
    venue: "Venue: 316",
    registrationLink: "https://forms.gle/MvdTCLkJhJkkY5Q76",
    cluster: "VINODHA VAHINI",
    image: "/Assets/event/TreasureHunt.jpeg",
    description: "",
  },

  {
    id: 17,
    title: "Tech Titans",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. -  1:00 p.m.",
    venue: "Venue: 402",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScYDIlln4eCwQxar6MTF3gPg7FlNvMlCRXC-J8y8mk0S6ARYg/viewform?usp=dialog",
    cluster: "ELECTRONICA",
    image: "/Assets/event/Techtitans.jpg",
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
    id: 18,
    title: "The Great Treasure Hunt",
    date: "Date: 13th-Apr-2025",
    time: "Time:  09:30 a.m. -  11:30 a.m",
    venue: "Venue: 402",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScJPPRViXYwA3waFIV__0IJF3dKAvEW38QEuQzfEBTfQTMGvw/viewform?usp=dialog",
    cluster: "ELECTRONICA",
    image: "/Assets/event/GreatTreasureHunt.jpg",
    description: "",
  },
  {
    id: 19,
    title: "Lucky Box",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m.  ",
    venue: "Venue: Near basketball court",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/Luckybox.jpeg",
    description: "",
  },
  {
    id: 20,
    title: "Uriyadi",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m.",
    venue: "Venue: Near basketball court",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/Uriyadi.jpeg",
    description: "",
  },
  {
    id: 21,
    title: "One Hour Cricket",
    date: "Date: 11th-Apr-2025",
    time: "Time: 12:00 p.m.  ",
    venue: "Venue: Cricket Ground",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/OneOver.jpeg",
    description: "",
  },

  {
    id: 24,
    title: "Dodge Ball",
    date: "Date: 11th-Apr-2025",
    time: "Time: 12:00 p.m.",
    venue: "Venue: Near Stall",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/DodgeBall.jpeg",
    description: "",
  },
  {
    id: 23,
    title: "Match the Bottle",
    date: "Date: 11th-Apr-2025",
    time: "Time: 12:00 p.m.",
    venue: "Venue: Near Stall",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/MatchtheBottle.jpeg",
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
    id: 17,
    title: "Robo soccers",
    date: "Date: 11th-Apr-2025",
    time: "Time: 11:00 a.m. -  12:00 p.m.",
    venue: "Venue: Basketball court  ",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfQx7PcsO932ZSaz1_QKfY0xVfwwkYoh75FrvR3dJHgP1DxUg/viewform",
    cluster: "ROBOTICS",
    image: "/Assets/event/RoboSoccer.jpg",
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
  {
    id: 17,
    title: "Robo Race",
    date: "Date: 13th-Apr-2025",
    time: "Time: 10:00 a.m. -  11:00 a.m.",
    venue: "Venue: Basketball court  ",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScbvXFT1A-uLI40csXYNJKh1qhKVSp4Zr9Jp-SJjpIhZKWg7g/viewform",
    cluster: "ROBOTICS",
    image: "/Assets/event/RoboRace.jpg",
    description: "",
  },
  {
    id: 17,
    title: "Esport",
    date: "Date: 13th-Apr-2025",
    time: "Time: 9:45 a.m.",
    venue: "Venue: 201",
    registrationLink: "",
    cluster: "SPORTIVA",
    image: "/Assets/event/ESports.jpeg",
    description: "",
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
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#E02870", // Updated color to theme color
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

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      )}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AllEvents;
