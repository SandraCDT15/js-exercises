import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CardElem = ({ title, price, image, desc }) => {
  return (
    <div>
      <Card
        sx={{
          width: { xs: 250, sm: 350, md: 400, lg: 350, xl: 450 },
          transition: "0.3s",
          "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
        }}
        elevation={6}
      >
        <CardMedia
          sx={{
            height: 200,
            objectFit: "contain",
            margin: "5% auto ",
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
            {price}
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

export default CardElem;
