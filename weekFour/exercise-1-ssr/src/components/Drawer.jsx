import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

const DrawerElm = () => {
  const DrawerList = (
    <Box>
      <List>
        {["Dashboard", "User", "Settings"].map((text) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        ;
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <Toolbar />
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerElm;
