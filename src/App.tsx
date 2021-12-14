import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";

import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [border, setBorder] = useState<boolean>(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 20) {
        setBorder(true);
      } else {
        setBorder(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <Router>
      <Navbar border={border} />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
