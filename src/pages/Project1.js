import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import placeholder from '../assets/img/placeholder-image.png';
import { Ditto } from "ditto-react";
import { Paper } from "@mui/material";

export default function Project1() {
    return (

        <Container sx={{ m: 4}}>
            {/** Project 1 - Pendo Customization */}
            <Paper elevation={3} sx={{
                p: 4,
                m: 4,
                bgcolor: 'background.default',
                gridTemplateColumns: { md: '1fr 1fr' },
              }}>
                {/** Project Title */}
                <Typography variant="h4" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf108" /></Typography>
                
                {/** Problem Statement */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf10a" /></Typography>
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf10c" /></Typography>
                </Container>

                {/** Key Result */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf10e" /></Typography>       
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf110" /></Typography>
                </Container>

                {/** Journey */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf112" /></Typography>
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf114" /></Typography>
                    {/** Early LL mockups */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf118" /></Typography>
                    {/** Support Features */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf11c" /></Typography>
                    {/** Testing Results */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf120" /></Typography>
                    {/** Final Design in XD */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf124" /></Typography>
                    {/** Final Implementation of LL */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf128" /></Typography>
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf12a" /></Typography>
                </Container>
                {/** Challenges */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf12c" /></Typography>
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05a6f481a4aaf356bf12e" /></Typography>
                </Container>

            </Paper>

        </Container>


    );
}