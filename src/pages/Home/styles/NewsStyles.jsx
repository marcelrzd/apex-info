import { motion } from "framer-motion";
import styled from "styled-components";

const MoreButton = styled(motion.a)`
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #d92929;
  background: transparent;

  transition: all 0.5s ease;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  &:hover {
    background-color: #d92929;
  }
`;

const StyledTitle = styled(motion.h2)`
  text-align: center;
  padding: 2rem 2rem;
  /* margin-bottom: -5%; */
`;

const About = styled(motion.div)`
  max-height: 80vh;
  display: flex;
  width: 100% !important;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;

  @media (max-width: 1920px) {
    max-height: 41vh;
  }
  @media (max-width: 1700px) {
    max-height: 46vh;
  }
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    max-height: 40vh;
  }
`;

const Description = styled.div`
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem;
    }
  }
`;

const Image = styled.div`
  z-index: 2;
  /* flex: 1; */
  overflow: hidden;
  img {
    width: 100%;
    height: 46vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      margin-top: 5%;
      height: 60vh;
    }
  }
`;

const CarouselDiv = styled.div`
  width: 97% !important;
  padding: 1.5rem;
  .rec {
    background: transparent !important;
  }

  .rec-arrow {
    background: transparent;
    border: 1px solid #d92929;
    color: rgb(218, 215, 215, 0.5);
    transition: all 0.5s ease;
    /* color: black; */
    :hover {
      background: #d92929 !important;
      color: white;
      transition: all 0.5s ease;
    }
  }

  .rec-dot {
    box-shadow: #70151592 0px 0px 1px 3px;
  }

  .rec-dot_active,
  .rec-dot:hover {
    background: #d92929 !important;
    box-shadow: #d92929 0px 0px 1px 3px;
    transition: all 0.5s ease;
  }

  @media (max-width: 1300px) {
    width: 96% !important;
  }
  @media (max-width: 1000px) {
    width: 95% !important;
  }
  @media (max-width: 700px) {
    width: 93% !important;
  }
  @media (max-width: 600px) {
    width: 91% !important;
  }
`;

export default {
  MoreButton,
  StyledTitle,
  About,
  Description,
  Image,
  CarouselDiv,
};
