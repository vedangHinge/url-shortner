import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UrlShortner from "./components/UrlShortner";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" element={<UrlShortner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
