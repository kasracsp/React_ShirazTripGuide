import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../graphql/Queries";
import Layout from "../components/layout/Layout";
import { Card, CardMedia, Container, Grid } from "@mui/material";
import Cards from "../components/authors/Cards";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS);
  console.log({ loading, data, error });
  if (loading) return <h1>در حال بارگذاری...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <Layout>
      <Container maxWidth="xl" sx={{minHeight:"75vh"}}>
        <Grid container spacing={2} mt={4}  >
          {data.authors.map((author) => (
            <Grid item xs={12} sm={6} md={4} key={author.id}>
              <Cards {...author} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Authors;
