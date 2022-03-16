import React from "react";
import { Link } from "react-router-dom";
import ProjectCSS from "./Project.module.css";
import todo from "../images/todoApp.png";
import productPage from "../images/productPage.png";
import weatherApp from "../images/weatherApp.png";
import movieApp from "../images/movieApp.png";
import calc from "../images/calc.png";
import graphic from "../images/graphic.png";

const image = {
  first: {
    src: todo,
    title: "Todo App",
    desc: "description",
    techUsed: "tech goes here",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  second: {
    src: productPage,
    title: "Product Page",
    desc: "description",
    techUsed: "tech goes here",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  third: {
    src: weatherApp,
    title: "Weather App",
    desc: "description",
    techUsed: "tech goes here",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  fourth: {
    src: movieApp,
    title: "Movie App",
    desc: "description",
    techUsed: "tech goes here",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  fifth: {
    src: calc,
    title: "Simple Calculator",
    desc: "description",
    techUsed: "tech goes here",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  sixth: {
    src: graphic,
    title: "Graphic Design",
    desc: "description",
    techUsed: "tech goes here",
    link: "https//blablabla",
    code: "https//blablabla",
  },
};

function Project({ imagd }) {
  console.log(imagd);
  return (
    <div className={ProjectCSS.container}>
      <div className={ProjectCSS.img}>
        <img
          src={
            imagd === "first"
              ? image.first.src
              : imagd === "second"
              ? image.second.src
              : imagd === "third"
              ? image.third.src
              : imagd === "fourth"
              ? image.fourth.src
              : imagd === "fifth"
              ? image.fifth.src
              : imagd === "sixth"
              ? image.sixth.src
              : null
          }
          style={{ width: "500px", borderRadius: "20px" }}
          alt="todo"
        />
      </div>
      <div className={ProjectCSS.desc}>
        <div className={ProjectCSS.title}>
          <h1>
            {imagd === "first"
              ? image.first.title
              : imagd === "second"
              ? image.second.title
              : imagd === "third"
              ? image.third.title
              : imagd === "fourth"
              ? image.fourth.title
              : imagd === "fifth"
              ? image.fifth.title
              : imagd === "sixth"
              ? image.sixth.title
              : null}
          </h1>
        </div>
        <div className={ProjectCSS.body}>
          {imagd === "first"
            ? image.first.desc
            : imagd === "second"
            ? image.second.desc
            : imagd === "third"
            ? image.third.desc
            : imagd === "fourth"
            ? image.fourth.desc
            : imagd === "fifth"
            ? image.fifth.desc
            : imagd === "sixth"
            ? image.sixth.desc
            : null}
        </div>
        <div className={ProjectCSS.techUsed}>
          {imagd === "first"
            ? image.first.techUsed
            : imagd === "second"
            ? image.second.techUsed
            : imagd === "third"
            ? image.third.techUsed
            : imagd === "fourth"
            ? image.fourth.techUsed
            : imagd === "fifth"
            ? image.fifth.techUsed
            : imagd === "sixth"
            ? image.sixth.techUsed
            : null}
        </div>
        <div className={ProjectCSS.btns}>
          <Link
            to={
              imagd === "first"
                ? image.first.link
                : imagd === "second"
                ? image.second.link
                : imagd === "third"
                ? image.third.link
                : imagd === "fourth"
                ? image.fourth.link
                : imagd === "fifth"
                ? image.fifth.link
                : imagd === "sixth"
                ? image.sixth.link
                : null
            }
          >
            <button>Demo</button>
          </Link>
          <Link
            to={
              imagd === "first"
                ? image.first.code
                : imagd === "second"
                ? image.second.code
                : imagd === "third"
                ? image.third.code
                : imagd === "fourth"
                ? image.fourth.code
                : imagd === "fifth"
                ? image.fifth.code
                : imagd === "sixth"
                ? image.sixth.code
                : null
            }
          >
            <button>Code</button>
          </Link>
        </div>
        <div className={ProjectCSS.contact}>
          <Link to="/contact">lets talk</Link>
        </div>
        <div className={ProjectCSS.moreWorks}>
          <Link to="/works/details">more works</Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
