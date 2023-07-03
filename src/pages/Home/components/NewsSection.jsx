import React, { useEffect, useState } from "react";
// styles
import { Hide } from "../../../styles";
import NewsStyles from "../styles/NewsStyles";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

// animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, pageAnimation } from "../../../animation";
import Carousel from "@itseasy21/react-elastic-carousel";

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

  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

  // TODO: find a better option to carousel

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? news.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === news.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <NewsStyles.StyledTitle variants={fade}>
        Latest News
      </NewsStyles.StyledTitle>
      {news.length ? (
        <div className="max-w-[1400px] w-full m-auto py-16 px-4 relative group duration-500 transform sm:mt-[-4%] md:mt-10 md:mb-[-4%] lg:mt-[-5%] xl:mt-[-4%]">
          <motion.div
            className="flex items-center px-5 py-10"
            key={news[currentIndex].link}
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <NewsStyles.Description>
              <motion.div>
                <Hide>
                  <motion.h2 variants={titleAnim}>
                    {news[currentIndex].title}
                  </motion.h2>
                </Hide>
              </motion.div>
              <motion.p variants={fade}>
                {news[currentIndex].short_desc}
              </motion.p>
              <NewsStyles.MoreButton
                href={news[currentIndex].link}
                target="_blank"
                variants={fade}
                className={`${theme === "dark" ? "text-white" : ""}`}
              >
                More
              </NewsStyles.MoreButton>
            </NewsStyles.Description>
            <NewsStyles.Image className="hidden lg:flex lg:flex-1">
              <motion.img
                src={news[currentIndex].img}
                alt=""
                variants={photoAnim}
              />
            </NewsStyles.Image>
          </motion.div>
          {/* Left Arrow */}
          <div
            className={`${
              theme === "dark"
                ? "bg-white/20 hover:bg-primary hover:text-white"
                : "bg-black/20"
            } xl:-ml-12 z-20 transition-all ease-in-out duration-500 md:hidden group-hover:block absolute md:top[40%] top-[45%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-primary cursor-pointer`}
          >
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div
            className={`xl:-mr-12 z-20 cursor-pointer transition-all ease-in-out duration-500 md:hidden group-hover:block absolute md:top[40%] top-[45%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-primary ${
              theme === "dark"
                ? "bg-white/20 hover:bg-primary hover:text-white"
                : "bg-black/20"
            }`}
          >
            <BsChevronCompactRight
              className="z-20"
              onClick={nextSlide}
              size={30}
            />
          </div>
          <div className="flex justify-center gap-2 py-2 mt-10 cursor-pointer">
            {news.slice(0, 5).map((item, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className="flex items-center justify-center gap-4"
              >
                {/* <RxDotFilled /> */}
                <div
                  className={`
                  transition-all w-3 h-3 rounded-full
                  ${
                    currentIndex === index
                      ? "p-2 bg-primary"
                      : `${theme === "dark" ? "bg-white/50" : "bg-black/50"}`
                  }
                `}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewsSection;
