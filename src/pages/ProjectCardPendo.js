import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import PendoCover from '../assets/img/LL/PendoProjectCover.jpg';

export default function ProjectCardPendo() {
    return (

        /** Project Card 1 */
        /** Pendo Customization */
        <Card raised >
            {/** Header */}
            <CardContent>
                <Typography variant="h5" component="h2" color='primary.main'>
                Pendo Customization
                </Typography>
            </CardContent>

            {/** Media */}
            <CardMedia component="img"
                image={PendoCover}
                alt="random"
            />
            
            {/** Actions */}
            <CardActions sx={{ 
                /* Auto layout */
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '16px 32px',
                gap: '16p'}}>
                <Button variant="contained" size="small" href="/project-1">View Project</Button>
            </CardActions>
        </Card>
    );
}