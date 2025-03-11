






import { Box, Button,  Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from '../../Component/Footer';
import EventNavbar from '../../Component/EventNavbar';
import EventModal from '../../Component/EventModal';

const day3Events = [
    {
        id: 1,
        title: "Tech Talent",
        date: "Date: 13th-Apr-2025",
        time: "Time: Updating soon",
        venue: "Venue: Lab 2",
        registrationLink: "",
        image: "",
        description: "",
      },
];

const Day3 = () => {
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
                    backgroundImage: "url(Assets/Logo.png)",
                    backgroundSize: "20%",
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
                        Day 3 Events
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', pb: 5 }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>
                                Home
                            </Typography>
                        </Link>
                        <ArrowRightAltIcon sx={{ color: "#9A9EA1", fontSize: '36px' }} />
                        <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>
                            Day 3 Events
                        </Typography>
                    </Box>
                    <EventNavbar />
                </Box>
            </Box>
            <Box sx={{ py: 5, bgcolor: '#000212' }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, padding: 4 }}>
                    {day3Events.map((event) => (
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

export default Day3;