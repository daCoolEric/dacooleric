import React from "react";
import { Link } from "react-router-dom";
import WorkCompCSS from "./WorkComp.module.css";
import todo from "../images/todoApp.png";
import productPage from "../images/productPage.png";
import weatherApp from "../images/weatherApp.png";
import movieApp from "../images/movieApp.png";
import calc from "../images/calc.png";
import graphic from "../images/graphic.png";

function WorkComp() {
  return (
    <div className={WorkCompCSS.cardContainer}>
      <div className={WorkCompCSS.card}>
        <div>
          <Link to="/works/details/todo-app">
            <img src={todo} className={WorkCompCSS.img} alt="Logo" />
          </Link>
        </div>
        <div className={WorkCompCSS.title}>Todo App</div>
      </div>
      <div className={WorkCompCSS.card}>
        <div>
          <Link to="/works/details/product-page">
            <img src={productPage} className={WorkCompCSS.img} alt="Logo" />
          </Link>
        </div>
        <div className={WorkCompCSS.title}>E-Product Page</div>
      </div>
      <div div className={WorkCompCSS.card}>
        <div>
          <Link to="/works/details/weather-app">
            <img src={weatherApp} className={WorkCompCSS.img} alt="Logo" />
          </Link>
        </div>
        <div className={WorkCompCSS.title}>Weather App</div>
      </div>
      <div className={WorkCompCSS.card}>
        <div>
          <Link to="/works/details/movie-app">
            <img src={movieApp} className={WorkCompCSS.img} alt="Logo" />
          </Link>
        </div>
        <div className={WorkCompCSS.title}>Movie App</div>
      </div>
      <div className={WorkCompCSS.card}>
        <div>
          <Link to="/works/details/simple-calc">
            <img src={calc} className={WorkCompCSS.img} alt="Logo" />
          </Link>
        </div>
        <div className={WorkCompCSS.title}>Simple Calculator</div>
      </div>
      <div className={WorkCompCSS.card}>
        <div>
          <Link to="/works/details/graphic-design">
            <img src={graphic} className={WorkCompCSS.img} alt="Logo" />
          </Link>
        </div>
        <div className={WorkCompCSS.title}>Graphic Design</div>
      </div>
    </div>
  );
}

export default WorkComp;
