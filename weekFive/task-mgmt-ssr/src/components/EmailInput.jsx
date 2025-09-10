"use client";

import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

const EmailInput = () => {
  return (
    <FormControl sx={{ margin: 1 }}>
      <InputLabel htmlFor="email-input">Email</InputLabel>
      <OutlinedInput
        sx={{ width: { xs: 250, m: 300, lg: 350 } }}
        id="email-input"
        type="email"
      />
    </FormControl>
  );
};

export default EmailInput;
