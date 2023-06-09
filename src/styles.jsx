import styled from "styled-components";
import { motion } from "framer-motion";
// styled components

export const Hide = styled.div`
  overflow: hidden;
`;

// Footer
export const StyledFooter = styled(motion.footer)`
  min-height: 3vh;
  display: flex;
  margin: -1% !important;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  margin-top: 30%;
  a {
    font-size: 1.5rem;

    font-family: "Inter", sans-serif;
    cursor: pointer;
    text-decoration: none;
  }
  @media (max-width: 1920px) {
    p,
    a {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 1700px) {
    p,
    a {
      font-size: 1.5rem;
    }
  }
`;

// navbar
export const StyledNav = styled.nav`
  z-index: 10;
  font-family: "Bebas Neue", sans-serif;
  .line-mobile {
    width: 100% !important;
  }
  .link,
  a,
  span {
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;
export const Line = styled(motion.div)`
  height: 0.3rem;
  background: #d92929;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  /* @media (max-width: 1300px) {
    left: 0%;
  } */
`;
