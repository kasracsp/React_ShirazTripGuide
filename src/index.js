import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cla0soif248np01rt2nn64raj/master",
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
