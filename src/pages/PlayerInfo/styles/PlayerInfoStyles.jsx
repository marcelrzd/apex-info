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
  margin-left: 1rem;
  flex-basis: 50rem;
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

const FormDiv = styled.div`
  padding: 2rem 6rem;
  text-align: center;
  input {
    border-radius: 0.5rem;
    width: 40%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    outline: none;
  }
  button {
    width: 200px;
    margin-left: 0.5%;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #d92929;
    padding: 0.55rem 2rem;
    cursor: pointer;
  }
`;

const CustomSelect = styled.div`
  margin-right: 0.5%;
  position: relative;
  display: inline-block;
  text-align: center;

  span {
    width: 120px;
    margin-left: 1%;
    font-size: 1.5rem;
    padding: 0.2rem;
    cursor: pointer;
    color: white;
  }
  .select-selected {
    width: 120px;
    display: flex;
    align-items: center;
    padding: 3px 5px;
    border-radius: 0.5rem;
    border: 1px solid #d92929;
    cursor: pointer;
    transition: all 0.5s ease;
    img {
      width: 25px;
      height: 25px;
      bottom: 0;
    }
    :after {
      content: "";
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      border-top: 6px solid white;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
    }
  }

  .select-items {
    border-radius: 0.5rem;
    position: absolute;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    .select-item {
      display: flex;
      align-items: center;
      padding: 8px 15px;
      cursor: pointer;
      span {
        white-space: nowrap;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .select-item:hover,
  .select-selected:hover {
    color: white !important;
    transition: all 0.5s ease;
  }

  .select-selected.select-arrow-active:after {
    border-top: 0;
    border-bottom: 6px solid white;
  }

  .select-hide {
    display: none;
  }
`;

const OptionSpan = styled.span`
  color: #202020 !important;
  :hover {
    color: #d92929 !important;
    transition: all 0.5s ease;
  }
`;

export default {
  StyledIconDiv,
  Card,
  Cards,
  IconImg,
  H3SectionTitle,
  Services,
  FormDiv,
  CustomSelect,
  OptionSpan,
};
