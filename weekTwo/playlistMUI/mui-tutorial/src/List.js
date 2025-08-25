import React, { useState } from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ListElem = () => {
  const arr = ["First", "Second", "Third", "Fourth", "Fifth"];
  const [open, setOpen] = useState(false);
  const manageClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <List>
        <ListItem>
          <ListItemButton onClick={() => setOpen(true)}>
            <ListItemText primary="Expand List" />
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={open}>
        <List sx={{ marginLeft: 25 }}>
          {arr.map((listItem) => (
            <ListItem divider>
              <ListItemButton onClick={manageClose}>
                <ListItemText primary={listItem} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default ListElem;
