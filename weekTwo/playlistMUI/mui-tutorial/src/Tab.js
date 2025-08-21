import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";

const TabElem = () => {
  const [value, setValue] = useState();
  return (
    <Tabs
      indicatorColor="secondary"
      textColor="secondary"
      value={value}
      onChange={(e, val) => setValue(val)}
    >
      <Tab label="First" />
      <Tab label="Second" />
      <Tab label="Third" />
    </Tabs>
  );
};

export default TabElem;
