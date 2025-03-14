import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Navbar from ".././Component/Navbar";
import Footer from ".././Component/Footer";
import PopupModal from "../Component/PopupModal"; // Import the modal component
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const workshopData = [
  /*{
    id: 2,
    title: "WonderlaW: Explore the Wonder",
    date: "Date: 24th-Feb-2025",
    time: "Time: 09:00 a.m. - 04:15 p.m.",
    venue: "Venue: 201",
    chiefGuest: "Dr.E.Vinoth",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe4Qq4hE7tdMSrrbk-3kEfgdL4iWwosdFTViNM_pfbOhnmeSw/viewform",
    image: "/Assets/Posters/wonderla.jpg",

    description:
      "Experience the wonders of law and technology combined, featuring interactive sessions, expert panels, and innovative demonstrations.",
  },*/
  /* {
    id: 3,
    title: "Cutting edge techniques in molecular biology",
    date: "Date: 25th-Feb-2025",
    time: "Time: 09:00 a.m. - 04:30 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Dr.Kanagaraj",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScNuatXd7EF6DJObLCTmRgni4FLj27W46N-U4eYWISfSO5S2A/viewform",
    image: "/Assets/Posters/biogenesis.png",
    description:
      "Explore advanced molecular biology techniques: electrophoresis, gel documentation, PCR instrumentation, and bioinformatics analysis. Gain valuable lab experience!",
  },
  {
    id: 4,
    title: "Word and Excel",
    date: "Date: 26th-Feb-2025",
    time: "Time: 09:00 a.m. - 04:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Ms.V.Manochitra and Ms.M.Divya",
    registrationLink: "https://forms.gle/EhCcrjThdLmub8Lv9",
    image: "/Assets/Posters/wordexcel.jpg",
    description: "Unlock your potential through our interactive workshop to boost productivity with expert tips, smart techniques, and time-saving hacks.",
  },
  
  {
    id: 6,
    title: "Graphics design and digital branding",
    date: "Date: 28th-Feb-2025",
    time: "Time: 9:30 a.m - 03:00 p.m.",
    venue: "Venue: 201 and Computer Lab 1",
    chiefGuest: " Mr S.vishnu and Mr S.Santhosh kumar",
    registrationLink: "https://forms.gle/ZXkfGMhTYgqL6hRX7",
    image: "/Assets/Posters/graphics.png",
    description: "Embark on a journey of Design Discovery.",
  },
  {
    id: 7,
    title: "AI & Neural Networks Workshop",
    date: "Date: 03rd-Mar-2025",
    time: "Time: 09:00 a.m. - 05:30 p.m.",
    venue: "Venue: 201",
    chiefGuest: "Dr.D.Venkata Subramanian and Ranga Krishnan",
    registrationLink: "https://forms.gle/JM2gfqGtcAY9Znar8",
    image: "/Assets/Posters/neural.jpg",
    description: "Explore the future of AI in just one day.",
  },
  {
    id: 8,
    title: "GST & Income tax",
    date: "Date: 05th-Mar-2025",
    time: "Time: 09:00 a.m. - 04:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "B. S. Umamaheswari, B.Com, (CA) , Nivedha Venkatesh, B.Com, (CA) , E. Kirubhakaran, B.Com, (CA)",
    registrationLink: "https://forms.gle/USCwhoqVsr6uLU7X9",
    image: "/Assets/Posters/income.jpg",
    description: "Strategia",
  },
  {
    id: 10,
    title: "The future of IoT and ML",
    date: "Date: 08th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Aravind Baranitharan AI/ML Specialist ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScNv71LZmJbQvxC3y3fcbHXpxwypToyNmEgsmO514oZn9ZBCQ/viewform",
    image: "/Assets/Posters/future.jpeg",
    description: "Join the Brainstorming Session on The Future of IoT & ML to explore cutting-edge innovations in AI and IoT",
  },
  {
    id: 11,
    title: "Deep Learning For Computer Vision and organizing projects with GitHub",
    date: "Date: 10th-Mar-2025",
    time: "Time: 10:15 a.m. - 04:15 p.m.",
    venue: "Venue: Auditorium,Computer Lab",
    chiefGuest: "Karthik Venkatesh.N-Automation and AI Engineer,Jefferson Roosevelt.K-AI engineer,vignesh .S-Automation and AI Engineer ,Kavya-Full Stack developer.",
    registrationLink: "https://forms.gle/twvNDLwRdMZtRY5D6",
    image: "/Assets/Posters/deep.jpeg",
    description: "Hands-on workshop on Deep Learning, Computer Vision, and GitHub project organization by industry experts. 🚀",
  },
  {
    id: 5,
    title: "DE-STRESS DISTRESS ",
    date: "Date: 11th-Mar-2025",
    time: "Time: 2:00 p.m - 05:00 p.m.",
    venue: "Venue: 201 and Drawing hall",
    chiefGuest: "Staff: Siva Vidhya and Durga Ravi ",
    registrationLink:
      "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdRruHObAbF6E8jByvn3KkWL7kwftR9jz8nVy7pSVfreTuiag/viewform?usp=send_form",
    image: "/Assets/Posters/stress.jpg",
    description:
      "Join us for an engaging session to unwind, recharge, and learn practical stress-relief techniques. Experience mindfulness, relaxation, and simple strategies to tackle daily challenges with ease!",
  },
  {
    id: 12,
    title: "Industrial IoT with Robotics Applications",
    date: "Date: 13th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: 201",
    chiefGuest:"M/s. NWAREHOUSE PVT. LTD., TRICHY and M/s. CROBOT TECHNOLOGIES PVT. LTD CHENNAI",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeJ90E42YMcX7D2ljnJsBmb3YvOmWXOKKTj5kRjuHVB7fPN_w/viewform",
    image: "/Assets/Posters/iot.jpeg",
    description:
      "This workshop explores the integration of Industrial Internet of Things (IIoT) with Robotics, showcasing how these technologies are revolutionizing industrial automation.",
  }, */

  {
    id: 14,
    title: "A Hands-on Ethical Hacking Workshop",
    date: "Date: 18th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "A.Devaprathima, certified ethical Hacker cyber security Engy at spam technologies",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeuuHyGVdyn5l8Xjx4dvsU8EvagYIRq7HYRLgdxaNfYYv6fMA/viewform",
    image: "/Assets/Posters/hack.jpeg",
    description: "Gain insights into cybersecurity, ethical hacking concepts, and system protection.",
  },
  {
    id: 15,
    title: "Voice of Doctor",
    date: "Date: 27th-Mar-2025",
    time: "Time: 11:00 a.m. - 01:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "/Assets/Posters/voice_doctor.jpg",
    description: "Equilibria",
  },
  {
    id: 17,
    title: "Yoga",
    date: "Date: 28th-Mar-2025",
    time: "Time: 10:00 a.m. - 01:00 p.m.",
    venue: "Venue: Drawing Hall",
    chiefGuest: "R. Ganesh Kumar, Proffessional Physical Director,Kumbakonam",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeZkIW0wgB2Uv7X9OY5ycq0mIKp3AfEDNOC-MzWxkFWd676ew/viewform",
    image: "/Assets/Posters/yoga.jpeg",
    description: "Enhance flexibility, relaxation, and well-being with guided yoga techniques.",
  },
  {
    id: 9,
    title: "From Basic to Pro: Hands-on Networking with Cisco",
    date: "Date: 29th-Mar-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "Dr.P.Herbert Raj",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeo2Dcdb81LUB_IRj7hN2t3c92Xted1zYUmThNJUmRk7caqBw/viewform",
    image: "/Assets/Posters/networ.jpeg",
    description:
      "Explore physics with 20+ thrilling experiments! Experience hands-on learning, challenge myths, and ignite curiosity in every participant.",
  },
  {
    id: 16,
    title: "Rangasthalam",
    date: "Date: 01st-Apr-2025",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "/Assets/Posters/rangasthalam.jpg",
    description: "Vinodha Vaahini",
  },
  {
    id: 13,
    title: "Archery: Sharpen Your Focus, Hit Your Precision Goals!",
    date: "Date: 03rd-Apr-2025",
    time: "Time: 10:00 a.m. - 01:00 p.m.",
    venue: "Venue: Basketball Court",
    chiefGuest: "vDr.Shihan Hussaini, level 3 world archery coach and  Dr.Vijayabalan, PAN INDIA trained level 2 archery Coach ",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3ODMuanFra-7Z73nayAUE46INoN8HwvLx7BKzLvuqSK5q-A/viewform",
    image: "/Assets/Posters/archery.jpeg",
    description: "Learn precision, accuracy, and focus in this hands-on archery session.",
  },

  {
    id: 18,
    title: "Application Containerization Using Docker",
    date: "Date: 04th and 05th-Apr-2025 ",
    time: "Time: 09:00 a.m. - 05:00 p.m.",
    venue: "Venue: Auditorium",
    chiefGuest: "",
    registrationLink: "",
    image: "/Assets/Posters/docker.jpg",
    description: "Informatica",
  },
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
              <Typography
                sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
              >
                Home
              </Typography>
            </Link>
            <ArrowRightAltIcon
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "36px" }}
            />
            <Typography
              sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: "18px" }}
            >
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
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.date}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#333",
                  mb: 1,
                }}
              >
                {workshop.time}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#333",
                  mb: 2,
                }}
              >
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
                  cursor: !workshop.registrationLink
                    ? "not-allowed"
                    : "pointer",
                  "&:hover": {
                    background: !workshop.registrationLink
                      ? "transparent"
                      : "transparent",
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
      <PopupModal
        isOpen={isModalOpen}
        onClose={closeModal}
        workshop={selectedWorkshop}
      />

      {/* Footer */}
      <Footer />
    </>
  );
}
