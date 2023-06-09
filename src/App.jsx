import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home"));
const MapRotation = lazy(() => import("./pages/MapRotation"));
const CraftingRotation = lazy(() => import("./pages/CraftingRotation"));
const About = lazy(() => import("./pages/About"));
const PlayerInfo = lazy(() => import("./pages/PlayerInfo"));
// todo: finish lazyloading the components

function App() {
  const location = useLocation();

  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      data-theme={theme}
      className="flex flex-col min-h-screen transition-all duration-500 ease-in-out App"
    >
      <GlobalStyle />
      <Nav />
      <div className="flex-grow mt-16">
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loading />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" exact element={<Home />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/rotation/map" exact element={<MapRotation />} />
              <Route
                path="/rotation/crafting"
                exact
                element={<CraftingRotation />}
              />
              <Route path="/player-info" exact element={<PlayerInfo />} />
              <Route path="/about" exact element={<About />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;
