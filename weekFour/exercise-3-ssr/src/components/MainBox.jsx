import { Box, Toolbar } from "@mui/material";
import { drawerWidth } from "./Drawer";
import ProductsList from "./Products";

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
        <ProductsList />
      </Box>
    </div>
  );
};

export default MainBox;
