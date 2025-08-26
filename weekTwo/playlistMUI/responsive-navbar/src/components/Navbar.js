import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Navbar = ({ links }) => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar
        sx={{
          backgroundImage:
            "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 74, 1) 50%, rgba(69, 69, 252, 1) 100%)",
        }}
      >
        <Toolbar>
          <Grid
            sx={{ justifyContent: "center", alignItems: "center" }}
            container
          >
            <Grid size={{ xs: 2 }}>
              <Typography>
                <AddShoppingCartIcon />
              </Typography>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, i) => (
                  <Tab key={i} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid size={{ xs: 1 }} />
            <Grid size={{ xs: 3 }}>
              <Box display="flex">
                <Button
                  sx={{
                    marginLeft: "auto",
                    backgroundColor: "rgba(131, 58, 180, 1)",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    marginLeft: 1,
                    backgroundColor: "rgba(131, 58, 180, 1)",
                  }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
