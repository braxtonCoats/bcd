import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home'
import Navigation from './navigation/Navigation'
import { Grid } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Grid container backgroundColor='background.paper'>
      <Navigation handleChange={colorMode.toggleColorMode} />
      <Home />
    </Grid>

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
