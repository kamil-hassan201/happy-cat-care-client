import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-dusk-11890.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container style={{ margin: '50px auto' }}>

            <Typography sx={{ letterSpacing: 6, my: 4 }} variant="h5">
                Customer Reviews
            </Typography>
            <Divider style={{ width: '30%', margin: '0 auto' }} />
            <Grid style={{ margin: '40px auto' }} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    reviews.map(rv => <Review
                        key={rv._id}
                        review={rv}
                    ></Review>)
                }

            </Grid>
        </Container>
    );
};

export default Reviews;