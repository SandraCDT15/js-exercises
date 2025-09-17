"use client";

import { useState } from "react";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { loginUser } from "@/_lib/api";
import { validateEmail, validatePassword } from "@/_utils/validateEmail";
import { Box, Button } from "@mui/material";
import { redirect } from "next/navigation";

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

    if (!validateEmail(formData.email)) {
      console.error("Invalid email format");
      return;
    }

    if (!validatePassword(formData.password)) {
      console.error("Password has empty spaces");
      return;
    }

    try {
      const result = await loginUser(formData);

      console.log("Login successful: ", result);
      redirect("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Box
      component="form"
      noValidate
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
