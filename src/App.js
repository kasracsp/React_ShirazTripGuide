import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ScrollToTop from "./shared/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
