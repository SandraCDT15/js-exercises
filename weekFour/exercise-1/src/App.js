import { Box } from "@mui/material";
import Appbar from "./components/Appbar";
import BoxMain from "./components/BoxMain";
import DrawerElem from "./components/Drawer";

function App() {
  return (
    <Box>
      <Appbar />
      <DrawerElem />
      <BoxMain />
    </Box>
  );
}

export default App;
