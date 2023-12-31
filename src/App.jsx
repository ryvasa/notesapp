import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/archive" element={<Home />} />
          <Route path="/notes/active" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/notes/:id" element={<Note />} />
          <Route path="/notes/archived" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
