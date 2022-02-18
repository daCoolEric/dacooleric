import React from "react";
import WorksCSS from "./Works.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Works() {
  return (
    <div>
      <div class={WorksCSS.content}>
        <div class="title-parent title-home">
          <h1 class={WorksCSS.title}>
            From Graphic Design to Website development.
          </h1>
        </div>
        <div class="title-parent title-home">
          <h3>Mostly a trip down memory lane.</h3>
        </div>
        <div class="title-parent title-home">
          <h4 class={WorksCSS.worksLink}>
            <a href="#" class={WorksCSS.links}>
              Learn more
            </a>

            <ArrowForwardIosIcon className={WorksCSS.learnMore}>
              Arrow
            </ArrowForwardIosIcon>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Works;