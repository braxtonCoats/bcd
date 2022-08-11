import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import placeholder from '../assets/img/placeholder-image.png';
import { Ditto } from "ditto-react";
import { Paper } from "@mui/material";

export default function P2() {
    return (

        <Container>
            {/** Project 2 - Design Library */}
            <Paper elevation={3} sx={{
                p: 4,
                m: 4,
                bgcolor: 'background.default',
                gridTemplateColumns: { md: '1fr 1fr' },
              }}>
                {/** Project Title */}
                <Typography variant="h4" gutterBottom component="div"><Ditto textId="text_62f05abff475e74ce5ffd826" /></Typography>
                
                {/** Problem Statement */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd828" /></Typography>
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd82a" /></Typography>
                </Container>

                {/** Key Result */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd82c" /></Typography>       
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd82e" /></Typography>
                </Container>

                {/** Journey */}
                <Container>
                    <Typography variant="h5" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd830" /></Typography>
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd832" /></Typography>
                    {/** Dummy Dashboard Comparison */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
                    <Typography variant="body" gutterBottom component="div"><Ditto textId="text_62f05ac0f475e74ce5ffd836" /></Typography>
                    {/** ZH Screenshot */}
                    <Container component="img" src={placeholder} maxWidth="sm" />
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