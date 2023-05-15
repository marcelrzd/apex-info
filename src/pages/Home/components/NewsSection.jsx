import React, { useEffect } from "react";
// styles
import { Hide } from "../../../styles";
import NewsStyles from "../styles/NewsStyles";
// animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, pageAnimation } from "../../../animation";
import Carousel from "@itseasy21/react-elastic-carousel";
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

  // TODO: find better option to carousel
  return (
    <>
      <NewsStyles.StyledTitle variants={fade}>
        Latest News
      </NewsStyles.StyledTitle>
      {news.length ? (
        <NewsStyles.CarouselDiv>
          {/* <Wave /> */}
          <Carousel enableSwipe={true}>
            {news.slice(0, 5).map((item) => (
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
                      <motion.h2 variants={titleAnim}>{item.title}</motion.h2>
                    </Hide>
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
                  <motion.img src={item.img} alt="" variants={photoAnim} />
                </NewsStyles.Image>
              </NewsStyles.About>
            ))}
          </Carousel>
        </NewsStyles.CarouselDiv>
      ) : (
        ""
      )}
    </>
  );
};

export default NewsSection;
