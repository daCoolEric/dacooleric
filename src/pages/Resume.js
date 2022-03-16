import React from "react";
import { Link } from "react-router-dom";
import resume from "../images/resume.JPG";
import ResumeCSS from "./Resume.module.css";

function Resume() {
  return (
    <div className={ResumeCSS.container}>
      <div className="sampleresume">
        <img src={resume} style={{ width: "350px" }} alt="resume" />
      </div>
      <div className={ResumeCSS.desc}>
        <div className="title">
          <h1>Here is a summary of myself</h1>
        </div>
        <div className="dowloadLink">
          <Link to="/EricAyi_Tiast_CV.pdf" target="_blank" download>
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resume;
