import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import Typography from "@mui/material/Typography";

function Navigation({handleChange}) {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Braxton Coats
        </Typography>
          <Button variant='outline'>About Me</Button>
          <Button variant='outline'>Resume</Button>
          <Switch onChange={handleChange} />

      </Toolbar>
    </AppBar>
  );

};
      
export default Navigation
