import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { RawOff } from "@mui/icons-material";

const ModalElem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left={"50%"}>
          <Typography>This is a Modal</Typography>
          <Button variant="contained" on onClick={() => setOpen(false)}>
            Click Me
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalElem;
