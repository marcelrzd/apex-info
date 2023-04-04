import React from "react";
import styled from "styled-components";

const Circle = (props) => {
  return (
    <MainDiv>
      <StyledCircle background={props.background}></StyledCircle>
      <Span color={props.color}>{props.text}</Span>
    </MainDiv>
  );
};
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCircle = styled.div`
  /* margin-right: 18%;*/
  margin-bottom: -2%;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.background};
`;
const Span = styled.span`
  padding: 3.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.color};
  margin-left: -10%;
`;

export default Circle;
