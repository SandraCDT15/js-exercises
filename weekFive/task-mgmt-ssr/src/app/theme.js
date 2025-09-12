"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  spacing: 8,
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: "8px",
        },
      },
    },
  },
});

export default theme;
