import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleMakeAppoinment = (id) => {
        history.push(`/placeorder/${id}`)
    }
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
                        key={sv._id}
                        service={sv}
                        handleMakeAppoinment={handleMakeAppoinment}
                    ></Service>)
                }

            </Grid>
        </Container>
    );
};

export default Services;