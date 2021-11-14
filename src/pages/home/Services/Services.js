import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Footer from '../../shared/Footer/Footer';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        setLoading(true);
        fetch('https://tranquil-dusk-11890.herokuapp.com/services/6')
            .then(res => res.json())
            .then(data => {
                setServices(data);

                setLoading(false);

            });
    }, [])

    console.log(services);
    const handleMakeAppoinment = (id) => {
        history.push(`/placeorder/${id}`)
    }
    if (loading) {
        return (
            <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </Stack>
        )
    }
    return (

        <Container style={{ margin: '20px auto' }}>
            <Typography sx={{ mt: 5 }} variant="h4">
                Welcome to Happy Cat Care
            </Typography>
            <Typography sx={{ letterSpacing: 6, my: 4 }} variant="h6">
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