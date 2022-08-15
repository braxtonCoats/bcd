import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home'
import Navigation from './navigation/Navigation'
import dittodata from './ditto';
import DittoProvider from "ditto-react";
import Footer from './pages/Footer';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import AboutMe from './pages/AboutMe';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CustomPalette } from './theme/CustomPalette';
import { Box } from '@mui/system';
import { Switch } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function MyApp() {
  const colorMode = React.useContext(ColorModeContext);



  return (
    <Box sx={{ bgcolor: 'background.main' }}>
    <Router>
      <Navigation handleChange={colorMode.toggleColorMode} />
      <Routes>
        <Route path="/" element={<Home />} />  
        
        <Route path='about-me' element={<AboutMe />} />
        <Route path='project-1' element={<Project1 />} />
        <Route path='project-2' element={<Project2 />} />
      </Routes>
      <Footer />
    </Router>
    </Box>
  );
}

export default function ToggleColorMode() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [mode, setMode] = React.useState(storedDarkMode);


  useEffect(() => {
    localStorage.setItem("DARK_MODE", mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
      
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        if (storedDarkMode === 'dark'){
          localStorage.theme = 'dark';
        }
        else{
          localStorage.theme = 'light';
        }
        console.log(`Mode after Switch: ${localStorage.theme}`);
        console.log(`storedDarkMode: ${storedDarkMode}`);

      },
    }),
    [],
  );



  const theme = React.useMemo( () => createTheme(CustomPalette(mode)), [mode]);

  return (

    <DittoProvider source={dittodata} projectId="project_62f05a6f45f99efffd0ab277">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <MyApp />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </DittoProvider>

  );
}