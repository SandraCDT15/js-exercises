"use client";
import { Box, Button } from "@mui/material";
import TextInput from "./TextInput";
import { useState } from "react";
import { deleteProduct, updateProduct } from "@/_lib/api";
import ConfirmDelete from "./ConfirmDelete";
import EditModal from "./EditModal";
import { useRouter } from "next/navigation";

const ProductDetail = ({ product }) => {
  const router = useRouter();
  const date = new Date(product.date_created);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleSave = async (name) => {
    try {
      const result = await updateProduct(product.id, name);
      router.refresh();
      console.log("Product updated", result);
    } catch (err) {
      console.error(err.message);
    }

    setOpenEdit(false);
  };

  const handleDelete = async () => {
    try {
      const result = await deleteProduct(product.id);
      router.push("/");
      console.log("Product deleted", result);
    } catch (err) {
      console.error(err.message);
    }
    setOpenDelete(false);
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
        <TextInput
          id="product-id"
          name="productId"
          placeholder="Product ID"
          value={product.id}
        ></TextInput>
        <TextInput
          id="product-name"
          name="productName"
          placeholder="Product Name"
          value={product.name}
        ></TextInput>
        <TextInput
          id="product-date"
          name="productDate"
          placeholder="Creation Date"
          value={date.toLocaleString()}
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

        <EditModal
          itemName={product.name}
          openEdit={openEdit}
          close={() => setOpenEdit(false)}
          handleSave={handleSave}
        />
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

export default ProductDetail;
