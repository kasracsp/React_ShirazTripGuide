import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../components/layout/Layout";
import { GET_ARTICLE } from "../graphql/Queries";
import sanitizeHtml from "sanitize-html";

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_ARTICLE, {
    variables: { slug },
  });
  console.log(slug, { loading, data, error });
  if (loading) return <h1>در حال بارگذاری...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <Layout>
      <Container maxWidth="lg">
        <Stack sx={{ mt: 4 }} spacing={4}>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">{data.post.title}</Typography>
            <Tooltip title="بازگشت">
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon color="primary" />
              </IconButton>
            </Tooltip>
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: { xs: "200px", sm: "300px", md: "400px" },
              borderRadius: 3,
              overflow: "hidden",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            }}
          >
            <img src={data.post.thumb.url} alt={data.post.slug} />
          </Box>
          <Stack
            paddingRight={4}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              src={data.post.author.thumb.url}
              alt={data.post.author.slug}
            />
            <Stack mr={2}>
              <Button
                component={Link}
                to="/home"
                disableRipple
                sx={{
                  padding: 0,
                  justifyContent: "flex-start",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "primary.main",
                  },
                }}
              >
                {data.post.author.name}
              </Button>
              <Typography variant="caption" color="text.secondary">
                {data.post.author.career}
              </Typography>
            </Stack>
          </Stack>
          <Stack px="2rem">
            <div
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.post.content.html) }}
            ></div>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Article;
