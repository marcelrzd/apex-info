import React, { useEffect, useState } from "react";
import { Line } from "../../styles";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <div className="hidden md:hidden lg:mr-40 lg:block">
      <ul className="flex items-center">
        <li className="lg:l-8">
          <Link
            className="text-xl transition-colors duration-500 ease-in-out hover:text-primary"
            to="/home"
          >
            News
          </Link>
          <Line
            className="hidden lg:block"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/home" ? "50%" : "0%" }}
          />
        </li>
        <li className="lg:l-8">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="m-1 text-2xl transition-all duration-500 ease-in-out cursor-pointer hover:text-primary "
            >
              In Rotation
            </label>

            <ul
              tabIndex={0}
              className="flex-col p-2 transition-all ease-in-out dropdown-content"
            >
              <li className="mb-4 text-right">
                <Link
                  className="transition-colors duration-500 ease-in-out hover:text-primary w-52"
                  to="/rotation/map"
                >
                  Map
                </Link>
              </li>
              <li className="mb-4 text-right">
                <Link
                  className="transition-colors duration-500 ease-in-out hover:text-primary w-52"
                  to="/rotation/crafting"
                >
                  Crafting
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="lg:l-8">
          <Link
            className="text-xl transition-colors duration-500 ease-in-out hover:text-primary"
            to="/about"
          >
            About
          </Link>
          <Line
            // className={LineClass}
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
