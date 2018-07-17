import React from "react";

import star from  "images/skills/star.png";
import circle from  "images/skills/circle.png";

export default (props) => (
  <div style={{display:"inline-block"}}>
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
  </div>
);
