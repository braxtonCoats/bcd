import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home'
import Navigation from './navigation/Navigation'
import { Grid } from '@mui/material';
import dittodata from './ditto';
import DittoProvider from "ditto-react";
import Footer from './pages/Footer';
import AboutMe from './pages/AboutMe';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Router>
      <Navigation handleChange={colorMode.toggleColorMode} />  

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path='about-me' element={<AboutMe />} />
      </Routes>
      <Footer />

    </Router>



  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

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