import React from "react";

import star from  "images/skills/star.png";
import circle from  "images/skills/circle.png";

export default (props) => {
  const starImage = props.images?props.images.star:star;
  const circleImage = props.images?props.images.circle:circle;
  return (
    <div style={{display:"inline-block"}}>
    {props.stars>=1?(<img src={starImage} alt="star" />):null}
    {props.stars>=2?(<img src={starImage} alt="star" />):null}
    {props.stars>=3?(<img src={starImage} alt="star" />):null}
    {props.stars>=4?(<img src={starImage} alt="star" />):null}
    {props.stars>=5?(<img src={starImage} alt="star" />):null}
    {5-props.stars>=1?(<img src={circleImage} alt="circle" />):null}
    {5-props.stars>=2?(<img src={circleImage} alt="circle" />):null}
    {5-props.stars>=3?(<img src={circleImage} alt="circle" />):null}
    {5-props.stars>=4?(<img src={circleImage} alt="circle" />):null}
    {5-props.stars>=5?(<img src={circleImage} alt="circle" />):null}
    </div>
  )
};
