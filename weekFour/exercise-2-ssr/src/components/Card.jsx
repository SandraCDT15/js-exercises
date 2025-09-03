// "use client";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CardElm = ({ title, price, image, desc }) => {
  return (
    <div>
      <Card>
        <CardMedia
          sx={{
            height: { xs: 200, sm: 300, md: 350, lg: 350, xl: 450 },
            width: { xs: 200, sm: 300, md: 350, lg: 350, xl: 450 },
            objectFit: "contain",
            margin: "0 auto",
            display: "block",
          }}
          component="img"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "bold" }}
            variant="h6"
          >
            {title}
          </Typography>
          <Typography sx={{ marginTop: 1, color: "#1f1d1dff" }}>
            {desc}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "#3d3d3dff", marginTop: 1 }}
          >
            ${price}
          </Typography>
          <CardActions sx={{ padding: 0, marginTop: 2 }}>
            <Button
              sx={{ marginLeft: 0 }}
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
            >
              Add to Cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardElm;
