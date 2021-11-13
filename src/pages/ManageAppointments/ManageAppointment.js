import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Switch from '@mui/material/Switch';

const ManageAppointment = (props) => {
    const { customerName, customerEmail, status, service, _id } = props.appointment;
    const { handleRemove } = props;
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        status == 'Pending' ? setChecked(false) : setChecked(true);
    }, [])

    const handleChange = (event) => {
        setChecked(event.target.checked);
        let status;
        if (event.target.checked) {
            status = 'Done'
        }
        else {
            status = 'Pending'
        }
        const uri = `http://localhost:4000/appointment/${_id}`
        fetch(uri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    };

    return (
        <Card sx={{ maxWidth: "80%", mt: 5, mx: 'auto' }}>
            <CardActionArea sx={{ display: 'flex' }}>
                <CardMedia
                    sx={{ width: "35%" }}
                    component="img"
                    height="200"

                    image={service.image}
                    alt="green iguana"
                />
                <CardContent sx={{ width: "40%" }} >
                    <Typography gutterBottom variant="h5" component="div">
                        {service.name}
                    </Typography>

                    <Typography variant="body1" color="inherit">
                        {customerName}
                    </Typography>
                    <Typography sx={{ mb: 3 }} variant="body2" color="inherit">
                        {customerEmail}
                    </Typography>
                    <Typography style={{ whiteSpace: "nowrap" }} variant="body3" color="text.secondary">
                        Appointment Id: {_id}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'block' }}>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}

                    />
                    {
                        !checked ?
                            <span style={{ color: '#f2b022' }}>Pending</span>
                            :
                            <span style={{ color: 'green' }}>Done </span>
                    }
                    <Button onClick={() => handleRemove(_id)} size="small" sx={{ color: '#ff3030', my: 2 }}>
                        Remove Appointment
                    </Button>
                </CardActions>
            </CardActionArea>

        </Card>
    );
};

export default ManageAppointment;