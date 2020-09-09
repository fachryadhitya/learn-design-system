import { mixed, neutral, yellow, green, red } from "./Colors";
import { primaryFont } from "./Typography";

export const defaultTheme = {
  primaryColor: mixed[100],
  primaryColorHover: mixed[200],
  primaryColorActive: mixed[500],
  textColorPrimary: neutral[100],
  textColor: neutral[600],
  primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
