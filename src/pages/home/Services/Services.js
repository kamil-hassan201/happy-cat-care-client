import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fake_services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container style={{ margin: '20px auto' }}>
            <Typography sx={{ mt: 5, fontFamily: 'Monospace' }} variant="h3">
                Welcome to Happy Cat Care
            </Typography>
            <Typography sx={{ letterSpacing: 6, my: 4 }} variant="h5">
                Premium Pet Service
            </Typography>
            <Divider style={{ width: '70%', margin: '0 auto' }} />
            <Grid style={{ margin: '20px auto' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    services.map(sv => <Service
                        service={sv}
                    ></Service>)
                }

            </Grid>
        </Container>
    );
};

export default Services;