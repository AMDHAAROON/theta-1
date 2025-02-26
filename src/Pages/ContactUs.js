import React, { useEffect,  } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Card, CardContent, Typography, Box,Button  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const theme = createTheme({
    typography: {
        fontFamily: `'Jost', sans-serif`,
    },
});



const ContactUs = () => {
   

    const contactInfo = [
        {
            icon: <HomeIcon style={{ fontSize: '40px' }} />,
            title: 'Sastra-SRC',
            content: <>Theta Cultural Program, <br /> Kumbakonam - 612001. Tamilnadu</>,
        },
        {
            icon: <PhoneIcon style={{ fontSize: '40px' }} />,
            title: 'Contact Us',
            content: (
                <>
                    President : Surya C <br /> Phone No : +91 93606 17308 <br /><br />
                    Vice-President : Venkatesh N <br /> Phone No : +91 94437 76472 <br /><br />
                    Vice-President : Karen Angel <br /> Phone No : +91 74183 15768
                </>
            ),
        },
        {
            icon: <MailOutlineIcon style={{ fontSize: '40px' }} />,
            title: 'Email Us',
            content: (<>theta@src.sastra.ac.in<br />webtek.innovators@gmail.com</>),
        },
    ];

    useEffect(() => { document.title = "Contact Us - Theta Program"; }, []);
   
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
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
            }}>
                <Navbar color="#fff" />
                <Box>
                    <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: ["20px", "22px", "36px"], my: 1, textAlign: 'center' }}>Contact Us</Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', pb: 5 }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>Home</Typography>
                        </Link>
                        <ArrowRightAltIcon sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '36px' }} />
                        <Typography sx={{ color: "#9A9EA1", fontWeight: "bold", fontSize: '18px' }}>Contact Us</Typography>
                    </Box>
                </Box>
            </Box>
       


            <Box sx={{ backgroundColor: '#000212' }}>
                <Box sx={{ pt: 6 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography data-aos="zoom-in-up" data-aos-duration="2000" sx={{ fontSize: ['30px', '46px'], fontWeight: 600, color: '#fff', textAlign: 'center', lineHeight: 1.4, mb: 2, width: ['90%', '90%', '90%', '90%', '40%'] }}>
                            Join Us for an Unforgettable Cultural Experience
                        </Typography>
                    </Box>
                    <Typography data-aos="zoom-in-up" data-aos-duration="2500" sx={{ fontSize: '16px', color: '#A0A5AA', textAlign: 'center', lineHeight: 1.8, fontWeight: '500' }}>
                        Get in touch for event details, collaborations, or to participate in workshops.
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1, px: [3, 3, 10, 10, 36], py: 5 }}>
                    <Grid container spacing={10} justifyContent="center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
                        {contactInfo.map((info, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ minHeight: '250px', textAlign: 'center', backgroundColor: '#D3D6DB', boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)", padding: '20px' }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>{info.icon}</Box>
                                        <Typography variant="h6" gutterBottom>{info.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{info.content}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ textAlign: 'center', backgroundColor: '#000212', pb: 6 }}>
  <Typography
    variant="h5"
    sx={{
      fontWeight: 1000,
      color: '#fff',
      mb: 2,
      animation: 'slideDown 1s ease-out',
      display: 'block',
    }}
  >
    Visit Our Gallery
  </Typography>

  <Link to="/Gal" onClick={scrollToTop} style={{ textDecoration: 'none' }}>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#E91E63',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px',
        px: 4,
        borderRadius: '8px',
        textTransform: 'none',
        border: '2px solid transparent',
        animation: 'pulse 1.5s infinite',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#E91E63',
          border: '2px solid #E91E63',
          transform: 'scale(1.05)',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      View Gallery
    </Button>
  </Link>

  <style>
    {`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }

      @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</Box>                

                {/* Map Introduction Text */}
                 <Box sx={{ textAlign: 'center', mb: 3, px: [2, 3, 6] }}>
                    <Typography variant="h5" sx={{ fontWeight: 1000, color: '#fff', mb: 1 }}>Find Us Here</Typography>
                    
                </Box>

                {/* Responsive Google Map */}
                <Box sx={{ display: 'block', justifyContent: 'center', px: [2, 3, 10], pb: 10 }}>
                    <iframe
                        title="Sastra-SRC Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9961649966363!2d79.3833342742127!3d10.963661489196678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55337f1ce17aa5%3A0xb5ee193422b5ca2e!2sSastra%20University%20Srinivasa%20Ramanujan%20Center%2C%20Kumbakonam!5e0!3m2!1sen!2sin!4v1740157561205!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '12px', boxShadow: "0 6px 12px rgba(0,0,0,0.3)" }}
                        allowFullScreen=""
                        loading="lazy"
                        
                    ></iframe>
                     <Typography sx={{ color: '#A0A5AA', fontSize: '16px',textAlign: 'center' ,mt:'8px'}}>
                        Locate our place easily using the map above. We look forward to seeing you!
                    </Typography>
                </Box>
                
              

                </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default ContactUs;
