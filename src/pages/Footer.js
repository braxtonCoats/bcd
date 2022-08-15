import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {/*<Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "} */}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

export default function Footer() {
    return(
        <Container sx={{bgcolor: "background.main"}}>
      {/* Footer */}
      <Box sx={{p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This portfolio was built <strong>by hand</strong> in React by <strong>Braxton Coats</strong> (me) 
        </Typography>
        <Typography variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p">
          It is constantly being updated and changed as I learn more about creating React webpages.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
      </Container>
);
}