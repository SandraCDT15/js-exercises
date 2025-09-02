"use client";

import { Box, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "./Drawer";

const MainBox = () => {
  return (
    <div>
      <Box component="main" sx={{ marginLeft: `${drawerWidth}px`, p: "3px" }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam
          nostrum dicta incidunt reprehenderit sit dolorem a totam perferendis,
          ipsum quia molestias exercitationem est qui ea, saepe, nesciunt at
          dolores?
        </Typography>
      </Box>
    </div>
  );
};

export default MainBox;
