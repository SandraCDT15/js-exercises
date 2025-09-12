"use client";

import { useState } from "react";
import EmailInput from "@/components/EmailInput";
import NameInput from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";
import { Box, Button } from "@mui/material";
import { registerUser } from "@/_lib/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const result = await registerUser(formData);
      console.log("User registered: ", result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NameInput name="name" value={formData.name} onChange={handleChange} />
      <EmailInput
        id="register-email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <PasswordInput
        id="input-password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <PasswordInput
        id="confirm-password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: { xs: 250, md: 300, lg: 350 }, marginTop: 3 }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;
