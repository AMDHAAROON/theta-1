import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Card, CardContent, Typography, Box,  TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const theme = createTheme({
    typography: {
        fontFamily: `'Jost', sans-serif`,
    },
});

const CustomTextField = ({ label, required = false }) => (
    <TextField
        label={label}
        required={required}
        variant="filled"
        fullWidth
        InputProps={{
            disableUnderline: true,
        }}
        sx={{
            bgcolor: '#fff',
            '& .MuiFilledInput-root': {
                borderBottom: '1px solid black',
                '&:hover': {
                    borderBottom: '1px solid black',
                },
                '&.Mui-focused': {
                    borderBottom: '2px solid black',
                },
            },
            '& .MuiInputLabel-root': {
                color: 'grey',
            },
            '& .MuiInputLabel-root.Mui-focused': {
                color: 'black',
            },
        }}
    />
);

const ContactUs = () => {
    const [formData] = useState({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        message: '',
    });
    const [setErrors] = useState({});

    const contactInfo = [
        {
            icon: <HomeIcon style={{ fontSize: '40px' }} />,
            title: 'Sastra-SRC',
            content: (
                <>
                    Theta Cultural Program, <br /> Kumbakonam - 612001. Tamilnadu
                </>
            ),
        },
        {
            icon: <PhoneIcon style={{ fontSize: '40px' }} />,
            title: 'Contact Us',
            content: (
                <>
                    President : Surya C <br /> Phone No : +91 93606 17308 <br/>
                    <br/>
                   Vice-President : Venkatesh N  <br /> Phone No :+91 94437 76472<br/>
                   <br/>
                   Vice-President : Karen Angel  <br /> Phone No :+91 74183 15768
                </>
            ),
        },
        {
            icon: <MailOutlineIcon style={{ fontSize: '40px' }} />,
            title: 'Email Us',
            content: (
                <>
                    theta@src.sastra.ac.in<br /> webtek.innovators@gmail.com
                </>
            ),
        },
    ];

    useEffect(() => {
        document.title = "Contact Us - Theta Program";
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                newErrors[key] = 'This field is required';
            }
        }

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted', formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        position: "relative",
                        backgroundImage: "url(Assets/Logo.png)",
                    backgroundSize: "20%",
                    backgroundPosition: "center",
                    backgroundRepeat:'no-repeat',
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
                            Contact Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', pb: 5 }}>
                            <Link to="/" style={{ textDecoration: "none" }} ><Typography
                                sx={{
                                    color: "#9A9EA1",
                                    fontWeight: "bold",
                                    fontSize: '18px',
                                }}
                            >
                                Home
                            </Typography></Link>
                            <ArrowRightAltIcon sx={{
                                color: "#9A9EA1",
                                fontWeight: "bold",
                                fontSize: '36px',
                            }} />
                            <Typography
                                sx={{
                                    color: "#9A9EA1",
                                    fontWeight: "bold",
                                    fontSize: '18px',
                                }}
                            >
                                Contact Us
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '#000212' }}>
                    <Box sx={{ pt: 10 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#fff', textAlign: 'center', lineHeight: 1.4, mb: 2, width: ['90%', '90%', '90%', '90%', '40%'] }}>Join Us for an Unforgettable Cultural Experience</Typography>
                        </Box>
                        <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500', }}>Get in touch for event details, collaborations, or to participate in workshops.</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, px: [3, 3, 10, 10, 36], py: 5 }}>
                        <Grid container spacing={10} justifyContent="center"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2500">
                            {contactInfo.map((info, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            minHeight: '250px',
                                            textAlign: 'center',
                                            backgroundColor: '#D3D6DB ',
                                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                                            padding: '20px',
                                        }}
                                    >
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    marginBottom: '15px',
                                                }}
                                            >
                                                {info.icon}
                                            </Box>
                                            <Typography variant="h6" component="div" gutterBottom>
                                                {info.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {info.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    
                   
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default ContactUs;
