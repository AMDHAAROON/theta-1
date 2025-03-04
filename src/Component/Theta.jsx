import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { aboutTheta } from '../utility/data'; // Import data from utility file

const Theta = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], alignItems: 'center', justifyContent: 'space-between', bgcolor: '#000212', py: 10, px: [3, 10] }}>
            {/* Left Section - Text */}
            <Box sx={{ flex: 1, textAlign: ['center', 'left'] }}>
                <Typography 
                    variant="h3" 
                    color="white" 
                    fontWeight="bold" 
                    gutterBottom 
                    sx={{ 
                        letterSpacing: '1px', 
                        textTransform: 'uppercase', 
                        position: 'relative', 
                        display: 'inline-block' ,
                        mb: 5
                    }}
                >
                    {aboutTheta.title}
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            left: 0, 
                            bottom: -5, 
                            width: '100%', 
                            height: '4px', 
                            backgroundColor: '#FFD700' 
                        }}
                    />
                </Typography>
                <Typography variant="body1" color="white" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.6, fontWeight: '350' }}>
                    {aboutTheta.description}
                </Typography>
                <Button 
                    variant="contained" 
                    href={aboutTheta.brochureLink} 
                    target="_blank" 
                    sx={{ 
                        mt: 3, 
                        backgroundColor: '#FFD700', 
                        color: '#000', 
                        fontWeight: 'bold', 
                        fontSize: '1.1rem', 
                        padding: '12px 24px', 
                        borderRadius: '8px',
                        position: 'relative',
                        overflow: 'hidden',
                        animation: 'pulse 1.5s infinite',
                        '&:hover': {
                            backgroundColor: '#FFC107'
                        },
                        '@keyframes pulse': {
                            '0%': { transform: 'scale(1)' },
                            '50%': { transform: 'scale(1.1)' },
                            '100%': { transform: 'scale(1)' }
                        }
                    }}
                >
                    {aboutTheta.buttonText}
                </Button>
            </Box>
            {/* Right Section - Image */}
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt: [3, 0] }}>
                <img 
                    src={aboutTheta.image} 
                    alt="Theta Event" 
                    style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(255, 215, 0, 0.5)' }}
                />
            </Box>
        </Box>
    );
};

export default Theta;
