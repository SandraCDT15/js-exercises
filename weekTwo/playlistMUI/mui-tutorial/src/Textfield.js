import React, { useState } from "react";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { pink } from "@mui/material/colors";

const TextFieldElem = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    terms: false,
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default TextFieldElem;
