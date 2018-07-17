import React from "react";

import logo from "images/logo-outer128.png";
import education from "images/nav/edu.png";
import programSkills from "images/nav/skills.png";
import workXP from "images/nav/work.png";
import languages from "images/nav/lang.png";
import projects from "images/nav/project.png";
import software from "images/nav/software.png";

import mail from "images/mail.png";
import linkedIn from "images/linkedin.png";
import contact from "images/contact.png";

const bookmarks = [
  {src:education, href:"#myAbst", onClick: () => showClick(edu,true), name: "Education"},
  {src:programSkills, href:"#skillAnchor", onClick: "closeClickSkill(skills,progLang,true)", name: "Programming Skills"},
  {src:workXP, href:"#workAnchor", onClick: "showClick(work,true)", name: "Working Experience"},
  {src:languages, href:"#langAnchor", onClick: "closeClickSkill(language,spokLang,true)", name: "Spoken Languages"},
  {src:projects, href:"#projAnchor", onClick: "showClick(proj,true)", name: "Projects"},
  {src:software, href:"#softAnchor", onClick: "showClick(software,true)", name: "Software"},
];

export default () =>(
<header>
  <div className="header-left">
    <div className="logo">
      <img src={logo} alt="MyLogo" height="94" />
    </div>
    <div className="personal">
      <h1>Nikolaos Pappas</h1>
    </div>
    <nav>
      <ul>
      {bookmarks.map(x => (
          <li key={x.name}>
          <div className="tooltip">
            <a href={x.href} onclick={x.onClick}><img src={x.src} alt={x.name}/>
            <span className="tooltiptext">{x.name}</span></a>
          </div>
        </li>
      ))}
      </ul>
    </nav>
  </div>
  <div className="Plinks">
    <div className="personalInfo">
      <a href="downloads/npcv.pdf" download><strong>Curriculum Vitae</strong></a><br/>
      Phone number: +447751718491<br/>
      e-Mail : nikolaospappa@gmail.com
    </div>
    <ul className="Plist">
      <li><a target="blank" href="https://uk.linkedin.com/in/nikos-pappas"><img src={linkedIn} alt="linkedIn" height="50" /></a></li>
      <li><a href="mailto:nikolaospappa@gmail.com"><img src={mail} alt="e-Mail" height="50" /></a></li>
      <li><a onClick="showClick(perInfo)"><img src={contact} alt="Contact info" height="50" /></a></li>
    </ul>
  </div>
</header>
);
