import React, { Component } from "react";

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
  {src:education, href:"#myAbst", onClickRef: "edu", name: "Education"},
  {src:programSkills, href:"#skillAnchor", onClickRef: "prog", name: "Programming Skills"},
  {src:workXP, href:"#workAnchor", onClickRef: "work", name: "Working Experience"},
  {src:languages, href:"#langAnchor", onClickRef: "lang", name: "Spoken Languages"},
  {src:projects, href:"#projAnchor", onClickRef: "proj", name: "Projects"},
  {src:software, href:"#softAnchor", onClickRef: "soft", name: "Software"},
];
class Header extends Component{
  constructor(props){
    super(props);
    const self = this;
    self.state = {
      showHide: {personalInfo: false,}
    };
    self.showHideSwap = showHideSwap.bind(self);
    self.handleScroll = handleScroll.bind(self);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render(){
    return (
      <header className={this.state.headerClassName}>
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
                    <a href={x.href} onClick={() => this.props.navListener(x.onClickRef)}><img src={x.src} alt={x.name}/>
                    <span className="tooltiptext">{x.name}</span></a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="Plinks">
          {this.state.showHide.personalInfo?(
            <div className="personalInfo">
              <a href="downloads/npcv.pdf" download><strong>Curriculum Vitae</strong></a><br/>
              Phone number: +447751718491<br/>
            e-Mail : nikolaospappa@gmail.com
          </div>
        ):(<div></div>)}
        <ul className="Plist">
          <li><a target="blank" href="https://uk.linkedin.com/in/nikos-pappas"><img src={linkedIn} alt="linkedIn" height="50" /></a></li>
          <li><a href="mailto:nikolaospappa@gmail.com"><img src={mail} alt="e-Mail" height="50" /></a></li>
          <li><a onClick={() => this.showHideSwap("personalInfo")}><img src={contact} alt="Contact info" height="50" /></a></li>
        </ul>
      </div>
    </header>
    );
  }
}
export default Header;
function showHideSwap(section){
  this.setState((prevState) => {
    console.log(prevState)
    prevState.showHide[section] = !prevState.showHide[section];
    const obj = {...prevState};
    console.log(obj)
    return obj;
  });
  this.forceUpdate();
}
function handleScroll(event){
  const top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
  if(top>100){
    // abst.style.opacity="0";
  } else {
    // abst.style.opacity="1";
  }
  if (top>5) {
    this.setState((prevState) => {
      return {...prevState, headerClassName: "header-scrolled"};
    });
  } else {
    this.setState((prevState) => {
      return {...prevState, headerClassName: ""};
    });
  }
}
