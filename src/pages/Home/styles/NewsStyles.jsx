import { motion } from "framer-motion";
import styled from "styled-components";

const MoreButton = styled(motion.a)`
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #d92929;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: "Inter", sans-serif;
  text-decoration: none;
  &:hover {
    background-color: #d92929;
    color: white;
  }
`;

const StyledTitle = styled(motion.h2)`
  text-align: center;
  padding: 2rem 2rem;
  /* margin-bottom: -5%; */
  color: white;
`;

const About = styled(motion.div)`
  max-height: 60vh;
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
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 53vh;
    object-fit: cover;
  }
`;

export default { MoreButton, StyledTitle, About, Description, Image };
