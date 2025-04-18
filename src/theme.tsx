import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f9fc",
    },
    primary: {
      main: "#5b5fef",
    },
    text: {
      primary: "#1b1b1b",
      secondary: "#6e6e6e",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
