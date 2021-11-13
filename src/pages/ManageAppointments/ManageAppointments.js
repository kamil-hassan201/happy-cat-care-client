import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageAppointment from './ManageAppointment';

const ManageAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/appointments')
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
                Manage All Appointments
            </Typography>
            {
                appointments.map(ap => <ManageAppointment
                    key={appointments._id}
                    appointment={ap}
                    handleRemove={handleRemove}
                ></ManageAppointment>)
            }

        </Container>
    );
};

export default ManageAppointments;