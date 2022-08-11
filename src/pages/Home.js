import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ProjectCardPendo from "./ProjectCardPendo";
import ProjectCardDL from "./ProjectCardDL";
import { Ditto } from 'ditto-react';
import { Paper } from "@mui/material";



const Home = ({}) => {
  return (
    
    <Container sx={{ bgcolor: 'background.paper'}}>
      {/** H1 Title */}
      <Container
        sx={{
          bgcolor: "background.paper",
          pt: 24,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">

          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
          <Ditto componentId="home-page.intro" />


          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            I'm a designer passionate about <b>users</b>, <b>design systems</b>
            .......and <b>Star Wars</b>
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Container>

      {/** Container Grid of Cards */}
      <Container sx={{
        /* Auto layout */
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '128px 0px',
        gap: '64px',
      }}>
        <ProjectCardPendo/>
        <ProjectCardDL/>
      </Container>

      {/** Content */}


    </Container>
  );
}

export default Home; 