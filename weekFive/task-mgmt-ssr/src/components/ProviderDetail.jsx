"use client";
import { Box, Button } from "@mui/material";
import TextInput from "./TextInput";
import { useState } from "react";
import { deleteProvider, updateProvider } from "@/_lib/api";
import ConfirmDelete from "./ConfirmDelete";
import EditModal from "./EditModal";

const ProviderDetail = ({ provider }) => {
  const date = new Date(provider.date_created);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleSave = async (name) => {
    try {
      const result = await updateProvider(provider.id, name);
      console.log("Provider updated", result);
    } catch (err) {
      console.error(err.message);
    }

    setOpenEdit(false);
  };

  const handleDelete = async () => {
    try {
      const result = await deleteProvider(provider.id);
      console.log("Provider deleted", result);
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
          id="provider-id"
          name="providerId"
          placeholder="Provider ID"
          value={provider.id}
        ></TextInput>
        <TextInput
          id="provider-name"
          name="providerName"
          placeholder="Provider Name"
          value={provider.name}
        ></TextInput>
        <TextInput
          id="provider-date"
          name="providerDate"
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
          itemName={provider.name}
          openEdit={openEdit}
          close={() => setOpenEdit(false)}
          handleSave={handleSave}
        />
        <ConfirmDelete
          itemType="provider"
          itemName={provider.name}
          open={openDelete}
          close={() => setOpenDelete(false)}
          handleDelete={handleDelete}
        />
      </Box>
    </div>
  );
};

export default ProviderDetail;
