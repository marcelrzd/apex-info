import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titelAnim } from "../../animation";

// style
import styled from "styled-components";
// TODO: create the about page
const About = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titelAnim}>About</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titelAnim}>
            <Circle></Circle>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titelAnim}>
            <Circle></Circle>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titelAnim}>
            <Circle></Circle>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default About;
