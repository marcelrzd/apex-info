import React, { useEffect } from "react";
import home1 from "../../../img/home1.png";
// styles
import { About, Description, Hide, Image } from "../../../styles";
// animation
import { motion } from "framer-motion";
import { titelAnim, fade, photoAnim } from "../../../animation";

// components
import Wave from "../../../components/Wave";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../../actions/newsAction";

const AboutSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  //   Get data
  // todo: see why this is being called twice
  const { news } = useSelector((state) => state.news);
  console.log(news[0]);

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titelAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titelAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titelAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={home1}
          alt=""
          variants={photoAnim}
          // initial="hidden"
          // animate="show"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
