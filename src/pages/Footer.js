import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Container } from "@mui/system";


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

export default function Footer() {
    return(
        <Container sx={{bgcolor: "background.main"}}>
      {/* Footer */}
      <Box sx={{p: 6 }} component="footer">
        <Typography variant="h6" color='text.secondary' align="center" gutterBottom>
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
      </Container>
);
}