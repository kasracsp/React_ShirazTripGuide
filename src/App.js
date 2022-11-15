import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Author from "./pages/Author";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import ScrollToTop from "./shared/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/article/:slug" element={<Article/>} />
        <Route path="/authors" element={<Authors/>} />
        <Route path="/author/:slug" element={<Author/>} />
      </Routes>
    </div>
  );
}

export default App;
