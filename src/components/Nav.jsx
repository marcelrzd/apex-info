import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import logo from "../img/apex-white-nav-logo.svg";
import { StyledNav, Line } from "../styles";

const Nav = () => {
  const { pathname } = useLocation();

  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const LineClass = pageWidth < 1300 ? "line-mobile" : "";

  return (
    <StyledNav>
      <h1>
        <Link className="link" to="/home" id="logo">
          <img src={logo} alt="logo" /> Infos
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/home">
            Home
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/home" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link className="link" to="/work">
            Rotations
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
          <Line
            className={LineClass}
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
