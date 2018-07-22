import React , { Component } from "react";
import javaImg from "images/skills/java-logo.png";
import Skill from "../skill";
import cImg from "images/skills/c-logo.png";
import cppImg from "images/skills/cpp-logo.png";
import sqlImg from "images/skills/sql.png";
import htmlImg from "images/skills/html5-64.png";
import pyImg from "images/skills/python.png";
import matlabImg from "images/skills/matlab.png";
import jscriptImg from "images/skills/js.png";
import nodeImg from "images/skills/nodejs.png";
import angularImg from "images/skills/angularjs.png";
import gradleImg from "images/skills/gradle.png";

import ProgrammingSkillsText from "../progSkillText";

const skills = [
  {name: "Java", imgSrc: javaImg, stars: 4, text:"java"},
  {name: "C-programming", imgSrc: cImg, stars: 3, text: "c"},
  {name: "C++", imgSrc: cppImg, stars: 2, text: "cpp"},
  {name: "HTML", imgSrc: htmlImg, stars: 4, text: "html"},
  {name: "SQL", imgSrc: sqlImg, stars: 4, text:"sql"},
  {name: "Python", imgSrc: pyImg, stars: 3, text:"python"},
  {name: "MATLAB", imgSrc: matlabImg, stars: 3, text:"matlab"},
  {name: "Javascript", imgSrc: jscriptImg, stars: 4, text:"javascript"},
  {name: "NodeJs", imgSrc: nodeImg, stars: 3, text: "nodejs"},
  {name: "AngularJs", imgSrc: angularImg, stars: 3, text:"angularjs"},
  {name: "Gradle", imgSrc: gradleImg, stars: 2, text:"gradle"},


];
class ProgrammingSkills extends Component {
  constructor(props){
    super(props);
    this.chooseLanguage = chooseLanguage.bind(this);
    this.state ={
      language: "",
    }
  }

  render(){
    return (
      <section id="skills" className="skills">
        <div id="skillAnchor"></div>
        <h1 onClick={this.props.onClick}>+ Programming Skills</h1>
        <ul id="skilList" className={"skilList "+(this.props.showHide?"displayed":"not-displayed")}>
          <ProgrammingSkillsText language={this.state.language} />
          { skills.map((x) => (
            <Skill
              key={x.name+"Skill"}
              name={x.name}
              stars={x.stars}
              imgSrc={x.imgSrc}
              text={x.text}
              listener={this.chooseLanguage}/>
          ))}
        </ul>
    </section>
    );
  }
}
export default ProgrammingSkills;

function chooseLanguage(lang){
  this.setState((prevState) => {
    return {...prevState, language: lang};
  });
}
