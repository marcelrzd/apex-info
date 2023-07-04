import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/apex-white-nav-logo.svg";
import logo_dark from "../../img/apex-black-nav-logo.svg";

import NavLinks from "./NavLinks";
import ToggleTheme from "./ToggleTheme";

const Nav = () => {
  // Get the current theme
  const { theme } = useSelector((state) => state.theme);

  const { pathname } = useLocation();

  const Links = [
    { name: "NEWS", link: "/home" },
    { name: "MAP ROTATION", link: "/rotation/map" },
    { name: "CRAFTING ROTATION", link: "/rotation/crafting" },
    { name: "ABOUT", link: "/about" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#1d232a]" : "bg-white"
      } sticky top-0 left-0 w-full min-h-[10vh] md:px-14 lg:px-14 z-10 transition-all duration-500`}
    >
      <div className="items-center justify-between py-4 md:flex md:px-10 px-7">
        <div className="items-center inline-block text-2xl font-bold cursor-pointer">
          <h1>
            <Link className="link nav" to="/home">
              <img
                className="inline-block"
                src={theme === "dark" ? logo : logo_dark}
                alt="logo"
              />{" "}
              <label className="inline-block ml-2">info</label>
            </Link>
          </h1>
        </div>
        <div className="flex items-center justify-center mt-[-2.75rem] md:hidden ">
          <ToggleTheme />
        </div>
        <div
          // onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          {/* <ion-icon name={open ? "close" : "menu"}></ion-icon> */}
          <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={() => setOpen(!open)} />

            {/* hamburger icon */}
            <svg
              className="fill-current swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="fill-current swap-on"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>

        <ul
          className={`${
            theme === "dark" && open
              ? "bg-[#1d232a]"
              : theme === "light" && open
              ? "bg-white"
              : ""
          }  transition-all duration-500 nav md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${
            open ? "top-20 text-right" : "text-right top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="mt-2 mr-10 md:ml-8 md:my-0 ">
              <a
                href={link.link}
                className={`text-2xl ${
                  pathname === link.link ? "text-primary" : ""
                } transition-colors duration-500 ease-in-out hover:text-primary w-52`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="hidden ml-10 md:block">
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
