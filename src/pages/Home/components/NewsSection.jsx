import React, { useEffect } from "react";
// styles
import { Hide } from "../../../styles";
import NewsStyles from "../styles/NewsStyles";
// animation
import { motion } from "framer-motion";
import { titelAnim, fade, photoAnim, pageAnimation } from "../../../animation";
// components
import Wave from "../../../components/Wave";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../../actions/newsAction";

const NewsSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  //   Get data
  const { news } = useSelector((state) => state.news);
  return (
    <>
      <NewsStyles.StyledTitle variants={fade}>
        Latest News
      </NewsStyles.StyledTitle>
      {news.length ? (
        <>
          {
            news.map((item) => (
              <NewsStyles.About
                key={item.link}
                variants={pageAnimation}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <NewsStyles.Description>
                  <motion.div>
                    <Hide>
                      <motion.h2 variants={titelAnim}>{item.title}</motion.h2>
                    </Hide>
                    {/* <Hide>
            <motion.h2 variants={titelAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titelAnim}>true</motion.h2>
          </Hide> */}
                  </motion.div>
                  <motion.p variants={fade}>{item.short_desc}</motion.p>
                  <NewsStyles.MoreButton
                    href={item.link}
                    target="_blank"
                    variants={fade}
                  >
                    More
                  </NewsStyles.MoreButton>
                </NewsStyles.Description>
                <NewsStyles.Image>
                  <motion.img
                    src={item.img}
                    alt=""
                    variants={photoAnim}
                    // initial="hidden"
                    // animate="show"
                  />
                </NewsStyles.Image>
                <Wave />
              </NewsStyles.About>
            ))[0]
          }
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default NewsSection;
