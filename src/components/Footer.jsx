import React from "react";
import { fadeFooter } from "../animation";
import { StyledFooter } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center text-base-content">
      <div>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <a
            href={"https://github.com/marcelrzd"}
            className="font-medium text-primary text-xl hover:underline transition-all ease-in-out"
          >
            Marcel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
