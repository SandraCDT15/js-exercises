import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const CardElem = ({ title, id }) => {
  return (
    <div>
      <Card
        sx={{
          width: 250,
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
            backgroundColor: "#444",
          }}
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

          <Typography
            sx={{ fontWeight: "bold", color: "#3d3d3dff", marginTop: 1 }}
          >
            id:{id}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginLeft: 1, marginBottom: 2 }}>
          <Button
            aria-label="edit"
            href={`./products/${id}`}
            variant="outlined"
            startIcon={<RemoveRedEyeIcon />}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardElem;
