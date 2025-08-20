import React from "react";
import { IconButton, Button } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

const Buttons = () => {
  return (
    <div>
      <Button variant="text" disabled>
        Text
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => alert("clicked")}
      >
        Contained
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>

      <IconButton
        aria-label="fingerprint"
        sx={{ color: "blue" }}
        onClick={() => alert("Fingerprint clicked")}
      >
        <Fingerprint />
      </IconButton>
    </div>
  );
};

export default Buttons;
