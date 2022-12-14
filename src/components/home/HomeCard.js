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

const HomeCard = ({ title, slug, thumb, author, showAuthor = false }) => {
  return (
    <Card
      sx={{
        maxWidth: "360px",
        m: "0 auto",
        "&:hover": {
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgb(0 0 0 / 34%), 0px 1px 3px 0px rgb(0 0 0 / 32%)",
        },
      }}
    >
      {showAuthor && (
        <CardHeader
          avatar={<Avatar src={author.thumb.url} alt={author.slug} />}
          title={
            <Typography variant="p" color="text.primary" sx={{ mr: 1 }}>
              {author.name}
            </Typography>
          }
        />
      )}
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

export default HomeCard;
