import React from "react";
import { fadeFooter } from "../animation";
import { StyledFooter } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter variants={fadeFooter} initial="hidden" animate="show">
      <p>
        {currentYear}{" "}
        <a href="https://www.linkedin.com/in/rzdmarcel/">
          <span>Marcel</span>
        </a>
        . All rights reserved
      </p>
    </StyledFooter>
  );
};

export default Footer;
