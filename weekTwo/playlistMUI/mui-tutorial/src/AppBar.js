import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import TabElem from "./Tab";

const AppBarElem = () => {
  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <TabElem />
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
