import { Box, Grid, Toolbar } from "@mui/material";
import { drawerWidth } from "./Drawer";
import CardElem from "./Card";
import { getProducts } from "@/_lib/api";

const ProductsList = async () => {
  const products = await getProducts();

  return (
    <div>
      <Box>
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
            >
              <CardElem title={p.name} id={p.id} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsList;
