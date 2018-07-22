import React from "react";

export default (props) => (
  <section id="myAbst" className="myAbst">
  <h3
    style={{textAlign: "center", top:"20px", minHeight:"25px", margin:"2% auto"}}
    onClick={props.onClick}> Statement </h3>
  {props.showHide ? (
    <p>
    I am a passionate software consultant, with more than a year of experience in the financial sector.
    I have worked in numerous applications both back end and front end. I have worked mainly with <strong>Java</strong> and
    <strong>Javascript</strong> both with frameworks, such as <strong>Spring</strong> and <strong>ReactJs</strong> and witho
    course in <strong>Computer Science</strong>, expecting a first class degree. I have previously
    studied <strong>Civil Engineering (Structural)</strong> at the Democritus University of Thrace. The skills
    I obtained from my diverse education, along with my experience working and undertaking
    projects, are mainly <strong>problem solving</strong>, ease in <strong>adapting rapidly</strong> and the capability
    to undertake a broad variety of tasks. I am looking forward to using and enhancing these
    skills, and become a productive member of our society.
    </p>

  ) : (<p style={{"display":"none"}}></p>)}
  </section>

)
