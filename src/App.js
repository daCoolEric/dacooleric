import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import AppCSS from "./App.module.css";
import Home from "./pages/Home";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Works from "./pages/Works";

function App() {
  const active = {
    color: "#f0860c",
  };
  const inActive = {
    color: "#fff",
  };
  const [color1, setColor1] = useState(inActive);
  const [color2, setColor2] = useState(inActive);
  const [color3, setColor3] = useState(inActive);
  const [color4, setColor4] = useState(inActive);
  const [color5, setColor5] = useState(inActive);

  return (
    <div className={AppCSS.app}>
      <div className={AppCSS.navBar}>
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
              className={AppCSS.contact}
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
