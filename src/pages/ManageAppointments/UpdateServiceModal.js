import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const UpdateServiceModal = (props) => {
    const { setOpenModal, openModal } = props;
    const { service } = props;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceed = window.confirm("Sure you want to update?");
        if (proceed) {
            const uri = `https://tranquil-dusk-11890.herokuapp.com/service/${service._id}`;
            fetch(uri, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert("Updated Successful");
                        handleClose();
                    }
                })
        }
    }

    const handleClose = () => setOpenModal(false);
    return (
        <div>

            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        sx={{ mx: 'auto', textAlign: 'center', mb: 3 }}
                        variant="h4"
                    >
                        Update The Service
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField required
                            defaultValue={service.name}
                            sx={{ width: '100%', my: 3 }}
                            label="Service Name" {...register("name", { required: true, maxLength: 20 })} /> <br />
                        <TextField required
                            defaultValue={service.details}
                            multiline
                            rows={5}
                            sx={{ width: '100%', mb: 3 }}
                            label="Details" {...register("details")} /><br />
                        <TextField required
                            defaultValue={service.price}
                            sx={{ width: '100%', mb: 3 }}
                            label="Price" type="number" {...register("price",)} /><br />
                        <TextField required
                            defaultValue={service.image}
                            sx={{ width: '100%', mb: 3 }}
                            label="Image Link" {...register("image")} /><br />
                        <Box sx={{ textAlign: 'center' }}><Button type="submit" variant="contained" size="large">
                            Update
                        </Button></Box>
                    </form>

                </Box>
            </Modal >
        </div >
    );
};

export default UpdateServiceModal;