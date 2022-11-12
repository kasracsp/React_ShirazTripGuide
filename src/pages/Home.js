import { useQuery } from "@apollo/client";
import { Container, Grid } from "@mui/material";
import React from "react";
import Cards from "../components/home/Cards";
import Layout from "../components/layout/Layout";
import { GET_HOME } from "../graphql/Queries";

const Home = () => {
  const { loading, data, error } = useQuery(GET_HOME);
  console.log({ loading, data, error });

  if (loading) return <h1>در حال بارگذاری...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <Layout>
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={4}>
          {data.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Cards {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
