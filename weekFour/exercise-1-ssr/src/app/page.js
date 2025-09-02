import Appbar from "@/components/Appbar";
import DrawerElm from "@/components/Drawer";
import MainBox from "@/components/MainBox";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Appbar />
      <DrawerElm />
      <MainBox />
    </Box>
  );
}
