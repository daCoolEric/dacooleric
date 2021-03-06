import React from "react";
import { Link } from "react-router-dom";
import WorksCSS from "./Works.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Works() {
  return (
    <div class={WorksCSS.container}>
      <div className={WorksCSS.contentScroll}>
        <div class={WorksCSS.content}>
          <div>
            <h1 class={WorksCSS.title}>
              From Graphic Design to Website development.
            </h1>
          </div>
          <div>
            <h3 class={WorksCSS.text}>Mostly a trip down memory lane.</h3>
          </div>
          <div>
            <h4 class={WorksCSS.worksLink}>
              <Link to="/works/details" class={WorksCSS.links}>
                Learn more
              </Link>

              <ArrowForwardIosIcon className={WorksCSS.learnMore}>
                Arrow
              </ArrowForwardIosIcon>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
