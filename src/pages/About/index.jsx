import React from "react";

// Styles
import NewsStyles from "../Home/styles/NewsStyles";
import AboutStyles from "./styles/AboutStyles";

// images
import apex from "../../img/apex-legends-logo.png";

// hooks
import { useScroll } from "../../components/UseScroll";

// Animations
import { scrollReveal } from "../../animation";

const MapRotation = () => {
  const [element, controls] = useScroll();

  return (
    <AboutStyles.MapInfo
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <NewsStyles.Description>
        <h2>
          About the <span>Game</span>
        </h2>
        <AboutStyles.Cards>
          <AboutStyles.P>
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
          <AboutStyles.P>
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
    </AboutStyles.MapInfo>
  );
};

export default MapRotation;
