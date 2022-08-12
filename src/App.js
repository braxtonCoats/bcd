import * as React from 'react';
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
import { MyTheme } from './theme/theme';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const colorMode = React.useContext(ColorModeContext);
  return (
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

  const theme = React.useMemo( () => createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (

    <DittoProvider source={dittodata} projectId="project_62f05a6f45f99efffd0ab277">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={MyTheme}>
            <MyApp />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </DittoProvider>

  );
}