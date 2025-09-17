"use client";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Appbar from "@/components/Appbar";
import DrawerElm from "@/components/Drawer";
import MainBox from "./MainBox";

const ClientLayout = ({ children }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Appbar isMobile={isMobile} onMenuClick={toggleDrawer} />
      <DrawerElm isMobile={isMobile} open={open} onClose={toggleDrawer} />
      <MainBox isMobile={isMobile}>{children}</MainBox>
    </div>
  );
};

export default ClientLayout;
