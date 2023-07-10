import { motion } from "framer-motion";
import styled from "styled-components";

const MapInfo = styled(motion.div)`
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
`;

export default { MapInfo, Card };
