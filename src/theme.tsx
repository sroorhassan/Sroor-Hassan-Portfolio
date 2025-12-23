// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6b0f1a",
    },
    secondary: {
      main: "#cfcfcf", 
    },
    background: {
      default: "#121212", 
      paper: "#1e1e1e", 
    },
    text: {
      primary: "#d4d4d4",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: `"Inter","Playfair"`,
    h1: { fontWeight: 700, fontSize: "3rem" },
    h2: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontSize: "1rem" },
  },
});
