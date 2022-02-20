import React from "react";
import { useNavBar } from "../Context/NavBarContext";

import { Link } from "react-router-dom";
import NavBarCSS from "./NavBar.module.css";

function NavBar() {
  const { changeColor, color1, color2, color3, color4, color5 } = useNavBar();

  return (
    <div className={NavBarCSS.navBar}>
      <div className={NavBarCSS.leftMenu}>
        <ul>
          <Link to="/">
            <li
              style={color1}
              onClick={() => {
                changeColor("home");
              }}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              style={color2}
              onClick={() => {
                changeColor("about");
              }}
            >
              About
            </li>
          </Link>
          <Link to="/works">
            <li
              style={color3}
              onClick={() => {
                changeColor("works");
              }}
            >
              Works
            </li>
          </Link>
          <Link to="/resume">
            <li
              style={color4}
              onClick={() => {
                changeColor("resume");
              }}
            >
              Resume
            </li>
          </Link>
        </ul>
      </div>

      <Link to="/contact">
        <div
          className={NavBarCSS.rightMenu}
          style={color5}
          onClick={() => {
            changeColor("contact");
          }}
        >
          Contact
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
