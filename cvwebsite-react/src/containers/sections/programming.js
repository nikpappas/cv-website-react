import React from "react";
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


const skills = [
  {name: "Java", imgSrc: javaImg, stars: 4},
  {name: "C-programming", imgSrc: cImg, stars: 3},
  {name: "C++", imgSrc: cppImg, stars: 2},
  {name: "HTML", imgSrc: htmlImg, stars: 4},
  {name: "SQL", imgSrc: sqlImg, stars: 4},
  {name: "Python", imgSrc: pyImg, stars: 3},
  {name: "MATLAB", imgSrc: matlabImg, stars: 3},
  {name: "Javascript", imgSrc: jscriptImg, stars: 4},
  {name: "NodeJs", imgSrc: nodeImg, stars: 3},
  {name: "AngularJs", imgSrc: angularImg, stars: 3},
  {name: "Gradle", imgSrc: gradleImg, stars: 2},


];

export default (props) => (
  <section id="skills" className="skills">
    <div id="skillAnchor"></div>
    <h1 onClick={props.onClick}>+ Programming Skills</h1>
    <ul id="skilList" className={"skilList "+(props.showHide?"displayed":"not-displayed")}>
      { skills.map((x) => (
        <Skill name={x.name} stars={x.stars} imgSrc={x.imgSrc} />
      ))}
    </ul>
    <div className="textJava">
      <h3>Java</h3>
      <p>
        My experience with Java started with auxiliary calculating applications,
        while I was studying <strong>civil engineering</strong>, such as
        <strong>column stress analysis</strong> and <strong>rebar calculation</strong>
        for concrete members. Later on I refined my knowledge on Java with the equivalent
        unit at University of Bristol.<br/><br/>
        <span style={{color:"white"}}><strong>Projects:</strong></span> Mammography Interpretation Tool
        (<a href="http://caffe.berkeleyvision.org/">Caffe</a>),<br/>
        Face Recognition Pong Game, generic database.<br/><br/>
        <span style={{color:"white"}}><strong>APIs used:</strong></span> SQL, OpenCV
      </p>
    </div>
    <div className="textC">
      <h3>C</h3>
      <p>
        The main programming language of my Master&#39;s course, was C. Within the course
        I used data structures, such as <strong> linked lists, queues, trees</strong> and <strong>stacks</strong>.<br/><br/>
        <span style={{color:'white'}}><strong>Projects:</strong></span> Teletext decoder, <a href="https://github.com/nikopapp/GameOfLife">Game Of Life</a>, Image Processing and Computer Vision apps using OpenCV.<br/><br/>
        <span style={{color:'white'}}><strong>Libraries used:</strong></span> SDL, OpenCV, atlas, lmdb, pthread.
      </p>
    </div>
    <div className="textCpp">
      <h3>C++</h3>
      <p></p>
    </div>
    <div className="textHtml">
      <h3>HTML5</h3>
      <p>
        I first started using HTML in a computer science className in High-School, then in University of bristol
        I had a unit on web technologies. <a href="http://elvarce.com">Sample1</a>, <a href="http://tomorrows.com.s3-website-eu-west-1.amazonaws.com/">Sample2,</a>.
      </p>
    </div>
    <div className="textSQL">
      <h3>SQL</h3>
      <p>
        The databases unit in my last degree included a complete implementation of the database
        side of a faculty forum. The server was programmed in Java with an the SQLite database.
      </p>
    </div>
    <div className="textNodeJS">
      <h3>NodeJS</h3>
      <p>
         // TODO
        I used NodeJS to program a server of a dynamic website, along with the database it is backed with.
      </p>
    </div>
    <div className="textMAT">
      <h3>MATLAB</h3>
      <p>
        MATLAB was my first contact to programming, initially using the built-in libraries, in order to
        solve mathematical and engineering problems. The libraries I used the most was the plotting library and
        the one for fuzzy logic.
      </p>
      <p>
        I used MATLAB for my final project in order to automate the preprocessing of the mammography dataset
        which was compiled by 10480 X-ray images.
      </p>
    </div>
    <div className="textPy">
      <h3>Python</h3>
      <p>
        I used Python, and more specifically Jupyter (iPython) Notebooks in order to visualize the layers
        of the Convolutional Neural Network used for the Mammography Interpretation Tool.<br/><br/>
        <span style={{color:"white"}}><strong>Modules Used:</strong></span> NumPy, matplotlib, caffe.
      </p>
    </div>
    <div className="textAngJS">
      <h3>AngularJS</h3>
      <p>
//  TODO -->
      </p>
    </div>
    <div className="textJS">
      <h3>Javascript</h3>
      <p>
//   TODO -->
      </p>
    </div>
    <div className="textGradle">
      <h3>Gradle</h3>
      <p>
//   TODO -->
      </p>
    </div>

  </section>
);
