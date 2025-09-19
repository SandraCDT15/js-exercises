"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import TextInput from "./TextInput";
import { useState } from "react";
import { updateProduct } from "@/_lib/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const EditModal = ({ product }) => {
  const date = new Date(product.date_created);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(product.name);

  const handleSave = async () => {
    try {
      const result = await updateProduct(product.id, name);
      console.log("Provider updated", result);
    } catch (err) {
      console.error(err.message);
    }

    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* id, name, placeholder, value, onChange */}
        <TextInput
          id="product-id"
          name="productId"
          placeholder="Product ID"
          value={product.id}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        ></TextInput>
        <TextInput
          id="product-name"
          name="productName"
          placeholder="Product Name"
          value={product.name}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        ></TextInput>
        <TextInput
          id="product-date"
          name="productDate"
          placeholder="Creation Date"
          value={date.toLocaleString()}
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        ></TextInput>
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{ width: { xs: 250, md: 300, lg: 350 }, marginTop: 3 }}
        >
          Edit
        </Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit Product Name
            </Typography>
            <TextInput
              id="edit-product-name"
              name="editProductName"
              placeholder="Edit Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextInput>
            <Button
              sx={{ backgroundColor: "red", width: "30%", margin: "8px 0" }}
              variant="contained"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              sx={{ width: "30%", margin: "8px 0" }}
              variant="contained"
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default EditModal;
