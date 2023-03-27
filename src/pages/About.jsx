import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// Page components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import ScrollTop from "../components/ScrollTop";

const About = () => {
  return (
    <>
      <ScrollTop />
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutSection />
        <ServicesSection />
        <FaqSection />
      </motion.div>
    </>
  );
};

export default About;
