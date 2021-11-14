import { Button, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const [value, setValue] = React.useState(0);
    const onSubmit = data => {
        data.rating = value;
        fetch('https://tranquil-dusk-11890.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Posted Successfully");
                    setValue(0);
                    reset()
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField required
                    sx={{ width: '75%', my: 3 }}
                    defaultValue={user.displayName}
                    label="Name" {...register("customerName", { required: true, maxLength: 20 })} /> <br />

                <TextField required
                    label="Comment"
                    multiline
                    rows={4}
                    sx={{ width: '75%', mb: 3 }}
                    {...register("comment", { required: true })} /><br />
                <Typography component="legend">Please Rate Our Service</Typography>
                <Rating
                    size="large"
                    precision={0.5}
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                /> <br />
                <Button sx={{ mt: 4 }} type="submit" variant="outlined" size="large">
                    Submit Review
                </Button>
            </form>

        </div>
    );
};

export default AddReview;