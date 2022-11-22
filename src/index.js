import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./styles/index.css";
import "./styles/fonts.css";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cla0soif248np01rt2nn64raj/master",
  cache: new InMemoryCache(),
});

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>
);
