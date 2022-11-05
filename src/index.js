import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./styles/index.css";
import "./styles/fonts.css";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cla0soif248np01rt2nn64raj/master",
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
