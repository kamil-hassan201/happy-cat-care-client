import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Switch, Typography } from '@mui/material';
import React from 'react';

const MyAppointment = (props) => {
    const { customerName, customerEmail, status, service, _id } = props.appointment;
    const { handleRemove } = props;
    return (
        <div>
            <Card sx={{ maxWidth: "80%", mt: 5, mx: 'auto' }}>
                <CardActionArea sx={{ display: 'flex', mt: 3 }}>

                    <CardContent sx={{ width: "50%", mx: 'auto' }} >
                        <Typography gutterBottom variant="h5" component="div">
                            {service.name}
                        </Typography>

                        <Typography variant="body1" color="inherit">
                            {customerName}
                        </Typography>
                        <Typography sx={{ mb: 3 }} variant="body2" color="inherit">
                            {customerEmail}
                        </Typography>
                        <Typography style={{ whiteSpace: "nowrap" }} variant="body3" color="text.secondary">
                            Appointment Id: {_id}
                        </Typography>
                        {
                            status === 'Pending' ? <Typography sx={{ mt: 3 }} variant="body2" color='#f2b022'>
                                {status}
                            </Typography>
                                :
                                <Typography sx={{ mt: 3 }} variant="body2" color="green">
                                    {status}
                                </Typography>
                        }
                    </CardContent>
                    <CardMedia
                        sx={{ width: "45%", mx: 4 }}
                        component="img"
                        height="250"

                        image={service.image}
                        alt="green iguana"
                    />
                </CardActionArea>
                <CardActions sx={{ display: 'block' }}>


                    <Button onClick={() => handleRemove(_id)} size="small" sx={{ color: '#ff3030', my: 2 }}>
                        Remove Appointment
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default MyAppointment;