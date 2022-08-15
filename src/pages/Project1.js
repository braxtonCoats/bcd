import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import placeholder from "../assets/img/placeholder-image.png";
import LLmock1 from "../assets/img/LL/LLmock1.png";
import LLmock2 from "../assets/img/LL/LLmock2.png";
import LLmock3 from "../assets/img/LL/LLmock3.png";
import LLmock32 from "../assets/img/LL/LLmock3-2.png";
import LLmock33 from "../assets/img/LL/LLmock3-3.png";
import LLtoday from "../assets/img/LL/LLtoday.png";
import Box from "@mui/material/Box";
import { Ditto } from "ditto-react";
import { CardActions, CardMedia} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import PP from "../assets/img/LL/PPyearbook.png";
import Divider from "@mui/material/Divider";
import Pendorama from "../assets/img/LL/Pendorama.png";

const tab = "\u00A0\u00A0\u00A0\u00A0\u00A0";

export default function Project1() {
  return (
    <Box md={8} sx={{ mt: 24, mr: 16, mb: 16, ml: 16, flexGrow: 1 }}>
      {/** Project 1 - Pendo Customization */}

      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        {/** Project Title */}
        <Grid xs={12}>
          <Typography variant="h2" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05a6f481a4aaf356bf108" />
          </Typography>
        </Grid>

        {/** Overview */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f983ef35be9f15b9368aea" />
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography paragraph gutterBottom component="div">
          {tab}<Ditto textId="text_62f983ef35be9f15b9368aec" />
          </Typography>
        </Grid>

        <Grid direction="row" xs={6}>
          <Typography paragraph>
            {tab}<Ditto textId="text_62f983ef35be9f15b9368aee" />
          </Typography>
          <Typography paragraph>
          {tab}<Ditto textId="text_62f983ef35be9f15b9368af2" />
          </Typography>
        </Grid>

        <Grid xs={6} align="center">
          <Card raised align="center" sx={{ 
            resizeMode: 'contain',
            flex: '1', 
            width: 200,
            height: 200,}}>
              <CardMedia
                component="img"
                image={PP}
                alt="random"
              />
          </Card>
          <Grid>
            {/** Quote */}
            <Typography
              paragraph
              align="center"
              pt="10%"
              sx={{ fontStyle: "italic" }}
            >
              <Ditto textId="text_62f983ef35be9f15b9368af0" />
            </Typography>
          </Grid>
        </Grid>

        {/** Problem Statement */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
          <Ditto textId="text_62f05a6f481a4aaf356bf10a" />
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h5" align="center" gutterBottom component="div">
            {tab}<Ditto textId="text_62f05a6f481a4aaf356bf10c" />
          </Typography>
        </Grid>
        <Divider xs={12} variant="middle" />

        {/** Key Result */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05a6f481a4aaf356bf10e" />
          </Typography>
        </Grid>
        <Grid>
          <Typography paragraph gutterBottom component="div">
          {tab}<Ditto textId="text_62f05a6f481a4aaf356bf110" />
          </Typography>
        </Grid>

        {/** Journey */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05a6f481a4aaf356bf112" />
          </Typography>
        </Grid>

        {/** --------Row---------- */}
        <Grid xs={8}>
          <Typography p={2} paragraph gutterBottom component="div">
            {tab}<Ditto textId="text_62f05a6f481a4aaf356bf114" />
          </Typography>
        </Grid>

        {/** Early LL mockups */}
        <Grid xs={4}>
          <Card raised sx={{maxHeight: 500}}>
            <CardMedia component="img" image={LLmock1} alt="random" />
          </Card>
        </Grid>

        {/** ------------------ */}

        {/** --------Row---------- */}

        <Grid xs={12}>
          <Typography paragraph gutterBottom component="div">
          {tab}<Ditto textId="text_62f05a6f481a4aaf356bf118" />
          </Typography>
        </Grid>
        {/** Early Support Features Ideas*/}
        <Grid xs={6} pt={8} pb={8}>
          <Container component="img" src={LLmock3} maxWidth="sm" />
        </Grid>
        <Grid xs={6} pt={8} pb={8}>
          <Container component="img" src={LLmock33} maxWidth="sm" />
        </Grid>
        {/** ------------------ */}

        <Grid xs={8}>
        <Typography paragraph gutterBottom component="div">
        {tab}<Ditto textId="text_62f05a6f481a4aaf356bf11c" />
        </Typography>
        </Grid>
        <Grid xs={4}>
        {/** Testing Results */}
        <Card raised sx={{maxHeight: 500}}>
            <CardMedia component="img" image={placeholder} alt="random" />
          </Card>
        </Grid>

        <Grid xs={4}>
          {/** Final Design in XD */}
          <Card raised sx={{maxHeight: 500}}>
            <CardMedia component="img" image={LLmock2} alt="random" />
          </Card>
        </Grid>
        <Grid xs={8}>
        <Typography paragraph gutterBottom component="div">
        {tab}<Ditto textId="text_62f05a6f481a4aaf356bf120" />
        </Typography>
        </Grid>
        
        <Grid xs={8}>
        <Typography paragraph gutterBottom component="div">
        {tab}<Ditto textId="text_62f05a6f481a4aaf356bf124" />
        </Typography>
        <Typography paragraph gutterBottom component="div">
        {tab}<Ditto textId="text_62f05a6f481a4aaf356bf128" />
          </Typography>
        </Grid>

        {/** Final Implementation of LL */}
        <Grid xs={4}>
        <Card raised sx={{maxHeight: 500}}>
            <CardMedia component="img" image={LLtoday} alt="random" />
          </Card>
        </Grid>
        <Grid>

        </Grid>
        <Grid align='center'>
          <Typography paragraph gutterBottom component="div">
          {tab}<Ditto textId="text_62f05a6f481a4aaf356bf12a" />
          </Typography>
          <Card raised align="center" sx={{maxWidth: 500, maxHeight: 500}}>
            <CardMedia component="img" image={Pendorama} alt="random" />
            <CardActions sx={{ padding: '16px 32px', justifyContent: 'center'}}>
              <Button variant="contained">View Presentation</Button>
            </CardActions>
          </Card>
        </Grid>

        {/** Challenges */}
        <Grid pt={12} xs={12}>
          <Typography variant="h4" align="center" gutterBottom component="div">
            <Ditto textId="text_62f05a6f481a4aaf356bf12c" />
          </Typography>
        </Grid>
        <Grid>
          <Typography paragraph gutterBottom component="div">
          {tab}<Ditto textId="text_62f05a6f481a4aaf356bf12e" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
