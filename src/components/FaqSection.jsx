import React from "react";

// Styled
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";

// animation
import { fadeAnswer, scrollReveal } from "../animation";
import { LayoutGroup, motion } from "framer-motion";

// hooks
import { useScroll } from "./UseScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <LayoutGroup>
        <Toggle title="How Do I Start?">
          <motion.div variants={fadeAnswer} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              numquam?
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <motion.div variants={fadeAnswer} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              numquam?
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <motion.div variants={fadeAnswer} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              numquam?
            </p>
          </motion.div>
        </Toggle>
        <Toggle title="What Products Do you Offer?">
          <motion.div variants={fadeAnswer} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              numquam?
            </p>
          </motion.div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
