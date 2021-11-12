import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';


const DatePicker = () => {
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>


                <MobileDatePicker
                    label="Appointment Date"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    variant="standard"
                    renderInput={(params) => <TextField {...params} />}
                />


            </LocalizationProvider>
        </div>
    );
}
export default DatePicker;