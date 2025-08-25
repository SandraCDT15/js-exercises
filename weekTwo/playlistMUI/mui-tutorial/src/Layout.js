import React from "react";
import { Grid } from "@mui/material";
import CardElem from "./Card";
const Layout = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={2} md={2.4} xs={3}>
          <CardElem />
        </Grid>
        <Grid item lg={2} md={2.4} xs={3}>
          <CardElem />
        </Grid>
        <Grid item lg={2} md={2.4} xs={3}>
          <CardElem />
        </Grid>
        <Grid item lg={2} md={2.4} xs={3}>
          <CardElem />
        </Grid>
        <Grid item lg={2} md={2.4} xs={3}>
          <CardElem />
        </Grid>
        <Grid item lg={2} md={2.4} xs={3}>
          <CardElem />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
