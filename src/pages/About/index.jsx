import React from "react";

// Styles
import NewsStyles from "../Home/styles/NewsStyles";
import AboutStyles from "./styles/AboutStyles";

// images
import apex from "../../img/apex-legends-logo.png";

// hooks
import { useScroll } from "../../components/UseScroll";
import { useSelector } from "react-redux";

// Animations
import { pageAnimation, scrollReveal } from "../../animation";
import { motion } from "framer-motion";

const About = () => {
  const [element, controls] = useScroll();
  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="items-center justify-between block px-10 py-5 text-center lg:flex "
    >
      <NewsStyles.Description>
        <h2 className={` pb-2 ${theme === "light" ? "text-gray-600" : ""}`}>
          About the <span>Game</span>
        </h2>
        <AboutStyles.Cards>
          <AboutStyles.P className="w-[70%] text-center">
            <span>Apex Legends</span> is a free-to-play battle royale video game
            developed by Respawn Entertainment and published by Electronic Arts.
            It was released in February 2019 for Microsoft Windows, Xbox One,
            and PlayStation 4. The game is set in the fictional Frontier
            universe and features squad-based gameplay with up to three players
            per team. Each player selects a character with unique abilities, and
            teams compete to be the last ones standing among 60 players on a
            single map. Apex Legends has received positive reviews for its
            fast-paced gameplay, innovative mechanics, and colorful graphics. It
            has become a popular game for both casual and competitive players,
            with regular updates and new content being added to the game.
          </AboutStyles.P>
          <AboutStyles.P
            className={`w-[70%] text-center ${
              theme === "light" ? "text-gray-600" : ""
            }`}
          >
            Its new season <span>Arsenal</span> was released on May 9th of 2023
            and introduced a new legend, <span>Ballistic</span>. It also came
            with weapon and legend balancing and a new ping system.
          </AboutStyles.P>
        </AboutStyles.Cards>
      </NewsStyles.Description>
      <NewsStyles.Image>
        <AboutStyles.IMG src={apex} alt="" />
      </NewsStyles.Image>
      <div style={{ height: "40px" }}></div>
    </motion.div>
  );
};

export default About;
