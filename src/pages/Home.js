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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3];

export default function Home() {
  return (
    <React.Fragment>
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
            Hi, I'm Braxton :)
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
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  backgroundColor: 'primary.container',
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia component="img"
                  image={placeholder}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" color='primary.main'>
                    Project Name
                  </Typography>
                  <Typography color= 'rgba(151, 53, 149, 1)'>
                    This is where I'll give a small description of this project.
                  </Typography>
                </CardContent>
                {
                /** I dont need these now but may want them in the future */
                <CardActions>
                  <Button size="small" href="https://www.youtube.com">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions> }
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </React.Fragment>
  );
}
