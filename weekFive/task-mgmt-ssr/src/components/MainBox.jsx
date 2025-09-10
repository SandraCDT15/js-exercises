import { Box, Toolbar } from "@mui/material";
import { drawerWidth } from "./Drawer";

const MainBox = ({ isMobile }) => {
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
        {" "}
        {console.log(isMobile)}
        <Toolbar />
      </Box>
    </div>
  );
};

export default MainBox;
