import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { flushSync } from "react-dom";

const MenuElem = () => {
  const [anchorElem, setAnchorElem] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorElem(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorElem(e.currentTarget);
    setOpen(true);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Menu
      </Button>
      <Menu anchorEl={anchorElem} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MenuElem;
