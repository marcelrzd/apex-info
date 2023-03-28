import React from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
