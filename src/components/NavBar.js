import React from "react";
import { useNavBar } from "../Context/NavBarContext";
import MenuIcon from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-close.svg";
import { Link } from "react-router-dom";
import NavBarCSS from "./NavBar.module.css";

function NavBar() {
  const {
    changeColor,
    color1,
    color2,
    color3,
    color4,
    color5,
    openMenu,
    closeMenu,
    visibility,
    width,
    transition,
    color,
    isOpen,
  } = useNavBar();

  return (
    <div className={NavBarCSS.navBar}>
      <div className={NavBarCSS.menuContainer}>
        <img
          src={MenuIcon}
          style={{
            padding: "10px",
            width: "30px",
          }}
          onClick={() => openMenu()}
          alt=""
        />
      </div>
      <div
        className={NavBarCSS.middleMenu}
        style={{ visibility, width, transition }}
      >
        <ul>
          <Link
            to="/"
            onClick={() => {
              changeColor("home");
              closeMenu();
            }}
          >
            <li style={isOpen ? color1 : { color }}>Home</li>
          </Link>
          <Link
            to="/about"
            onClick={() => {
              changeColor("about");
              closeMenu();
            }}
          >
            <li style={isOpen ? color2 : { color }}>About</li>
          </Link>
          <Link
            to="/works"
            onClick={() => {
              changeColor("works");
              closeMenu();
            }}
          >
            <li style={isOpen ? color3 : { color }}>Works</li>
          </Link>
          <Link
            to="/resume"
            onClick={() => {
              changeColor("resume");
              closeMenu();
            }}
          >
            {" "}
            <li style={isOpen ? color4 : { color }}>Resume</li>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              changeColor("contact");
              closeMenu();
            }}
          >
            {" "}
            <li style={isOpen ? color5 : { color }}>Contact</li>
          </Link>
        </ul>
        <img
          src={CloseIcon}
          style={{
            padding: "25px 20px",
            width: "30px",
            transition,
          }}
          onClick={() => closeMenu()}
          alt=""
        />
      </div>

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
