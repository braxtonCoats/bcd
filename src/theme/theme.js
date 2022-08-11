//import { overrides } from './overrides';
//import { props } from './props';
import { ThemeOptions } from '@mui/material';

/**
 * We split out a 'base theme' with just colors
 * and typography so that the props & overrides
 * sections can utilize theme tooling like spacing and
 * palette without creating circular dependencies
 */
import { CustomPalette } from './palette';
//import { typography } from './typography';
import { createTheme } from '@mui/material';
import { merge, mapValues } from 'lodash';

const theme = createTheme({
    CustomPalette,
  //typography,
  //components: merge(
    //mapValues(props, (v) => ({ defaultProps: v })),
    //mapValues(overrides, (v) => ({ styleOverrides: v }))
  //)
});

export default theme;

// TODO: create typography and components section, come back here to enable them