"use client";

import { Box, Grid, Toolbar } from "@mui/material";

import { drawerWidth } from "./Drawer";

const ProductsList = ({ isMobile }) => {
  const products = [
    {
      id: 0,
      title: "CeraVe Gel Limpiador",
      price: "$289",
      image: "/assets/cerave.jpg",
      desc: "Gel Limpiador Espumoso Diario para Piel Mixta, Grasa o con Acné 473ml",
    },
    {
      id: 1,
      title: "Impresora Epson",
      price: "$3,487",
      image: "/assets/epson.jpg",
      desc: "Epson Ecotank Impresora Multifuncional a Color L3560, pantalla LCD.",
    },
    {
      id: 2,
      title: "Cámara Canon",
      price: "$12,999",
      image: "/assets/canon.jpg",
      desc: "Canon EOS R50 Cámara de vlogging sin Espejo (Negro) con Video 4K, detección.",
    },
    {
      id: 3,
      title: "Laptop Lenovo",
      price: "$14,699",
      image: "/assets/lenovo.jpg",
      desc: "Lenovo Laptop LOQ 15IAX9E | NVIDIA GeForce RTX 3050 6 GB | 15.6 FHD",
    },
    {
      id: 4,
      title: "Television Hisense",
      price: "$11,499",
      image: "/assets/hisense.jpg",
      desc: "Hisense Television A65N(último Modelo) Pantalla 75 Pulgadas, UHD 4K.",
    },
    {
      id: 5,
      title: "Xiaomi 14T Pro",
      price: "$11,166",
      image: "/assets/xiaomi.jpg",
      desc: "512GB, 12GB RAM, Pantalla AMOLED de 144Hz, HyperCharge de 120W.",
    },
  ];
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: `${isMobile ? "0" : drawerWidth}px`,
          p: 2,
          justifyItems: "center",
        }}
      >
        <Toolbar />
        <Grid
          sx={{ justifyItems: "center", margin: "3%", alignItems: "stretch" }}
          container
          size={12}
          rowSpacing={5}
        >
          {products.map((p) => (
            <Grid
              sx={{ justifyContent: "center", display: "flex" }}
              key={p.id}
              size={{ xs: 12, md: 6, lg: 4 }}
            ></Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsList;
