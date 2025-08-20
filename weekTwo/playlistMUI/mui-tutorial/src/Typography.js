import React from "react";
import { Typography } from "@mui/material";

const TypoElem = () => {
  return (
    <div>
      <Typography
        variant="h6"
        sx={{ color: "blue", border: "1px solid black", borderRadius: 10 }}
      >
        Hello World!
      </Typography>
    </div>
  );
};

export default TypoElem;
