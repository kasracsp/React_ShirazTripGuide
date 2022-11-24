import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import HomeCard from "../components/home/HomeCard";
import Layout from "../components/layout/Layout";
import HomeSkeleton from "../components/skeleton/HomeSkeleton";
import { GET_HOME } from "../graphql/Queries";

const Home = () => {
  const { loading, data, error } = useQuery(GET_HOME);

  if (error) return <h1>{error.message}</h1>;

  return (
    <Layout>
      <Container maxWidth="xl">
        {loading ? (
          <Grid container spacing={2} mt={4}>
            {[...Array(6).keys()].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <HomeSkeleton />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2} mt={4}>
            {data.posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <HomeCard {...post} showAuthor />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
