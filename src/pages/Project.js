import React from "react";
import { Link } from "react-router-dom";
import { useNavBar } from "../Context/NavBarContext";
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
    desc: "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test. This project demonstrated deep knowledge in react hooks. The user is able to add new todos to the list, mark todos as complete, delete todos from the list, filter by all/active/complete todos, clear all completed todos, and toggle light and dark mode ",
    techUsed:
      "The technologies used here are HTML5, CSS, React.js, Git & Git-Hub, styled-components & Material UI",
    link: "https://dacooleric-todo-app.netlify.app/",
    code: "https://github.com/daCoolEric/Todo-app-react",
  },
  second: {
    src: productPage,
    title: "Product Page",
    desc: "A beautiful realisitic product page to demonstrate state management, resusability of components, responsive design, and efficient website layout. With this interface, the user is able to view the optimal layout for the site depending on their device's screen size, see hover states for all interactive elements on the page, open a lightbox gallery by clicking on the large product image, switch the large product image by clicking on the small thumbnail images, add items to the cart, and view the cart and remove items from it",
    techUsed:
      "The project employed a number of technologies namely: HTML5, CSS, React.js, Material UI, Git & Git-Hub",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  third: {
    src: weatherApp,
    title: "Weather App",
    desc: "An aesthetic user-friendly app with some cool features for determining the current weather of any location and also forecasting weather conditions. The project demonsrates deep knowledge in APIs and how to consume them. The cool features include realtime weather for almost any location in the world, location details (like precipitation, humidity, wind speed, uv index and more), weather forecast for 7 days, and option to add other locations",
    techUsed: "This project was built with HTML5, React.js, SCSS, Material UI",
    link: "https://dacooleric-weather-app.netlify.app/",
    code: "https://github.com/daCoolEric/weather-app",
  },
  fourth: {
    src: movieApp,
    title: "Movie App",
    desc: "A app to show data about popular, trending, upcoming movies & tv shows and much more. The project demonstrates deep knowledge in APIs and how to consume them. The features of the app includes upcoming, trending, popular and top-rated movies & tv-shows, movies & tv-shows by specific genres, search movies & tv-shows, details about movies & tv-shows like cast, crew, videos, overview and more, view cast or crew details ",
    techUsed:
      "The technologies used in building this project are React.js, SCSS, Redux, React-Router, TMDB-api, Git & Git-Hub",
    link: "https//blablabla",
    code: "https//blablabla",
  },
  fifth: {
    src: calc,
    title: "Simple Calculator",
    desc: "This project aims at demonstrating logic, and use of Grid in CSS. The app comes with some cool features. The end-user is able to See the size of the elements adjust based on their device's screen size, perform mathematical operations like addition, subtraction, multiplication, and division, adjust the color theme based on their preference, have their initial theme preference checked using prefers-color-scheme and have any additional changes saved in the browser",
    techUsed:
      "The project employed HTML5, CSS, FlexBox, CSS Grid, Mobile-First Workflow, & Git & Git-Hub in its built.",
    link: "https://dacooleric-calc.netlify.app/",
    code: "https://github.com/daCoolEric/Simple-Calc",
  },
  sixth: {
    src: graphic,
    title: "Graphic Design",
    desc: "An ongoing activity where I design call cards, brochures, posters, logos, flyers, banners, magazines, mockups, user-interfaces and many more for clients. I make professional designs whiles taking into consideration the key elements of visual design namely Contrast, Balance, Emphasis, Movement, White Space, Proportion, Hierarchy, Repetition, Rhythm, Pattern, Unity, and Variety.  ",
    techUsed:
      "I use softwares such as Figma, Adobe Photoshop, Adobe Illustrator, Adobe Indesign, Adobe XD, Adobe Lightroom in my works. ",
    link: "https//blablabla",
    code: "https//blablabla",
  },
};

function Project({ imagd }) {
  const { changeColor } = useNavBar();
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
          className={ProjectCSS.image}
          alt="todo"
        />
      </div>
      <div className={ProjectCSS.desContainer}>
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
              target="_blank"
              rel="noreferrer"
            >
              <button className={ProjectCSS.btn}>Demo</button>
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
              target="_blank"
              rel="noreferrer"
            >
              <button className={ProjectCSS.btn}>Code</button>
            </Link>
          </div>
          <div className={ProjectCSS.contact}>
            <p>Impressed with works and have a job for me?</p>

            <Link
              to="/contact"
              className={ProjectCSS.link}
              onClick={() => {
                changeColor("contact");
              }}
            >
              Lets talk
            </Link>
          </div>
          <div className={ProjectCSS.moreWorks}>
            <p>Not convinced and wants to see more?</p>

            <Link to="/works/details" className={ProjectCSS.link}>
              Check more works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
