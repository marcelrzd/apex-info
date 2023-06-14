import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import logo from "../img/apex-white-nav-logo.svg";
import { StyledNav, Line } from "../styles";

const Navbar = () => {
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
    <StyledNav className="flex items-center justify-between w-full py-6">
      <h1>
        <Link className="link w-28" to="/home" id="logo">
          <img src={logo} alt="logo" /> Info
        </Link>
      </h1>
      <ul>
        <li>
          <Link
            className="text-xl hover:text-primary transition-colors ease-in-out"
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
              className="text-2xl hover:text-primary m-1 transition-all ease-in-out cursor-pointer text-white"
            >
              In Rotation
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content p-2 shadow flex-col transition-all ease-in-out"
            >
              <li className="mb-4 text-right">
                <Link
                  className="hover:text-primary w-52 transition-colors ease-in-out"
                  to="/rotation/map"
                >
                  Map
                </Link>
              </li>
              <li className="mb-4 text-right">
                <Link
                  className="hover:text-primary w-52 transition-colors ease-in-out"
                  to="/rotation/crafting"
                >
                  Crafting
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* <li >
          <Link className="link" to="/player-info" onClick={closeDropDown}>
            Player Info
          </Link>
          <Line
            className={LineClass}
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/player-info" ? "50%" : "0%" }}
          />
        </li> */}
        <li>
          <Link
            className="text-xl hover:text-primary transition-colors ease-in-out"
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
    </StyledNav>
  );
};

export default Navbar;
