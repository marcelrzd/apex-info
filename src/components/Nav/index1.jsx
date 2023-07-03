import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/apex-white-nav-logo.svg";
import logo_dark from "../../img/apex-black-nav-logo.svg";
import { StyledNav } from "../../styles";
import ToggleTheme from "./ToggleTheme";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";

const Navbar = () => {
  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

  return (
    <StyledNav className="sticky top-0 flex items-center justify-between w-full min-h-[10vh] p-6 m-auto md:px-14 lg:px-14 ">
      <h1>
        <Link className="link w-28" to="/home" id="logo">
          <img src={theme === "dark" ? logo : logo_dark} alt="logo" /> Info
        </Link>
      </h1>
      <NavLinks />
      <ToggleTheme />
    </StyledNav>
  );
};

export default Navbar;
