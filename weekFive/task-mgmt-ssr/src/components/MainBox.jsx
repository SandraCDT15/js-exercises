import { Box, Toolbar } from "@mui/material";
import { drawerWidth } from "./Drawer";
import useWindowSize from "@/_hooks/windowSize";

const MainBox = ({ children }) => {
  const isMobile = useWindowSize() < 600;
  return (
    <div>
      <Box
        component="main"
        sx={{
          marginLeft: `${isMobile ? "0" : drawerWidth}px`,
          p: "3px",
          justifyItems: "center",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </div>
  );
};

export default MainBox;
