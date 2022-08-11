import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';


function Navigation({handleChange}) {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" href='/' sx={{ flexGrow: 1 }}></Typography>
          <Button variant='outline' href='/about-me'>About Me</Button>
          <Button variant='outline'>Resume</Button>
          <Switch onChange={handleChange} />
          <Tooltip title="Open settings">
              <IconButton onClick={''} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
      </Toolbar>
    </AppBar>
  );

};
      
export default Navigation
