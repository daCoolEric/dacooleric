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
        <Link to="/works/details/todo-app">
          <div className={WorkCompCSS.img0}>
            <div className={WorkCompCSS.imgT}></div>

            <img src={todo} className={WorkCompCSS.img} alt="Logo" />
          </div>
        </Link>
        <div className={WorkCompCSS.title}>Todo App</div>
      </div>
      <div className={WorkCompCSS.card}>
        <Link to="/works/details/product-page">
          <div className={WorkCompCSS.img0}>
            <div className={WorkCompCSS.imgP}></div>

            <img src={productPage} className={WorkCompCSS.img} alt="Logo" />
          </div>
        </Link>
        <div className={WorkCompCSS.title}>E-Product Page</div>
      </div>
      <div div className={WorkCompCSS.card}>
        <Link to="/works/details/weather-app">
          <div className={WorkCompCSS.img0}>
            <div className={WorkCompCSS.imgW}></div>

            <div>
              <img src={weatherApp} className={WorkCompCSS.img} alt="Logo" />
            </div>
          </div>
        </Link>
        <div className={WorkCompCSS.title}>Weather App</div>
      </div>
      <div className={WorkCompCSS.card}>
        <Link to="/works/details/movie-app">
          <div className={WorkCompCSS.img0}>
            <div className={WorkCompCSS.imgM}></div>

            <div>
              <img src={movieApp} className={WorkCompCSS.img} alt="Logo" />
            </div>
          </div>
        </Link>
        <div className={WorkCompCSS.title}>Movie App</div>
      </div>
      <div className={WorkCompCSS.card}>
        <Link to="/works/details/simple-calc">
          <div className={WorkCompCSS.img0}>
            <div className={WorkCompCSS.imgC}></div>

            <div>
              <img src={calc} className={WorkCompCSS.img} alt="Logo" />
            </div>
          </div>
        </Link>
        <div className={WorkCompCSS.title}>Simple Calculator</div>
      </div>
      <div className={WorkCompCSS.card}>
        <Link to="/works/details/graphic-design">
          <div className={WorkCompCSS.img0}>
            <div className={WorkCompCSS.imgG}></div>

            <div>
              <img src={graphic} className={WorkCompCSS.img} alt="Logo" />
            </div>
          </div>
        </Link>
        <div className={WorkCompCSS.title}>Graphic Design</div>
      </div>
    </div>
  );
}

export default WorkComp;
