import { Button, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://tranquil-dusk-11890.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Successful!");
                    reset();
                }
            });
    }
    return (
        <div>
            <Typography sx={{ my: 5, fontFamily: 'Monospace' }} variant="h3">
                Make A New Admin
            </Typography>


            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField required
                    sx={{ width: '75%', my: 3 }}

                    label="email" {...register("email", { required: true, maxLength: 20 })} /> <br />

                <br />
                <Button variant="contained" type='submit'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;