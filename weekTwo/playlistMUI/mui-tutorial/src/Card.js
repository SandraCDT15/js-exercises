import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardElem = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="/peques.jpg"
          alt="three dogs"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Joy, Oso y Scooby
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Scooby is 6 years old, he is Joy's and Oso's father. Oso is 4 years
            old and Joy is 3 years old. They love to beg for food and go on
            walks.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="primary">
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardElem;
