"use client";

import { useState } from "react";
import EmailInput from "@/components/EmailInput";
import NameInput from "@/components/NameInput";
import PasswordInput from "@/components/PasswordInput";
import { Box, Button } from "@mui/material";
import { confirmEmail, registerUser, verifyEmail } from "@/_lib/api";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
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
      <NameInput
        id="first-name"
        name="first_name"
        placeholder="First name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <NameInput
        id="last-name"
        name="last_name"
        placeholder="Last name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <EmailInput
        id="register-email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <PasswordInput
        id="input-password"
        placeholder="Password"
        name="password1"
        value={formData.password1}
        onChange={handleChange}
      />
      <PasswordInput
        id="confirm-password"
        placeholder="Confirm password"
        name="password2"
        value={formData.password2}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: { xs: 250, md: 300, lg: 350 }, marginTop: 3 }}
      >
        Register
      </Button>
      <Button variant="contained" onClick={verifyEmail} sx={{ marginTop: 3 }}>
        Confirm email
      </Button>
    </Box>
  );
};

export default Register;
