import React from "react";
import { Link } from "react-router-dom";
import AboutCSS from "./About.module.css";

function About() {
  return (
    <div className={AboutCSS.content}>
      <div className="title-parent title-home">
        <h1 className={AboutCSS.title}>I build value by design.</h1>
      </div>
      <div className="title-parent title-home">
        <h3>I’m Eric Kodzo Ayi, but you can just call me Eric.</h3>
        <h3>
          Originally hailing from Ghana. For the past 5 years, I’ve been honing
          my skills in UI/UX design, graphic design, web development, social
          media marketing and software development.
        </h3>
        <h3 className={AboutCSS.last}>
          I strive to create elegant solutions that surprise and delight users,
          while keeping complex technical dependencies in mind for
          implementation, scalability and developer sanity.
        </h3>
        <h3 className={AboutCSS.last}>
          I am so passionate about using software programs to solve societal
          problems. I believe when I deep into technology I will reach the
          forces that shape the very essence of our lives. In contemporary
          conditions, I find myself greatly influenced by distributed systems
          and embedded systems. I'm also interested in data structures and
          algorithms for solving social problems, design patterns, and clean
          coding.
        </h3>
        <h3 className={AboutCSS.last}>
          My current experience enables me to build from scratch webpages, web
          apps and native apps using HTML, CSS, JavaScript, React.js, Redux,
          Node.js, Express.js and many more. I'm a very vivid visualizer who
          believe that if you can see it, you can create it. I spend most of my
          time thinking and visualizing the solution to a problem before I start
          coding or implementing it.
        </h3>
      </div>
      <div className="title-parent title-home">
        <h4 className="title-link">
          Have an interesting project?
          <Link to="/contact" className={AboutCSS.contact}>
            Let's talk
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default About;
