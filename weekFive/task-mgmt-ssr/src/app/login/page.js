"use client";

import { useState } from "react";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { Box, Button } from "@mui/material";
import { loginUser } from "@/_lib/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser({ email, password });
      console.log("Login successful: ", result);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <EmailInput
        id="loginEmail"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <PasswordInput
        id="login-password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: { xs: 250, md: 300, lg: 350 }, marginTop: 3 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
