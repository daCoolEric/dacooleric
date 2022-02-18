import React from "react";
import HomeCSS from "./Home.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Home() {
  return (
    <div>
      <div className={HomeCSS.content}>
        <div className="title-parent title-home">
          <h2 className="title-eric">Hi, I'm Eric!</h2>
        </div>
        <div className="title-parent title-home">
          <h1 className={HomeCSS.title}>WEB DEVELOPER & GRAPHIC DESIGNER.</h1>
        </div>
        <div className="title-parent title-home">
          <h3>
            A multi-disciplinary designer with well developed knowledge in full
            stack development.
          </h3>
          <h3>A creative design director on the team behind grinbox.me. </h3>
          <h3 className={HomeCSS.last}>I have an excellent work ethic. </h3>
          <Link to="/about">
            <div className={HomeCSS.learnMoreContainer}>
              <h3>Learn more</h3>
              <ArrowForwardIosIcon className={HomeCSS.learnMore}>
                Arrow
              </ArrowForwardIosIcon>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
