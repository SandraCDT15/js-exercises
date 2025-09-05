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
          //   width: { xs: 250, sm: 350, md: "90%", lg: 350, xl: 450 },
          width: "85%",
          height: "100%",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
          margin: "0 auto",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={6}
      >
        <CardMedia
          sx={{
            width: "80%",
            height: 200,
            objectFit: "contain",
            margin: " 5% 10%",
            display: "block",
          }}
          component="img"
          image={image}
          title={title}
        />
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
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
        </CardContent>
        <CardActions sx={{ marginLeft: 1, marginBottom: 2 }}>
          <Button startIcon={<AddShoppingCartIcon />} variant="contained">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardElem;
