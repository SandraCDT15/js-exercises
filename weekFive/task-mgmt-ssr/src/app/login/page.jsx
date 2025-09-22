"use client";

import { useState } from "react";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import { loginUser } from "@/_lib/api";
import { validateEmail, validatePassword } from "@/_utils/validateEmail";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import FormButton from "@/components/FormButton";

const Login = () => {
  const router = useRouter();
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
      router.push("/");
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
      <FormButton text="Login" />
    </Box>
  );
};

export default Login;
