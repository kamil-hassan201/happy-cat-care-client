import { Button, Card, CardActions, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = (props) => {
    const { customerName, comment, rating } = props.review;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 255, minHeight: 180, boxShadow: 0, border: 1, borderColor: 'lightGray' }}>
                <CardContent >
                    <Rating name="read-only" value={rating} readOnly />
                    <Typography variant="body2">
                        {comment}
                    </Typography>
                    <Typography sx={{ fontSize: 18, mt: 2 }} color="primary.main" gutterBottom>
                        {customerName}
                    </Typography>

                </CardContent>

            </Card>
        </Grid>
    );
};

export default Review;