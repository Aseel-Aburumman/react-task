import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
