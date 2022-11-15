import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({ name, career, slug, posts, thumb }) => {
  return (
    <Card sx={{ maxWidth: "360px", m: "0 auto" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={thumb.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {career} - {posts.length} مقاله
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Button component={Link} to={`/author/${slug}`} variant="outlined" sx={{ width: "100%" }}>
          مشاهده صفحه نویسنده
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
