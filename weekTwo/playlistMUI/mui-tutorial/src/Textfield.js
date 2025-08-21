import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const TextFieldElem = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          sx={{ margin: 3 }}
          type="text"
          variant="outlined"
          placeholder="Name"
        ></TextField>
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          sx={{ margin: 3 }}
          type="email"
          variant="filled"
          placeholder="Email"
        ></TextField>
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          sx={{ margin: 3 }}
          type="password"
          variant="standard"
          placeholder="Password"
        ></TextField>
        <Button type="submit">Submit</Button>
      </form>
      <Typography>{inputs.name}</Typography>
    </div>
  );
};

export default TextFieldElem;
