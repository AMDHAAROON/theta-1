import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1683a",
    },
    secondary: {
      main: "#eee",
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: `'Source Sans 3', sans-serif`,
    fontSize: 12,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);

