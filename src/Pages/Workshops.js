import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Navbar from ".././Component/Navbar";
import Footer from ".././Component/Footer";
import PopupModal from "../Component/PopupModal"; // Import the modal component
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const workshopData = [
  {
    id: 1,
    title: "AI-Powered Tech Development",
    date: "Date: 22nd-Feb-2025",
    time: "Time: 09:00 a.m. - 5:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Dr.M.Dhanarajan",
    registrationLink: "https://forms.gle/d3eLwrQAurhRhYJz9",
    image: "/assets/ai.jpg",
    description: "Dive into the future of technology with this workshop focusing on AI-powered solutions, practical use cases, and hands-on development techniques.",
  },
  {
    id: 2,
    title: "WonderlaW: Explore the Wonder",
    date: "Date: 24th-Feb-2025",
    time: "Time: 09:00 a.m. - 04:15 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Dr.E.Vinoth",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSe4Qq4hE7tdMSrrbk-3kEfgdL4iWwosdFTViNM_pfbOhnmeSw/viewform",
    image: "/assets/wonder.png",
    description: "Experience the wonders of law and technology combined, featuring interactive sessions, expert panels, and innovative demonstrations.",
  },
  {
    id: 3,
    title: "Cutting edge techniques in molecular biology",
    date: "Date: 25th-Feb-2025",
    time: "Time: 09:00 a.m. - 04:30 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Dr.Kanagaraj",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScNuatXd7EF6DJObLCTmRgni4FLj27W46N-U4eYWISfSO5S2A/viewform",
    image: "/assets/bio.png",
    description: "Explore advanced molecular biology techniques: electrophoresis, gel documentation, PCR instrumentation, and bioinformatics analysis. Gain valuable lab experience!",
  },
  {
    id: 4,
    title: "Word and Excel",
    date: "Date: 26th-Feb-2025",
    time: "Time: 09:00 a.m. - 01:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/word_excel.jpg",
    description: "Strategia",
  },
  {
    id: 5,
    title: "Graphics and Multimedia",
    date: "Date: 28th-Feb-2025",
    time: "Time: Updating Soon",
    venue: "Venue: Computer Lab",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/graphics_multimedia.jpg",
    description: "Mathematica",
  },
  {
    id: 6,
    title: "GST-Basics",
    date: "Date: 05th-Mar-2025",
    time: "Time: 09:00 a.m. - 01:00 p.m.",
    venue: "Venue: 201",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/gst_basics.jpg",
    description: "Strategia",
  },
  {
    id: 7,
    title: "From Basic to Pro: Hands-on Networking with Cisco",
    date: "Date: 07th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Dr.P.Herbert Raj",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeo2Dcdb81LUB_IRj7hN2t3c92Xted1zYUmThNJUmRk7caqBw/viewform",
    image: "/assets/cisco.png",
    description: "Explore physics with 20+ thrilling experiments! Experience hands-on learning, challenge myths, and ignite curiosity in every participant.",
  },
  {
    id: 8,
    title: "AI and Deep Learning",
    date: "Date: 10th-Mar-2025",
    time: "Time: Updating Soon",
    venue: "Venue: Computer Lab",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/ai_deep_learning.jpg",
    description: "Mathematica",
  },
  {
    id: 9,
    title: "Industrial IoT with Robotics Applications",
    date: "Date: 12th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/industrial_iot.jpg",
    description: "Robotics",
  },
  {
    id: 10,
    title: "Archery: Sharpen Your Focus, Hit Your Goals!",
    date: "Date: 13th-Mar-2025",
    time: "Time: 10:00 a.m. - 01:00 p.m.",
    venue: "Venue: Basketball Court",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/archery.jpg",
    description: "Sportiva",
  },
  {
    id: 11,
    title: "A Hands-on Ethical Hacking Workshop",
    date: "Date: 18th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/ethical_hacking.jpg",
    description: "Informatica",
  },
  {
    id: 12,
    title: "Voice of Doctor",
    date: "Date: 27th-Mar-2025",
    time: "Time: 11:00 a.m. - 01:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/voice_doctor.jpg",
    description: "Equilibria",
  },
  {
    id: 13,
    title: "Rangasthalam",
    date: "Date: 01st-Apr-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/rangasthalam.jpg",
    description: "Vinodha Vaahini",
  },
  {
    id: 14,
    title: "Yoga: Sharpen Your Mental Focus, Transform Your Life!",
    date: "Date: 02nd-Apr-2025",
    time: "Time: 10:00 a.m. - 01:00 p.m.",
    venue: "Venue: Drawing Hall",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/yoga.jpg",
    description: "Sportiva",
  },
  {
    id: 15,
    title: "Application Containerization Using Docker",
    date: "Date: 04th-Apr-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "./assets/docker.jpg",
    description: "Informatica",
  }
];

export default function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = (id) => {
    const workshop = workshopData.find((item) => item.id === id);
    if (workshop?.registrationLink) {
      setSelectedWorkshop(workshop);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkshop(null);
  };

  return (
    <>
      {/* Header Section with Navbar */}
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
            Workshops
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
              <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}>
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "36px" }} />
            <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}>
              Workshops
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Workshops Listing */}
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
          {workshopData.map((workshop) => (
            <Box
              key={workshop.id}
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
              <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#333", mb: 1 }}>
                {workshop.title}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", mb: 1 }}>
                {workshop.date}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#333", mb: 1 }}>
                {workshop.time}
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: "#333", mb: 2 }}>
                {workshop.venue}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleRegisterClick(workshop.id)}
                disabled={!workshop.registrationLink}
                sx={{
                  background: !workshop.registrationLink
                    ? "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))"
                    : "linear-gradient(91.83deg, rgb(255, 81, 47), rgb(221, 36, 118))",
                  width: "80%",
                  borderRadius: "50px",
                  textTransform: "none",
                  fontSize: "1rem",
                  color: !workshop.registrationLink ? "#A9A9A9" : "#fff",
                  border: "2px solid transparent",
                  cursor: !workshop.registrationLink ? "not-allowed" : "pointer",
                  "&:hover": {
                    background: !workshop.registrationLink ? "transparent" : "transparent",
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

      {/* Popup Modal */}
      <PopupModal isOpen={isModalOpen} onClose={closeModal} workshop={selectedWorkshop} />

      {/* Footer */}
      <Footer />
    </>
  );
}