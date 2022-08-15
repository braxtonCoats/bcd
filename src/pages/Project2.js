import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import placeholder from "../assets/img/placeholder-image.png";
import { Ditto } from "ditto-react";

export default function P2() {
  return (
    <Container sx={{ mt: 16, ml: 4, mr: 4 }}>
      {/** Project 2 - Design Library */}
      {/** Project Title */}
      <Typography variant="h4" gutterBottom component="div">
        <Ditto textId="text_62f05abff475e74ce5ffd826" />
      </Typography>

      {/** Problem Statement */}
      <Container>
        <Typography variant="h5" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd828" />
        </Typography>
        <Typography variant="body" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd82a" />
        </Typography>
      </Container>

      {/** Key Result */}
      <Container>
        <Typography variant="h5" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd82c" />
        </Typography>
        <Typography variant="body" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd82e" />
        </Typography>
      </Container>

      {/** Journey */}
      <Container>
        <Typography variant="h5" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd830" />
        </Typography>
        <Typography variant="body" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd832" />
        </Typography>
        {/** Dummy Dashboard Comparison */}
        <Container component="img" src={placeholder} maxWidth="sm" />
        <Typography variant="body" gutterBottom component="div">
          <Ditto textId="text_62f05ac0f475e74ce5ffd836" />
        </Typography>
        {/** ZH Screenshot */}
        <Container component="img" src={placeholder} maxWidth="sm" />
      </Container>
      {/** Challenges */}
      <Container>
        <Typography variant="h5" gutterBottom component="div">
          <Ditto textId="text_62f05a6f481a4aaf356bf12c" />
        </Typography>
        <Typography variant="body" gutterBottom component="div">
          <Ditto textId="text_62f05a6f481a4aaf356bf12e" />
        </Typography>
      </Container>
    </Container>
  );
}
