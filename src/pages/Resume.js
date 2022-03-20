import React from "react";
import { Link } from "react-router-dom";
import resume from "../images/resume.JPG";
import ResumeCSS from "./Resume.module.css";

function Resume() {
  return (
    <div className={ResumeCSS.container}>
      <div className={ResumeCSS.img}>
        <img src={resume} style={{ width: "65%" }} alt="resume" />
      </div>
      <div className={ResumeCSS.desc}>
        <div className={ResumeCSS.title}>
          <h1 className={ResumeCSS.title}>Here is a summary of myself</h1>
        </div>
        <div className={ResumeCSS.downloadlinkContainer}>
          <Link
            to="/EricAyi_CV.pdf"
            className={ResumeCSS.downloadlink}
            target="_blank"
            download
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resume;
