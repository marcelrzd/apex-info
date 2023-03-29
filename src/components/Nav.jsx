import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import logo from "../img/apex-white-nav-logo.svg";
import { StyledNav, Line } from "../styles";

// fontawesome icons
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  // dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropDownIcon, setDropDownIcon] = useState(faChevronDown);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (showDropdown === false) {
      setDropDownIcon(faChevronUp);
    } else {
      setDropDownIcon(faChevronDown);
    }
  };

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
            News
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/home" ? "50%" : "0%" }}
          />
        </li>
        <li className="dropdown">
          <span onClick={handleDropdown}>
            In Rotation <FontAwesomeIcon icon={dropDownIcon} />
          </span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link className="link" to="/rotation/map">
                  Map
                </Link>
              </li>
              <li>
                <Link className="link" to="/rotation/crafting">
                  Crafting
                </Link>
              </li>
            </ul>
          )}
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

export default Navbar;
