import React from 'react'

import star from  "images/skills/star.png";
import circle from  "images/skills/circle.png";

export default (props) => (
  <li key={props.name}>
    <a href="#skillText"><div id="skillText" className="tooltip" onClick={"showSkill(javaProg,progLang)"}>
    <span className="tooltiptext">{props.name}</span>
      <img className="langLogo" src={props.imgSrc} alt={props.name}/>
      {props.stars>=1?(<img src={star} alt="star" />):null}
      {props.stars>=2?(<img src={star} alt="star" />):null}
      {props.stars>=3?(<img src={star} alt="star" />):null}
      {props.stars>=4?(<img src={star} alt="star" />):null}
      {props.stars>=5?(<img src={star} alt="star" />):null}
      {5-props.stars>=1?(<img src={circle} alt="circle" />):null}
      {5-props.stars>=2?(<img src={circle} alt="circle" />):null}
      {5-props.stars>=3?(<img src={circle} alt="circle" />):null}
      {5-props.stars>=4?(<img src={circle} alt="circle" />):null}
      {5-props.stars>=5?(<img src={circle} alt="circle" />):null}
  </div></a>
  </li>
)
