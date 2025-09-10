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

const PasswordInput = ({ id, placeholder, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl sx={{ margin: 1 }}>
      <InputLabel htmlFor={id}>{placeholder}</InputLabel>
      <OutlinedInput
        sx={{ width: { xs: 250, m: 300, lg: 350 } }}
        id={id}
        type={showPassword ? "text" : "password"}
        name={name}
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
