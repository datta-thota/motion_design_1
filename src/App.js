import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import NikeShoeShowcase from "./components/shoe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/nike" element={<NikeShoeShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;
