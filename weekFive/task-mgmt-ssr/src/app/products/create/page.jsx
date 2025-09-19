"use client";

import { createProduct } from "@/_lib/api";
import FormButton from "@/components/FormButton";
import TextInput from "@/components/TextInput";
import { Box } from "@mui/material";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    //logic to make the request
    try {
      const result = await createProduct(
        formData.productName,
        formData.productCategory
      );
      console.log(result);
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
      <TextInput
        id="product-name"
        name="productName"
        placeholder="Product Name"
        value={FormData.productName}
        onChange={handleChange}
      />
      <TextInput
        id="produtc-category"
        name="productCategory"
        placeholder="Product Category"
        value={formData.productCategory}
        onChange={handleChange}
      />
      <FormButton text="Create Product" />
    </Box>
  );
};

export default page;
