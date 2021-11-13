import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HealingIcon from '@mui/icons-material/Healing';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

export default function CustomizedTimeline() {
    return (
        <>
            <Typography sx={{ letterSpacing: 6, mt: 10, mb: 5 }} variant="h5">
                Our Pet Care Procedures
            </Typography>
            <Divider style={{ width: '30%', margin: '0 auto' }} />
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        Daily
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Food
                        </Typography>
                        <Typography>Maintain a Healthy Weight</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Monthly
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <FavoriteIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Health Checkup
                        </Typography>
                        <Typography>Regular Exams are Vital.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <HealingIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Vaccination
                        </Typography>
                        <Typography>Get Regular Vaccinations.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <EmojiNatureIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Environment
                        </Typography>
                        <Typography>Provide an Enriched Environment.!</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline></>
    );
}
