import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MyAppointment from '../MyAppointment/MyAppointment';

const MyOrders = () => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:4000/appointments?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    const handleRemove = (id) => {
        const proceed = window.confirm(`Are you sure you want to remove appointment with id ${id}`);
        if (proceed) {
            const uri = `http://localhost:4000/appointment/${id}`
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Appointment Removed");
                        const newAppointments = appointments.filter(ap => ap._id != id)
                        setAppointments(newAppointments);
                    }
                })
        }

    }
    return (
        <Container sx={{ mx: 'auto' }}>
            <Typography sx={{ mt: 5, mb: 10, fontFamily: 'Monospace' }} variant="h3">
                My Appointments
            </Typography>
            {
                appointments.map(ap => <MyAppointment
                    key={appointments._id}
                    appointment={ap}
                    handleRemove={handleRemove}
                ></MyAppointment>)
            }
        </Container>
    );
};

export default MyOrders;