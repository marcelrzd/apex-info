import React, { useEffect } from "react";
// styles
import { Hide } from "../../../styles";
import NewsStyles from "../styles/NewsStyles";
// animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, pageAnimation } from "../../../animation";
// import Carousel from "@itseasy21/react-elastic-carousel";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../../actions/newsAction";
import Carousel from "./Carousel";

const NewsSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  //   Get data
  const { news } = useSelector((state) => state.news);

  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

  // TODO: find a better option to carousel
  return (
    <>
      <NewsStyles.StyledTitle variants={fade}>
        Latest News
      </NewsStyles.StyledTitle>
      {news.length ? (
        <div className="max-w-[1400px] w-full m-auto py-16 px-4">
          <Carousel autoSlide={false} autoSlideInterval={8000}>
            {news.map((item) => (
              <img src={item.img} alt="" />
              // <NewsStyles.About
              //   key={item.link}
              //   variants={pageAnimation}
              //   initial="hidden"
              //   animate="show"
              //   exit="exit"
              // >
              //   <NewsStyles.Description>
              //     <motion.div>
              //       <Hide>
              //         <motion.h2 variants={titleAnim}>{item.title}</motion.h2>
              //       </Hide>
              //     </motion.div>
              //     <motion.p variants={fade}>{item.short_desc}</motion.p>
              //     <NewsStyles.MoreButton
              //       href={item.link}
              //       target="_blank"
              //       variants={fade}
              //       className={`${theme === "dark" ? "text-white" : ""}`}
              //     >
              //       More
              //     </NewsStyles.MoreButton>
              //   </NewsStyles.Description>
              //   <NewsStyles.Image>
              //     <motion.img src={item.img} alt="" variants={photoAnim} />
              //   </NewsStyles.Image>
              // </NewsStyles.About>
            ))}
          </Carousel>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewsSection;
