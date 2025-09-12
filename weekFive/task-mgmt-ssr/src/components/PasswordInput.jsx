"use client";

import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const PasswordInput = ({ id, placeholder, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl>
      <InputLabel htmlFor={id} sx={{ marginLeft: 0, marginTop: 3 }}>
        {placeholder}
      </InputLabel>
      <OutlinedInput
        sx={{
          width: { xs: 250, md: 300, lg: 350 },
          marginLeft: 0,
          marginTop: 3,
        }}
        id={id}
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        endAdornment={
          <IconButton onClick={handleClickPassword}>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
