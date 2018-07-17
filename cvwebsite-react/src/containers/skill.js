import React from "react";
import Stars from "./stars";
export default (props) => (
  <li key={props.name}>
    <a href="#skillText"><div id="skillText" className="tooltip" onClick={"showSkill(javaProg,progLang)"}>
    <span className="tooltiptext">{props.name}</span>
      <img className="langLogo" src={props.imgSrc} alt={props.name}/>
      <Stars stars={props.stars} />
  </div></a>
  </li>
);
