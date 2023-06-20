import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import logo from "../img/apex-white-nav-logo.svg";
import logo_dark from "../img/apex-black-nav-logo.svg";
import { StyledNav, Line } from "../styles";
import ThemeChange from "./ToggleTheme";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { pathname } = useLocation();

  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

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
    <StyledNav className="flex items-center justify-center w-full py-6">
      <h1>
        <Link className="link w-28" to="/home" id="logo">
          <img src={theme === "dark" ? logo : logo_dark} alt="logo" /> Info
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            className="text-xl transition-colors ease-in-out hover:text-primary"
            to="/home"
          >
            News
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/home" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="m-1 text-2xl transition-all ease-in-out cursor-pointer hover:text-primary "
            >
              In Rotation
            </label>

            <ul
              tabIndex={0}
              className="flex-col p-2 transition-all ease-in-out dropdown-content"
            >
              <li className="mb-4 text-right">
                <Link
                  className="transition-colors ease-in-out hover:text-primary w-52"
                  to="/rotation/map"
                >
                  Map
                </Link>
              </li>
              <li className="mb-4 text-right">
                <Link
                  className="transition-colors ease-in-out hover:text-primary w-52"
                  to="/rotation/crafting"
                >
                  Crafting
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            className="text-xl transition-colors ease-in-out hover:text-primary"
            to="/about"
          >
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
      <ThemeChange />
    </StyledNav>
  );
};

export default Navbar;
