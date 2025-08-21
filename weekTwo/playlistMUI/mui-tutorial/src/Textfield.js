import React, { useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
} from "@mui/material";

const TextFieldElem = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    terms: false,
    age: 0,
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
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
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    subscribe: !inputs.subscribe.value,
                  }))
                }
              />
            }
            label="Subscribe"
          />
          <FormControlLabel
            name="terms"
            color="secondary"
            required
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prevState) => ({
                    ...prevState,
                    terms: !inputs.terms.value,
                  }))
                }
              />
            }
            label="I accept terms and conditions"
          />
        </FormGroup>
        <FormControl fullwidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default TextFieldElem;
