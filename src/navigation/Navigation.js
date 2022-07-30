import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
       


function Navigation({handleChange}) {
  return (
    <AppBar>
      <Toolbar>
        <Switch onChange={handleChange} />
      </Toolbar>
    </AppBar>
  );

};
      
export default Navigation
