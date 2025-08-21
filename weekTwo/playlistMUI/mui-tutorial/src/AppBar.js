import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const AppBarElem = () => {
  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <Typography>LOGO</Typography>
          <Button
            variant="contained"
            sx={{ marginLeft: "auto" }}
            color="secondary"
          >
            Hello
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarElem;
