import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import colors from './colors';

export const MyTheme = createTheme({
    palette: {
        primary: {
          main: colors.blue[50],
        },    
        status: {
            danger: colors.orange[50],
          },
      },
  });