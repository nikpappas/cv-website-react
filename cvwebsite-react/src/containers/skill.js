import React, { Component } from "react";
import Stars from "./stars";

class Skill extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <li key={this.props.name}>
        <a href="#skillText"><div id="skillText" className="tooltip" onClick={() => this.props.listener(this.props.text)}>
          <span className="tooltiptext">{this.props.name}</span>
          <img className="langLogo" src={this.props.imgSrc} alt={this.props.name}/>
          <Stars stars={this.props.stars} />
        </div></a>
      </li>
    );
  }
}

export default Skill;
