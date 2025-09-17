"use client";
import { useState } from "react";
import Appbar from "@/components/Appbar";
import DrawerElm from "@/components/Drawer";
import MainBox from "./MainBox";

const ClientLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Appbar onMenuClick={toggleDrawer} />
      <DrawerElm open={open} onClose={toggleDrawer} />
      <MainBox>{children}</MainBox>
    </div>
  );
};

export default ClientLayout;
