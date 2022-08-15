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

export default function AboutMe() {
  return (
    <Box md={8} sx={{ mt: 24, mr: 16, mb: 16, ml: 16, flexGrow: 1 }}>

      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        {/** Page Title */}
        <Grid xs={12}>
          <Typography variant="h2" align="center" gutterBottom component="div">
            <Ditto textId="text_62fa387f28a9586255be94b8" />
          </Typography>
        </Grid>

        {/** PIC: Picture of me */}
        <Grid xs={6}  p={8} align='center' >
            <Card raised sx={{maxHeight: 300, maxWidth: 300}}>
                <CardMedia component="img" image={placeholder} alt="random" />
            </Card>
        </Grid>
        {/** Background */}
        <Grid xs={6} pt={16} justifyContent="center" alignItems='center' >
            <Typography variant="paragraph" align="center" gutterBottom component="div">
                <Ditto textId="text_62fa387f28a9586255be94c2" />
            </Typography>
        </Grid>

        {/** Finding Design */}
        <Grid xs={6} pt={16}>
            <Typography variant="paragraph" align="center" gutterBottom component="div">
                <Ditto textId="text_62fa387f28a9586255be94c6" />
            </Typography>
        </Grid>
        {/** PIC: College Braxton */}
        <Grid xs={6} p={8} align='center'>
            <Card raised sx={{maxHeight: 300, maxWidth: 300}}>
                <CardMedia component="img" image={placeholder} alt="random" />
            </Card>
        </Grid>
                {/** PIC: BW Pic */}
                <Grid xs={6} p={8} align='center'>
            <Card raised sx={{maxHeight: 300, maxWidth: 300}}>
                <CardMedia component="img" image={placeholder} alt="random" />
            </Card>
        </Grid>
        {/** Internship */}
        <Grid xs={6} pt={16}>
            <Typography variant="paragraph" align="center" gutterBottom component="div">
                <Ditto textId="text_62fa387f28a9586255be94c8" />
            </Typography>
        </Grid>



      </Grid>
    </Box>
  );
}
