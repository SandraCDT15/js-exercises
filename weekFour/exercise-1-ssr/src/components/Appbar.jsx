"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography>Hello</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
