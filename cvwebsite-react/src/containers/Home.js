import React, {Component} from 'react';
import { withSiteData } from 'react-static';
import Header from './header';
import Education from "containers/sections/education";
import ProgrammingSkills from "containers/sections/programming";
import Work from "containers/sections/work";
import Languages from "containers/sections/languages";
import Projects from "containers/sections/projects";
import SoftwareSkills from "containers/sections/software";
import Hobbies from "containers/sections/hobbies";
import Contact from "containers/sections/contact";
import Footer from "containers/sections/footer";

class Home extends Component {
  constructor(){
    super();
    this.state = {
      showHide: {
        edu: false,
        prog: false,
        work: false,
        lang: false,
        soft: false,
        hobbies: false,
        contact: false,
      },
    };
    this.showHideSwap = showHideSwap.bind(this);
  }

  // <ProgrammingSkills showHide={this.state.showHide["prog"]} onClick={() => this.showHideSwap("prog")} />
  // <Work showHide={this.state.showHide["work"]} onClick={() => this.showHideSwap("work")} />
  // <Languages showHide={this.state.showHide["lang"]} onClick={() => this.showHideSwap("lang")} />
  // <Projects showHide={this.state.showHide["proj"]} onClick={() => this.showHideSwap("proj")} />
  // <SoftwareSkills showHide={this.state.showHide["soft"]} onClick={() => this.showHideSwap("soft")} />
  // <Hobbies showHide={this.state.showHide["hobbies"]} onClick={() => this.showHideSwap("hobbies")} />
  // <Contact />
  render(){
      return (
        <div>
          <Header navListener={this.show} />
          <main>
          <section id="myAbst" className="myAbst">
            <p>I have recently graduated from the University of Bristol, where I had a MSc
            course in <strong>Computer Science</strong>, expecting a first class degree. I have previously
            studied <strong>Civil Engineering (Structural)</strong> at the Democritus University of Thrace. The skills
            I obtained from my education, along with my experience working and undertaking
            projects, are mainly <strong>problem solving</strong>, ease in <strong>adapting rapidly</strong> and the capability
            to undertake a broad variety of tasks. I am looking forward to using and enhancing these
            skills, and become a productive member of our society.
            </p>
          </section>
          <Education showHide={this.state.showHide["edu"]} onClick={() => this.showHideSwap("edu")} />
        </main>
        <Footer />
      </div>
    )
  }
}
function showHideSwap(section){
  this.setState((prevState) => {
    console.log(prevState)
    prevState.showHide[section] = !prevState.showHide[section];
    const obj = {...prevState};
    console.log(obj)
    return obj;
  }
  );
}
function show(section){
  this.setState((prevState) => {
    console.log(prevState)
    prevState.showHide[section] = true;
    const obj = {...prevState};
    console.log(obj)
    return obj;
  }
  );
}

export default Home;
