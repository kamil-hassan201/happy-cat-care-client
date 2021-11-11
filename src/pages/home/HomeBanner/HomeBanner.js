import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useStyle from '../../../hooks/useStyle/useStyle';
import banner from '../../../images/home-banner.jpeg'

const HomeBanner = () => {
    const classes = useStyle();
    const bannerStyle = {
        background: `url(${banner})`,
        height: '600px',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div>
            <Box style={bannerStyle} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, fontFamily: 'Monospace', color: '#524F4E', mb: 3 }} variant="h2">
                        We Care About Your Pet
                    </Typography>
                    <Button sx={{ mt: 5 }} size="large" color="inherit" variant="outlined">Explore &nbsp;   &#62; &#62; </Button>
                </Box>
            </Box>
        </div>
    );
};

export default HomeBanner;