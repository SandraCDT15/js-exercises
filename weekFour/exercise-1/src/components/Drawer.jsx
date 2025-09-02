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

const DrawerElem = ({ isMobile, open, onClose }) => {
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
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={onClose}
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
