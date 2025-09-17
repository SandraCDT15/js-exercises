import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import useWindowSize from "@/_hooks/windowSize";

export const drawerWidth = 200;

const DrawerElm = ({ open, onClose }) => {
  const isMobile = useWindowSize() < 600;

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
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={onClose}
        anchor="left"
        sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
      >
        <Toolbar />
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerElm;
