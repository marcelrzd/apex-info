import React from "react";

import { StyledFooter } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>
        {currentYear}{" "}
        <a href="https://www.linkedin.com/in/rzdmarcel/">
          Marcel. All rights reserved
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
