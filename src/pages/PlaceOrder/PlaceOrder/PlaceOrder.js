import { Alert, AlertTitle, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../shared/Navigation/Navigation';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { useHistory, useParams } from 'react-router';
const PlaceOrder = () => {
    const id = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [service, setService] = useState({});
    const [date, setDate] = React.useState(new Date());
    const uri = `https://tranquil-dusk-11890.herokuapp.com/services/${id.id}`;
    const [appointment, setAppointment] = useState({
        customerEmail: user.email,
        customerName: user.displayName,
        date: date.toLocaleDateString(),
        status: 'Pending',
        service: service,
    });
    // console.log("placeholder line 23 ", appointment);

    //fetch service
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    //reload appointment
    useEffect(() => {
        const newAppointment = { ...appointment };
        newAppointment.service = service;
        setAppointment(newAppointment);
    }, [service])

    const handleOnBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newAppointment = { ...appointment };
        newAppointment[name] = value;
        setAppointment(newAppointment);
    }
    //set date
    const handleChange = (newValue) => {
        setDate(newValue);
        const newAppointment = { ...appointment };
        newAppointment.date = date.toLocaleDateString();
        setAppointment(newAppointment);

    }
    const handleFixAppointment = () => {

        fetch('https://tranquil-dusk-11890.herokuapp.com/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Appointment Fixed Successfully");
                    history.replace('/ourservices')
                }
            });
    }
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ mt: 5, mb: 10, fontFamily: 'Monospace' }} variant="h3">
                    Confirm The Appointment
                </Typography>


                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                        <Box sx={{ my: 5 }}>
                            <TextField
                                onBlur={handleOnBlur}
                                name="customerEmail"
                                sx={{ width: "100%", }}
                                disabled
                                id="outlined-required"
                                label="Email"
                                variant="standard"
                                defaultValue={user?.email}
                            />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: "100%", my: 3 }}
                                name="customerName"
                                label="Name"
                                variant="standard"
                                defaultValue={user?.displayName}
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker

                                    label="Appointment Date"
                                    inputFormat="dd/MM/yyyy"
                                    value={date}

                                    onChange={handleChange}


                                    renderInput={(params) => <TextField
                                        sx={{ width: "100%" }}
                                        variant="standard"
                                        {...params} />}
                                />
                            </LocalizationProvider>
                            <Button onClick={handleFixAppointment} sx={{ mt: 5 }} variant="contained" disableElevation>
                                Fix Appointment
                            </Button>
                        </Box>
                    </Grid>
                    <Divider sx={{ mx: 4 }} orientation="vertical" flexItem>
                        <i style={{ fontSize: "34px" }} className="fas fa-calendar-check"></i>
                    </Divider>
                    {/* service display */}
                    <Grid item xs={12} sm={5}>
                        <Card sx={{ maxWidth: 345, boxShadow: 0, mx: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={service.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {service.details}
                                    </Typography>
                                    <Typography style={{ color: '#ebb134' }} variant="h6">
                                        ${service.price} / service
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default PlaceOrder;