"use client";

import { Box, Grid } from "@mui/material";
import CardElm from "./Card";

const ProductsList = () => {
  const products = [
    {
      id: 0,
      title: "Product 1",
      price: 5,
      image: "/assets/logo192.png",
      desc: "This is the first product of the list",
    },
    {
      id: 1,
      title: "Product 2",
      price: 3,
      image: "/assets/logo192.png",
      desc: "This is the second product of the list",
    },
    {
      id: 2,
      title: "Product 1",
      price: 5,
      image: "/assets/logo192.png",
      desc: "This is the third product of the list",
    },
    {
      id: 3,
      title: "Product 1",
      price: 5,
      image: "/assets/logo192.png",
      desc: "This is the fourth product of the list",
    },
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          sx={{ justifyContent: "center", margin: "3%" }}
          container
          size={12}
          rowSpacing={5}
        >
          {products.map((p) => (
            <Grid
              sx={{ justifyItems: "center" }}
              key={p.id}
              size={{ xs: 12, md: 6, lg: 4 }}
            >
              <CardElm
                key={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
                desc={p.desc}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsList;
