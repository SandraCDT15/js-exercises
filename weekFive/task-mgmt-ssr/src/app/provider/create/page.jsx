"use client";

import { createProvider } from "@/_lib/api";
import FormButton from "@/components/FormButton";
import TextInput from "@/components/TextInput";
import { Box } from "@mui/material";
import { useState } from "react";

const CreateProvider = () => {
  const [formData, setFormData] = useState({
    business_name: "",
    business_type: undefined,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.business_name.length === 0) {
      console.error("Business name can´t be empty");
      return;
    }

    if (formData.business_type != 1 && formData.business_type != 2) {
      console.error("Business type can only be 1 or 2");
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
      <TextInput
        id="business-name"
        name="business_name"
        placeholder="Business Name"
        value={FormData.business_name}
        onChange={handleChange}
      />
      <TextInput
        id="business-type"
        name="business_type"
        placeholder="Business Type"
        value={formData.business_type}
        onChange={handleChange}
      />
      <FormButton text="Create Provider" />
    </Box>
  );
};

export default CreateProvider;
