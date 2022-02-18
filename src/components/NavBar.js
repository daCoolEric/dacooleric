import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const active = {
    color: "#f0860c",
  };
  const inActive = {
    color: "#fff",
  };
  const [color1, setColor1] = useState(active);
  const [color2, setColor2] = useState(inActive);
  const [color3, setColor3] = useState(inActive);
  const [color4, setColor4] = useState(inActive);
  const [color5, setColor5] = useState(inActive);

  return (
    <div className="nav-bar">
      <ul>
        <Link to="/">
          <li
            style={color1}
            onClick={() => {
              setColor1(active);
              setColor2(inActive);
              setColor3(inActive);
              setColor4(inActive);
              setColor5(inActive);
            }}
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            style={color2}
            onClick={() => {
              setColor1(inActive);
              setColor2(active);
              setColor3(inActive);
              setColor4(inActive);
              setColor5(inActive);
            }}
          >
            About
          </li>
        </Link>
        <Link to="/works">
          <li
            style={color3}
            onClick={() => {
              setColor1(inActive);
              setColor2(inActive);
              setColor3(active);
              setColor4(inActive);
              setColor5(inActive);
            }}
          >
            Works
          </li>
        </Link>
        <Link to="/resume">
          <li
            style={color4}
            onClick={() => {
              setColor1(inActive);
              setColor2(inActive);
              setColor3(inActive);
              setColor4(active);
              setColor5(inActive);
            }}
          >
            Resume
          </li>
        </Link>
        <Link to="/contact">
          <li
            id="contact"
            style={color5}
            onClick={() => {
              setColor1(inActive);
              setColor2(inActive);
              setColor3(inActive);
              setColor4(inActive);
              setColor5(active);
            }}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
