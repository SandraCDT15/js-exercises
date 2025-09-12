"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

const ThemeRegistry = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
