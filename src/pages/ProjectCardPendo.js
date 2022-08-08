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
import placeholder from '../assets/img/placeholder-image.png';
import { CustomPalette } from "../theme/palette";

export default function ProjectCardPendo() {
    return (

        /** Project Card 1 */
        /** Pendo Customization */
        <Card>
            {/** Header */}
            <CardContent>
                <Typography variant="h5" component="h2" color='primary.main'>
                Pendo Customization
                </Typography>
            </CardContent>

            {/** Media */}
            <CardMedia component="img"
                image={placeholder}
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
                <Button size="small" href="https://www.youtube.com">edit</Button>
                <Button variant="contained" size="small">view</Button>
            </CardActions>
        </Card>
    );
}