import { Box, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "./Drawer";

const BoxMain = () => {
  return (
    <Box component="main" sx={{ marginLeft: `${drawerWidth}px`, p: "3px" }}>
      <Toolbar />
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aperiam
        eaque corrupti expedita ea non magni ducimus dignissimos repellat,
        nulla, eum at iure veritatis possimus beatae quos mollitia similique
        eligendi!
      </Typography>
    </Box>
  );
};

export default BoxMain;
