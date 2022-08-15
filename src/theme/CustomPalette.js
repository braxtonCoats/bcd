import { ThemeOptions } from "@mui/material";
import {
  createTheme,
  PaletteOptions,
  PaletteColorOptions,
} from "@mui/material";
import token from '../tokens/tokens.json';


export const CustomPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          /** Light Color Palette */
          primary: {
            main: token.light.theme.primary.value,
            contrastText: token.light.theme["on-primary"].value,
            onMain: token.light.theme["on-primary"].value,
            container: token.light.theme["primary-container"].value,
            onContainer: token.light.theme["on-primary-container"].value,
          },
          secondary: {
            main: token.light.theme.secondary.value,
            contrastText: token.light.theme["on-secondary"].value,
            onMain: token.light.theme["on-secondary"].value,
            container: token.light.theme["secondary-container"].value,
            onContainer: token.light.theme["on-secondary-container"].value,
          },
          tertiary: {
            main: token.light.theme.tertiary.value,
            contrastText: token.light.theme["on-tertiary"].value,
            onMain: token.light.theme["on-tertiary"].value,
            container: token.light.theme["tertiary-container"].value,
            onContainer: token.light.theme["on-tertiary-container"].value,
          },
          error: {
            main: token.light.theme.error.value,
            onMain: token.light.theme["on-error"].value,
            container: token.light.theme["error-container"].value,
            onContainer: token.light.theme["on-error-container"].value,
          },
          surface: {
            main: token.light.theme.surface.value,
            onMain: token.light.theme["on-surface"].value,
            variant: token.light.theme["surface-variant"].value,
            onVariant: token.light.theme["on-surface-variant"],
          },
          background: {
            main: token.light.theme.background.value,
            onMain: token.light.theme["on-background"].value,
            default: token.light.theme.background.value
          }

        }
      : {
          /** Dark Color Palette */
          primary: {
            main: token.dark.theme.primary.value,
            contrastText: token.dark.theme["on-primary"].value,
            onMain: token.dark.theme["on-primary"].value,
            container: token.dark.theme["primary-container"].value,
            onContainer: token.dark.theme["on-primary-container"].value,
          },
          secondary: {
            main: token.dark.theme.secondary.value,
            contrastText: token.dark.theme["on-secondary"].value,
            onMain: token.dark.theme["on-secondary"].value,
            container: token.dark.theme["secondary-container"].value,
            onContainer: token.dark.theme["on-secondary-container"].value,
          },
          tertiary: {
            main: token.dark.theme.tertiary.value,
            contrastText: token.dark.theme["on-tertiary"].value,
            onMain: token.dark.theme["on-tertiary"].value,
            container: token.dark.theme["tertiary-container"].value,
            onContainer: token.dark.theme["on-tertiary-container"].value,
          },
          error: {
            main: token.dark.theme.error.value,
            onMain: token.dark.theme["on-error"].value,
            container: token.dark.theme["error-container"].value,
            onContainer: token.dark.theme["on-error-container"].value,
          },
          surface: {
            main: token.dark.theme.surface.value,
            onMain: token.dark.theme["on-surface"].value,
            variant: token.dark.theme["surface-variant"].value,
            onVariant: token.dark.theme["on-surface-variant"],
          },
          background: {
            main: token.dark.theme.background.value,
            onMain: token.dark.theme["on-background"].value,
            default: token.dark.theme.background.value
          }
        }),
        
  },
});
