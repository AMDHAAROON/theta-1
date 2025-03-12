import React from 'react';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import {tshirtImage} from "../utility/data";
import {backgroundImage} from "../utility/data";


const TShirtPage = () => {
  return (
    <>
    <Navbar/>
    <Box
      sx={{
        width: '100%',
        height: '100vh', // Full viewport height
        backgroundImage: `url(${backgroundImage})`, // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, sm: 4 }, // Side padding for mobile view
      }}
    >
      {/* T-shirt Display Card */}
      <Card
        sx={{
          width: { xs: '90%', sm: '60%', md: '40%' },
          borderRadius: 4,
          boxShadow: 3,
          overflow: 'hidden',
          position: 'relative',
          transform: 'translateY(0)',
          transition: 'transform 0.5s ease, box-shadow 0.5s ease',
          '&:hover': {
            transform: 'translateY(-10px)', // Hover animation
            boxShadow: 6,
          },
        }}
      >
        {/* T-shirt Image */}
        <CardMedia
          component="img"
          image={tshirtImage}
          alt="T-shirt"
          sx={{
            width: '100%',
            height: { xs: 240, sm: 320, md: 400 },
            objectFit: 'cover',
          }}
        />
        {/* Overlay Text */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.5s ease',
            '&:hover': {
              opacity: 1, // Fade in on hover
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              mb: 2,
              letterSpacing: '1px',
            }}
          >
            Theta 2025 Exclusive T-shirt
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#ff3d00', // Custom color
              '&:hover': {
                backgroundColor: '#e33c00', // Darker on hover
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </Card>
    </Box>
    <Footer/>
    </>
  );
};

export default TShirtPage;
