"use client";

import { useState } from "react";
import Appbar from "@/components/Appbar";
import DrawerElm from "@/components/Drawer";
import MainBox from "@/components/MainBox";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function Home() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Appbar isMobile={isMobile} onMenuClick={toggleDrawer} />
      <DrawerElm isMobile={isMobile} open={open} onClose={toggleDrawer} />
      <MainBox isMobile={isMobile} />
    </Box>
  );
}
