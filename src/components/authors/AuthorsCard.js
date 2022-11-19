import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const AuthorsCard = ({ name, career, slug, posts, thumb }) => {
  return (
    <Card
      sx={{
        maxWidth: "360px",
        m: "0 auto",
        "& img": {
          transition:'400ms',
          filter:'grayscale(20%)'
        },
        "&:hover img": {
          filter:'grayscale(0%)'
        },
        "&:hover":{
          boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 34%), 0px 1px 3px 0px rgb(0 0 0 / 32%)",
        }
      }}
    >
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
        <Button
          component={Link}
          to={`/author/${slug}`}
          variant="outlined"
          sx={{ width: "100%" }}
        >
          مشاهده صفحه نویسنده
        </Button>
      </CardActions>
    </Card>
  );
};

export default AuthorsCard;
