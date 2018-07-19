import React from "react";

import star from  "images/skills/star24.png";
import circle from  "images/skills/circle24.png";

export default (props) => (
  <section className="languages">
    <div id="langAnchor"></div>
    <h1 onClick={props.onClick}>+ Spoken Languages</h1>
    <div className="eng">
      Ielts band 8.0 2015<br/>
      B2 Cambridge Advanced   2006<br/>
      C1 Michigan Proficiency 2006
    </div>
    <div className="gre">
      Mother language
    </div>
    <div className="spa">
      B2 national greek dimploma.<br/>
    Lived, studied, worked in spain.
    </div>
    <div className="ger">
      B2 Zertificat 2004
    </div>
    <ul id="languagelist" className={"languagelist "+ (props.showHide?"displayed":"not-displayed")} >
      <li onClick={"showSkill(english,spokLang)"}>
        <h2>English</h2>
        <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" />
      </li>
      <li onclick="showSkill(spanish,spokLang)">
        <h2>Spanish</h2>
        <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" />
      </li>
      <li onclick="showSkill(greek,spokLang)">
        <h2>Greek</h2>
        <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" />
      </li>
      <li onclick="showSkill(german,spokLang)">
        <h2>German</h2>
        <img src={star} alt="star" /><img src={star} alt="star" /><img src={circle} alt="circle" /><img src={circle} alt="circle" /><img src={circle} alt="circle" />
      </li>
    </ul>
  </section>
);
