"use client";

import { createProvider } from "@/_lib/api";
import FormButton from "@/components/FormButton";
import NameInput from "@/components/NameInput";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const CreateProvider = () => {
  const [formData, setFormData] = useState({
    bussines_name: "",
    bussines_type: undefined,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.bussines_name.length === 0) {
      console.error("Bussines name can´t be empty");
      return;
    }

    if (formData.bussines_type != 1 && formData.bussines_type != 2) {
      console.error("Bussines type can only be 1 or 2");
      return;
    }

    try {
      const result = await createProvider(formData);
      console.log("Provider created", result);
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
      <NameInput
        id="bussines-name"
        name="bussines_name"
        placeholder="Bussines Name"
        value={FormData.bussines_name}
        onChange={handleChange}
      />
      <NameInput
        id="bussines-type"
        name="bussines_type"
        placeholder="Bussines Type"
        value={formData.bussines_type}
        onChange={handleChange}
      />
      <FormButton text="Create Provider" />
    </Box>
  );
};

export default CreateProvider;
