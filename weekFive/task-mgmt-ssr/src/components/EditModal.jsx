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

const EditModal = ({ itemName, openEdit, close, handleSave }) => {
  const [name, setName] = useState(itemName);

  return (
    <Box>
      <Modal open={openEdit} onClose={close}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Name
          </Typography>
          <TextInput
            id={`edit-${itemName}`}
            name={`edit${itemName}`}
            placeholder="Edit Name"
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
              onClick={() => {
                setName(itemName);
                close();
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{ width: "30%" }}
              variant="contained"
              onClick={() => handleSave(name)}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditModal;
