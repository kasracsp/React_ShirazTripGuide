import React from "react";
import { useQuery } from "@apollo/client";
import {
  Box,
  Stack,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import Layout from "../components/layout/Layout";
import { GET_AUTHOR } from "../graphql/Queries";
import { useNavigate, useParams } from "react-router-dom";
import HomeCard from "../components/home/HomeCard";

const dataFormatter = new Intl.DateTimeFormat("fa-IR", {
  dateStyle: "medium",
});

const Author = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: {
      slug,
    },
  });
  console.log(slug, { loading, data, error });

  if (loading) return <h1>در حال بارگذاری...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <Layout>
      <Container maxWidth="xl">
        <Stack sx={{ mt: 4 }} spacing={4}>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">{data.author.name}</Typography>
            <Tooltip title="بازگشت">
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon color="primary" />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack
            spacing={4}
            width="100%"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
                m:{xs: "0 auto",md:0},
                aspectRatio: "1",
                borderRadius: 3,
                overflow: "hidden",
                "& img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
            >
              <img src={data.author.thumb.url} alt={data.author.slug} />
            </Box>
            <Stack sx={{px:{xs:2,md:4}}}>
              <Stack spacing={2}>
                <Typography variant="h6" color="text.primary">
                  {data.author.career}
                </Typography>
                <Typography>
                  متولد {dataFormatter.format(Date.parse(data.author.birthday))}
                </Typography>
                <Typography>ساکن {data.author.city}</Typography>
              </Stack>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.author.description.html),
                }}
              ></div>
              <Typography>
                تا کنون {data.author.posts.length} مقاله برای سایت راهنمای
                گردشگری شیراز نوشتم.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack mt={8}>
          <Typography variant="h6" color="primary">
            مقالات
          </Typography>
        </Stack>
        <Grid container spacing={2} mt={4}>
          {data.author.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <HomeCard {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Author;
