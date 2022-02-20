import { Routes, Route, Link } from "react-router-dom";
import { useNavBar } from "./Context/NavBarContext";
import AppCSS from "./App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Works from "./pages/Works";

function App() {
  const { changeColor, color1, color2, color3, color4, color5 } = useNavBar();
  return (
    <div className={AppCSS.app}>
      <div className={AppCSS.navBar}>
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
          <Link to="/contact">
            <li
              className={AppCSS.contact}
              style={color5}
              onClick={() => {
                changeColor("contact");
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
