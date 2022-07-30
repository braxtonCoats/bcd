import { ThemeOptions } from "@mui/material";
import {
  createTheme,
  PaletteOptions,
  PaletteColorOptions,
} from "@mui/material";
import colors from "../theme/colors";

export const CustomPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          /** Light Color Palette */
          primary: {
            main: colors.blue[65],
            default: colors.red[50],
            container: colors.blue[2],
            containerVariant: colors.blue[5],

            /** New Color inclustions to match UX Tokens 
            onMain: colors.blue[0],
            container: colors.blue[2],
            onContainer: colors.blue[65],
            containerVariant: colors.blue[5],*/
          },

          onPrimary: {
            main: colors.blue[0],
            container: colors.blue[90],
          },
        }
      : {
          /** Dark Color Palette */
          primary: {
            main: colors.green[35],
          },
        }),
  },
});
