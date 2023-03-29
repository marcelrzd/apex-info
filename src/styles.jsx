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
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  a {
    font-size: 1.5rem;
    color: white;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    text-decoration: none;
  }
`;

// navbar
export const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  /* position: sticky; */
  top: 0;
  z-index: 10;
  /* background: #282828; */
  background: rgb(27, 27, 27);
  .line-mobile {
    width: 100% !important;
  }
  .link,
  a,
  span {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  .dropdown-menu {
    position: absolute;
    top: 1rem;
    left: -20px;
    /* background-color: #d92929; */
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
  .dropdown-menu li a {
    transition: color 0.5s ease;
  }
  .dropdown-menu li a:hover {
    color: #d92929;
    transition: color 0.5s ease;
  }

  .dropdown-menu li {
    margin-bottom: 10px;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
export const Line = styled(motion.div)`
  height: 0.3rem;
  background: #d92929;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;