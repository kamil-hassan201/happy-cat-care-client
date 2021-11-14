import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router';
import useStyle from '../../../hooks/useStyle/useStyle';
import banner from '../../../images/home-banner.jpeg'

const HomeBanner = () => {
    const classes = useStyle();
    const bannerStyle = {
        background: `url(${banner})`,
        height: '60vh',
        backgroundSize: '100% 100vh',
        backgroundRepeat: 'no-repeat'
    }
    const history = useHistory();
    const handleExplore = () => {
        history.replace('/ourservices');
    }

    return (
        <div>
            <Box style={bannerStyle} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <Typography sx={{ fontWeight: 500, color: '#524F4E', mb: 3 }} variant="h2">
                        We Care About Your Pet
                    </Typography>
                    <Button onClick={handleExplore} sx={{ mt: 5 }} size="large" color="inherit" variant="outlined">Explore &nbsp;   &#62; &#62; </Button>
                </Box>
            </Box>
        </div >
    );
};

export default HomeBanner;