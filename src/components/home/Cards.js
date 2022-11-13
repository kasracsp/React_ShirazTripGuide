import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, slug, thumb, author }) => {
  return (
    <Card sx={{ maxWidth: "360px", m: "0 auto" }}>
      <CardHeader
        avatar={<Avatar src={author.thumb.url} alt={author.slug} />}
        title={
          <Typography variant="p" color="text.primary" sx={{ mr: 1 }}>
            {author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        width="100%"
        image={thumb.url}
        loading="lazy"
        alt={slug}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary" noWrap>
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ mx: 1 }} />
      <CardActions>
        <Button
          sx={{ width: "100%" }}
          component={Link}
          to={`/article/${slug}`}
          variant="outlined"
        >
          مطالعه مقاله
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
