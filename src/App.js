import { Routes, Route } from "react-router-dom";

import AppCSS from "./App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import WorkComp from "./pages/WorkComp";
import Project from "./pages/Project";
import NavBar from "./components/NavBar";
import GraphicDesign from "./pages/GraphicDesign";

function App() {
  return (
    <div className={AppCSS.app}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/details" element={<WorkComp />} />
        <Route
          path="/works/details/todo-app"
          element={<Project imagd="first" />}
        />
        <Route
          path="/works/details/product-page"
          element={<Project imagd="second" />}
        />
        <Route
          path="/works/details/weather-app"
          element={<Project imagd="third" />}
        />
        <Route
          path="/works/details/movie-app"
          element={<Project imagd="fourth" />}
        />
        <Route
          path="/works/details/simple-calc"
          element={<Project imagd="fifth" />}
        />
        <Route
          path="/works/details/graphic-design"
          element={<GraphicDesign imagd="sixth" />}
        />
        <Route path="/resume" element={<Resume />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
