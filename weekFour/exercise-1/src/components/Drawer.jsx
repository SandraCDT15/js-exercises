import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

export const drawerWidth = 200;

const DrawerElem = () => {
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
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ "& .MuiDrawer-paper": { width: `${drawerWidth}px` } }}
      >
        <Toolbar />
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerElem;
