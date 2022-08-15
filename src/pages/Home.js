import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import ProjectCardPendo from "./ProjectCardPendo";
import ProjectCardDL from "./ProjectCardDL";
import { Ditto } from "ditto-react";
import Grid from "@mui/material/Unstable_Grid2";

const Home = ({}) => {
  return (
    <Container>
      {/** H1 Title */}
      <Container
        sx={{
          bgcolor: "background.main",
          pt: 24,
        }}
      >
        <Typography
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
          <Ditto componentId="home-page.description" />
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        ></Stack>
      </Container>

      {/** Container Grid of Cards */}
      <Grid container spacing={8}>

      <Grid xs={6}>
        <ProjectCardPendo />
        </Grid>
        <Grid xs>
        <ProjectCardDL />
        </Grid>
      </Grid>
      {/** Content */}
    </Container>
  );
};

export default Home;
