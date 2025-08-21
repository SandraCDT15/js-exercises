import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

const TextFieldElem = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ margin: 3 }}
        type="text"
        variant="outlined"
        placeholder="Name"
      ></TextField>
      <TextField
        sx={{ margin: 3 }}
        type="email"
        variant="filled"
        placeholder="Email"
      ></TextField>
      <TextField
        sx={{ margin: 3 }}
        type="password"
        variant="standard"
        placeholder="Password"
      ></TextField>
      <Typography>{name}</Typography>
    </div>
  );
};

export default TextFieldElem;
