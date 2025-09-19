"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import TextInput from "./TextInput";
import { useState } from "react";
import { deleteProduct, updateProduct } from "@/_lib/api";
import ConfirmDelete from "./ConfirmDelete";

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

const ProductsDetail = ({ product }) => {
  const date = new Date(product.date_created);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
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

  const handleDelete = async () => {
    try {
      const result = await deleteProduct(product.id);
      console.log("Product deleted", result);
    } catch (err) {
      console.error(err.message);
    }
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
          onClick={() => setOpenEdit(true)}
          sx={{ width: { xs: 250, md: 300, lg: 350 }, marginTop: 3 }}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          onClick={() => setOpenDelete(true)}
          sx={{
            width: { xs: 250, md: 300, lg: 350 },
            marginTop: 3,
            backgroundColor: "red",
          }}
        >
          Delete
        </Button>

        <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <Button
                sx={{ backgroundColor: "red", width: "30%" }}
                variant="contained"
                onClick={() => setOpenEdit(false)}
              >
                Cancel
              </Button>
              <Button
                sx={{ width: "30%" }}
                variant="contained"
                onClick={handleSave}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
        <ConfirmDelete
          itemType="product"
          itemName={product.name}
          open={openDelete}
          close={() => setOpenDelete(false)}
          handleDelete={handleDelete}
        />
      </Box>
    </div>
  );
};

export default ProductsDetail;
