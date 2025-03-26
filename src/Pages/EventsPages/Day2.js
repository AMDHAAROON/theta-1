




import { Box, Button,  Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '../../Component/Footer';
import EventNavbar from '../../Component/EventNavbar';
import EventModal from '../../Component/EventModal';

const day2Events = [
  
        {
          id: 1,
          title: "Wit Wizard War",
          date: "Date: 12th-Apr-2025",
          time: "Time: 02:00 p.m. - 5:00 p.m.",
          venue: "Venue: T&P Hall",
          registrationLink: "",
          cluster:"BIOGENSIS",
          image: "",
          description: "",
        },
        {
          id: 2,
          title: "Rhythm Quest",
          date: "Date: 12th-Apr-2025",
          time: "Time: 09:30 a.m. - 4:00 p.m.",
          venue: "Venue: 404",
          registrationLink: "",
          cluster:"MATHEMATICA",
          image: "",
          description: "",
        },
        {
          id: 3,
          title: "Number Ninjas",
          date: "Date: 12th-Apr-2025",
          time: "Time: 09:30 a.m. - 4:00 p.m.",
          venue: "Venue: 406",
          registrationLink: "",
          cluster:"MATHEMATICA",
          image: "",
          description: "",
        },
        {
        title: "Tech Titans",
        date: "Date: 12th-Apr-2025",
        time: "Time: Updating soon",
        venue: "Venue: 402",
        registrationLink: "",
         cluster:"ELECTRONICA",
        image: "",
        description: "",
        },
        {
          id: 4,
          title: "RRR [Reverse, React, Recognize]",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:00 a.m. - 2:00 p.m.",
          venue: "Venue: 303",
          registrationLink: "",
          cluster:"STRATEGIA",
          image: "",
          description: "",
        },
        {
          id: 5,
          title: "Brain Snap Challenge",
          date: "Date: 12th-Apr-2025",
          time: "Time: 09:30 a.m. - 1:30 p.m.",
          venue: "Venue: 310",
          registrationLink: "",
          cluster:"STRATEGIA",
          image: "",
          description: "",
        },
        {
          id: 6,
          title: "F Cube",
          date: "Date: 12th-Apr-2025",
          time: "Time: 9:30 a.m. - 12:30 p.m.",
          venue: "Venue: Drawing Hall",
          registrationLink: "",
          cluster:"ACCESS",
          image: "",
          description: "",
        },
        {
          id: 7,
          title: "Code Master",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:00 a.m. - 1:00 p.m.",
          venue: "Venue: Lab 1",
          registrationLink: "",
          cluster:"INFORMATICA",
          image: "",
          description: "",
        },
        {
            id: 31,
            title: "Apt Apt",
            date: "Date: 12th-Apr-2025",
            time: "Time: 10:00 a.m. - 12:00 p.m.",
            venue: "Venue: 510",
            registrationLink: "",
             cluster:"Optica",
            image: "",
            description: "",
          },
        {
          id: 9,
          title: "Powerlift",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:30 a.m.",
          venue: "Venue: Stall",
          registrationLink: "",
          cluster:"SPORTIVA",
          image: "",
          description: "",
        },
        {
          id: 10,
          title: "Football",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:30 a.m.",
          venue: "Venue: Football Court",
          registrationLink: "",
          cluster:"SPORTIVA",
          image: "",
          description: "",
        },
        {
          id: 11,
          title: "Tug of War",
          date: "Date: 12th-Apr-2025",
          time: "Time: 11:30 a.m.",
          venue: "Venue: Kabadi Court",
          registrationLink: "",
          cluster:"SPORTIVA",
          image: "",
          description: "",
        },
        {
          id: 12,
          title: "Cups Lifting",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:30 a.m.",
          venue: "Venue: Stall",
          registrationLink: "",
          cluster:"SPORTIVA",
          image: "",
          description: "",
        },
        {
          id: 13,
          title: "Reach the ball",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:30 a.m.",
          venue: "Venue: Stall",
          registrationLink: "",
          cluster:"SPORTIVA",
          image: "",
          description: "",
        },
        {
          id: 14,
          title: "Strike the balloon",
          date: "Date: 12th-Apr-2025",
          time: "Time: 10:30 a.m.",
          venue: "Venue: Near basketball court",
          registrationLink: "",
          cluster:"SPORTIVA",
          image: "",
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

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    backgroundImage: "url(Assets/logo2.png)",
                    backgroundSize:{ xs:"50%",sm:"30%"},
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
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
                            textAlign: 'center'
                        }}
                    >
                        Day 2 Events
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', pb: 5 }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>
                                Home
                            </Typography>
                        </Link>
                        <ArrowRightAltIcon sx={{ color: "#9A9EA1", fontSize: '36px' }} />
                        <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>
                            Day 2 Events
                        </Typography>
                    </Box>
                    <EventNavbar />
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, padding: 4 }}>
                    {day2Events.map((event) => (
                        <Box
                            key={event.id}
                            sx={{
                                width: { xs: '100%', sm: '90%', md: '30%' },
                                bgcolor: '#E6F3FB',
                                p: 3,
                                border: '3px solid #EF3D4E',
                                borderRadius: '10px',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease, box-shadow 0.5s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 0px 103px -25px rgba(125,125,125,1)',
                                },
                            }}
                        >
                            <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', mb: 1 }}>
                                {event.title}
                            </Typography>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', mb: 1 }}>
                                {event.date}
                            </Typography>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', mb: 1 }}>
                                {event.time}
                            </Typography>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: '#333', mb: 2 }}>
                                {event.venue}
                            </Typography>
                            <Typography sx={{fontSize: "1.2rem",fontWeight: 800,color: "#E02870", mb: 2,}} >
                                               {event.cluster}
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
            {selectedEvent && <EventModal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />}
            <Footer />
        </>
    );
};

export default Day2;