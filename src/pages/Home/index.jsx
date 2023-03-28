import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

// Page components
import NewsSection from "./components/NewsSection";

import ScrollTop from "../../components/ScrollTop";

const Home = () => {
  return (
    <>
      <ScrollTop />
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <NewsSection />
      </motion.div>
    </>
  );
};

export default Home;
