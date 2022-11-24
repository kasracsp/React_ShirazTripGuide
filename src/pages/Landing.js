import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Carrousel from "../components/landing/Carrousel";
import { useQuery } from "@apollo/client";
import { GET_POSTS_LANDING } from "../graphql/Queries";
import Overlay from "../components/landing/Overlay";
import LoadingPage from "../components/skeleton/LoadingPage";

const Landing = () => {
  const { loading, data, error } = useQuery(GET_POSTS_LANDING);
  if (loading) return <LoadingPage />;
  if (error) return <h1>{error.message}</h1>;
  return <Carrousel posts={data.posts} />;
};

export default Landing;
