import React from "react";
export default (props) => (
  <section id="edu" className="education">
    <heading><h1 onClick={props.onClick}>Education +</h1></heading>
    <div id="edu-entries" className={"edu-entries "+ (props.showHide?"displayed":"not-displayed")} >
      <div className ="uob">
        <table>
          <tr>
            <th className="dates">
              2015 - 2016
            </th>
            <th className="logo">
              <div className="uob-logo">
                <img src="images/uoblogo.png" alt="University of Bristol Logo" height="52" />
              </div>
            </th>
            <th>
              Computer Science MSc
            </th>
          </tr>
        </table>
        <div className="uob-details">
          <ul>
            <li><strong>Average: 74</strong> %</li>
            <li><strong>Project:</strong> <em>Mammography Interpretation Tool<br/>
              using Covolutional Neural Networks </em><a href="downloads/npposter.pdf" download><strong>(Poster)</strong></a></li>
              <li className="expandableTxt" onclick="showClick(uobList)">Units List +</li>
              <li><ul className="uob-unitList">
                <li>Programming in C - <strong>73</strong> %</li>
                <li>Computer Architecture - <strong>75</strong> %</li>
                <li>Software Engineering - <strong>68</strong> %</li>
                <li>Web Technologies -<strong>78</strong> %</li>
                <li>Databases - <strong>82</strong> %</li>
                <li>Research Skills - <strong>66</strong> %</li>
                <li>Object Oriented Programming - Java - <strong>75</strong> %</li>
              </ul></li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className ="ugr">
          <table>
            <tr>
              <th className="dates">
                2011 - 2012
              </th>
              <th className="logo">
                <div className="ugr-logo">
                  <img src="images/logo_ugr.gif" alt="Universidad de Granada" height="52" />
                </div>
              </th>
              <th>
                Civil Engineering<br/>
                Erasmus Exchange
              </th>
            </tr>
          </table>
        </div>
        <hr/>
        <div className ="duth">
          <table>
          <tr>
              <th className="dates">
                2007 - 2014
              </th>
              <th className="logo">
                <div className="duth-logo">
                  <img src="images/Duth_logo.png" alt="Democritus University of Thrace Logo" height="52"  />
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
            </table>
            <div className="duth-details">
              <ul>
                <li><strong>Average: 7.07</strong>/10</li>
                <li><strong>Project:</strong> <em>Experimental Corroboration Of The <br/>
                  Behaviour Of A Bolted RBS Connection<br/>
                  Under Cyclic Load </em><a href="downloads/nppresentation.pdf" download><strong>(Presentation)</strong></a></li>
                  <li className="expandableTxt" onclick="showClick(duthList)">Selected Unit List +</li>
                  <li><ul className="duth-unitList">
                    <li>Fuzzy Logic - <strong>10/</strong>10</li>
                    <li>Informatics - Fortran <strong>9</strong>/10</li>
                    <li>Mechanics of Rigid Body - <strong>9</strong>/10</li>
                    <li>Theory of Elastic Stability - <strong>10</strong>/10</li>
                    <li>Plates and Shells - <strong>9.5</strong>/10</li>
                    <li>Theory of Elasticity - <strong>7.5</strong>/10</li>
                    <li>Steel Structures - <strong>8.5</strong>/10</li>
                    <li>Laboratory Topics in Reinforced Concrete - <strong>8.5</strong>/10</li>
                    <li>Fluid Mechanics - <strong>7</strong>/10</li>
                    <li>Numerical Analysis - <strong>7</strong>/10</li>
                  </ul></li>
                </ul>
              </div>
            </div>
            <hr/>
        <div className ="anatolia">
          <table>
            <tr>
              <th className="dates">
                2001 - 2007
              </th>
              <th className="logo">
                <div className="duth-logo">
                  <img src="images/logo_anatolia_rgb.jpg" alt="Anatolia College" height="52" />
                  <div className="duth-logo-letters">
                    <h2>Anatolia</h2>
                    <h3>College of</h3>
                    <h3>Thessaloniki</h3>
                  </div>
                </div>
                </th>
                </tr>
            <th>
              High School
            </th>
            </table>
            <div className="anatolia-details">
              <ul>
                <li><strong>Average: 18.67</strong>/20</li>
                <li className="expandableTxt" onclick="showClick(anatoliaList)">Extra Curricular Activities +</li>
                <li><ul className="anatolia-extraList">
                  <li>Greek Theater Club</li>
                  <li>Chess Club</li>
                  <li>Tennis Club</li>
                  <li>School Newspaper Club</li>
                </ul></li>
              </ul>
            </div>
          </div>
        </div>
  </section>
  );
