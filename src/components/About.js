import React from "react";
import { image } from "../data/data";
import "../index.css"
function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hello this is the design of kipp</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
