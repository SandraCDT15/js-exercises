"use client";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const CardElm = ({ title, price, image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300, width: "auto" }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography>A little description of the product.</Typography>
          <Typography sx={{ fontWeight: "bold" }}>${price}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardElm;
