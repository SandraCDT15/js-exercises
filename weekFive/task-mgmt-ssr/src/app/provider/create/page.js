"use client";

import { createProvider } from "@/_lib/api";
import FormButton from "@/components/FormButton";
import NameInput from "@/components/NameInput";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const CreateProvider = () => {
  const [formData, setFormData] = useState({
    bussinesName: "",
    bussinesType: undefined,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.bussinesName.length === 0) {
      console.error("Bussines name can´t be empty");
      return;
    }

    if (formData.bussinesType != 1 && formData.bussinesType != 2) {
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
        name="bussinesName"
        placeholder="Bussines Name"
        value={FormData.bussinesName}
        onChange={handleChange}
      />
      <NameInput
        id="bussines-type"
        name="bussinesType"
        placeholder="Bussines Type"
        value={formData.bussinesType}
        onChange={handleChange}
      />
      <FormButton text="Create Provider" />
    </Box>
  );
};

export default CreateProvider;
