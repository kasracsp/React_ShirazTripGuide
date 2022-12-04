import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { GET_USER } from "./graphql/Queries";
import Article from "./pages/Article";
import Author from "./pages/Author";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import { saveUser } from "./redux/user/userActions";
import ScrollToTop from "./shared/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const [getUser, { loading, data }] = useLazyQuery(GET_USER);
  useEffect(() => {
    const localState = JSON.parse(window.localStorage.getItem("user"));
    if (localState) {
      getUser({
        variables: {
          email: localState.email,
        },
      });
    }
  }, []);
  useEffect(() => {
    if (data && data.customer) {
      dispatch(saveUser(data.customer));
    }
  }, [loading, data]);
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/author/:slug" element={<Author />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
