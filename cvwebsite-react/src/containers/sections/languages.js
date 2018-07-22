import React, { Component } from "react";

import Stars from "../stars";

import star from  "images/skills/star24.png";
import circle from  "images/skills/circle24.png";
const languages = [
  { name: "English", stars:5, code: "eng"},
  { name: "Spanish", stars:5, code: "esp"},
  { name: "Greek", stars:5, code: "gre"},
  { name: "German", stars:2, code: "ger"},
];
class Languages extends Component{
  constructor(props){
    super(props);
    this.state = {
      language: ""
    }
    this.chooseLanguage = chooseLanguage.bind(this);
  };
  render(){
      return (
        <section className="languages">
          <div id="langAnchor"></div>
          <h1 onClick={this.props.onClick}>+ Spoken Languages</h1>
          {this.props.showHide ? (
            <div>
              {this.renderLangText(this.state.language)}
              <ul id="languagelist" className="languagelist displayed" >
                { languages.map(lang => (
                  <li key={lang.name} onClick={() => this.chooseLanguage(lang.code)} >
                    <h2>{lang.name}</h2>
                    <Stars stars={lang.stars} images={{star,circle}} />
                  </li>
                ))}
              </ul>
            </div>
          ):(<div></div>)}
        </section>
      )
    }
    renderLangText(textLang){
      switch (textLang) {
        case "eng":
          return (
            <div className="eng">
              Ielts band 8.0 2015<br/>
              B2 Cambridge Advanced   2006<br/>
              C1 Michigan Proficiency 2006
            </div>
          );
        case "esp":
          return (
            <div className="spa">
              B2 national greek dimploma.<br/>
            Lived, studied, worked in spain.
          </div>
          );
        case "gre":
          return (
            <div className="gre">
              Mother language
            </div>
          );
        case "ger":
          return (
            <div className="ger">
              B2 Zertificat 2004
            </div>
                );
        default:
          return (<div></div>);

      }
    }
}

export default Languages;

function chooseLanguage(lang){
  this.setState((prevState) => {
    return {...prevState, language: lang};
  });
}
