import { motion } from "framer-motion";
import styled from "styled-components";

const StyledIconDiv = styled.div`
  color: #d92929;
  svg {
    font-size: 3rem;
  }
`;

const IconImg = styled.img`
  height: 4vh;
`;

const H3SectionTitle = styled.h3`
  font-size: 2rem;
  padding: 1rem 0;
`;

const Services = styled(motion.div)`
  max-height: 65vh;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  max-height: 55vh;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d92929;
    border-radius: 5px;
  }
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default {
  StyledIconDiv,
  Card,
  Cards,
  IconImg,
  H3SectionTitle,
  Services,
};
