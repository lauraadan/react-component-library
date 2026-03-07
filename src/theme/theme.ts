import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#9333ea",
    },
  },

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
