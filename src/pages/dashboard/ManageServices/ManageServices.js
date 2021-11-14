import { Container, Divider, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ManageService from '../ManageService/ManageService';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm(`Are you sure you want to Remove The Service with id ${id}`);
        if (proceed) {
            const uri = `http://localhost:4000/service/${id}`
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Appointment Removed");
                        const newServices = services.filter(sv => sv._id != id)
                        setServices(newServices);
                    }
                })
        }
    }
    return (
        <Container>
            <h1>Manage All Services</h1>
            <Divider sx={{ width: '40%', mx: 'auto' }}></Divider>
            <Grid style={{ margin: '20px auto' }} container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    services.map(sv => <ManageService
                        key={sv._id}
                        service={sv}
                        handleDelete={handleDelete}
                    ></ManageService>)
                }
            </Grid>
        </Container>
    );
};

export default ManageServices;