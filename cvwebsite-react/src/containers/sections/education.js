import React, { Component } from "react";

import duthLogo from "images/Duth_logo.png";
import ugrLogo from "images/logo_ugr.gif";
import uobLogo from "images/uoblogo.png";
import anatoliaLogo from "images/logo_anatolia_rgb.jpg";

const duthUnitList = [
  {name: "Fuzzy Logic", mark:10 },
  {name: "Informatics - Fortran" , mark:9},
  {name: "Mechanics of Rigid Body" , mark:9},
  {name: "Theory of Elastic Stability" , mark:10},
  {name: "Plates and Shells" , mark:9.5},
  {name: "Theory of Elasticity" , mark:7.5},
  {name: "Steel Structures" , mark:8.5},
  {name: "Reinforced Concrete Laboratory" , mark:8.5},
  {name: "Fluid Mechanics" , mark:7},
  {name: "Numerical Analysis" , mark:7},
];

const uobUnitList = [
    {name: "Programming in C", mark:73 },
    {name: "Computer Architecture", mark:75 },
    {name: "Software Engineering", mark:68 },
    {name: "Web Technologies", mark:78 },
    {name: "Databases", mark:82 },
    {name: "Research Skills", mark:66 },
    {name: "Object Oriented Programming - Java", mark:75 },
];

class Education extends Component{
  constructor(props){
    super(props);
    this.showHideSwap = showHideSwap.bind(this);
    this.state = {
      showHide:{
        uobUnitList: false,
        anatoliaList: false
      }
    };
  }
  render(){
    console.log(this.state.showHide.uobUnitList)
    return (
      <section id="edu" className="education">
        <h1 onClick={this.props.onClick}>Education +</h1>
        <div id="edu-entries" className={"edu-entries "+ (this.props.showHide?"displayed":"not-displayed")} >
          <div className ="uob">
            <table>
              <tbody>
                <tr>
                  <th className="dates">
                    2015 - 2016
                  </th>
                  <th className="logo">
                    <div className="uob-logo">
                      <img src={uobLogo} alt="University of Bristol Logo" height="52" />
                    </div>
                  </th>
                  <th>
                    Computer Science MSc
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="uob-details">
              <ul>
                <li><strong>Average: 74</strong> %</li>
                <li><strong>Project:</strong> <em>Mammography Interpretation Tool<br/>
                using Covolutional Neural Networks </em><a href="downloads/npposter.pdf" download><strong>(Poster)</strong></a></li>
              <li className="expandableTxt" onClick={() => this.showHideSwap("uobUnitList")}>Units List +</li>
              {this.state.showHide.uobUnitList?(
                <ul className={"uob-unitList displayed"}>
                  {uobUnitList.map(x => (
                    <li key={x.name+"uobUnitList"} >{x.name} - <strong>{x.mark}</strong> %</li>
                  ))}
                </ul>
              ):(<ul></ul>)}
              </ul>
            </div>
          </div>
          <hr/>
          <div className ="ugr">
          <table>
            <tbody>
              <tr>
                <th className="dates">
                  2011 - 2012
                </th>
                <th className="logo">
                  <div className="ugr-logo">
                    <img src={ugrLogo} alt="Universidad de Granada" height="52" />
                  </div>
                </th>
                <th>
                  Civil Engineering<br/>
                Erasmus Exchange
              </th>
            </tr>
            </tbody>
          </table>
        </div>
        <hr/>
        <div className ="duth">
          <table>
            <tbody>
              <tr>
                <th className="dates">
                  2007 - 2014
                </th>
                <th className="logo">
                  <div className="duth-logo">
                    <img src={duthLogo} alt="Democritus University of Thrace Logo" height="52"  />
                    <div className="duth-logo-letters">
                      <h2>Democritus</h2>
                      <h3>University</h3>
                      <h3>of Thrace</h3>
                    </div>
                  </div>
                </th>
                <th>
                  Civil Engineering BEng<br/>
                Structural Engineering MEng
              </th>
            </tr>
            </tbody>
          </table>
          <div className="duth-details">
            <ul>
              <li><strong>Average: 7.07</strong>/10</li>
              <li><strong>Project:</strong> <em>Experimental Corroboration Of The <br/>
                Behaviour Of A Bolted RBS Connection<br/>
                Under Cyclic Load </em><a href="downloads/nppresentation.pdf" download><strong>(Presentation)</strong></a></li>
              <li className="expandableTxt" onClick={() => this.showHideSwap("duthUnitList")} >Selected Unit List +</li>
              <li>
                {this.state.showHide.duthUnitList?(
                  <ul className="duth-unitList">
                    {duthUnitList.map(x => (
                      <li key={x.name+"DuthUnitList"}>{x.name} - <strong>{x.mark}/</strong>10</li>
                    ))}
                  </ul>
                ):(<ul></ul>)}
              </li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className ="anatolia">
          <table>
            <tbody>
              <tr>
                <th className="dates">
                  2001 - 2007
                </th>
                <th className="logo">
                  <div className="duth-logo">
                    <img src={anatoliaLogo} alt="Anatolia College" height="52" />
                    <div className="duth-logo-letters">
                      <h2>Anatolia</h2>
                      <h3>College of</h3>
                      <h3>Thessaloniki</h3>
                    </div>
                  </div>
                </th>
                <th>
                  High School
                </th>
              </tr>
            </tbody>
          </table>
          <div className="anatolia-details">
            <ul>
              <li><strong>Average: 18.67</strong>/20</li>
              <li className="expandableTxt" onClick={() => this.showHideSwap("anatoliaList")}>Extra Curricular Activities +</li>
              <li>
                {this.state.showHide.anatoliaList?(
                  <ul className="anatolia-extraList">
                    <li>Greek Theater Club</li>
                    <li>Chess Club</li>
                    <li>Tennis Club</li>
                    <li>School Newspaper Club</li>
                  </ul>
                ):(<ul></ul>)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
  }
}

function showHideSwap(item){
  this.setState((prevState) => {
    console.log(item)
    prevState.showHide[item] = !prevState.showHide[item];
    const obj = {...prevState};
    console.log(obj)
    return obj;
  });
  this.forceUpdate();


}
export default Education;
