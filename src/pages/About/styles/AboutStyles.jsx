import { motion } from "framer-motion";
import styled from "styled-components";

const StyledIconDiv = styled.div`
  color: #d92929;
  svg {
    font-size: 3rem;
  }
`;

const MapInfo = styled(motion.div)`
  max-height: 65vh;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 40%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const P = styled.p`
  width: 100% !important;
  margin-top: -45px;
`;

const IMG = styled.img`
  height: 59vh !important;
`;

export default { StyledIconDiv, MapInfo, Cards, Card, P, IMG };
