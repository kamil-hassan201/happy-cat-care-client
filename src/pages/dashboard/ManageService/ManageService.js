import { Grid } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ManageService = (props) => {
    const { name, details, image, price, _id } = props.service;
    const { handleDelete } = props;
    return (

        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                <CardActionArea sx={{}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            {details}
                        </Typography> */}
                        {/* <Typography variant="body1" sx={{ color: '#ebb434', mt: 2 }}>
                            ${price}/ visit
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button

                        variant="contained"
                        sx={{ mx: 'auto' }} size="small" color="primary">
                        Update
                    </Button>
                    <Button
                        onClick={() => handleDelete(_id)}
                        variant="contained"
                        sx={{ mx: 'auto' }} size="small" color="secondary">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default ManageService;