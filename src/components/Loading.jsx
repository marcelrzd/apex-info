import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledLoading className="loading">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  svg {
    /* width: 3.75em; */
    width: 100px;
    height: 100px;
    transform-origin: center;
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: #d92929;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }
  }
`;

export default Loading;
