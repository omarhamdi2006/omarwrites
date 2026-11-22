import "./App.css";
import HelloPage from "./HelloPage";
import BlogHome from "./BlogHome";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/home" element={<BlogHome />} />
        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
