import React from 'react';
import { Box, Typography, Button, CardMedia, Grid, Slide, Fade } from '@mui/material';
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { tshirtImage } from "../utility/data";
import { backgroundImage } from "../utility/data";

const TShirtPage = () => {
  return (
    <>
      {/* Background + Overlay */}
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        />
        <Navbar />
        
        {/* Slide + Fade */}
        <Fade in={true} timeout={800}>
          <Slide direction="up" in={true} timeout={800}>
            <Grid 
              container 
              spacing={2}
              sx={{
                width: { xs: '90%', sm: '80%', md: '70%' },
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(8px)',
                borderRadius: 4,
                boxShadow: 4,
                overflow: 'hidden',
                zIndex: 1,
                marginTop: '50px',
              }}
            >
              {/* Left Side (T-shirt Image) */}
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={tshirtImage}
                  alt="T-shirt"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Grid>

              {/* Right Side (Centered Text & Button) */}
              <Grid 
                item 
                xs={12} 
                md={6} 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.3rem', sm: '2.4rem', }, // Custom size
                    fontFamily: "'Roboto', sans-serif",
                    background: 'linear-gradient(90deg, #7d3cff, #ff7f50, #ff4500, #9370db);', // Custom gradient
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                  }}
                >
                  Theta 2025 Exclusive T-shirt
                </Typography>

                {/* Description */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: "'Roboto', sans-serif",
                    color: '#ddd',
                    letterSpacing: '0.5px',
                    mb: 3,
                  }}
                >
                  Celebrate Theta 2025 in style with this premium, comfortable T-shirt — available in multiple sizes. Grab yours before it's gone! 
                </Typography>

                {/* Button */}
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #ff5733, #ff33ff)', // Custom gradient
                    color: '#fff',
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 'bold',
                    padding: '14px 34px',
                    borderRadius: '30px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #ff33ff, #ff5733)',
                      transform: 'scale(1.08)',
                      boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  Order Now — Limited Stock!
                </Button>
              </Grid>
            </Grid>
          </Slide>
        </Fade>
      </Box>
      <Footer />
    </>
  );
};

export default TShirtPage;
