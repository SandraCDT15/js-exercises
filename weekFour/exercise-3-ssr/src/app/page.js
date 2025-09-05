"use client";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Appbar from "@/components/Appbar";
import MainBox from "@/components/MainBox";
import DrawerElm from "@/components/Drawer";
import ProductsList from "@/components/Products";

export default function Home() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Appbar isMobile={isMobile} onMenuClick={toggleDrawer} />
      <DrawerElm isMobile={isMobile} open={open} onClose={toggleDrawer} />
      {/* <MainBox isMobile={isMobile} />*/}
      <ProductsList isMobile={isMobile} />
    </div>
  );
}
