import React from "react";
import { IconButton, Button } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

const Buttons = () => {
  return (
    <div>
      <Button sx={{ margin: 3 }} variant="text" disabled>
        Text
      </Button>
      <Button
        sx={{ margin: 3 }}
        variant="contained"
        color="success"
        onClick={() => alert("clicked")}
      >
        Contained
      </Button>
      <Button sx={{ margin: 3 }} variant="outlined" color="secondary">
        Outlined
      </Button>

      <IconButton
        sx={{ margin: 3, color: "blue" }}
        aria-label="fingerprint"
        onClick={() => alert("Fingerprint clicked")}
      >
        <Fingerprint />
      </IconButton>
    </div>
  );
};

export default Buttons;
