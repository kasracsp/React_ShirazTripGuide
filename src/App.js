import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
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
      </Routes>
    </div>
  );
}

export default App;
