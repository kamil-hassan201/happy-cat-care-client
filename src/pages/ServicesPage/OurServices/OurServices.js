import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../../home/Service/Service';

const OurServices = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    const handleMakeAppoinment = (id) => {
        history.push(`/placeorder/${id}`)
    }
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container style={{ margin: '20px auto' }}>
            <Typography sx={{ mt: 5, fontFamily: 'Monospace' }} variant="h3">
                Welcome to Our Services
            </Typography>
            <Typography sx={{ letterSpacing: 6, my: 4 }} variant="h5">
                Make Appointment to Take Our Service
            </Typography>
            <Divider style={{ width: '70%', margin: '0 auto' }} />
            <Grid style={{ margin: '20px auto' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    services.map(sv => <Service
                        key={sv._id}
                        handleMakeAppoinment={handleMakeAppoinment}
                        service={sv}
                    ></Service>)
                }

            </Grid>
        </Container>
    );
};

export default OurServices;