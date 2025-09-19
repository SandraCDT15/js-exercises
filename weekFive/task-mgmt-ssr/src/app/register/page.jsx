"use client";

import { Suspense, lazy, useState } from "react";
import EmailInput from "@/components/EmailInput";
import TextInput from "@/components/TextInput";
import PasswordInput from "@/components/PasswordInput";
import { Box } from "@mui/material";
import { registerUser } from "@/_lib/api";
import Loading from "./loading";
import { validateEmail, validatePassword } from "@/_utils/validateEmail";
import FormButton from "@/components/FormButton";

const LazyEmailInput = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@/components/EmailInput")), 2000);
    })
);

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

    if (!validateEmail(formData.email)) {
      console.error("Invalid email format");
      return;
    }

    if (
      !validatePassword(formData.password1) ||
      !validatePassword(formData.password2)
    ) {
      console.error("Password has empty spaces");
      return;
    }

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
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Suspense fallback={<Loading />}>
        <TextInput
          id="first-name"
          name="first_name"
          placeholder="First name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <TextInput
          id="last-name"
          name="last_name"
          placeholder="Last name"
          value={formData.last_name}
          onChange={handleChange}
        />
        {/* <EmailInput
          id="register-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /> */}

        <LazyEmailInput
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
        <FormButton text="Register" />
      </Suspense>
    </Box>
  );
};

export default Register;
