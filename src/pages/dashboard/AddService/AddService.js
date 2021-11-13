import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/service', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Service Added');
                    reset();
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField required
                    sx={{ width: '75%', my: 3 }}
                    label="Service Name" {...register("name", { required: true, maxLength: 20 })} /> <br />
                <TextField required
                    multiline
                    rows={5}
                    sx={{ width: '75%', mb: 3 }}
                    label="Details" {...register("details")} /><br />
                <TextField required
                    sx={{ width: '75%', mb: 3 }}
                    label="Price" type="number" {...register("price",)} /><br />
                <TextField required
                    sx={{ width: '75%', mb: 3 }}
                    label="Image Link" {...register("image")} /><br />
                <Button type="submit" variant="outlined" size="large">
                    Submit
                </Button>
            </form>

        </div>
    );
};

export default AddService;