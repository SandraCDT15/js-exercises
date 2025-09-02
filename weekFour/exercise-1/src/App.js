import { Box } from "@mui/material";
import Appbar from "./components/Appbar";
import BoxMain from "./components/BoxMain";
import DrawerElem from "./components/Drawer";
import { useMediaQuery, useTheme } from "@mui/material";

function App() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <Box>
      <Appbar />
      <DrawerElem isMobile={isMobile} />
      <BoxMain isMobile={isMobile} />
    </Box>
  );
}

export default App;
