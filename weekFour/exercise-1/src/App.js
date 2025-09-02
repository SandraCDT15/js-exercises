import { Box } from "@mui/material";
import Appbar from "./components/Appbar";
import BoxMain from "./components/BoxMain";
import DrawerElem from "./components/Drawer";
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

  const [open, setOpen] = useState(!isMobile);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Appbar isMobile={isMobile} onMenuClick={toggleDrawer} />
      <DrawerElem isMobile={isMobile} open={open} onClose={toggleDrawer} />
      <BoxMain isMobile={isMobile} />
    </Box>
  );
}

export default App;
