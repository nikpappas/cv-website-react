import React from "react";
import Stars from "../stars";

import star from "images/skills/star.png";
import circle from "images/skills/circle.png";

import autoCadImg from "images/software/autocad.png";
import revitImg from "images/software/revit.png";
import solidWksImg from "images/software/solidworks.png";
import mayaImg from "images/software/maya.png";
import artlantImg from "images/software/artlantis.png";
import abaqusImg from "images/software/abaqus.png";
import robotImg from "images/software/robot.png";
import inventorImg from "images/software/inventor.png";
import phShopImg from "images/software/photoshop.png";
import inDesignImg from "images/software/indesign.png";
import premierImg from "images/software/premier.jpeg";
import gimpImg from "images/software/gimp.png";
import inkspcapeImg from "images/software/inkscape.png";
import blenderImg from "images/software/blender.png";
const software = [
  {
    sectionName: "Drafting",
    skills: [
      {name: "AutoCad", imgSrc:autoCadImg, stars: 4},
      {name: "Revit", imgSrc:revitImg, stars: 2},
      {name: "SolidWorks",  imgSrc:solidWksImg, stars: 3},
    ]
  },
  {
    sectionName: "Rendering",
    skills: [
      {name: "Maya", imgSrc: mayaImg, stars: 3},
      {name: "Artlantis", imgSrc: artlantImg, stars: 2},
    ]
  },
  {
    sectionName: "Finite Element Analysis",
    skills: [
      {name: "Simulia Abaqus", imgSrc: abaqusImg, stars: 4},
      {name: "Robot Structural Analysis", imgSrc: robotImg, stars: 3},
      {name: "Inventor", imgSrc: inventorImg, stars: 2}
    ]
  },
  {
    sectionName: "Presentation",
    skills: [
      {name: "Photoshop", imgSrc: phShopImg, stars: 4},
      {name: "InDesign", imgSrc: inDesignImg, stars: 3},
      {name: "Premier Pro", imgSrc: premierImg, stars: 2},
      {name: "GIMP", imgSrc: gimpImg, stars: 4},
      {name: "Inkscape", imgSrc: inkspcapeImg, stars: 4},
      {name: "Blender", imgSrc: blenderImg, stars: 2},
    ]
  }
];

export default (props) => (
  <section className="software">
    <div id="softAnchor"></div>
    <h1 onClick={props.onClick}>+ Software</h1>
    <div id="softList" className={"softList "+(props.showHide?"displayed":"not-displayed")}>
      {software.map(section => (
        <div key={section.sectionName}>
          <h3>{section.sectionName}</h3>
          <ul>
            {section.skills.map(x => (
              <li key={x.name}>
                <div className="tooltip">
                  <span className="tooltiptext">{x.name}</span>
                  <img src={x.imgSrc} alt={x.name} />
                  <Stars stars={x.stars} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>

);
