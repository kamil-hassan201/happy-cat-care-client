import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    return (
        <Container style={{ margin: '50px auto' }}>

            <Typography sx={{ letterSpacing: 6, my: 4 }} variant="h5">
                Customer Reviews
            </Typography>
            <Divider style={{ width: '70%', margin: '0 auto' }} />
            <Grid style={{ margin: '20px auto' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {

                }

            </Grid>
        </Container>
    );
};

export default Reviews;