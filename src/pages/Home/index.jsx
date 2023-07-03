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
        className="mt-[-8%] sm:mt-[-8%] lg:mt-[-6%] xl:mt-[-5%]"
      >
        <NewsSection />
      </motion.div>
    </>
  );
};

export default Home;
