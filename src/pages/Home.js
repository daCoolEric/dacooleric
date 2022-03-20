import React from "react";
import HomeCSS from "./Home.module.css";
import { Link } from "react-router-dom";
import { useNavBar } from "../Context/NavBarContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

function Home() {
  const { changeColor } = useNavBar();
  return (
    <div className={HomeCSS.container}>
      <div className={HomeCSS.content}>
        <div className="title-parent title-home">
          <h2 className={HomeCSS.titleEric}>Hi, I'm Eric!</h2>
        </div>
        <div className="title-parent title-home">
          <h1 className={HomeCSS.title}>WEB DEVELOPER & GRAPHIC DESIGNER.</h1>
        </div>
        <div className="title-parent title-home">
          <h3 className={HomeCSS.text}>
            A multi-disciplinary designer with well developed knowledge in full
            stack development.
          </h3>
          <h3 className={HomeCSS.text}>
            A creative design director on the team behind grinbox.me.{" "}
          </h3>
          <div className={HomeCSS.learnMoreContainer}>
            <h3 className={`${HomeCSS.last} ${HomeCSS.text}`}>
              I have an excellent work ethic.{" "}
            </h3>
            <ThumbUpAltIcon className={HomeCSS.icon1}>ThumbUp</ThumbUpAltIcon>
          </div>

          <Link
            to="/about"
            onClick={() => {
              changeColor("about");
            }}
            className={HomeCSS.learnMoreContainer}
          >
            <div className={HomeCSS.learnMore}>Learn more</div>
            <ArrowForwardIosIcon className={HomeCSS.icon}>
              Arrow
            </ArrowForwardIosIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
